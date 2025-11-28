import { FlowChartWithState } from '@mrblenny/react-flow-chart';
import { chartData as initialChart } from './chart-data';

export const FlowChartComponent = () => {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <FlowChartWithState
        initialValue={initialChart}
        // Callbacks can be added here for interactivity
        // e.g., onDragNode, onLinkComplete, etc.
      />
    </div>
  );
};