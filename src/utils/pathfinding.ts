
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

// Heuristic function for A* (straight line distance)
const heuristic = (a: GraphNode, b: GraphNode): number => {
  const dx = Math.abs(b.x - a.x);
  const dy = Math.abs(b.y - a.y);
  return Math.sqrt(dx * dx + dy * dy);
};

// Improved connection logic based on blueprint walkways
const canConnect = (a: Point, b: Point): boolean => {
  const distance = getDistance(a, b);
  
  // Don't connect if too far apart
  if (distance > 80) return false;
  
  // Same floor requirement
  if (a.floor !== b.floor) return false;
  
  // Corridor to corridor connections (must be close and aligned)
  if (a.type === 'corridor' && b.type === 'corridor') {
    // Horizontal alignment (same Y, close X)
    if (Math.abs(a.y - b.y) <= 10 && distance <= 70) return true;
    // Vertical alignment (same X, close Y)
    if (Math.abs(a.x - b.x) <= 10 && distance <= 70) return true;
  }
  
  // Room to nearest corridor connections
  if ((a.type === 'room' || a.type === 'stairs') && b.type === 'corridor') {
    return distance <= 60;
  }
  
  if (a.type === 'corridor' && (b.type === 'room' || b.type === 'stairs')) {
    return distance <= 60;
  }
  
  // Room to room only if very close (same building section)
  if ((a.type === 'room' || a.type === 'stairs') && (b.type === 'room' || b.type === 'stairs')) {
    return distance <= 50;
  }
  
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

// A* pathfinding algorithm
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
    // Find node with lowest fCost
    let currentId = '';
    let lowestF = Infinity;
    
    for (const nodeId of openSet) {
      const node = graph[nodeId];
      if (node.fCost < lowestF) {
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

// Create a direct path when A* fails
const createDirectPath = (start: Point, end: Point): Point[] => {
  const path: Point[] = [start];
  
  // Simple L-shaped path
  const midPoint: Point = {
    x: start.x,
    y: end.y,
    id: 'mid_waypoint',
    name: 'Waypoint',
    floor: start.floor,
    type: 'corridor'
  };
  
  // Only add midpoint if it creates a meaningful path
  if (Math.abs(start.x - end.x) > 30 && Math.abs(start.y - end.y) > 30) {
    path.push(midPoint);
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
    console.log('A* failed, creating direct path');
    return createDirectPath(start, end);
  }
  
  // Get the path points
  const path = pathIds.map(id => pointsToUse.find(p => p.id === id)!).filter(Boolean);
  
  console.log('=== PATHFINDING COMPLETE ===');
  console.log('Final path length:', path.length);
  console.log('Path:', path.map(p => p.name));
  
  return path;
};
