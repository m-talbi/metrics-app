import { configureStore } from '@reduxjs/toolkit';
import regionsSlice from './regions/regionsSlice';

const store = configureStore({
  reducer: {
    regions: regionsSlice,
  },
});

export default store;
