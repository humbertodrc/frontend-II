import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Character from 'features/characters/characters.types';
type GetCharactersProps = {
  ids: number[];
};

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/character/'
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Character | Character[], GetCharactersProps>({
      query: ({ ids }) => `${ids.join(',')}`
    })
  })
});

export const { useGetCharactersQuery } = charactersApi;
