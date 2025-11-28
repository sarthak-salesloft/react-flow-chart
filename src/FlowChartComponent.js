import React from 'react';
import { FlowChartWithState, LinkDefault } from '@mrblenny/react-flow-chart';

import { chartData as initialChart } from './chart-data';
import { CustomLink } from './components/Link/CustomLink';
import { CustomNodeInner } from './components/NodeInner/CustomNodeInner';
import { CustomPort } from './components/Port/CustomPort';



export const FlowChartComponent = () => {
  return (
    <div style={{ height: '600px', width: '100%' }}>
      <FlowChartWithState
        initialValue={initialChart}
        Components={{
          NodeInner: CustomNodeInner,
          Link: LinkDefault,
          Port: CustomPort,
        }}
        config={{
          showArrowHead: true,
        }}
      />
    </div>
  );
};