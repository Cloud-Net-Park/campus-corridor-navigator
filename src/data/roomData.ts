
export interface RoomLocation {
  id: string;
  name: string;
  x: number;
  y: number;
  floor: number;
  type: 'room' | 'corridor' | 'stairs' | 'entrance';
}

export const roomLocations: RoomLocation[] = [
  // Ground Floor (Floor 1) - Rooms positioned based on blueprint
  { id: 'auditorium-1', name: 'Auditorium 1', x: 110, y: 450, floor: 1, type: 'room' },
  { id: 'auditorium-2', name: 'Auditorium 2', x: 110, y: 280, floor: 1, type: 'room' },
  { id: 'lab-1', name: 'Lab 1', x: 400, y: 280, floor: 1, type: 'room' },
  { id: 'lab-2', name: 'Lab 2', x: 290, y: 280, floor: 1, type: 'room' },
  { id: 'seminar-hall', name: 'Seminar Hall', x: 110, y: 365, floor: 1, type: 'room' },
  { id: 'server-room', name: 'Server Room', x: 700, y: 200, floor: 1, type: 'room' },
  { id: 'boys-restroom', name: 'Boys RestRoom', x: 780, y: 280, floor: 1, type: 'room' },
  { id: 'girls-restroom', name: 'Girls RestRoom', x: 780, y: 340, floor: 1, type: 'room' },
  { id: 'reception', name: 'Reception', x: 700, y: 400, floor: 1, type: 'room' },
  { id: 'admission-office', name: 'Admission Office', x: 780, y: 450, floor: 1, type: 'room' },
  
  // Stairs
  { id: 'step-l2', name: 'Step-l2', x: 500, y: 300, floor: 1, type: 'stairs' },
  { id: 'zig-zag-steps', name: 'Zig Zag Steps', x: 600, y: 500, floor: 1, type: 'stairs' },
  
  // Strategic corridor waypoints for realistic pathfinding
  // Main horizontal corridor
  { id: 'corridor-h1', name: 'Main Corridor', x: 170, y: 365, floor: 1, type: 'corridor' },
  { id: 'corridor-h2', name: 'Main Corridor', x: 230, y: 365, floor: 1, type: 'corridor' },
  { id: 'corridor-h3', name: 'Main Corridor', x: 350, y: 365, floor: 1, type: 'corridor' },
  { id: 'corridor-h4', name: 'Main Corridor', x: 450, y: 365, floor: 1, type: 'corridor' },
  { id: 'corridor-h5', name: 'Main Corridor', x: 550, y: 365, floor: 1, type: 'corridor' },
  { id: 'corridor-h6', name: 'Main Corridor', x: 650, y: 365, floor: 1, type: 'corridor' },
  
  // Vertical corridor connections
  { id: 'corridor-v1', name: 'Corridor', x: 170, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-v2', name: 'Corridor', x: 170, y: 280, floor: 1, type: 'corridor' },
  { id: 'corridor-v3', name: 'Corridor', x: 230, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-v4', name: 'Corridor', x: 230, y: 280, floor: 1, type: 'corridor' },
  { id: 'corridor-v5', name: 'Corridor', x: 350, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-v6', name: 'Corridor', x: 350, y: 280, floor: 1, type: 'corridor' },
  
  // Connection points near rooms
  { id: 'corridor-aud1-exit', name: 'Auditorium 1 Exit', x: 170, y: 450, floor: 1, type: 'corridor' },
  { id: 'corridor-aud2-exit', name: 'Auditorium 2 Exit', x: 170, y: 280, floor: 1, type: 'corridor' },
  { id: 'corridor-lab1-exit', name: 'Lab 1 Exit', x: 350, y: 280, floor: 1, type: 'corridor' },
  { id: 'corridor-lab2-exit', name: 'Lab 2 Exit', x: 250, y: 280, floor: 1, type: 'corridor' },
  
  // Right side corridors
  { id: 'corridor-right1', name: 'Right Corridor', x: 650, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-right2', name: 'Right Corridor', x: 650, y: 280, floor: 1, type: 'corridor' },
  { id: 'corridor-right3', name: 'Right Corridor', x: 650, y: 400, floor: 1, type: 'corridor' },
  { id: 'corridor-right4', name: 'Right Corridor', x: 650, y: 450, floor: 1, type: 'corridor' },
  
  // Stair access points
  { id: 'corridor-stairs1', name: 'Stairs Access', x: 500, y: 365, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs2', name: 'Stairs Access', x: 600, y: 450, floor: 1, type: 'corridor' },
  
  // Floor 2 & 3 basic structure (will be updated with proper data later)
  { id: 'vip-pantry', name: 'VIP Pantry', x: 300, y: 200, floor: 2, type: 'room' },
  { id: 'vip-waiting', name: 'VIP Waiting', x: 350, y: 200, floor: 2, type: 'room' },
  { id: 'pantry', name: 'Pantry', x: 400, y: 250, floor: 2, type: 'room' },
  { id: 'vip-dining', name: 'VIP Dining', x: 450, y: 200, floor: 2, type: 'room' },
  { id: 'chairman-office', name: 'Chairman Office', x: 500, y: 150, floor: 2, type: 'room' },
  { id: 'principle-office', name: 'Principle Office', x: 550, y: 150, floor: 2, type: 'room' },
  { id: 'oat', name: 'OAT', x: 200, y: 300, floor: 2, type: 'room' },
  { id: 'aids', name: 'AIDS', x: 250, y: 350, floor: 2, type: 'room' },
  { id: 'green-room-1', name: 'Green Room 1', x: 300, y: 350, floor: 2, type: 'room' },
  { id: 'green-room-2', name: 'Green Room 2', x: 350, y: 350, floor: 2, type: 'room' },
  { id: 'admin-office', name: 'Admin Office', x: 600, y: 250, floor: 2, type: 'room' },
  
  { id: 'master-board-room', name: 'Master Board Room', x: 400, y: 200, floor: 3, type: 'room' },
  { id: 'oak-leaf', name: 'OAK leaf', x: 450, y: 250, floor: 3, type: 'room' },
  { id: 'exam-hall', name: 'Exam Hall', x: 300, y: 300, floor: 3, type: 'room' },
  { id: 'meeting-room', name: 'Meeting Room', x: 350, y: 250, floor: 3, type: 'room' },
  { id: 'transport-office', name: 'Transport office', x: 500, y: 300, floor: 3, type: 'room' },
  { id: 'falcon-hall', name: 'Falcon Hall', x: 200, y: 350, floor: 3, type: 'room' },
  { id: 'harmony', name: 'Harmony', x: 250, y: 400, floor: 3, type: 'room' },
  { id: 'cdc', name: 'CDC', x: 600, y: 200, floor: 3, type: 'room' },
  { id: 'symphony', name: 'Symphony', x: 650, y: 250, floor: 3, type: 'room' },
  { id: 'waiting-hall', name: 'Waiting Hall', x: 550, y: 350, floor: 3, type: 'room' },
  { id: 'step-l5', name: 'Step-l5', x: 300, y: 200, floor: 3, type: 'stairs' },
  { id: 'pt-room', name: 'PT Room', x: 700, y: 300, floor: 3, type: 'room' },
  { id: 'store-room', name: 'Store Room', x: 750, y: 350, floor: 3, type: 'room' },
  
  // Basic corridor structure for other floors
  { id: 'corridor-2-main-1', name: 'Corridor Point', x: 300, y: 250, floor: 2, type: 'corridor' },
  { id: 'corridor-2-main-2', name: 'Corridor Point', x: 400, y: 250, floor: 2, type: 'corridor' },
  { id: 'corridor-2-main-3', name: 'Corridor Point', x: 500, y: 250, floor: 2, type: 'corridor' },
  
  { id: 'corridor-3-main-1', name: 'Corridor Point', x: 300, y: 250, floor: 3, type: 'corridor' },
  { id: 'corridor-3-main-2', name: 'Corridor Point', x: 400, y: 250, floor: 3, type: 'corridor' },
  { id: 'corridor-3-main-3', name: 'Corridor Point', x: 500, y: 250, floor: 3, type: 'corridor' }
];
