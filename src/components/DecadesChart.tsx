import React from 'preact/compat';
import { AxisOptions, Chart } from 'react-charts';
import { DecadeData, getSummedDecadesRatingSeries } from '../utils/getMovieData';

export function DecadesChart() {
  const data = getSummedDecadesRatingSeries();

  const primaryAxis = React.useMemo<AxisOptions<DecadeData>>(
    () => ({
      getValue: (datum) => datum.decade,
    }),
    [],
  );

  const secondaryAxes = React.useMemo<AxisOptions<DecadeData>[]>(
    () => [
      {
        getValue: (datum) => datum.rating,
      },
    ],
    [],
  );

  return (
    <section class="lg:mx-auto lg:w-full lg:max-w-5xl lg:px-8">
      <div className="lg:pr-4 flex justify-center">
        <div className="text-base/7 text-gray-700 lg:max-w-xl">
          <p>in progresssssss......</p>
        </div>
      </div>

      <div class="my-8" />

      <div class="min-h-80 min-w-full">
        <Chart
          options={{
            data: [
              {
                label: 'Rating',
                data: data,
              },
            ],
            primaryAxis,
            secondaryAxes,
          }}
        />
      </div>
    </section>
  );
}
