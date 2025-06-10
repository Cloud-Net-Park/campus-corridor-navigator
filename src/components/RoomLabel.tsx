
import React from 'react';

interface RoomLabelProps {
  room: {
    id: string;
    name: string;
    x: number;
    y: number;
    labelX?: number;
    labelY?: number;
    type: string;
  };
  isHighlighted?: boolean;
}

const RoomLabel: React.FC<RoomLabelProps> = ({ room, isHighlighted = false }) => {
  // Use label position if provided, otherwise use room position
  const labelX = room.labelX || room.x;
  const labelY = room.labelY || room.y - 20; // Default to above the room

  // Only show labels for rooms and stairs, not corridor waypoints
  if (room.type === 'corridor') return null;

  return (
    <div
      className="absolute pointer-events-none z-20"
      style={{
        left: `${labelX}px`,
        top: `${labelY}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div
        className={`
          px-2 py-1 rounded text-xs font-medium shadow-lg backdrop-blur-sm border
          transition-all duration-200
          ${isHighlighted 
            ? 'bg-blue-600/90 text-white border-blue-400 scale-110' 
            : 'bg-white/90 text-gray-800 border-gray-200 hover:bg-blue-50/90'
          }
        `}
      >
        {room.name}
      </div>
    </div>
  );
};

export default RoomLabel;
