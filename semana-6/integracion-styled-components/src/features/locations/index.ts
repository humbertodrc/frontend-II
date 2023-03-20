import LocationsComponent from './locations.component';
import { locationsApi } from './locations.endpoints';
import locationReducer, { LocationsState } from './locations.slices';
import { LocationsResult, Location } from './locations.types';

export { LocationsComponent, locationReducer, locationsApi };
export type { LocationsResult, Location, LocationsState };
