import { FC } from 'react';
import { LocationsComponent } from 'features/locations';

/**
 * HomePage
 *
 * Usage:
 * ``` <HomePage /> ```
 *
 * @returns the home page
 */
const HomePage: FC = () => (
  <div className={'container'}>
    <LocationsComponent />
  </div>
);

export default HomePage;
