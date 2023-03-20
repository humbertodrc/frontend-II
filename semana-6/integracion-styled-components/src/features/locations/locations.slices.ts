import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LocationsState = {
  query: string;
  page: number;
};

const initialState: LocationsState = {
  query: '',
  page: 1
};

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    searchLocations: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      state.page = 1;
    },
    previousLocations: (state) => {
      if (state.page > 1) state.page -= 1;
    },
    nextLocations: (state) => {
      state.page += 1;
    }
  }
});
export const { searchLocations, previousLocations, nextLocations } = locationsSlice.actions;

export default locationsSlice.reducer;
