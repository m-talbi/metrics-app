import { configureStore } from '@reduxjs/toolkit';
import { act } from '@testing-library/react';
import regionsSlice, { getAllRegionPlayersThunk } from '../Redux/regions/regionsSlice';
import { getRegionPlayersAsync } from '../Services/riotGamesAPI';
import regionsArray from './Data/regions';
import playerSlice from '../Redux/player/playerSlice';

let store = configureStore({
  reducer: {
    regions: regionsSlice,
    player: playerSlice,
  },
});

jest.mock('../Services/riotGamesAPI');

describe('Regions Slice', () => {
  beforeEach(() => {
    store = configureStore({
      reducer: {
        regions: regionsSlice,
        player: playerSlice,
      },
    });

    getRegionPlayersAsync.mockImplementation((region) => {
      const regionsData = {
        Europe: regionsArray[0],
        Russia: regionsArray[1],
        Brazil: regionsArray[2],
        Japan: regionsArray[3],
        Korea: regionsArray[4],
        'North America': regionsArray[5],
      };

      return Promise.resolve(regionsData[region]);
    });
  });

  test('getAccountBySummonerId should get data and pass it to state', async () => {
    await act(() => store.dispatch(getAllRegionPlayersThunk('Europe')));

    const { regions } = store.getState();

    expect(regions).not.toBeNull();
  });
});
