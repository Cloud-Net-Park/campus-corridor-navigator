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
  // Ground Floor (Floor 1) - Room positions based on blueprint
  { id: 'auditorium-1', name: 'Auditorium 1', x: 105, y: 540, floor: 1, type: 'room', labelX: 105, labelY: 520 },
  { id: 'auditorium-2', name: 'Auditorium 2', x: 105, y: 210, floor: 1, type: 'room', labelX: 105, labelY: 190 },
  { id: 'lab-1', name: 'Lab 1', x: 405, y: 210, floor: 1, type: 'room', labelX: 405, labelY: 190 },
  { id: 'lab-2', name: 'Lab 2', x: 250, y: 210, floor: 1, type: 'room', labelX: 250, labelY: 190 },
  { id: 'seminar-hall', name: 'Seminar Hall', x: 105, y: 350, floor: 1, type: 'room', labelX: 105, labelY: 330 },
  { id: 'server-room', name: 'Server Room', x: 700, y: 150, floor: 1, type: 'room', labelX: 700, labelY: 130 },
  { id: 'boys-restroom', name: 'Boys RestRoom', x: 820, y: 280, floor: 1, type: 'room', labelX: 820, labelY: 260 },
  { id: 'girls-restroom', name: 'Girls RestRoom', x: 820, y: 350, floor: 1, type: 'room', labelX: 820, labelY: 330 },
  { id: 'reception', name: 'Reception', x: 700, y: 420, floor: 1, type: 'room', labelX: 700, labelY: 400 },
  { id: 'admission-office', name: 'Admission Office', x: 820, y: 450, floor: 1, type: 'room', labelX: 820, labelY: 430 },
  
  // Stairs - positioned at actual stairway locations
  { id: 'step-l2', name: 'Step-l2', x: 570, y: 360, floor: 1, type: 'stairs', labelX: 570, labelY: 340 },
  { id: 'zig-zag-steps', name: 'Zig Zag Steps', x: 570, y: 540, floor: 1, type: 'stairs', labelX: 570, labelY: 520 },
  
  // Main corridor network following the black walkways precisely
  // Horizontal main corridor (the primary black walkway)
  { id: 'corridor-h1', name: 'Main Corridor', x: 180, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-h2', name: 'Main Corridor', x: 220, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-h3', name: 'Main Corridor', x: 280, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-h4', name: 'Main Corridor', x: 340, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-h5', name: 'Main Corridor', x: 400, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-h6', name: 'Main Corridor', x: 460, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-h7', name: 'Main Corridor', x: 520, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-h8', name: 'Main Corridor', x: 580, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-h9', name: 'Main Corridor', x: 640, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-h10', name: 'Main Corridor', x: 700, y: 350, floor: 1, type: 'corridor' },
  
  // Vertical corridors connecting to rooms (following black paths exactly)
  // Auditorium 1 connection
  { id: 'corridor-aud1-1', name: 'Corridor', x: 180, y: 400, floor: 1, type: 'corridor' },
  { id: 'corridor-aud1-2', name: 'Corridor', x: 180, y: 450, floor: 1, type: 'corridor' },
  { id: 'corridor-aud1-3', name: 'Corridor', x: 180, y: 500, floor: 1, type: 'corridor' },
  { id: 'corridor-aud1-4', name: 'Corridor', x: 150, y: 540, floor: 1, type: 'corridor' },
  
  // Auditorium 2 connection
  { id: 'corridor-aud2-1', name: 'Corridor', x: 180, y: 300, floor: 1, type: 'corridor' },
  { id: 'corridor-aud2-2', name: 'Corridor', x: 180, y: 250, floor: 1, type: 'corridor' },
  { id: 'corridor-aud2-3', name: 'Corridor', x: 150, y: 210, floor: 1, type: 'corridor' },
  
  // Lab 2 connection
  { id: 'corridor-lab2-1', name: 'Corridor', x: 280, y: 300, floor: 1, type: 'corridor' },
  { id: 'corridor-lab2-2', name: 'Corridor', x: 280, y: 250, floor: 1, type: 'corridor' },
  { id: 'corridor-lab2-3', name: 'Corridor', x: 250, y: 250, floor: 1, type: 'corridor' },
  
  // Lab 1 connection
  { id: 'corridor-lab1-1', name: 'Corridor', x: 400, y: 300, floor: 1, type: 'corridor' },
  { id: 'corridor-lab1-2', name: 'Corridor', x: 400, y: 250, floor: 1, type: 'corridor' },
  { id: 'corridor-lab1-3', name: 'Corridor', x: 405, y: 250, floor: 1, type: 'corridor' },
  
  // Right side vertical corridor
  { id: 'corridor-right-1', name: 'Right Corridor', x: 700, y: 300, floor: 1, type: 'corridor' },
  { id: 'corridor-right-2', name: 'Right Corridor', x: 700, y: 250, floor: 1, type: 'corridor' },
  { id: 'corridor-right-3', name: 'Right Corridor', x: 700, y: 200, floor: 1, type: 'corridor' },
  { id: 'corridor-right-4', name: 'Right Corridor', x: 700, y: 400, floor: 1, type: 'corridor' },
  { id: 'corridor-right-5', name: 'Right Corridor', x: 750, y: 280, floor: 1, type: 'corridor' },
  { id: 'corridor-right-6', name: 'Right Corridor', x: 750, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-right-7', name: 'Right Corridor', x: 750, y: 450, floor: 1, type: 'corridor' },
  
  // Stairs connections
  { id: 'corridor-stairs1-1', name: 'Stairs Corridor', x: 520, y: 360, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs2-1', name: 'Stairs Corridor', x: 580, y: 400, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs2-2', name: 'Stairs Corridor', x: 580, y: 450, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs2-3', name: 'Stairs Corridor', x: 580, y: 500, floor: 1, type: 'corridor' },
  
  // Floor 2 & 3 rooms - keeping existing positions
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
  
  // Simplified corridor structure for other floors
  { id: 'corridor-2-main-1', name: 'Corridor', x: 300, y: 250, floor: 2, type: 'corridor' },
  { id: 'corridor-2-main-2', name: 'Corridor', x: 400, y: 250, floor: 2, type: 'corridor' },
  { id: 'corridor-2-main-3', name: 'Corridor', x: 500, y: 250, floor: 2, type: 'corridor' },
  
  { id: 'corridor-3-main-1', name: 'Corridor', x: 300, y: 250, floor: 3, type: 'corridor' },
  { id: 'corridor-3-main-2', name: 'Corridor', x: 400, y: 250, floor: 3, type: 'corridor' },
  { id: 'corridor-3-main-3', name: 'Corridor', x: 500, y: 250, floor: 3, type: 'corridor' }
];
