
import React from 'react';

interface PathRendererProps {
  path: Array<{ x: number; y: number; id: string; name: string }>;
  startPoint?: string;
  endPoint?: string;
}

const PathRenderer: React.FC<PathRendererProps> = ({ path, startPoint, endPoint }) => {
  if (path.length < 2) return null;

  const renderPath = () => {
    const elements = [];

    // Render clean blue path lines
    for (let i = 0; i < path.length - 1; i++) {
      const current = path[i];
      const next = path[i + 1];

      const dx = next.x - current.x;
      const dy = next.y - current.y;
      const length = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // Clean blue path line
      elements.push(
        <div
          key={`path-${i}`}
          className="absolute bg-blue-600 z-10"
          style={{
            left: `${current.x}px`,
            top: `${current.y - 2}px`,
            width: `${length}px`,
            height: '4px',
            transformOrigin: '0 50%',
            transform: `rotate(${angle}deg)`,
            borderRadius: '2px'
          }}
        />
      );
    }

    // Render solid circular waypoints at key turns
    path.forEach((point, index) => {
      if (index === 0 || index === path.length - 1) return; // Skip start and end points
      
      elements.push(
        <div
          key={`waypoint-${index}`}
          className="absolute z-15 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
          }}
        >
          <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-md"></div>
        </div>
      );
    });

    // Start point (green circle with "Start" label)
    if (path.length > 0) {
      const startPoint = path[0];
      elements.push(
        <div
          key="start-marker"
          className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${startPoint.x}px`,
            top: `${startPoint.y}px`,
          }}
        >
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-green-600 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="mt-1 px-2 py-1 bg-green-600 text-white text-xs font-medium rounded shadow-md">
              Start
            </div>
          </div>
        </div>
      );
    }

    // End point (red circle with "End" label)
    if (path.length > 0) {
      const endPoint = path[path.length - 1];
      elements.push(
        <div
          key="end-marker"
          className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${endPoint.x}px`,
            top: `${endPoint.y}px`,
          }}
        >
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-red-600 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="mt-1 px-2 py-1 bg-red-600 text-white text-xs font-medium rounded shadow-md">
              End
            </div>
          </div>
        </div>
      );
    }

    return elements;
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {renderPath()}
    </div>
  );
};

export default PathRenderer;
