import { configureStore } from '@reduxjs/toolkit';
import { act } from '@testing-library/react';
import playerSlice, { getAccountBySummonerId } from '../Redux/player/playerSlice';
import regionsSlice from '../Redux/regions/regionsSlice';
import account from './Data/accont.json';
import {
  getAccountBySummonerIdAsync,
  getMatchHistoryIdsByPuuidAsync,
  getMatchHistoryInfoByMatchIdAsync,
} from '../Services/riotGamesAPI';
import history from './Data/matchIds';
import matches from './Data/matchesHistory';

let store = configureStore({
  reducer: {
    regions: regionsSlice,
    player: playerSlice,
  },
});

jest.mock('../Services/riotGamesAPI');

describe('Player Slice', () => {
  beforeEach(() => {
    store = configureStore({
      reducer: {
        regions: regionsSlice,
        player: playerSlice,
      },
    });

    getAccountBySummonerIdAsync.mockResolvedValue(account);
    getMatchHistoryIdsByPuuidAsync.mockResolvedValue(history);
    getMatchHistoryInfoByMatchIdAsync.mockImplementation((_, id) => {
      const game = matches.find(({ metadata }) => metadata.matchId === id);
      return Promise.resolve(game);
    });
  });

  test('getAccountBySummonerId should get data and pass it to state', async () => {
    await act(() => store.dispatch(getAccountBySummonerId({
      region: 'Europe',
      id: 'F_q4XQyd4pvJGmtzA1c6VD87jZQosRhnKShnS1yJz0eqRezYvZmo3PgfQg',
    })));

    const { player } = store.getState();

    expect(player).not.toBeNull();
  });
});
