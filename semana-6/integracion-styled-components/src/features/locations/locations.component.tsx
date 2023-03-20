import { FC } from 'react';
import { LocationsTable } from 'features/locations/table';
import { useGetLocationsQuery } from 'features/locations/locations.endpoints';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Pagination } from 'features/pagination';
import { nextLocations, previousLocations } from 'features/locations/locations.slices';

const LocationsComponent: FC = () => {
  const dispatch = useAppDispatch();
  const { query: locationsQuery, page } = useAppSelector((state) => state.locations);
  const {
    data: locations,
    error,
    isLoading
  } = useGetLocationsQuery({ name: locationsQuery, page });

  if (isLoading) return <div>Loading interplanetary locations...</div>;
  if (error || !locations || locations.results.length === 0)
    return <div>Error when loading. Please try again later.</div>;

  const onPreviousPage = () => {
    dispatch(previousLocations());
  };

  const onNextPage = () => {
    dispatch(nextLocations());
  };

  return (
    <div>
      <Pagination
        pagination={locations.info}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
      />
      <LocationsTable locations={locations.results} />
      <Pagination
        pagination={locations.info}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
      />
    </div>
  );
};

export default LocationsComponent;
