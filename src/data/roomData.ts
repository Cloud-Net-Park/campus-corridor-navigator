
export interface RoomLocation {
  id: string;
  name: string;
  x: number;
  y: number;
  floor: number;
  type: 'room' | 'corridor' | 'stairs' | 'entrance';
  labelX?: number; // Optional label position
  labelY?: number;
}

export const roomLocations: RoomLocation[] = [
  // Ground Floor (Floor 1) - More accurate positions based on blueprint walkways
  { id: 'auditorium-1', name: 'Auditorium 1', x: 150, y: 450, floor: 1, type: 'room', labelX: 120, labelY: 430 },
  { id: 'auditorium-2', name: 'Auditorium 2', x: 150, y: 280, floor: 1, type: 'room', labelX: 120, labelY: 260 },
  { id: 'lab-1', name: 'Lab 1', x: 400, y: 280, floor: 1, type: 'room', labelX: 370, labelY: 260 },
  { id: 'lab-2', name: 'Lab 2', x: 290, y: 280, floor: 1, type: 'room', labelX: 260, labelY: 260 },
  { id: 'seminar-hall', name: 'Seminar Hall', x: 150, y: 365, floor: 1, type: 'room', labelX: 120, labelY: 345 },
  { id: 'server-room', name: 'Server Room', x: 700, y: 200, floor: 1, type: 'room', labelX: 670, labelY: 180 },
  { id: 'boys-restroom', name: 'Boys RestRoom', x: 780, y: 280, floor: 1, type: 'room', labelX: 750, labelY: 260 },
  { id: 'girls-restroom', name: 'Girls RestRoom', x: 780, y: 340, floor: 1, type: 'room', labelX: 750, labelY: 320 },
  { id: 'reception', name: 'Reception', x: 700, y: 400, floor: 1, type: 'room', labelX: 670, labelY: 380 },
  { id: 'admission-office', name: 'Admission Office', x: 780, y: 450, floor: 1, type: 'room', labelX: 750, labelY: 430 },
  
  // Stairs - positioned at actual stairway locations
  { id: 'step-l2', name: 'Step-l2', x: 500, y: 300, floor: 1, type: 'stairs', labelX: 470, labelY: 280 },
  { id: 'zig-zag-steps', name: 'Zig Zag Steps', x: 600, y: 500, floor: 1, type: 'stairs', labelX: 570, labelY: 480 },
  
  // Corridor waypoints following the black walkways on blueprint
  // Main horizontal corridor (central walkway)
  { id: 'corridor-main-1', name: 'Main Corridor', x: 200, y: 365, floor: 1, type: 'corridor' },
  { id: 'corridor-main-2', name: 'Main Corridor', x: 250, y: 365, floor: 1, type: 'corridor' },
  { id: 'corridor-main-3', name: 'Main Corridor', x: 300, y: 365, floor: 1, type: 'corridor' },
  { id: 'corridor-main-4', name: 'Main Corridor', x: 350, y: 365, floor: 1, type: 'corridor' },
  { id: 'corridor-main-5', name: 'Main Corridor', x: 400, y: 365, floor: 1, type: 'corridor' },
  { id: 'corridor-main-6', name: 'Main Corridor', x: 450, y: 365, floor: 1, type: 'corridor' },
  { id: 'corridor-main-7', name: 'Main Corridor', x: 500, y: 365, floor: 1, type: 'corridor' },
  { id: 'corridor-main-8', name: 'Main Corridor', x: 550, y: 365, floor: 1, type: 'corridor' },
  { id: 'corridor-main-9', name: 'Main Corridor', x: 600, y: 365, floor: 1, type: 'corridor' },
  { id: 'corridor-main-10', name: 'Main Corridor', x: 650, y: 365, floor: 1, type: 'corridor' },
  
  // Vertical connections to rooms (following black paths)
  { id: 'corridor-aud1-connect', name: 'Corridor', x: 200, y: 420, floor: 1, type: 'corridor' },
  { id: 'corridor-aud1-door', name: 'Corridor', x: 200, y: 450, floor: 1, type: 'corridor' },
  
  { id: 'corridor-aud2-connect', name: 'Corridor', x: 200, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-aud2-door', name: 'Corridor', x: 200, y: 280, floor: 1, type: 'corridor' },
  
  { id: 'corridor-lab2-connect', name: 'Corridor', x: 250, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-lab2-door', name: 'Corridor', x: 250, y: 280, floor: 1, type: 'corridor' },
  
  { id: 'corridor-lab1-connect', name: 'Corridor', x: 400, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-lab1-door', name: 'Corridor', x: 400, y: 280, floor: 1, type: 'corridor' },
  
  // Right side corridors
  { id: 'corridor-right-1', name: 'Right Corridor', x: 650, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-right-2', name: 'Right Corridor', x: 650, y: 280, floor: 1, type: 'corridor' },
  { id: 'corridor-right-3', name: 'Right Corridor', x: 650, y: 400, floor: 1, type: 'corridor' },
  { id: 'corridor-right-4', name: 'Right Corridor', x: 650, y: 450, floor: 1, type: 'corridor' },
  
  // Connections to right side rooms
  { id: 'corridor-server-connect', name: 'Corridor', x: 650, y: 200, floor: 1, type: 'corridor' },
  { id: 'corridor-reception-connect', name: 'Corridor', x: 650, y: 400, floor: 1, type: 'corridor' },
  
  // Stairs connections
  { id: 'corridor-stairs1-connect', name: 'Stairs Corridor', x: 500, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs2-connect', name: 'Stairs Corridor', x: 600, y: 450, floor: 1, type: 'corridor' },
  
  // Floor 2 & 3 rooms with labels
  { id: 'vip-pantry', name: 'VIP Pantry', x: 300, y: 200, floor: 2, type: 'room', labelX: 270, labelY: 180 },
  { id: 'vip-waiting', name: 'VIP Waiting', x: 350, y: 200, floor: 2, type: 'room', labelX: 320, labelY: 180 },
  { id: 'pantry', name: 'Pantry', x: 400, y: 250, floor: 2, type: 'room', labelX: 370, labelY: 230 },
  { id: 'vip-dining', name: 'VIP Dining', x: 450, y: 200, floor: 2, type: 'room', labelX: 420, labelY: 180 },
  { id: 'chairman-office', name: 'Chairman Office', x: 500, y: 150, floor: 2, type: 'room', labelX: 470, labelY: 130 },
  { id: 'principle-office', name: 'Principle Office', x: 550, y: 150, floor: 2, type: 'room', labelX: 520, labelY: 130 },
  { id: 'oat', name: 'OAT', x: 200, y: 300, floor: 2, type: 'room', labelX: 170, labelY: 280 },
  { id: 'aids', name: 'AIDS', x: 250, y: 350, floor: 2, type: 'room', labelX: 220, labelY: 330 },
  { id: 'green-room-1', name: 'Green Room 1', x: 300, y: 350, floor: 2, type: 'room', labelX: 270, labelY: 330 },
  { id: 'green-room-2', name: 'Green Room 2', x: 350, y: 350, floor: 2, type: 'room', labelX: 320, labelY: 330 },
  { id: 'admin-office', name: 'Admin Office', x: 600, y: 250, floor: 2, type: 'room', labelX: 570, labelY: 230 },
  
  { id: 'master-board-room', name: 'Master Board Room', x: 400, y: 200, floor: 3, type: 'room', labelX: 370, labelY: 180 },
  { id: 'oak-leaf', name: 'OAK leaf', x: 450, y: 250, floor: 3, type: 'room', labelX: 420, labelY: 230 },
  { id: 'exam-hall', name: 'Exam Hall', x: 300, y: 300, floor: 3, type: 'room', labelX: 270, labelY: 280 },
  { id: 'meeting-room', name: 'Meeting Room', x: 350, y: 250, floor: 3, type: 'room', labelX: 320, labelY: 230 },
  { id: 'transport-office', name: 'Transport office', x: 500, y: 300, floor: 3, type: 'room', labelX: 470, labelY: 280 },
  { id: 'falcon-hall', name: 'Falcon Hall', x: 200, y: 350, floor: 3, type: 'room', labelX: 170, labelY: 330 },
  { id: 'harmony', name: 'Harmony', x: 250, y: 400, floor: 3, type: 'room', labelX: 220, labelY: 380 },
  { id: 'cdc', name: 'CDC', x: 600, y: 200, floor: 3, type: 'room', labelX: 570, labelY: 180 },
  { id: 'symphony', name: 'Symphony', x: 650, y: 250, floor: 3, type: 'room', labelX: 620, labelY: 230 },
  { id: 'waiting-hall', name: 'Waiting Hall', x: 550, y: 350, floor: 3, type: 'room', labelX: 520, labelY: 330 },
  { id: 'step-l5', name: 'Step-l5', x: 300, y: 200, floor: 3, type: 'stairs', labelX: 270, labelY: 180 },
  { id: 'pt-room', name: 'PT Room', x: 700, y: 300, floor: 3, type: 'room', labelX: 670, labelY: 280 },
  { id: 'store-room', name: 'Store Room', x: 750, y: 350, floor: 3, type: 'room', labelX: 720, labelY: 330 },
  
  // Corridor structure for other floors
  { id: 'corridor-2-main-1', name: 'Corridor', x: 300, y: 250, floor: 2, type: 'corridor' },
  { id: 'corridor-2-main-2', name: 'Corridor', x: 400, y: 250, floor: 2, type: 'corridor' },
  { id: 'corridor-2-main-3', name: 'Corridor', x: 500, y: 250, floor: 2, type: 'corridor' },
  
  { id: 'corridor-3-main-1', name: 'Corridor', x: 300, y: 250, floor: 3, type: 'corridor' },
  { id: 'corridor-3-main-2', name: 'Corridor', x: 400, y: 250, floor: 3, type: 'corridor' },
  { id: 'corridor-3-main-3', name: 'Corridor', x: 500, y: 250, floor: 3, type: 'corridor' }
];
