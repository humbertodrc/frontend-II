import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Location, LocationsResult } from 'features/locations';

type GetLocationsProps = {
  name: string;
  page: number;
};

type GetLocationProps = {
  id: number;
};

export const locationsApi = createApi({
  reducerPath: 'locationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/location/'
  }),
  endpoints: (builder) => ({
    getLocations: builder.query<LocationsResult, GetLocationsProps>({
      query: ({ name, page }) => `?name=${name}&page=${page}`
    }),
    getLocation: builder.query<Location, GetLocationProps>({
      query: ({ id }) => `${id}`
    })
  })
});

export const { useGetLocationsQuery, useGetLocationQuery } = locationsApi;
