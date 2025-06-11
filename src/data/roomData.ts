
export interface RoomLocation {
  id: string;
  name: string;
  x: number;
  y: number;
  floor: number;
  type: 'room' | 'corridor' | 'stairs' | 'entrance';
  labelX?: number;
  labelY?: number;
}

export const roomLocations: RoomLocation[] = [
  // Ground Floor (Floor 1) - Rooms positioned according to blueprint
  { id: 'auditorium-2', name: 'Auditorium 2', x: 479, y: 232, floor: 1, type: 'room', labelX: 479, labelY: 212 },
  { id: 'lab-2', name: 'Lab 2', x: 608, y: 220, floor: 1, type: 'room', labelX: 608, labelY: 200 },
  { id: 'lab-1', name: 'Lab 1', x: 655, y: 220, floor: 1, type: 'room', labelX: 655, labelY: 200 },
  { id: 'server-room', name: 'Server Room', x: 1185, y: 160, floor: 1, type: 'room', labelX: 1185, labelY: 140 },
  { id: 'step-l2', name: 'Step-l2', x: 1017, y: 433, floor: 1, type: 'stairs', labelX: 1017, labelY: 413 },
  { id: 'boys-restroom', name: 'Boys RestRoom', x: 1195, y: 508, floor: 1, type: 'room', labelX: 1195, labelY: 488 },
  { id: 'girls-restroom', name: 'Girls RestRoom', x: 1195, y: 408, floor: 1, type: 'room', labelX: 1195, labelY: 388 },
  { id: 'vip-pantry', name: 'VIP Pantry', x: 797, y: 220, floor: 1, type: 'room', labelX: 797, labelY: 200 },
  { id: 'vip-waiting', name: 'VIP Waiting', x: 847, y: 220, floor: 1, type: 'room', labelX: 847, labelY: 200 },
  { id: 'pantry', name: 'Pantry', x: 897, y: 220, floor: 1, type: 'room', labelX: 897, labelY: 200 },
  { id: 'vip-dining', name: 'VIP Dining', x: 947, y: 220, floor: 1, type: 'room', labelX: 947, labelY: 200 },
  { id: 'chairman-office', name: 'Chairman Office', x: 894, y: 184, floor: 1, type: 'room', labelX: 894, labelY: 164 },
  { id: 'principle-office', name: 'Principle Office', x: 1014, y: 184, floor: 1, type: 'room', labelX: 1014, labelY: 164 },
  { id: 'oat', name: 'OAT', x: 592, y: 363, floor: 1, type: 'room', labelX: 592, labelY: 343 },
  { id: 'aids', name: 'AIDS', x: 652, y: 400, floor: 1, type: 'room', labelX: 652, labelY: 380 },
  { id: 'green-room-1', name: 'Green Room 1', x: 712, y: 400, floor: 1, type: 'room', labelX: 712, labelY: 380 },
  { id: 'green-room-2', name: 'Green Room 2', x: 772, y: 400, floor: 1, type: 'room', labelX: 772, labelY: 380 },
  { id: 'admin-office', name: 'Admin Office', x: 1037, y: 280, floor: 1, type: 'room', labelX: 1037, labelY: 260 },
  { id: 'reception', name: 'Reception', x: 1171, y: 484, floor: 1, type: 'room', labelX: 1171, labelY: 464 },
  { id: 'master-board-room', name: 'Master Board Room', x: 797, y: 245, floor: 1, type: 'room', labelX: 797, labelY: 225 },
  { id: 'oak-leaf', name: 'OAK leaf', x: 947, y: 340, floor: 1, type: 'room', labelX: 947, labelY: 320 },
  { id: 'exam-hall', name: 'Exam Hall', x: 712, y: 340, floor: 1, type: 'room', labelX: 712, labelY: 320 },
  { id: 'meeting-room', name: 'Meeting Room', x: 772, y: 278, floor: 1, type: 'room', labelX: 772, labelY: 258 },
  { id: 'transport-office', name: 'Transport office', x: 957, y: 363, floor: 1, type: 'room', labelX: 957, labelY: 343 },
  { id: 'zig-zag-steps', name: 'Zig Zag Steps', x: 882, y: 540, floor: 1, type: 'stairs', labelX: 882, labelY: 520 },
  { id: 'admission-office', name: 'Admission Office', x: 1195, y: 450, floor: 1, type: 'room', labelX: 1195, labelY: 430 },
  { id: 'falcon-hall', name: 'Falcon Hall', x: 592, y: 400, floor: 1, type: 'room', labelX: 592, labelY: 380 },
  { id: 'harmony', name: 'Harmony', x: 652, y: 484, floor: 1, type: 'room', labelX: 652, labelY: 464 },
  { id: 'cdc', name: 'CDC', x: 1037, y: 219, floor: 1, type: 'room', labelX: 1037, labelY: 199 },
  { id: 'symphony', name: 'Symphony', x: 1097, y: 280, floor: 1, type: 'room', labelX: 1097, labelY: 260 },
  { id: 'waiting-hall', name: 'Waiting Hall', x: 977, y: 400, floor: 1, type: 'room', labelX: 977, labelY: 380 },
  { id: 'step-l5', name: 'Step-l5', x: 714, y: 245, floor: 1, type: 'stairs', labelX: 714, labelY: 225 },
  { id: 'pt-room', name: 'PT Room', x: 1197, y: 340, floor: 1, type: 'room', labelX: 1197, labelY: 320 },
  { id: 'store-room', name: 'Store Room', x: 1257, y: 400, floor: 1, type: 'room', labelX: 1257, labelY: 380 },
  
  // Main horizontal corridor following the black walkway line (y ≈ 350)
  { id: 'corridor-main-01', name: 'Main Corridor', x: 550, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-02', name: 'Main Corridor', x: 580, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-03', name: 'Main Corridor', x: 610, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-04', name: 'Main Corridor', x: 640, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-05', name: 'Main Corridor', x: 670, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-06', name: 'Main Corridor', x: 700, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-07', name: 'Main Corridor', x: 730, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-08', name: 'Main Corridor', x: 760, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-09', name: 'Main Corridor', x: 790, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-10', name: 'Main Corridor', x: 820, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-11', name: 'Main Corridor', x: 850, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-12', name: 'Main Corridor', x: 880, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-13', name: 'Main Corridor', x: 910, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-14', name: 'Main Corridor', x: 940, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-15', name: 'Main Corridor', x: 970, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-16', name: 'Main Corridor', x: 1000, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-17', name: 'Main Corridor', x: 1030, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-18', name: 'Main Corridor', x: 1060, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-19', name: 'Main Corridor', x: 1090, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-20', name: 'Main Corridor', x: 1120, y: 350, floor: 1, type: 'corridor' },
  { id: 'corridor-main-21', name: 'Main Corridor', x: 1150, y: 350, floor: 1, type: 'corridor' },
  
  // Vertical corridors connecting rooms to main corridor
  // Left side vertical connections
  { id: 'corridor-left-1', name: 'Left Corridor', x: 550, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-left-2', name: 'Left Corridor', x: 550, y: 290, floor: 1, type: 'corridor' },
  { id: 'corridor-left-3', name: 'Left Corridor', x: 550, y: 260, floor: 1, type: 'corridor' },
  
  // Lab area connections
  { id: 'corridor-lab-1', name: 'Lab Corridor', x: 630, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-lab-2', name: 'Lab Corridor', x: 630, y: 290, floor: 1, type: 'corridor' },
  { id: 'corridor-lab-3', name: 'Lab Corridor', x: 630, y: 260, floor: 1, type: 'corridor' },
  { id: 'corridor-lab-4', name: 'Lab Corridor', x: 630, y: 240, floor:1, type: 'corridor' },
  
  // Upper area horizontal corridor
  { id: 'corridor-upper-1', name: 'Upper Corridor', x: 714, y: 265, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-2', name: 'Upper Corridor', x: 744, y: 265, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-3', name: 'Upper Corridor', x: 774, y: 265, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-4', name: 'Upper Corridor', x: 804, y: 265, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-5', name: 'Upper Corridor', x: 834, y: 265, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-6', name: 'Upper Corridor', x: 864, y: 265, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-7', name: 'Upper Corridor', x: 894, y: 265, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-8', name: 'Upper Corridor', x: 924, y: 265, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-9', name: 'Upper Corridor', x: 954, y: 265, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-10', name: 'Upper Corridor', x: 984, y: 265, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-11', name: 'Upper Corridor', x: 1014, y: 265, floor: 1, type: 'corridor' },
  { id: 'corridor-upper-12', name: 'Upper Corridor', x: 1044, y: 265, floor: 1, type: 'corridor' },
  
  // Vertical connections from upper corridor
  { id: 'corridor-vert-1', name: 'Vertical Corridor', x: 714, y: 295, floor: 1, type: 'corridor' },
  { id: 'corridor-vert-2', name: 'Vertical Corridor', x: 714, y: 325, floor: 1, type: 'corridor' },
  { id: 'corridor-vert-3', name: 'Vertical Corridor', x: 774, y: 295, floor: 1, type: 'corridor' },
  { id: 'corridor-vert-4', name: 'Vertical Corridor', x: 774, y: 325, floor: 1, type: 'corridor' },
  { id: 'corridor-vert-5', name: 'Vertical Corridor', x: 894, y: 295, floor: 1, type: 'corridor' },
  { id: 'corridor-vert-6', name: 'Vertical Corridor', x: 894, y: 325, floor: 1, type: 'corridor' },
  { id: 'corridor-vert-7', name: 'Vertical Corridor', x: 1014, y: 295, floor: 1, type: 'corridor' },
  { id: 'corridor-vert-8', name: 'Vertical Corridor', x: 1014, y: 325, floor: 1, type: 'corridor' },
  
  // Right side connections
  { id: 'corridor-right-1', name: 'Right Corridor', x: 1150, y: 320, floor: 1, type: 'corridor' },
  { id: 'corridor-right-2', name: 'Right Corridor', x: 1150, y: 290, floor: 1, type: 'corridor' },
  { id: 'corridor-right-3', name: 'Right Corridor', x: 1150, y: 260, floor: 1, type: 'corridor' },
  { id: 'corridor-right-4', name: 'Right Corridor', x: 1150, y: 380, floor: 1, type: 'corridor' },
  { id: 'corridor-right-5', name: 'Right Corridor', x: 1150, y: 410, floor: 1, type: 'corridor' },
  { id: 'corridor-right-6', name: 'Right Corridor', x: 1150, y: 440, floor: 1, type: 'corridor' },
  { id: 'corridor-right-7', name: 'Right Corridor', x: 1150, y: 470, floor: 1, type: 'corridor' },
  
  // Stairs connections
  { id: 'corridor-stairs-1', name: 'Stairs Corridor', x: 1017, y: 380, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs-2', name: 'Stairs Corridor', x: 1017, y: 410, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs-3', name: 'Stairs Corridor', x: 882, y: 380, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs-4', name: 'Stairs Corridor', x: 882, y: 410, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs-5', name: 'Stairs Corridor', x: 882, y: 440, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs-6', name: 'Stairs Corridor', x: 882, y: 470, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs-7', name: 'Stairs Corridor', x: 882, y: 500, floor: 1, type: 'corridor' },
  { id: 'corridor-stairs-8', name: 'Stairs Corridor', x: 882, y: 520, floor: 1, type: 'corridor' }
];
