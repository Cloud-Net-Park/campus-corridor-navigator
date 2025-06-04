
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

// Heuristic function for A* (Manhattan distance with diagonal adjustment)
const heuristic = (a: GraphNode, b: GraphNode): number => {
  const dx = Math.abs(b.x - a.x);
  const dy = Math.abs(b.y - a.y);
  return Math.sqrt(dx * dx + dy * dy);
};

// Enhanced connection logic for realistic paths
const canConnect = (a: Point, b: Point, allPoints: Point[]): boolean => {
  const distance = getDistance(a, b);
  
  // Stricter distance limits for more realistic paths
  if (distance > 120) return false;
  
  // Allow connections between rooms and nearby corridor points
  if (a.type === 'room' && b.type === 'corridor') {
    return distance <= 60;
  }
  if (a.type === 'corridor' && b.type === 'room') {
    return distance <= 60;
  }
  
  // Corridor-to-corridor connections should be close
  if (a.type === 'corridor' && b.type === 'corridor') {
    return distance <= 80;
  }
  
  // Stairs connections
  if (a.type === 'stairs' || b.type === 'stairs') {
    return distance <= 80;
  }
  
  return false;
};

// Build graph with realistic connections
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
  
  // Create smart connections
  points.forEach(pointA => {
    points.forEach(pointB => {
      if (pointA.id !== pointB.id && pointA.floor === pointB.floor) {
        if (canConnect(pointA, pointB, points)) {
          graph[pointA.id].connections.push(pointB.id);
        }
      }
    });
  });
  
  return graph;
};

// A* pathfinding algorithm for optimal routes
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

// Smooth path using cubic bezier curves
const smoothPath = (points: Point[]): Point[] => {
  if (points.length <= 2) return points;
  
  const smoothedPoints: Point[] = [points[0]]; // Start with first point
  
  for (let i = 1; i < points.length - 1; i++) {
    const prev = points[i - 1];
    const current = points[i];
    const next = points[i + 1];
    
    // Add intermediate points for smooth curves
    const numInterpolatedPoints = 3;
    for (let j = 0; j <= numInterpolatedPoints; j++) {
      const t = j / numInterpolatedPoints;
      
      // Cubic bezier interpolation
      const x = Math.pow(1 - t, 2) * prev.x + 
                2 * (1 - t) * t * current.x + 
                Math.pow(t, 2) * next.x;
      const y = Math.pow(1 - t, 2) * prev.y + 
                2 * (1 - t) * t * current.y + 
                Math.pow(t, 2) * next.y;
      
      if (j > 0) { // Skip the first point to avoid duplicates
        smoothedPoints.push({
          x: Math.round(x),
          y: Math.round(y),
          id: `smooth_${i}_${j}`,
          name: `Waypoint ${i}_${j}`,
          floor: current.floor,
          type: 'waypoint'
        });
      }
    }
  }
  
  smoothedPoints.push(points[points.length - 1]); // End with last point
  return smoothedPoints;
};

// Main pathfinding function with smooth curves
export const findPath = (start: Point, end: Point, allPoints: Point[]): Point[] => {
  if (!start || !end) return [];
  
  // Filter points to same floor
  const floorPoints = allPoints.filter(point => 
    point.floor === start.floor || point.floor === end.floor
  );
  
  const pointsToUse = [...floorPoints];
  if (!pointsToUse.find(p => p.id === start.id)) {
    pointsToUse.push(start);
  }
  if (!pointsToUse.find(p => p.id === end.id)) {
    pointsToUse.push(end);
  }
  
  const graph = buildGraph(pointsToUse);
  const pathIds = aStar(graph, start.id, end.id);
  
  if (pathIds.length === 0) {
    return [];
  }
  
  // Get the raw path points
  const rawPath = pathIds.map(id => pointsToUse.find(p => p.id === id)!).filter(Boolean);
  
  // Apply smoothing for Google Maps-like curves
  const smoothedPath = smoothPath(rawPath);
  
  return smoothedPath;
};
