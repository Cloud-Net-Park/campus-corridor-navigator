
export interface RoomLocation {
  id: string;
  name: string;
  x: number;
  y: number;
  floor: number;
  type: 'room' | 'corridor' | 'stairs' | 'entrance';
}

export const roomLocations: RoomLocation[] = [
  // Ground Floor (Floor 1) - Precise positions based on blueprint
  { id: 'auditorium-2', name: 'Auditorium 2', x: 147, y: 228, floor: 1, type: 'room' },
  { id: 'lab-2', name: 'Lab 2', x: 265, y: 228, floor: 1, type: 'room' },
  { id: 'lab-1', name: 'Lab 1', x: 378, y: 228, floor: 1, type: 'room' },
  { id: 'server-room', name: 'Server Room', x: 745, y: 150, floor: 1, type: 'room' },
  { id: 'step-l2', name: 'Step-l2', x: 445, y: 260, floor: 1, type: 'stairs' },
  { id: 'boys-restroom', name: 'Boys RestRoom', x: 845, y: 250, floor: 1, type: 'room' },
  { id: 'girls-restroom', name: 'Girls RestRoom', x: 845, y: 320, floor: 1, type: 'room' },
  { id: 'reception', name: 'Reception', x: 745, y: 400, floor: 1, type: 'room' },
  { id: 'admission-office', name: 'Admission Office', x: 845, y: 450, floor: 1, type: 'room' },
  { id: 'zig-zag-steps', name: 'Zig Zag Steps', x: 645, y: 515, floor: 1, type: 'stairs' },
  { id: 'auditorium-1', name: 'Auditorium 1', x: 147, y: 511, floor: 1, type: 'room' },
  { id: 'seminar-hall', name: 'Seminar Hall', x: 147, y: 350, floor: 1, type: 'room' },
  
  // Clean corridor waypoints following the blue path from the blueprint
  { id: 'corridor-aud1-exit', name: 'Auditorium 1 Exit', x: 207, y: 511, floor: 1, type: 'corridor' },
  { id: 'corridor-main-vertical-1', name: 'Main Corridor', x: 207, y: 413, floor: 1, type: 'corridor' },
  { id: 'corridor-main-vertical-2', name: 'Main Corridor', x: 207, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-vertical-3', name: 'Main Corridor', x: 207, y: 288, floor: 1, type: 'corridor' },
  { id: 'corridor-aud2-approach', name: 'Auditorium 2 Approach', x: 147, y: 288, floor: 1, type: 'corridor' },
  
  // Additional precise waypoints for cleaner paths
  { id: 'corridor-center-hub', name: 'Central Hub', x: 350, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-lab-area', name: 'Lab Area', x: 320, y: 288, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs-access', name: 'Stairs Access', x: 445, y: 350, floor: 1, type: 'corridor' },
  
  // Right corridor system
  { id: 'corridor-right-main', name: 'Right Corridor', x: 650, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-right-top', name: 'Right Top', x: 650, y: 288, floor: 1, type: 'corridor' },
  { id: 'corridor-right-bottom', name: 'Right Bottom', x: 650, y: 450, floor: 1, type: 'corridor' },
  
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
