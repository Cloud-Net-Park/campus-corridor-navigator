
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
  const [isHovered, setIsHovered] = useState(false);

  const getMarkerColor = () => {
    if (isStart) return 'bg-green-600 border-green-800 shadow-green-400/50';
    if (isDestination) return 'bg-red-600 border-red-800 shadow-red-400/50';
    if (room.type === 'stairs') return 'bg-orange-600 border-orange-800 shadow-orange-400/50';
    if (isOnPath) return 'bg-blue-600 border-blue-800 shadow-blue-400/50';
    return 'bg-gray-600 border-gray-800 shadow-gray-400/50';
  };

  const getMarkerIcon = () => {
    if (isStart) return <MapPin className="w-3 h-3 text-white" />;
    if (isDestination) return <Navigation className="w-3 h-3 text-white" />;
    if (room.type === 'stairs') return <ArrowUp className="w-3 h-3 text-white" />;
    return <div className="w-2 h-2 bg-white rounded-full" />;
  };

  const getMarkerSize = () => {
    if (isStart || isDestination) return 'w-8 h-8';
    if (room.type === 'stairs') return 'w-7 h-7';
    return 'w-6 h-6';
  };

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
      style={{
        left: `${room.x}px`,
        top: `${room.y}px`,
      }}
      onMouseEnter={() => {
        setShowTooltip(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setShowTooltip(false);
        setIsHovered(false);
      }}
    >
      {/* Marker */}
      <div
        className={`
          ${getMarkerSize()} rounded-full border-2 flex items-center justify-center
          shadow-lg cursor-pointer transition-all duration-300 
          ${getMarkerColor()}
          ${isHovered ? 'scale-125 shadow-xl' : 'hover:scale-110'}
          ${(isStart || isDestination) ? 'animate-pulse' : ''}
        `}
      >
        {getMarkerIcon()}
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
          <div className="bg-black/90 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl backdrop-blur-sm border border-white/10">
            <div className="font-medium">{room.name}</div>
            {room.type === 'stairs' && (
              <div className="text-xs text-blue-300">Stairway</div>
            )}
            {isStart && (
              <div className="text-xs text-green-300">Starting Point</div>
            )}
            {isDestination && (
              <div className="text-xs text-red-300">Destination</div>
            )}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
          </div>
        </div>
      )}

      {/* Ripple effect for important markers */}
      {(isStart || isDestination) && (
        <>
          <div
            className={`
              absolute inset-0 rounded-full animate-ping
              ${isStart ? 'bg-green-400' : 'bg-red-400'}
              opacity-20
            `}
          />
          <div
            className={`
              absolute inset-0 rounded-full animate-pulse
              ${isStart ? 'bg-green-400' : 'bg-red-400'}
              opacity-30
            `}
          />
        </>
      )}

      {/* Glow effect on hover */}
      {isHovered && (
        <div
          className={`
            absolute inset-0 rounded-full animate-pulse
            ${isStart ? 'bg-green-400' : isDestination ? 'bg-red-400' : 'bg-blue-400'}
            opacity-40 scale-150
          `}
        />
      )}
    </div>
  );
};

export default MapMarker;
