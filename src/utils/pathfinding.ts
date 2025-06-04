
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
  distance: number;
  previous: string | null;
  visited: boolean;
}

// Calculate distance between two points
const getDistance = (a: Point, b: Point): number => {
  return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
};

// Enhanced connection logic for cleaner paths
const canConnect = (a: Point, b: Point, allPoints: Point[]): boolean => {
  const distance = getDistance(a, b);
  
  // Don't connect points that are too far apart
  if (distance > 200) return false;
  
  // Allow connections between rooms and their nearest corridor points
  if (a.type === 'room' && b.type === 'corridor') {
    return distance <= 100;
  }
  if (a.type === 'corridor' && b.type === 'room') {
    return distance <= 100;
  }
  
  // Allow corridor-to-corridor connections for path building
  if (a.type === 'corridor' && b.type === 'corridor') {
    return distance <= 150;
  }
  
  // Allow stairs connections
  if (a.type === 'stairs' || b.type === 'stairs') {
    return distance <= 100;
  }
  
  return false;
};

// Build optimized graph for precise pathfinding
const buildGraph = (points: Point[]): { [key: string]: GraphNode } => {
  const graph: { [key: string]: GraphNode } = {};
  
  // Initialize nodes
  points.forEach(point => {
    graph[point.id] = {
      id: point.id,
      x: point.x,
      y: point.y,
      connections: [],
      distance: Infinity,
      previous: null,
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

// Dijkstra's algorithm for shortest path
const dijkstra = (graph: { [key: string]: GraphNode }, startId: string, endId: string): string[] => {
  // Reset graph
  Object.values(graph).forEach(node => {
    node.distance = Infinity;
    node.previous = null;
    node.visited = false;
  });
  
  if (!graph[startId] || !graph[endId]) {
    return [];
  }
  
  graph[startId].distance = 0;
  
  while (true) {
    let currentNode: GraphNode | null = null;
    let minDistance = Infinity;
    
    Object.values(graph).forEach(node => {
      if (!node.visited && node.distance < minDistance) {
        minDistance = node.distance;
        currentNode = node;
      }
    });
    
    if (!currentNode || currentNode.distance === Infinity) {
      break;
    }
    
    if (currentNode.id === endId) {
      break;
    }
    
    currentNode.visited = true;
    
    currentNode.connections.forEach(neighborId => {
      const neighbor = graph[neighborId];
      if (neighbor && !neighbor.visited) {
        const distance = getDistance(currentNode!, neighbor);
        const newDistance = currentNode!.distance + distance;
        
        if (newDistance < neighbor.distance) {
          neighbor.distance = newDistance;
          neighbor.previous = currentNode!.id;
        }
      }
    });
  }
  
  // Reconstruct path
  const path: string[] = [];
  let currentId: string | null = endId;
  
  while (currentId !== null) {
    path.unshift(currentId);
    currentId = graph[currentId].previous;
  }
  
  if (path.length === 0 || path[0] !== startId) {
    return [];
  }
  
  return path;
};

// Main pathfinding function
export const findPath = (start: Point, end: Point, allPoints: Point[]): Point[] => {
  if (!start || !end) return [];
  
  // Filter points to same floor and include corridor points for navigation
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
  const pathIds = dijkstra(graph, start.id, end.id);
  
  if (pathIds.length === 0) {
    return [];
  }
  
  // Return the clean path with point details
  return pathIds.map(id => pointsToUse.find(p => p.id === id)!).filter(Boolean);
};
