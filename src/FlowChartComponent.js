import React from 'react';
import { FlowChartWithState } from '@mrblenny/react-flow-chart';

import { chartData } from './chart-data';
import { CustomNodeInner } from './components/NodeInner/CustomNodeInner';
import { CustomPort } from './components/Port/CustomPort';
import { LinkRouter } from './components/Link/LinkRouter';
import { CustomLink } from './components/Link/CustomLink';




export const FlowChartComponent = () => {
  return (
    <div style={{ height: '600px', width: '100%' }}>
      <FlowChartWithState
        initialValue={chartData}
        Components={{
          NodeInner: CustomNodeInner,
          Link: LinkRouter,
          Port: CustomPort,
        }}
        config={{
          showArrowHead: true,
        }}
      />
    </div>
  );
};