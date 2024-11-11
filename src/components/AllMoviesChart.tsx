import React from 'preact/compat';
import { AxisOptions, Chart } from 'react-charts';
import { getSimplifiedMoviesSeries, MovieSeries } from '../utils/getMovieData';

export function AllMovies() {
  const data = getSimplifiedMoviesSeries();

  const primaryAxis = React.useMemo<AxisOptions<MovieSeries>>(
    () => ({
      getValue: (datum) => datum.year as unknown as Date,
    }),
    [],
  );

  const secondaryAxes = React.useMemo<AxisOptions<MovieSeries>[]>(
    () => [
      {
        getValue: (datum) => datum.rating,
        elementType: 'bubble',
      },
    ],
    [],
  );

  return (
    <section class="lg:mx-auto lg:w-full lg:max-w-5xl lg:px-8">
      <div className="lg:pr-4 flex justify-center">
        <div className="text-base/7 text-gray-700 lg:max-w-xl w-xl">
          <p>
            Let's draw a chart with all 250 movies. And also we will highlight the dots depending on the decade in which
            the film was release.
          </p>
        </div>
      </div>

      <div class="my-6" />

      <div class="min-h-80 min-w-full">
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            tooltip: {
              render: (props) => {
                const { focusedDatum } = props;
                const label = focusedDatum?.originalDatum.label;
                const rating = focusedDatum?.originalDatum.rating;
                const year = focusedDatum?.originalDatum.year;
                return (
                  <div class="bg-white p-4 rounded-lg shadow-lg">
                    <p class="text-lg font-bold">{label}</p>
                    <span>Year: {year}</span>&nbsp;
                    <span>Rating: {rating}</span>
                  </div>
                );
              },
            },
          }}
        />
      </div>
      <div class="my-6" />

      <div className="lg:pr-4 flex justify-center">
        <div className="text-base/7 text-gray-700 lg:max-w-xl w-xl">
          <p>We can already see that there are years with a higher density of points on the graph.</p>
        </div>
      </div>
    </section>
  );
}
