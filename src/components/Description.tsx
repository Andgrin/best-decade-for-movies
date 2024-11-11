export function Description() {
  return (
    <section className="lg:mx-auto lg:w-full lg:max-w-5xl lg:px-8">
      <div class="lg:pr-4 flex justify-center">
        <div className="max-w-xl text-base/7 text-gray-700 flex justify-center">
          <p>
            The is to take a list of best movies, using IMDb TOP-250 rating, and sum up the ratings for each decade.
            Initial plan was to use data from IMDb directly, but it's pricy and I couldn't find a free API. Fortunately
            there is GitHub project{' '}
            <a
              href="https://github.com/movie-monk-b0t/top250"
              target="_blank"
              class="text-blue-700 underline hover:no-underline"
            >
              top250
            </a>{' '}
            that provides such data as JSON file. So let's see what was the best decade for movies 🙃.
          </p>
        </div>
      </div>
    </section>
  );
}
