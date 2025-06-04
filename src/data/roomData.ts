
export interface RoomLocation {
  id: string;
  name: string;
  x: number;
  y: number;
  floor: number;
  type: 'room' | 'corridor' | 'stairs' | 'entrance';
}

export const roomLocations: RoomLocation[] = [
  // Ground Floor (Floor 1) - Positions based on blueprint image
  { id: 'auditorium-2', name: 'Auditorium 2', x: 145, y: 95, floor: 1, type: 'room' },
  { id: 'lab-2', name: 'Lab 2', x: 345, y: 95, floor: 1, type: 'room' },
  { id: 'lab-1', name: 'Lab 1', x: 545, y: 95, floor: 1, type: 'room' },
  { id: 'server-room', name: 'Server Room', x: 745, y: 150, floor: 1, type: 'room' },
  { id: 'step-l2', name: 'Step-l2', x: 445, y: 200, floor: 1, type: 'stairs' },
  { id: 'boys-restroom', name: 'Boys RestRoom', x: 845, y: 250, floor: 1, type: 'room' },
  { id: 'girls-restroom', name: 'Girls RestRoom', x: 845, y: 320, floor: 1, type: 'room' },
  { id: 'reception', name: 'Reception', x: 745, y: 400, floor: 1, type: 'room' },
  { id: 'admission-office', name: 'Admission Office', x: 845, y: 450, floor: 1, type: 'room' },
  { id: 'zig-zag-steps', name: 'Zig Zag Steps', x: 645, y: 515, floor: 1, type: 'stairs' },
  { id: 'auditorium-1', name: 'Auditorium 1', x: 145, y: 515, floor: 1, type: 'room' },
  { id: 'seminar-hall', name: 'Seminar Hall', x: 145, y: 350, floor: 1, type: 'room' },
  
  // First Floor (Floor 2) - Sample rooms (will be updated when you provide the list)
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
  
  // Second Floor (Floor 3) - Sample rooms (will be updated when you provide the list)
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
  
  // Corridor waypoints following the black line paths from the blueprint - Ground Floor
  { id: 'corridor-main-horizontal-1', name: 'Main Corridor', x: 245, y: 300, floor: 1, type: 'corridor' },
  { id: 'corridor-main-horizontal-2', name: 'Main Corridor', x: 345, y: 300, floor: 1, type: 'corridor' },
  { id: 'corridor-main-horizontal-3', name: 'Main Corridor', x: 445, y: 300, floor: 1, type: 'corridor' },
  { id: 'corridor-main-horizontal-4', name: 'Main Corridor', x: 545, y: 300, floor: 1, type: 'corridor' },
  { id: 'corridor-main-horizontal-5', name: 'Main Corridor', x: 645, y: 300, floor: 1, type: 'corridor' },
  { id: 'corridor-main-horizontal-6', name: 'Main Corridor', x: 745, y: 300, floor: 1, type: 'corridor' },
  
  // Vertical corridors connecting to rooms
  { id: 'corridor-lab2-connect', name: 'Lab Corridor', x: 345, y: 200, floor: 1, type: 'corridor' },
  { id: 'corridor-lab1-connect', name: 'Lab Corridor', x: 545, y: 200, floor: 1, type: 'corridor' },
  { id: 'corridor-aud2-connect', name: 'Auditorium Corridor', x: 145, y: 200, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs-connect', name: 'Stairs Corridor', x: 445, y: 250, floor: 1, type: 'corridor' },
  
  // Right side vertical corridor
  { id: 'corridor-right-vertical-1', name: 'Right Corridor', x: 845, y: 200, floor: 1, type: 'corridor' },
  { id: 'corridor-right-vertical-2', name: 'Right Corridor', x: 845, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-right-vertical-3', name: 'Right Corridor', x: 845, y: 400, floor: 1, type: 'corridor' },
  
  // Bottom horizontal corridor
  { id: 'corridor-bottom-1', name: 'Bottom Corridor', x: 245, y: 450, floor: 1, type: 'corridor' },
  { id: 'corridor-bottom-2', name: 'Bottom Corridor', x: 345, y: 450, floor: 1, type: 'corridor' },
  { id: 'corridor-bottom-3', name: 'Bottom Corridor', x: 445, y: 450, floor: 1, type: 'corridor' },
  { id: 'corridor-bottom-4', name: 'Bottom Corridor', x: 545, y: 450, floor: 1, type: 'corridor' },
  
  // Entrance connection
  { id: 'main-entrance', name: 'Main Entrance', x: 645, y: 610, floor: 1, type: 'entrance' },
  { id: 'corridor-entrance-connect', name: 'Entrance Corridor', x: 645, y: 450, floor: 1, type: 'corridor' },
  
  // Floor 2 & 3 corridor waypoints (basic layout - will be updated with proper floor plans)
  { id: 'corridor-2-main-1', name: 'Corridor Point', x: 300, y: 250, floor: 2, type: 'corridor' },
  { id: 'corridor-2-main-2', name: 'Corridor Point', x: 400, y: 250, floor: 2, type: 'corridor' },
  { id: 'corridor-2-main-3', name: 'Corridor Point', x: 500, y: 250, floor: 2, type: 'corridor' },
  
  { id: 'corridor-3-main-1', name: 'Corridor Point', x: 300, y: 250, floor: 3, type: 'corridor' },
  { id: 'corridor-3-main-2', name: 'Corridor Point', x: 400, y: 250, floor: 3, type: 'corridor' },
  { id: 'corridor-3-main-3', name: 'Corridor Point', x: 500, y: 250, floor: 3, type: 'corridor' }
];
