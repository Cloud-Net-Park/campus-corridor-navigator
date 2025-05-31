
import React, { useState } from 'react';
import { MapPin, Navigation, ArrowUp } from 'lucide-react';

interface MapMarkerProps {
  room: {
    id: string;
    name: string;
    x: number;
    y: number;
    type: string;
  };
  isStart?: boolean;
  isDestination?: boolean;
  isOnPath?: boolean;
}

const MapMarker: React.FC<MapMarkerProps> = ({ 
  room, 
  isStart = false, 
  isDestination = false, 
  isOnPath = false 
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const getMarkerColor = () => {
    if (isStart) return 'bg-green-600 border-green-800';
    if (isDestination) return 'bg-red-600 border-red-800';
    if (room.type === 'stairs') return 'bg-orange-600 border-orange-800';
    if (isOnPath) return 'bg-blue-600 border-blue-800';
    return 'bg-gray-600 border-gray-800';
  };

  const getMarkerIcon = () => {
    if (isStart) return <MapPin className="w-3 h-3 text-white" />;
    if (isDestination) return <Navigation className="w-3 h-3 text-white" />;
    if (room.type === 'stairs') return <ArrowUp className="w-3 h-3 text-white" />;
    return <div className="w-2 h-2 bg-white rounded-full" />;
  };

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
      style={{
        left: `${room.x}px`,
        top: `${room.y}px`,
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Marker */}
      <div
        className={`
          w-6 h-6 rounded-full border-2 flex items-center justify-center
          shadow-lg cursor-pointer transition-all duration-200 hover:scale-110
          ${getMarkerColor()}
        `}
      >
        {getMarkerIcon()}
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
            {room.name}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
          </div>
        </div>
      )}

      {/* Pulse animation for start and destination */}
      {(isStart || isDestination) && (
        <div
          className={`
            absolute inset-0 rounded-full animate-pulse
            ${isStart ? 'bg-green-400' : 'bg-red-400'}
            opacity-30
          `}
        />
      )}
    </div>
  );
};

export default MapMarker;
