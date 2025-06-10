
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

// More permissive connection logic to ensure paths can be found
const canConnect = (a: Point, b: Point, allPoints: Point[]): boolean => {
  const distance = getDistance(a, b);
  
  console.log(`Checking connection between ${a.name} and ${b.name}, distance: ${distance}`);
  
  // More generous distance limits
  if (distance > 200) {
    console.log(`Distance too far: ${distance}`);
    return false;
  }
  
  // Direct room-to-room connections for close rooms
  if (a.type === 'room' && b.type === 'room') {
    if (distance <= 150) {
      console.log(`Direct room connection allowed: ${distance}`);
      return true;
    }
  }
  
  // Room to corridor connections
  if ((a.type === 'room' && b.type === 'corridor') || 
      (a.type === 'corridor' && b.type === 'room')) {
    if (distance <= 100) {
      console.log(`Room-corridor connection allowed: ${distance}`);
      return true;
    }
  }
  
  // Corridor-to-corridor connections
  if (a.type === 'corridor' && b.type === 'corridor') {
    if (distance <= 120) {
      console.log(`Corridor-corridor connection allowed: ${distance}`);
      return true;
    }
  }
  
  // Stairs connections
  if (a.type === 'stairs' || b.type === 'stairs') {
    if (distance <= 100) {
      console.log(`Stairs connection allowed: ${distance}`);
      return true;
    }
  }
  
  console.log(`Connection rejected for ${a.name} to ${b.name}`);
  return false;
};

// Build graph with connections
const buildGraph = (points: Point[]): { [key: string]: GraphNode } => {
  const graph: { [key: string]: GraphNode } = {};
  
  console.log('Building graph with points:', points.map(p => ({ id: p.id, name: p.name, x: p.x, y: p.y, type: p.type })));
  
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
      if (pointA.id !== pointB.id && pointA.floor === pointB.floor) {
        if (canConnect(pointA, pointB, points)) {
          graph[pointA.id].connections.push(pointB.id);
          console.log(`Connected ${pointA.name} to ${pointB.name}`);
        }
      }
    });
  });
  
  // Log final connections
  Object.values(graph).forEach(node => {
    if (node.connections.length > 0) {
      console.log(`Node ${node.id} has ${node.connections.length} connections:`, node.connections);
    }
  });
  
  return graph;
};

// A* pathfinding algorithm
const aStar = (graph: { [key: string]: GraphNode }, startId: string, endId: string): string[] => {
  console.log(`Starting A* pathfinding from ${startId} to ${endId}`);
  
  // Reset graph
  Object.values(graph).forEach(node => {
    node.gCost = Infinity;
    node.hCost = 0;
    node.fCost = Infinity;
    node.parent = null;
    node.visited = false;
  });
  
  if (!graph[startId] || !graph[endId]) {
    console.log('Start or end node not found in graph');
    return [];
  }
  
  const startNode = graph[startId];
  const endNode = graph[endId];
  
  startNode.gCost = 0;
  startNode.hCost = heuristic(startNode, endNode);
  startNode.fCost = startNode.gCost + startNode.hCost;
  
  const openSet = new Set([startId]);
  const closedSet = new Set();
  
  console.log(`Initial setup: start node connections: ${startNode.connections.length}`);
  
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
    
    console.log(`Processing node: ${currentId}`);
    
    if (currentId === endId) {
      console.log('Path found! Reconstructing...');
      // Reconstruct path
      const path: string[] = [];
      let current: string | null = endId;
      
      while (current !== null) {
        path.unshift(current);
        current = graph[current].parent;
      }
      
      console.log('Final path:', path);
      return path;
    }
    
    openSet.delete(currentId);
    closedSet.add(currentId);
    
    const currentNode = graph[currentId];
    console.log(`Current node ${currentId} has ${currentNode.connections.length} connections`);
    
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
      
      console.log(`Updated neighbor ${neighborId} with gCost: ${neighbor.gCost}`);
    });
  }
  
  console.log('No path found');
  return []; // No path found
};

// Simple direct path if A* fails
const createDirectPath = (start: Point, end: Point): Point[] => {
  console.log('Creating direct path between points');
  
  // Create intermediate points for a straight line
  const numPoints = 5;
  const path: Point[] = [start];
  
  for (let i = 1; i < numPoints; i++) {
    const t = i / numPoints;
    const x = start.x + (end.x - start.x) * t;
    const y = start.y + (end.y - start.y) * t;
    
    path.push({
      x: Math.round(x),
      y: Math.round(y),
      id: `direct_${i}`,
      name: `Waypoint ${i}`,
      floor: start.floor,
      type: 'waypoint'
    });
  }
  
  path.push(end);
  console.log('Direct path created with points:', path.map(p => ({ x: p.x, y: p.y })));
  return path;
};

// Main pathfinding function
export const findPath = (start: Point, end: Point, allPoints: Point[]): Point[] => {
  console.log('=== PATHFINDING START ===');
  console.log('Start point:', start);
  console.log('End point:', end);
  console.log('All points count:', allPoints.length);
  
  if (!start || !end) {
    console.log('Missing start or end point');
    return [];
  }
  
  // Filter points to same floor
  const floorPoints = allPoints.filter(point => 
    point.floor === start.floor || point.floor === end.floor
  );
  
  console.log('Floor points count:', floorPoints.length);
  
  const pointsToUse = [...floorPoints];
  if (!pointsToUse.find(p => p.id === start.id)) {
    pointsToUse.push(start);
  }
  if (!pointsToUse.find(p => p.id === end.id)) {
    pointsToUse.push(end);
  }
  
  console.log('Points to use for pathfinding:', pointsToUse.length);
  
  const graph = buildGraph(pointsToUse);
  const pathIds = aStar(graph, start.id, end.id);
  
  if (pathIds.length === 0) {
    console.log('A* failed, creating direct path');
    // Fallback to direct path
    return createDirectPath(start, end);
  }
  
  // Get the path points
  const path = pathIds.map(id => pointsToUse.find(p => p.id === id)!).filter(Boolean);
  
  console.log('=== PATHFINDING COMPLETE ===');
  console.log('Final path length:', path.length);
  console.log('Path coordinates:', path.map(p => ({ x: p.x, y: p.y, name: p.name })));
  
  return path;
};
