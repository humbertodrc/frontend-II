import { FC } from 'react';
import { useGetLocationQuery } from 'features/locations/locations.endpoints';
import { LocationDetailComponent } from 'features/locations/detail/index';

export type LocationDetailContainerProps = {
  id: number;
};

const LocationDetailContainer: FC<LocationDetailContainerProps> = ({
  id
}: LocationDetailContainerProps) => {
  const { data: location, error, isLoading } = useGetLocationQuery({ id });

  if (error) return <div>Error when loading. Please try again later.</div>;

  return <LocationDetailComponent location={location} loading={isLoading} />;
};

export default LocationDetailContainer;
