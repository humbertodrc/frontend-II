import { FC } from 'react';
import { Location } from 'features/locations';
import { useNavigate } from 'react-router-dom';
import useTracking from 'features/tracking/tracking.context';

export type LocationsTableProps = {
  locations: Location[];
};

const LocationsTable: FC<LocationsTableProps> = ({ locations }: LocationsTableProps) => {
  const navigate = useNavigate();
  const { trackEvent } = useTracking();
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Dimension</th>
          <th># of Characters</th>
        </tr>
      </thead>
      <tbody>
        {locations.map((location) => (
          <tr
            key={location.id}
            onClick={() => {
              navigate(`/location/${location.id}`);
              trackEvent('LOCATION_CLICKED', 'LOCATION_TABLE');
            }}>
            <td>#{location.id}</td>
            <td>{location.name}</td>
            <td>{location.type}</td>
            <td>{location.dimension}</td>
            <td>{location.residents.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LocationsTable;
