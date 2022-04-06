import useSize from '@react-hook/size';
import { scaleBand, scaleLinear } from '@visx/scale';
import { FunctionComponent, useMemo, useRef } from 'react';
import { randNumber } from '@ngneat/falso';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { get } from 'lodash/fp';
import { Axis, Orientation } from '@visx/axis';

/* eslint-disable-next-line */
export interface BarChartProps {
  ratio?: number;
}

const mockData = new Array(10)
  .fill(0)
  .map((value, i) => ({ x: i + 1, y: randNumber({ max: 100 }) }));

export const BarChart: FunctionComponent<BarChartProps> = (
  props: BarChartProps
) => {
  const { ratio = 0.3 } = props;
  const containerElementRef = useRef(null);
  const [chartWidth] = useSize(containerElementRef, {
    initialWidth: 0,
    initialHeight: 0,
  });
  const paddingBottom = 40;
  const paddingLeft = 40;
  const chartHeight = chartWidth * ratio;
  const barsHeight = chartHeight - paddingBottom;
  const barsWidth = chartWidth - paddingLeft;

  // getting scales
  const xScale = useMemo(
    () =>
      scaleBand<number>({
        range: [0, barsWidth],
        round: true,
        domain: mockData.map(get('x')) as number[],
        padding: 0.4,
      }),
    [barsWidth]
  );
  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [barsHeight, 0],
        round: true,
        domain: [0, Math.max(...(mockData.map(get('y')) as number[]))],
      }),
    [barsHeight]
  );

  return (
    <div ref={containerElementRef}>
      <svg width={chartWidth} height={chartHeight}>
        <Group left={paddingLeft}>
          {mockData.map((datum) => {
            const barWidth = xScale.bandwidth();
            const barX = xScale(datum.x);
            const barHeight = yScale(datum.y);
            const barY = barsHeight - barHeight;

            return (
              <Bar
                key={datum.x}
                width={barWidth}
                x={barX}
                y={barY}
                height={barHeight}
                fill="rgba(23, 233, 217, .5)"
              />
            );
          })}
        </Group>
        <Axis
          top={chartHeight - paddingBottom}
          left={paddingLeft}
          scale={xScale}
          tickValues={mockData.map(get('x')) as number[]}
        />
        <Axis orientation={Orientation.left} scale={yScale} left={40} />
      </svg>
    </div>
  );
};

export default BarChart;
