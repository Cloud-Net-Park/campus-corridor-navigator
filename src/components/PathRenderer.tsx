
import React from 'react';

interface PathRendererProps {
  path: Array<{ x: number; y: number; id: string; name: string }>;
  startPoint?: string;
  endPoint?: string;
}

const PathRenderer: React.FC<PathRendererProps> = ({ path, startPoint, endPoint }) => {
  if (path.length < 2) return null;

  const renderSmoothPath = () => {
    const elements = [];

    // Create SVG path for smooth curves
    if (path.length >= 2) {
      let pathData = `M ${path[0].x} ${path[0].y}`;
      
      // Create smooth curves using quadratic bezier curves
      for (let i = 1; i < path.length - 1; i++) {
        const current = path[i];
        const next = path[i + 1];
        
        // Control point for smooth curve
        const cpX = current.x;
        const cpY = current.y;
        
        pathData += ` Q ${cpX} ${cpY} ${(current.x + next.x) / 2} ${(current.y + next.y) / 2}`;
      }
      
      // Final point
      const lastPoint = path[path.length - 1];
      pathData += ` T ${lastPoint.x} ${lastPoint.y}`;

      elements.push(
        <svg
          key="smooth-path"
          className="absolute inset-0 pointer-events-none z-10"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Outer white stroke for visibility */}
          <path
            d={pathData}
            stroke="white"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
          {/* Main blue path */}
          <path
            d={pathData}
            stroke="#2563eb"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-sm"
          />
          {/* Animated dashes for direction indication */}
          <path
            d={pathData}
            stroke="#60a5fa"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="10 10"
            className="animate-pulse"
          />
        </svg>
      );
    }

    // Render waypoints only at major turns (every 4th point to reduce clutter)
    path.forEach((point, index) => {
      if (index === 0 || index === path.length - 1) return; // Skip start and end
      if (index % 4 !== 0) return; // Only show every 4th waypoint
      
      elements.push(
        <div
          key={`waypoint-${index}`}
          className="absolute z-15 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
          }}
        >
          <div className="w-2 h-2 bg-blue-600 rounded-full border border-white shadow-sm animate-pulse"></div>
        </div>
      );
    });

    // Start point with Google Maps style
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
            <div className="relative">
              {/* Pulsing ring */}
              <div className="absolute inset-0 w-8 h-8 bg-green-400 rounded-full animate-ping opacity-30"></div>
              {/* Main marker */}
              <div className="w-8 h-8 bg-green-600 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="mt-2 px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full shadow-md">
              Start
            </div>
          </div>
        </div>
      );
    }

    // End point with Google Maps style
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
            <div className="relative">
              {/* Pulsing ring */}
              <div className="absolute inset-0 w-8 h-8 bg-red-400 rounded-full animate-ping opacity-30"></div>
              {/* Main marker */}
              <div className="w-8 h-8 bg-red-600 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="mt-2 px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full shadow-md">
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
      {renderSmoothPath()}
    </div>
  );
};

export default PathRenderer;
