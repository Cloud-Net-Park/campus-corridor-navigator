
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

    // Create SVG path with maximum visibility
    if (path.length >= 2) {
      let pathData = `M ${path[0].x} ${path[0].y}`;
      
      // Create path through all points
      for (let i = 1; i < path.length; i++) {
        pathData += ` L ${path[i].x} ${path[i].y}`;
      }

      console.log('PathRenderer - SVG path data:', pathData);
      console.log('PathRenderer - First point:', path[0]);
      console.log('PathRenderer - Last point:', path[path.length - 1]);

      elements.push(
        <div
          key="path-container"
          className="absolute inset-0 pointer-events-none"
          style={{ 
            zIndex: 9999,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 9999
            }}
            preserveAspectRatio="none"
          >
            {/* Extra wide background stroke for visibility */}
            <path
              d={pathData}
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="20"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="blur(3px)"
            />
            
            {/* Bright contrasting path */}
            <path
              d={pathData}
              stroke="#FF0066"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="1"
            />
            
            {/* Animated overlay for movement */}
            <path
              d={pathData}
              stroke="#00FFFF"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 15"
              opacity="0.8"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;35;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>

            {/* Additional bright overlay for maximum visibility */}
            <path
              d={pathData}
              stroke="#FFFF00"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.6"
            />
          </svg>
        </div>
      );
    }

    // Enhanced waypoints
    path.forEach((point, index) => {
      if (index === 0 || index === path.length - 1) return; // Skip start and end
      if (index % 2 !== 0) return; // Show every other waypoint
      
      elements.push(
        <div
          key={`waypoint-${index}`}
          className="absolute pointer-events-none"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: 10000
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
            <div className="w-6 h-6 bg-yellow-600 rounded-full border-3 border-white shadow-xl"></div>
          </div>
        </div>
      );
    });

    return elements;
  };

  return (
    <div 
      className="absolute inset-0 pointer-events-none" 
      style={{ 
        zIndex: 9999,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    >
      {renderPath()}
    </div>
  );
};

export default PathRenderer;
