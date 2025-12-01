import * as React from 'react';

/**
 * A custom link component that renders a dotted cornflowerblue link with an arrowhead.
 */
export const DottedLink = ({
  link,
  startPos,
  endPos,
}) => {
  const { x: x1, y: y1 } = startPos;
  const { x: x2, y: y2 } = endPos;

  // Calculate the path for a smooth S-shaped curve
  const path = `M${x1},${y1} C ${x1 + 100},${y1} ${x2 - 100},${y2} ${x2},${y2}`;

  // Calculate the approximate midpoint of the curve for the text
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  return (
    <svg style={{ overflow: 'visible', position: 'absolute', left: 0, top: 0 }}>
      <defs>
        {/* Define the arrowhead marker */}
        <marker
          id="arrowhead-cornflowerblue"
          markerWidth="10"
          markerHeight="7"
          refX="8"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="cornflowerblue" />
        </marker>
      </defs>
      <path
        d={path}
        style={{
          stroke: 'cornflowerblue',
          strokeWidth: '2px',
          fill: 'none',
          strokeDasharray: '5, 5', // This creates the dotted effect
        }}
        markerEnd="url(#arrowhead-cornflowerblue)"
      />
      {/* Add a white rectangle behind the text to create a gap in the line */}
      <rect
        x={midX - 40}
        y={midY - 8}
        width="80"
        height="16"
        fill="white"
      />
      <text
        x={midX}
        y={midY}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fill: 'cornflowerblue', fontSize: '12px', fontWeight: 'bold' }}
      >
        reports to
      </text>
    </svg>
  );
};
