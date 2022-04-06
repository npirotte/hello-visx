import { BarChart } from '@hello-visx/bar-chart';

/* eslint-disable-next-line */
export interface BarChartDemoProps {}

export function BarChartDemo(props: BarChartDemoProps) {
  return (
    <div style={{ maxWidth: '800px' }}>
      <h1>Welcome to BarChartDemo!</h1>
      <BarChart />
    </div>
  );
}

export default BarChartDemo;
