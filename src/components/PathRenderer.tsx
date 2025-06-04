
import React from 'react';

interface PathRendererProps {
  path: Array<{ x: number; y: number; id: string; name: string }>;
  startPoint?: string;
  endPoint?: string;
}

const PathRenderer: React.FC<PathRendererProps> = ({ path, startPoint, endPoint }) => {
  console.log('PathRenderer - path length:', path.length);
  console.log('PathRenderer - path coordinates:', path.map(p => ({ x: p.x, y: p.y, id: p.id })));
  
  if (path.length < 2) {
    console.log('PathRenderer - No path to render (less than 2 points)');
    return null;
  }

  const renderPath = () => {
    const elements = [];

    // Create SVG path with high visibility
    if (path.length >= 2) {
      let pathData = `M ${path[0].x} ${path[0].y}`;
      
      // Create smooth path through all points
      for (let i = 1; i < path.length; i++) {
        pathData += ` L ${path[i].x} ${path[i].y}`;
      }

      console.log('PathRenderer - SVG path data:', pathData);

      elements.push(
        <svg
          key="main-path"
          className="absolute inset-0 pointer-events-none"
          style={{ 
            width: '100%', 
            height: '100%', 
            zIndex: 1000,
            position: 'absolute',
            top: 0,
            left: 0
          }}
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          {/* Glow effect - outer white stroke */}
          <path
            d={pathData}
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="blur(2px)"
          />
          
          {/* Main path - bright blue with high contrast */}
          <path
            d={pathData}
            stroke="#0066FF"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
            className="drop-shadow-lg"
          />
          
          {/* Animated dashes for movement indication */}
          <path
            d={pathData}
            stroke="#00AAFF"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="15 10"
            opacity="0.8"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;25;0"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      );
    }

    // Render waypoints with high visibility
    path.forEach((point, index) => {
      if (index === 0 || index === path.length - 1) return; // Skip start and end
      if (index % 3 !== 0) return; // Show fewer waypoints for cleaner look
      
      elements.push(
        <div
          key={`waypoint-${index}`}
          className="absolute pointer-events-none"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: 1001
          }}
        >
          <div className="relative">
            {/* Pulsing outer ring */}
            <div className="absolute inset-0 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-60"></div>
            {/* Solid waypoint */}
            <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
          </div>
        </div>
      );
    });

    // Enhanced start point
    if (path.length > 0) {
      const startPoint = path[0];
      elements.push(
        <div
          key="start-marker"
          className="absolute pointer-events-none"
          style={{
            left: `${startPoint.x}px`,
            top: `${startPoint.y}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: 1002
          }}
        >
          <div className="flex flex-col items-center">
            <div className="relative">
              {/* Pulsing ring animation */}
              <div className="absolute inset-0 w-10 h-10 bg-green-400 rounded-full animate-ping opacity-50"></div>
              {/* Main start marker */}
              <div className="w-10 h-10 bg-green-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="mt-2 px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full shadow-lg border border-white">
              START
            </div>
          </div>
        </div>
      );
    }

    // Enhanced end point
    if (path.length > 0) {
      const endPoint = path[path.length - 1];
      elements.push(
        <div
          key="end-marker"
          className="absolute pointer-events-none"
          style={{
            left: `${endPoint.x}px`,
            top: `${endPoint.y}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: 1002
          }}
        >
          <div className="flex flex-col items-center">
            <div className="relative">
              {/* Pulsing ring animation */}
              <div className="absolute inset-0 w-10 h-10 bg-red-400 rounded-full animate-ping opacity-50"></div>
              {/* Main end marker */}
              <div className="w-10 h-10 bg-red-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="mt-2 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full shadow-lg border border-white">
              END
            </div>
          </div>
        </div>
      );
    }

    return elements;
  };

  return (
    <div 
      className="absolute inset-0 pointer-events-none" 
      style={{ zIndex: 1000 }}
    >
      {renderPath()}
    </div>
  );
};

export default PathRenderer;
