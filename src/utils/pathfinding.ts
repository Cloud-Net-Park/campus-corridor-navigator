
interface Point {
  x: number;
  y: number;
  id: string;
  name: string;
  floor?: number;
  type?: string;
}

interface GraphNode {
  id: string;
  x: number;
  y: number;
  connections: string[];
  gCost: number;
  hCost: number;
  fCost: number;
  parent: string | null;
  visited: boolean;
}

// Calculate distance between two points
const getDistance = (a: Point, b: Point): number => {
  return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
};

// Calculate distance between two graph nodes
const getNodeDistance = (a: GraphNode, b: GraphNode): number => {
  return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
};

// Manhattan distance heuristic for A* (better for grid-like corridors)
const heuristic = (a: GraphNode, b: GraphNode): number => {
  return Math.abs(b.x - a.x) + Math.abs(b.y - a.y);
};

// Strict corridor connection logic following black walkways only
const canConnect = (a: Point, b: Point): boolean => {
  const distance = getDistance(a, b);
  
  // Same floor requirement
  if (a.floor !== b.floor) return false;
  
  // Corridor to corridor connections (only adjacent corridors)
  if (a.type === 'corridor' && b.type === 'corridor') {
    // Only connect adjacent corridor points (max 25 pixels apart)
    if (distance <= 25) {
      // Horizontal alignment (same Y, close X)
      if (Math.abs(a.y - b.y) <= 10 && Math.abs(a.x - b.x) <= 25) return true;
      // Vertical alignment (same X, close Y)
      if (Math.abs(a.x - b.x) <= 10 && Math.abs(a.y - b.y) <= 25) return true;
    }
    return false;
  }
  
  // Room to corridor connections (room entrance to nearest corridor)
  if ((a.type === 'room' || a.type === 'stairs') && b.type === 'corridor') {
    return distance <= 35;
  }
  
  if (a.type === 'corridor' && (b.type === 'room' || b.type === 'stairs')) {
    return distance <= 35;
  }
  
  // No direct room to room connections
  return false;
};

// Build graph with connections
const buildGraph = (points: Point[]): { [key: string]: GraphNode } => {
  const graph: { [key: string]: GraphNode } = {};
  
  // Initialize nodes
  points.forEach(point => {
    graph[point.id] = {
      id: point.id,
      x: point.x,
      y: point.y,
      connections: [],
      gCost: Infinity,
      hCost: 0,
      fCost: Infinity,
      parent: null,
      visited: false
    };
  });
  
  // Create connections
  points.forEach(pointA => {
    points.forEach(pointB => {
      if (pointA.id !== pointB.id && canConnect(pointA, pointB)) {
        graph[pointA.id].connections.push(pointB.id);
      }
    });
  });
  
  return graph;
};

// A* pathfinding algorithm optimized for shortest path
const aStar = (graph: { [key: string]: GraphNode }, startId: string, endId: string): string[] => {
  // Reset graph
  Object.values(graph).forEach(node => {
    node.gCost = Infinity;
    node.hCost = 0;
    node.fCost = Infinity;
    node.parent = null;
    node.visited = false;
  });
  
  if (!graph[startId] || !graph[endId]) {
    return [];
  }
  
  const startNode = graph[startId];
  const endNode = graph[endId];
  
  startNode.gCost = 0;
  startNode.hCost = heuristic(startNode, endNode);
  startNode.fCost = startNode.gCost + startNode.hCost;
  
  const openSet = new Set([startId]);
  const closedSet = new Set();
  
  while (openSet.size > 0) {
    // Find node with lowest fCost (shortest path priority)
    let currentId = '';
    let lowestF = Infinity;
    
    for (const nodeId of openSet) {
      const node = graph[nodeId];
      if (node.fCost < lowestF || (node.fCost === lowestF && node.hCost < graph[currentId]?.hCost)) {
        lowestF = node.fCost;
        currentId = nodeId;
      }
    }
    
    if (currentId === endId) {
      // Reconstruct path
      const path: string[] = [];
      let current: string | null = endId;
      
      while (current !== null) {
        path.unshift(current);
        current = graph[current].parent;
      }
      
      return path;
    }
    
    openSet.delete(currentId);
    closedSet.add(currentId);
    
    const currentNode = graph[currentId];
    
    // Check neighbors
    currentNode.connections.forEach(neighborId => {
      if (closedSet.has(neighborId)) return;
      
      const neighbor = graph[neighborId];
      const tentativeGCost = currentNode.gCost + getNodeDistance(currentNode, neighbor);
      
      if (!openSet.has(neighborId)) {
        openSet.add(neighborId);
      } else if (tentativeGCost >= neighbor.gCost) {
        return;
      }
      
      neighbor.parent = currentId;
      neighbor.gCost = tentativeGCost;
      neighbor.hCost = heuristic(neighbor, endNode);
      neighbor.fCost = neighbor.gCost + neighbor.hCost;
    });
  }
  
  return []; // No path found
};

