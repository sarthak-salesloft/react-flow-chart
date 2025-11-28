import * as React from 'react';

/**
 * A custom link component that renders a green link with an arrowhead.
 */
export const CustomLink = ({
  link,
  startPos,
  endPos,
}) => {
  const { x: x1, y: y1 } = startPos;
  const { x: x2, y: y2 } = endPos;

  // Calculate the path for a smooth S-shaped curve
  const path = `M${x1},${y1} C ${x1 + 100},${y1} ${x2 - 100},${y2} ${x2},${y2}`;

  return (
    <svg style={{ overflow: 'visible', position: 'absolute', left: 0, top: 0 }}>
      <defs>
        {/* Define the arrowhead marker */}
        <marker
          id="arrowhead-green"
          markerWidth="10"
          markerHeight="10"
          refX="8"
          refY="3.5"
          orient="vertical"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="green" />
        </marker>
      </defs>
      <path
        d={path}
        style={{ stroke: 'green', strokeWidth: '2px', fill: 'none' }}
        markerEnd="url(#arrowhead-green)"
      />
    </svg>
  );
};