import data from '../data/data.json';

export type SimplifiedMovieData = {
  name: string;
  ratingValue: number;
  year: number;
};

export type MovieSeries = {
  label: string;
  rating: number;
  year: number;
};

export type SimpleSeries = {
  label: string;
  data: MovieSeries[];
};

const decades = [
  { label: '1900s', from: 1900, to: 1909 },
  { label: '1910s', from: 1910, to: 1919 },
  { label: '1920s', from: 1920, to: 1929 },
  { label: '1930s', from: 1930, to: 1939 },
  { label: '1940s', from: 1940, to: 1949 },
  { label: '1950s', from: 1950, to: 1959 },
  { label: '1960s', from: 1960, to: 1969 },
  { label: '1970s', from: 1970, to: 1979 },
  { label: '1980s', from: 1980, to: 1989 },
  { label: '1990s', from: 1990, to: 1999 },
  { label: '2000s', from: 2000, to: 2009 },
  { label: '2010s', from: 2010, to: 2019 },
  { label: '2020s', from: 2020, to: 2029 },
];

export function getSimplifiedMovieData(): SimplifiedMovieData[] {
  return data.map((movie) => ({
    name: movie.name,
    ratingValue: movie.aggregateRating.ratingValue,
    year: new Date(movie.datePublished).getFullYear(),
  }));
}

export function getSimplifiedMoviesSeries(): SimpleSeries[] {
  const simplifiedMovies = getSimplifiedMovieData();

  return simplifiedMovies.reduce((acc, movie) => {
    for (const decade of decades) {
      if (movie.year >= decade.from && movie.year <= decade.to) {
        const index = acc.findIndex((i) => i.label === decade.label);

        if (index !== -1) {
          acc[index].data.push({
            label: movie.name,
            rating: movie.ratingValue,
            year: movie.year,
          });
        } else {
          acc.push({
            label: decade.label,
            data: [
              {
                label: movie.name,
                rating: movie.ratingValue,
                year: movie.year,
              },
            ],
          });
        }
      }
    }

    return acc;
  }, [] as SimpleSeries[]);
}

export type YearData = {
  year: string;
  rating: number;
};

export function getSummedYearsRatingSeries(): YearData[] {
  const simplifiedMovies = getSimplifiedMovieData();

  const ratingByYear: Record<string, number> = {};
  simplifiedMovies.forEach((movie) => {
    if (ratingByYear[movie.year.toString()]) {
      ratingByYear[movie.year.toString()] += movie.ratingValue;
    } else {
      ratingByYear[movie.year.toString()] = movie.ratingValue;
    }
  });

  return Object.keys(ratingByYear).map((key) => {
    return {
      year: key,
      rating: ratingByYear[key],
    };
  });
}

export type DecadeData = {
  decade: string;
  rating: number;
};

export function getSummedDecadesRatingSeries(): DecadeData[] {
  const simplifiedMovies = getSimplifiedMovieData();

  const ratingByDecade: Record<string, number> = {};

  simplifiedMovies.forEach((movie) => {
    for (const decade of decades) {
      if (movie.year >= decade.from && movie.year <= decade.to) {
        if (ratingByDecade[decade.from.toString()]) {
          ratingByDecade[decade.from.toString()] += movie.ratingValue;
        } else {
          ratingByDecade[decade.from.toString()] = movie.ratingValue;
        }
      }
    }
  });

  return Object.keys(ratingByDecade).map((key) => {
    return {
    'decade': `${key}s`,
    'rating': ratingByDecade[key]
  }});
}
