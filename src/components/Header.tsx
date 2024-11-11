export function Header() {
  return (
    <div className="lg:mx-auto lg:w-full lg:max-w-5xl lg:px-8">
      <div className="lg:pr-4 flex justify-center">
        <div className="lg:max-w-lg">
          <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Best decade for movies
          </h1>
          <p className="mt-6 text-xl/8 text-gray-700">
            That is a fun project to find out what decade was the best for movies using IMDb TOP-250 rating.
          </p>
        </div>
      </div>
    </div>
  );
}