// Create corridor-based path when direct A* fails
const createCorridorPath = (start: Point, end: Point, allPoints: Point[]): Point[] => {
  const path: Point[] = [start];
  
  // Find corridors on the same floor
  const corridors = allPoints.filter(p => p.type === 'corridor' && p.floor === start.floor);
  
  if (corridors.length === 0) {
    return [start, end];
  }
  
  // Find nearest corridor to start
  let nearestToStart = corridors.reduce((closest, corridor) => {
    const distToStart = getDistance(start, corridor);
    const distToClosest = getDistance(start, closest);
    return distToStart < distToClosest ? corridor : closest;
  }, corridors[0]);
  
  // Find nearest corridor to end
  let nearestToEnd = corridors.reduce((closest, corridor) => {
    const distToEnd = getDistance(end, corridor);
    const distToClosest = getDistance(end, closest);
    return distToEnd < distToClosest ? corridor : closest;
  }, corridors[0]);
  
  if (nearestToStart && nearestToEnd && nearestToStart.id !== nearestToEnd.id) {
    // Add corridor points following the main walkway
    path.push(nearestToStart);
    
    // Navigate through main corridor (y = 350) if possible
    const mainCorridorY = 350;
    const tolerance = 15;
    
    // If start corridor is not on main corridor, go to main corridor first
    if (Math.abs(nearestToStart.y - mainCorridorY) > tolerance) {
      const mainCorridorPoint = corridors.find(c => 
        Math.abs(c.y - mainCorridorY) <= tolerance && 
        Math.abs(c.x - nearestToStart.x) <= 50
      );
      if (mainCorridorPoint) {
        path.push(mainCorridorPoint);
      }
    }
    
    // Navigate along main corridor toward destination
    const startX = Math.min(nearestToStart.x, nearestToEnd.x);
    const endX = Math.max(nearestToStart.x, nearestToEnd.x);
    
    const mainCorridorPoints = corridors
      .filter(c => Math.abs(c.y - mainCorridorY) <= tolerance && c.x >= startX && c.x <= endX)
      .sort((a, b) => nearestToStart.x < nearestToEnd.x ? a.x - b.x : b.x - a.x);
    
    // Add intermediate points on main corridor
    mainCorridorPoints.forEach(point => {
      if (point.id !== nearestToStart.id && point.id !== nearestToEnd.id) {
        path.push(point);
      }
    });
    
    // If end corridor is not on main corridor, add final corridor point
    if (Math.abs(nearestToEnd.y - mainCorridorY) > tolerance) {
      const finalCorridorPoint = corridors.find(c => 
        Math.abs(c.y - mainCorridorY) <= tolerance && 
        Math.abs(c.x - nearestToEnd.x) <= 50
      );
      if (finalCorridorPoint && !path.find(p => p.id === finalCorridorPoint.id)) {
        path.push(finalCorridorPoint);
      }
    }
    
    if (nearestToEnd.id !== nearestToStart.id && !path.find(p => p.id === nearestToEnd.id)) {
      path.push(nearestToEnd);
    }
  }
  
  path.push(end);
  return path;
};

// Main pathfinding function
export const findPath = (start: Point, end: Point, allPoints: Point[]): Point[] => {
  console.log('=== PATHFINDING START ===');
  console.log('Start:', start.name, 'at', start.x, start.y);
  console.log('End:', end.name, 'at', end.x, end.y);
  
  if (!start || !end) {
    console.log('Missing start or end point');
    return [];
  }
  
  // Filter points to same floor
  const floorPoints = allPoints.filter(point => point.floor === start.floor);
  console.log('Floor points:', floorPoints.length);
  
  // Ensure start and end points are included
  const pointsToUse = [...floorPoints];
  if (!pointsToUse.find(p => p.id === start.id)) {
    pointsToUse.push(start);
  }
  if (!pointsToUse.find(p => p.id === end.id)) {
    pointsToUse.push(end);
  }
  
  const graph = buildGraph(pointsToUse);
  
  // Check if start and end have connections
  const startConnections = graph[start.id]?.connections.length || 0;
  const endConnections = graph[end.id]?.connections.length || 0;
  
  console.log('Start connections:', startConnections);
  console.log('End connections:', endConnections);
  
  const pathIds = aStar(graph, start.id, end.id);
  
  if (pathIds.length === 0) {
    console.log('A* failed, creating corridor-based path');
    return createCorridorPath(start, end, allPoints);
  }
  
  // Get the path points
  const path = pathIds.map(id => pointsToUse.find(p => p.id === id)!).filter(Boolean);
  
  console.log('=== PATHFINDING COMPLETE ===');
  console.log('Final path length:', path.length);
  console.log('Path:', path.map(p => p.name));
  
  return path;
};
