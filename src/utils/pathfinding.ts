
interface Point {
  x: number;
  y: number;
  id: string;
  floor?: number;
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

// Check if a line segment intersects with any room (simplified check)
const intersectsWithRoom = (start: Point, end: Point, rooms: Point[]): boolean => {
  // This is a simplified intersection check
  // In a real implementation, you'd have room boundaries
  return false;
};

// Check if two points can be connected (straight line, reasonable distance)
const canConnect = (a: Point, b: Point, allPoints: Point[]): boolean => {
  const distance = getDistance(a, b);
  
  // Don't connect points that are too far apart
  if (distance > 150) return false;
  
  // Only allow horizontal or vertical connections (no diagonal)
  const dx = Math.abs(b.x - a.x);
  const dy = Math.abs(b.y - a.y);
  
  // Allow straight lines with some tolerance
  const tolerance = 10;
  if (dx > tolerance && dy > tolerance) return false;
  
  // Check if line intersects with rooms
  if (intersectsWithRoom(a, b, allPoints)) return false;
  
  return true;
};

// Build graph from room locations
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
  
  // Create connections
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

// Dijkstra's algorithm implementation
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
    // Find unvisited node with minimum distance
    let currentNode: GraphNode | null = null;
    let minDistance = Infinity;
    
    Object.values(graph).forEach(node => {
      if (!node.visited && node.distance < minDistance) {
        minDistance = node.distance;
        currentNode = node;
      }
    });
    
    if (!currentNode || currentNode.distance === Infinity) {
      break; // No more reachable nodes
    }
    
    if (currentNode.id === endId) {
      break; // Reached destination
    }
    
    currentNode.visited = true;
    
    // Update distances to neighbors
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
  
  // Return empty array if no path found
  if (path.length === 0 || path[0] !== startId) {
    return [];
  }
  
  return path;
};

// Enhanced pathfinding with corridor waypoints
export const findPath = (start: Point, end: Point, allPoints: Point[]): Point[] => {
  if (!start || !end) return [];
  
  // Filter points to same floor and include corridor points
  const floorPoints = allPoints.filter(point => 
    point.floor === start.floor || point.floor === end.floor
  );
  
  // Add start and end points if they're not in the array
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
    // Fallback: try with increased connection distance
    const relaxedGraph = buildGraphRelaxed(pointsToUse);
    const relaxedPathIds = dijkstra(relaxedGraph, start.id, end.id);
    
    if (relaxedPathIds.length === 0) {
      return []; // No path found
    }
    
    return relaxedPathIds.map(id => pointsToUse.find(p => p.id === id)!).filter(Boolean);
  }
  
  return pathIds.map(id => pointsToUse.find(p => p.id === id)!).filter(Boolean);
};

// Relaxed graph building for fallback
const buildGraphRelaxed = (points: Point[]): { [key: string]: GraphNode } => {
  const graph: { [key: string]: GraphNode } = {};
  
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
  
  // More relaxed connections
  points.forEach(pointA => {
    points.forEach(pointB => {
      if (pointA.id !== pointB.id && pointA.floor === pointB.floor) {
        const distance = getDistance(pointA, pointB);
        if (distance <= 200) { // Increased distance
          graph[pointA.id].connections.push(pointB.id);
        }
      }
    });
  });
  
  return graph;
};
