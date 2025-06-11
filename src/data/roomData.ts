
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
  // Ground Floor (Floor 1) - Only the specified rooms
  { id: 'auditorium-2', name: 'Auditorium 2', x: 105, y: 210, floor: 1, type: 'room', labelX: 105, labelY: 190 },
  { id: 'lab-2', name: 'Lab 2', x: 250, y: 210, floor: 1, type: 'room', labelX: 250, labelY: 190 },
  { id: 'lab-1', name: 'Lab 1', x: 405, y: 210, floor: 1, type: 'room', labelX: 405, labelY: 190 },
  { id: 'server-room', name: 'Server Room', x: 700, y: 150, floor: 1, type: 'room', labelX: 700, labelY: 130 },
  { id: 'step-l2', name: 'Step-l2', x: 570, y: 360, floor: 1, type: 'stairs', labelX: 570, labelY: 340 },
  { id: 'boys-restroom', name: 'Boys RestRoom', x: 820, y: 280, floor: 1, type: 'room', labelX: 820, labelY: 260 },
  { id: 'girls-restroom', name: 'Girls RestRoom', x: 820, y: 350, floor: 1, type: 'room', labelX: 820, labelY: 330 },
  { id: 'vip-pantry', name: 'VIP Pantry', x: 300, y: 200, floor: 1, type: 'room', labelX: 270, labelY: 180 },
  { id: 'vip-waiting', name: 'VIP Waiting', x: 350, y: 200, floor: 1, type: 'room', labelX: 320, labelY: 180 },
  { id: 'pantry', name: 'Pantry', x: 400, y: 250, floor: 1, type: 'room', labelX: 370, labelY: 230 },
  { id: 'vip-dining', name: 'VIP Dining', x: 450, y: 200, floor: 1, type: 'room', labelX: 420, labelY: 180 },
  { id: 'chairman-office', name: 'Chairman Office', x: 500, y: 150, floor: 1, type: 'room', labelX: 470, labelY: 130 },
  { id: 'principle-office', name: 'Principle Office', x: 550, y: 150, floor: 1, type: 'room', labelX: 520, labelY: 130 },
  { id: 'oat', name: 'OAT', x: 200, y: 300, floor: 1, type: 'room', labelX: 170, labelY: 280 },
  { id: 'aids', name: 'AIDS', x: 250, y: 350, floor: 1, type: 'room', labelX: 220, labelY: 330 },
  { id: 'green-room-1', name: 'Green Room 1', x: 300, y: 350, floor: 1, type: 'room', labelX: 270, labelY: 330 },
  { id: 'green-room-2', name: 'Green Room 2', x: 350, y: 350, floor: 1, type: 'room', labelX: 320, labelY: 330 },
  { id: 'admin-office', name: 'Admin Office', x: 600, y: 250, floor: 1, type: 'room', labelX: 570, labelY: 230 },
  { id: 'reception', name: 'Reception', x: 700, y: 420, floor: 1, type: 'room', labelX: 700, labelY: 400 },
  { id: 'master-board-room', name: 'Master Board Room', x: 400, y: 200, floor: 1, type: 'room', labelX: 370, labelY: 180 },
  { id: 'oak-leaf', name: 'OAK leaf', x: 450, y: 250, floor: 1, type: 'room', labelX: 420, labelY: 230 },
  { id: 'exam-hall', name: 'Exam Hall', x: 300, y: 300, floor: 1, type: 'room', labelX: 270, labelY: 280 },
  { id: 'meeting-room', name: 'Meeting Room', x: 350, y: 250, floor: 1, type: 'room', labelX: 320, labelY: 230 },
  { id: 'transport-office', name: 'Transport office', x: 500, y: 300, floor: 1, type: 'room', labelX: 470, labelY: 280 },
  { id: 'zig-zag-steps', name: 'Zig Zag Steps', x: 570, y: 540, floor: 1, type: 'stairs', labelX: 570, labelY: 520 },
  { id: 'admission-office', name: 'Admission Office', x: 820, y: 450, floor: 1, type: 'room', labelX: 820, labelY: 430 },
  { id: 'falcon-hall', name: 'Falcon Hall', x: 200, y: 350, floor: 1, type: 'room', labelX: 170, labelY: 330 },
  { id: 'harmony', name: 'Harmony', x: 250, y: 400, floor: 1, type: 'room', labelX: 220, labelY: 380 },
  { id: 'cdc', name: 'CDC', x: 600, y: 200, floor: 1, type: 'room', labelX: 570, labelY: 180 },
  { id: 'symphony', name: 'Symphony', x: 650, y: 250, floor: 1, type: 'room', labelX: 620, labelY: 230 },
  { id: 'waiting-hall', name: 'Waiting Hall', x: 550, y: 350, floor: 1, type: 'room', labelX: 520, labelY: 330 },
  { id: 'step-l5', name: 'Step-l5', x: 300, y: 200, floor: 1, type: 'stairs', labelX: 270, labelY: 180 },
  { id: 'pt-room', name: 'PT Room', x: 700, y: 300, floor: 1, type: 'room', labelX: 670, labelY: 280 },
  { id: 'store-room', name: 'Store Room', x: 750, y: 350, floor: 1, type: 'room', labelX: 720, labelY: 330 },
  
  // Enhanced corridor network following the black walkways precisely
  // Main horizontal corridor (primary black walkway)
  { id: 'corridor-main-1', name: 'Main Corridor', x: 180, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-2', name: 'Main Corridor', x: 220, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-3', name: 'Main Corridor', x: 260, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-4', name: 'Main Corridor', x: 300, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-5', name: 'Main Corridor', x: 340, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-6', name: 'Main Corridor', x: 380, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-7', name: 'Main Corridor', x: 420, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-8', name: 'Main Corridor', x: 460, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-9', name: 'Main Corridor', x: 500, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-10', name: 'Main Corridor', x: 540, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-11', name: 'Main Corridor', x: 580, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-12', name: 'Main Corridor', x: 620, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-13', name: 'Main Corridor', x: 660, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-14', name: 'Main Corridor', x: 700, y: 350, floor: 1, type: 'corridor' },
  
  // Vertical corridors connecting to rooms (following black paths exactly)
  // Left side vertical connections
  { id: 'corridor-left-1', name: 'Left Corridor', x: 180, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-left-2', name: 'Left Corridor', x: 180, y: 290, floor: 1, type: 'corridor' },
  { id: 'corridor-left-3', name: 'Left Corridor', x: 180, y: 260, floor: 1, type: 'corridor' },
  { id: 'corridor-left-4', name: 'Left Corridor', x: 180, y: 230, floor: 1, type: 'corridor' },
  { id: 'corridor-left-5', name: 'Left Corridor', x: 150, y: 210, floor: 1, type: 'corridor' },
  
  // Lab connections
  { id: 'corridor-lab-1', name: 'Lab Corridor', x: 250, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-lab-2', name: 'Lab Corridor', x: 250, y: 290, floor: 1, type: 'corridor' },
  { id: 'corridor-lab-3', name: 'Lab Corridor', x: 250, y: 260, floor: 1, type: 'corridor' },
  { id: 'corridor-lab-4', name: 'Lab Corridor', x: 250, y: 230, floor: 1, type: 'corridor' },
  
  { id: 'corridor-lab1-1', name: 'Lab1 Corridor', x: 400, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-lab1-2', name: 'Lab1 Corridor', x: 400, y: 290, floor: 1, type: 'corridor' },
  { id: 'corridor-lab1-3', name: 'Lab1 Corridor', x: 400, y: 260, floor: 1, type: 'corridor' },
  { id: 'corridor-lab1-4', name: 'Lab1 Corridor', x: 400, y: 230, floor: 1, type: 'corridor' },
  
  // Upper area connections
  { id: 'corridor-upper-1', name: 'Upper Corridor', x: 300, y: 220, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-2', name: 'Upper Corridor', x: 350, y: 220, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-3', name: 'Upper Corridor', x: 400, y: 220, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-4', name: 'Upper Corridor', x: 450, y: 220, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-5', name: 'Upper Corridor', x: 500, y: 220, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-6', name: 'Upper Corridor', x: 550, y: 220, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-7', name: 'Upper Corridor', x: 600, y: 220, floor: 1, type: 'corridor' },
  
  // Right side vertical corridor
  { id: 'corridor-right-1', name: 'Right Corridor', x: 700, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-right-2', name: 'Right Corridor', x: 700, y: 290, floor: 1, type: 'corridor' },
  { id: 'corridor-right-3', name: 'Right Corridor', x: 700, y: 260, floor: 1, type: 'corridor' },
  { id: 'corridor-right-4', name: 'Right Corridor', x: 700, y: 230, floor: 1, type: 'corridor' },
  { id: 'corridor-right-5', name: 'Right Corridor', x: 700, y: 200, floor: 1, type: 'corridor' },
  { id: 'corridor-right-6', name: 'Right Corridor', x: 700, y: 380, floor: 1, type: 'corridor' },
  { id: 'corridor-right-7', name: 'Right Corridor', x: 700, y: 410, floor: 1, type: 'corridor' },
  
  // Far right connections
  { id: 'corridor-far-right-1', name: 'Far Right Corridor', x: 750, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-far-right-2', name: 'Far Right Corridor', x: 780, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-far-right-3', name: 'Far Right Corridor', x: 780, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-far-right-4', name: 'Far Right Corridor', x: 780, y: 290, floor: 1, type: 'corridor' },
  { id: 'corridor-far-right-5', name: 'Far Right Corridor', x: 780, y: 380, floor: 1, type: 'corridor' },
  { id: 'corridor-far-right-6', name: 'Far Right Corridor', x: 780, y: 420, floor: 1, type: 'corridor' },
  
  // Stairs connections
  { id: 'corridor-stairs-1', name: 'Stairs Corridor', x: 570, y: 380, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs-2', name: 'Stairs Corridor', x: 570, y: 410, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs-3', name: 'Stairs Corridor', x: 570, y: 450, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs-4', name: 'Stairs Corridor', x: 570, y: 490, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs-5', name: 'Stairs Corridor', x: 570, y: 520, floor: 1, type: 'corridor' },
  
  // Middle area connections
  { id: 'corridor-middle-1', name: 'Middle Corridor', x: 300, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-middle-2', name: 'Middle Corridor', x: 350, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-middle-3', name: 'Middle Corridor', x: 400, y: 380, floor: 1, type: 'corridor' },
  { id: 'corridor-middle-4', name: 'Middle Corridor', x: 450, y: 380, floor: 1, type: 'corridor' },
  { id: 'corridor-middle-5', name: 'Middle Corridor', x: 500, y: 380, floor: 1, type: 'corridor' },
  { id: 'corridor-middle-6', name: 'Middle Corridor', x: 550, y: 380, floor: 1, type: 'corridor' }
];
