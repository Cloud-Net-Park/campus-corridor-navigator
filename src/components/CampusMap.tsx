
import React, { useState, useEffect, useRef } from 'react';
import { roomLocations } from '../data/roomData';
import { findPath } from '../utils/pathfinding';
import MapMarker from './MapMarker';
import PathRenderer from './PathRenderer';

interface CampusMapProps {
  selectedFloor: number;
  startingPoint: string;
  destination: string;
  onFloorChange: (floor: number) => void;
}

const CampusMap: React.FC<CampusMapProps> = ({
  selectedFloor,
  startingPoint,
  destination,
  onFloorChange
}) => {
  const [path, setPath] = useState<any[]>([]);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);

  // Filter rooms for current floor
  const currentFloorRooms = roomLocations.filter(room => room.floor === selectedFloor);
  const visibleRooms = currentFloorRooms.filter(room => room.type === 'room' || room.type === 'stairs');

  useEffect(() => {
    console.log('CampusMap - Path calculation triggered');
    console.log('CampusMap - Starting point:', startingPoint);
    console.log('CampusMap - Destination:', destination);
    console.log('CampusMap - Selected floor:', selectedFloor);
    
    if (startingPoint && destination) {
      const startRoom = roomLocations.find(room => room.id === startingPoint);
      const destRoom = roomLocations.find(room => room.id === destination);
      
      console.log('CampusMap - Start room found:', startRoom);
      console.log('CampusMap - Destination room found:', destRoom);
      
      if (startRoom && destRoom) {
        // If both rooms are on the same floor as currently selected
        if (startRoom.floor === selectedFloor && destRoom.floor === selectedFloor) {
          console.log('CampusMap - Both rooms on same floor, calculating path');
          const foundPath = findPath(startRoom, destRoom, roomLocations);
          console.log('CampusMap - Path found:', foundPath);
          console.log('CampusMap - Path coordinates check:', foundPath.map(p => `(${p.x}, ${p.y})`));
          setPath(foundPath);
        } else if (startRoom.floor === selectedFloor) {
          // Show path from start to stairs on current floor
          const stairs = roomLocations.find(room => 
            room.floor === selectedFloor && room.type === 'stairs'
          );
          if (stairs) {
            console.log('CampusMap - Calculating path to stairs');
            const pathToStairs = findPath(startRoom, stairs, roomLocations);
            console.log('CampusMap - Path to stairs:', pathToStairs);
            setPath(pathToStairs);
          }
        } else if (destRoom.floor === selectedFloor) {
          // Show path from stairs to destination on current floor
          const stairs = roomLocations.find(room => 
            room.floor === selectedFloor && room.type === 'stairs'
          );
          if (stairs) {
            console.log('CampusMap - Calculating path from stairs');
            const pathFromStairs = findPath(stairs, destRoom, roomLocations);
            console.log('CampusMap - Path from stairs:', pathFromStairs);
            setPath(pathFromStairs);
          }
        } else {
          console.log('CampusMap - No path for current floor');
          setPath([]);
        }
      }
    } else {
      console.log('CampusMap - No start/destination selected');
      setPath([]);
    }
  }, [startingPoint, destination, selectedFloor]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const newScale = Math.min(Math.max(scale - e.deltaY * 0.001, 0.5), 3);
    setScale(newScale);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full h-full bg-gray-100 overflow-hidden">
      {/* Floor selector */}
      <div className="absolute top-4 left-4 z-20 bg-white rounded-lg shadow-lg p-2">
        <div className="flex space-x-2">
          {[1, 2, 3].map((floor) => (
            <button
              key={floor}
              onClick={() => onFloorChange(floor)}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                selectedFloor === floor
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {floor === 1 ? 'Ground' : floor === 2 ? '1st Floor' : '2nd Floor'}
            </button>
          ))}
        </div>
      </div>

      {/* Map container */}
      <div
        ref={mapRef}
        className="w-full h-full cursor-move"
        onWheel={(e) => {
          e.preventDefault();
          const newScale = Math.min(Math.max(scale - e.deltaY * 0.001, 0.5), 3);
          setScale(newScale);
        }}
        onMouseDown={(e) => {
          setIsDragging(true);
          setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
        }}
        onMouseMove={(e) => {
          if (isDragging) {
            setPosition({
              x: e.clientX - dragStart.x,
              y: e.clientY - dragStart.y
            });
          }
        }}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={(e) => {
          if (e.touches.length === 1) {
            const touch = e.touches[0];
            setIsDragging(true);
            setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
          }
        }}
        onTouchMove={(e) => {
          if (isDragging && e.touches.length === 1) {
            const touch = e.touches[0];
            setPosition({
              x: touch.clientX - dragStart.x,
              y: touch.clientY - dragStart.y
            });
          }
        }}
        onTouchEnd={() => setIsDragging(false)}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: 'center center'
          }}
        >
          {/* Campus blueprint background */}
          <div className="w-full h-full relative" style={{ zIndex: 1 }}>
            <img
              src={selectedFloor === 1 ? "/lovable-uploads/1f09435f-d7cb-4c29-ae64-c8921345cbd3.png" : "/lovable-uploads/39c49468-71ba-4ca3-91f7-908324041e06.png"}
              alt={`Campus Map - Floor ${selectedFloor}`}
              className="w-full h-full object-contain"
              style={{ maxWidth: '1200px', maxHeight: '800px' }}
              draggable={false}
            />
            
            {/* Room markers */}
            <div style={{ zIndex: 100 }}>
              {visibleRooms.map((room) => (
                <MapMarker
                  key={room.id}
                  room={room}
                  isStart={room.id === startingPoint}
                  isDestination={room.id === destination}
                  isOnPath={path.some(p => p.id === room.id)}
                />
              ))}
            </div>
            
            {/* Path overlay - MAXIMUM z-index and positioned absolutely */}
            {path.length > 0 && (
              <PathRenderer 
                path={path}
                startPoint={startingPoint}
                endPoint={destination}
              />
            )}
          </div>
        </div>
      </div>

      {/* Zoom controls */}
      <div className="absolute bottom-4 right-4 z-20 bg-white rounded-lg shadow-lg p-2">
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => setScale(Math.min(scale + 0.2, 3))}
            className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            +
          </button>
          <button
            onClick={() => setScale(Math.max(scale - 0.2, 0.5))}
            className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            -
          </button>
          <button
            onClick={() => {
              setScale(1);
              setPosition({ x: 0, y: 0 });
            }}
            className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-xs"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-20 bg-white rounded-lg shadow-lg p-4">
        <h3 className="font-semibold mb-2">Legend</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
            <span>Starting Point</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-600 rounded-full"></div>
            <span>Destination</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-1 bg-blue-600"></div>
            <span>Path</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
            <span>Stairs</span>
          </div>
        </div>
      </div>

      {/* Debug info */}
      {path.length > 0 && (
        <div className="absolute top-20 left-4 z-20 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
          Path Points: {path.length}
        </div>
      )}
    </div>
  );
};

export default CampusMap;
