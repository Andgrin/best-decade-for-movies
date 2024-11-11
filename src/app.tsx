import { AllMovies } from './components/AllMoviesChart';
import { DecadesChart } from './components/DecadesChart';
import { Description } from './components/Description';
import { Header } from './components/Header';
import { YearsChart } from './components/YearsChart';

export function App() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-2xl gap-y-16 lg:max-w-5xl lg:items-start lg:gap-y-10">
        <Header />

        <Description />

        <AllMovies />

        <YearsChart />

        <DecadesChart />
      </div>
    </div>
  );
}
