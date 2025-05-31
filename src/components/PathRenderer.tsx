
import React from 'react';
import { ArrowRight } from 'lucide-react';

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

      // Line segment
      elements.push(
        <div
          key={`line-${i}`}
          className="absolute bg-blue-600 z-5"
          style={{
            left: `${current.x}px`,
            top: `${current.y - 2}px`,
            width: `${length}px`,
            height: '4px',
            transformOrigin: '0 50%',
            transform: `rotate(${angle}deg)`,
            opacity: 0.8
          }}
        />
      );

      // Direction arrow at midpoint
      if (length > 20) {
        const midX = current.x + dx * 0.5;
        const midY = current.y + dy * 0.5;

        elements.push(
          <div
            key={`arrow-${i}`}
            className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${midX}px`,
              top: `${midY}px`,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
            }}
          >
            <div className="bg-blue-700 text-white rounded-full p-1 shadow-lg">
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        );
      }
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
