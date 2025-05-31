
import React from 'react';
import { ArrowRight, Navigation } from 'lucide-react';

interface PathRendererProps {
  path: Array<{ x: number; y: number; id: string }>;
  startPoint?: string;
  endPoint?: string;
}

const PathRenderer: React.FC<PathRendererProps> = ({ path }) => {
  if (path.length < 2) return null;

  const renderPath = () => {
    const elements = [];

    for (let i = 0; i < path.length - 1; i++) {
      const current = path[i];
      const next = path[i + 1];

      // Calculate line properties
      const dx = next.x - current.x;
      const dy = next.y - current.y;
      const length = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // Animated line segment
      elements.push(
        <div
          key={`line-${i}`}
          className="absolute bg-gradient-to-r from-blue-500 to-blue-600 z-5 animate-fade-in shadow-lg"
          style={{
            left: `${current.x}px`,
            top: `${current.y - 3}px`,
            width: `${length}px`,
            height: '6px',
            transformOrigin: '0 50%',
            transform: `rotate(${angle}deg)`,
            opacity: 0.9,
            borderRadius: '3px',
            animationDelay: `${i * 0.1}s`
          }}
        />
      );

      // Glowing underline for better visibility
      elements.push(
        <div
          key={`glow-${i}`}
          className="absolute bg-blue-400 z-4 animate-pulse"
          style={{
            left: `${current.x}px`,
            top: `${current.y - 4}px`,
            width: `${length}px`,
            height: '8px',
            transformOrigin: '0 50%',
            transform: `rotate(${angle}deg)`,
            opacity: 0.3,
            borderRadius: '4px',
            filter: 'blur(2px)'
          }}
        />
      );

      // Direction arrow at midpoint with animation
      if (length > 25) {
        const midX = current.x + dx * 0.5;
        const midY = current.y + dy * 0.5;

        elements.push(
          <div
            key={`arrow-${i}`}
            className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 animate-fade-in hover:scale-110 transition-transform duration-300"
            style={{
              left: `${midX}px`,
              top: `${midY}px`,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              animationDelay: `${i * 0.15}s`
            }}
          >
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-full p-2 shadow-xl border-2 border-blue-300 hover:shadow-2xl transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        );
      }
    }

    // Add special markers for start and end points
    if (path.length > 0) {
      // Start point marker
      const startPoint = path[0];
      elements.push(
        <div
          key="start-marker"
          className="absolute z-15 transform -translate-x-1/2 -translate-y-1/2 animate-bounce"
          style={{
            left: `${startPoint.x}px`,
            top: `${startPoint.y}px`,
          }}
        >
          <div className="bg-green-500 text-white rounded-full p-2 shadow-xl border-2 border-white">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      );

      // End point marker
      const endPoint = path[path.length - 1];
      elements.push(
        <div
          key="end-marker"
          className="absolute z-15 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
          style={{
            left: `${endPoint.x}px`,
            top: `${endPoint.y}px`,
          }}
        >
          <div className="bg-red-500 text-white rounded-full p-2 shadow-xl border-2 border-white">
            <Navigation className="w-4 h-4" />
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
