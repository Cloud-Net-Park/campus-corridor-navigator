
export interface RoomLocation {
  id: string;
  name: string;
  x: number;
  y: number;
  floor: number;
  type: 'room' | 'corridor' | 'stairs' | 'entrance';
}

export const roomLocations: RoomLocation[] = [
  // Ground Floor (Floor 1)
  { id: 'seminar-hall', name: 'Seminar Hall', x: 150, y: 300, floor: 1, type: 'room' },
  { id: 'auditorium-2', name: 'Auditorium 2', x: 100, y: 200, floor: 1, type: 'room' },
  { id: 'lab-2', name: 'Lab 2', x: 300, y: 150, floor: 1, type: 'room' },
  { id: 'lab-1', name: 'Lab 1', x: 400, y: 150, floor: 1, type: 'room' },
  { id: 'server-room', name: 'Server Room', x: 500, y: 200, floor: 1, type: 'room' },
  { id: 'step-l2', name: 'Step-l2', x: 200, y: 250, floor: 1, type: 'stairs' },
  { id: 'boys-restroom', name: 'Boys RestRoom', x: 600, y: 300, floor: 1, type: 'room' },
  { id: 'girls-restroom', name: 'Girls RestRoom', x: 650, y: 300, floor: 1, type: 'room' },
  { id: 'reception', name: 'Reception', x: 700, y: 400, floor: 1, type: 'room' },
  { id: 'admission-office', name: 'Admission Office', x: 750, y: 350, floor: 1, type: 'room' },
  { id: 'zig-zag-steps', name: 'Zig Zag Steps', x: 600, y: 450, floor: 1, type: 'stairs' },
  { id: 'auditorium-1', name: 'Auditorium 1', x: 150, y: 450, floor: 1, type: 'room' },
  
  // First Floor (Floor 2) 
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
  { id: 'step-l2-f2', name: 'Step-l2', x: 200, y: 250, floor: 2, type: 'stairs' },
  { id: 'zig-zag-steps-f2', name: 'Zig Zag Steps', x: 600, y: 450, floor: 2, type: 'stairs' },
  
  // Second Floor (Floor 3)
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
  
  // Corridor waypoints for pathfinding (Ground Floor)
  { id: 'corridor-1-1', name: 'Corridor Point', x: 250, y: 200, floor: 1, type: 'corridor' },
  { id: 'corridor-1-2', name: 'Corridor Point', x: 350, y: 200, floor: 1, type: 'corridor' },
  { id: 'corridor-1-3', name: 'Corridor Point', x: 450, y: 200, floor: 1, type: 'corridor' },
  { id: 'corridor-1-4', name: 'Corridor Point', x: 550, y: 200, floor: 1, type: 'corridor' },
  { id: 'corridor-1-5', name: 'Corridor Point', x: 250, y: 300, floor: 1, type: 'corridor' },
  { id: 'corridor-1-6', name: 'Corridor Point', x: 350, y: 300, floor: 1, type: 'corridor' },
  { id: 'corridor-1-7', name: 'Corridor Point', x: 450, y: 300, floor: 1, type: 'corridor' },
  { id: 'corridor-1-8', name: 'Corridor Point', x: 550, y: 300, floor: 1, type: 'corridor' },
  { id: 'corridor-1-9', name: 'Corridor Point', x: 650, y: 400, floor: 1, type: 'corridor' },
  { id: 'corridor-1-10', name: 'Corridor Point', x: 500, y: 400, floor: 1, type: 'corridor' },
  
  // Corridor waypoints (First Floor)
  { id: 'corridor-2-1', name: 'Corridor Point', x: 250, y: 200, floor: 2, type: 'corridor' },
  { id: 'corridor-2-2', name: 'Corridor Point', x: 350, y: 250, floor: 2, type: 'corridor' },
  { id: 'corridor-2-3', name: 'Corridor Point', x: 450, y: 250, floor: 2, type: 'corridor' },
  { id: 'corridor-2-4', name: 'Corridor Point', x: 550, y: 200, floor: 2, type: 'corridor' },
  { id: 'corridor-2-5', name: 'Corridor Point', x: 300, y: 300, floor: 2, type: 'corridor' },
  { id: 'corridor-2-6', name: 'Corridor Point', x: 500, y: 300, floor: 2, type: 'corridor' },
  
  // Corridor waypoints (Second Floor)
  { id: 'corridor-3-1', name: 'Corridor Point', x: 250, y: 250, floor: 3, type: 'corridor' },
  { id: 'corridor-3-2', name: 'Corridor Point', x: 350, y: 200, floor: 3, type: 'corridor' },
  { id: 'corridor-3-3', name: 'Corridor Point', x: 450, y: 200, floor: 3, type: 'corridor' },
  { id: 'corridor-3-4', name: 'Corridor Point', x: 550, y: 250, floor: 3, type: 'corridor' },
  { id: 'corridor-3-5', name: 'Corridor Point', x: 400, y: 300, floor: 3, type: 'corridor' },
  { id: 'corridor-3-6', name: 'Corridor Point', x: 600, y: 300, floor: 3, type: 'corridor' }
];
