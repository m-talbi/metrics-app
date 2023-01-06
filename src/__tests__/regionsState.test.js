import { configureStore } from '@reduxjs/toolkit';
import { act } from '@testing-library/react';
import regionsSlice, { getAllRegionPlayersThunk } from '../Redux/regions/regionsSlice';
import { getRegionPlayersAsync } from '../Services/riotGamesAPI';
import regionsArray from './Data/regions';
import playerSlice from '../Redux/player/playerSlice';

const store = configureStore({
  reducer: {
    regions: regionsSlice,
    player: playerSlice,
  },
});

jest.mock('../Services/riotGamesAPI');

describe('Regions Slice', () => {
  beforeEach(() => {
    getRegionPlayersAsync.mockImplementation((region) => {
      const regionsData = ['Europe', 'Russia', 'Brazil', 'Japan', 'Korea', 'North America']
        .map((regionName, idx) => ({ [regionName]: regionsArray[idx] }));

      const resolvedRegion = regionsData.find((regionData) => regionData[region])[region];
      return Promise.resolve(resolvedRegion);
    });
  });

  test('getAccountBySummonerId should get data and pass it to state', async () => {
    await act(() => store.dispatch(getAllRegionPlayersThunk('Europe')));

    const { regions } = store.getState();

    expect(regions).not.toBeNull();
  });
});
