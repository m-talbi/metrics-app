import { configureStore } from '@reduxjs/toolkit';
import playerSlice from './player/playerSlice';
import regionsSlice from './regions/regionsSlice';

const store = configureStore({
  reducer: {
    regions: regionsSlice,
    player: playerSlice,
  },
});

export default store;
