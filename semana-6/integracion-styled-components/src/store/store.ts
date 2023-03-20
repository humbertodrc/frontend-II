import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { locationReducer, locationsApi } from 'features/locations';
import { charactersApi } from 'features/characters';
import { followingReducer } from 'features/following';

const rootReducer = combineReducers({
  [charactersApi.reducerPath]: charactersApi.reducer,
  [locationsApi.reducerPath]: locationsApi.reducer,
  //
  locations: locationReducer,
  following: followingReducer
});

export const store = configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationsApi.middleware).concat(charactersApi.middleware)
});

// Infiere los tipos del `RootState` y `AppDispatch` de la store
export type RootState = ReturnType<typeof store.getState>;
// Tipo inferido: {pokemon: PokemonState}
export type AppDispatch = typeof store.dispatch;
