import React from 'preact/compat';
import { AxisOptions, Chart } from 'react-charts';
import { YearData, getSummedYearsRatingSeries } from '../utils/getMovieData';

export function YearsChart() {
  const data = getSummedYearsRatingSeries();

  const primaryAxis = React.useMemo<AxisOptions<YearData>>(
    () => ({
      getValue: (datum) => datum.year,
    }),
    [],
  );

  const secondaryAxes = React.useMemo<AxisOptions<YearData>[]>(
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
          <p>Now let's sum movies rating for each year.</p>
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

      <div className="lg:pr-4 flex justify-center">
        <div className="text-base/7 text-gray-700 lg:max-w-xl">
          <p>
            On this chart we can see more clear picture. There are also would be interesting to take a on top 3 years:
            2003, 1994 and 1999.
          </p>
        </div>
      </div>
    </section>
  );
}
