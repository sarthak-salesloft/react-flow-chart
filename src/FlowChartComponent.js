import React from 'react';
import { FlowChartWithState } from '@mrblenny/react-flow-chart';
import { chartData as initialChart } from './chart-data';
import { NodeInnerDefault } from './components/NodeInner/NodeInnerDefault';

export const FlowChartComponent = () => {
  return (
    <div style={{ height: '600px', width: '100%' }}>
      <FlowChartWithState
        initialValue={initialChart}
        Components={{
          NodeInner: NodeInnerDefault,
        }}
      />
    </div>
  );
};