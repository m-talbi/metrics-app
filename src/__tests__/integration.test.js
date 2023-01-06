import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { act, render, screen } from '@testing-library/react';
import regionsSlice, { getAllRegionPlayersThunk } from '../Redux/regions/regionsSlice';
import playerSlice, { getAccountBySummonerId } from '../Redux/player/playerSlice';
import {
  getAccountBySummonerIdAsync,
  getMatchHistoryIdsByPuuidAsync,
  getMatchHistoryInfoByMatchIdAsync,
  getRegionPlayersAsync,
} from '../Services/riotGamesAPI';
import account from './Data/accont.json';
import regionsArray from './Data/regions';
import history from './Data/matchIds';
import matches from './Data/matchesHistory';
import App from '../App';

const store = configureStore({
  reducer: {
    regions: regionsSlice,
    player: playerSlice,
  },
});

jest.mock('../Services/riotGamesAPI');

describe('App Integration', () => {
  beforeEach(() => {
    getAccountBySummonerIdAsync.mockResolvedValue(account);
    getMatchHistoryIdsByPuuidAsync.mockResolvedValue(history);

    getMatchHistoryInfoByMatchIdAsync.mockImplementation((_, id) => {
      const game = matches.find(({ metadata }) => metadata.matchId === id);
      return Promise.resolve(game);
    });

    getRegionPlayersAsync.mockImplementation((region) => {
      const regionsData = ['Europe', 'Russia', 'Brazil', 'Japan', 'Korea', 'North America']
        .map((regionName, idx) => ({ [regionName]: regionsArray[idx] }));

      const resolvedRegion = regionsData.find((regionData) => regionData[region])[region];
      return Promise.resolve(resolvedRegion);
    });

    window.scrollTo = jest.fn();
  });

  test('App should render data', async () => {
    await act(() => store.dispatch(getAllRegionPlayersThunk()));
    await act(() => render(<Provider store={store}><App /></Provider>));

    const regionsCount = screen.getByText((_, element) => element
      .classList
      .contains('regions'))
      .children
      .length;

    // Check if the App rendered 6 regions
    const { regions } = store.getState();
    expect(regionsCount).toBe(regions.regions.length);

    // Check if the App rendered statistics
    expect(screen.getByText(regions.highestLeaguePoints)).not.toBeNull();
    expect(screen.getByText(regions.highestWins)).not.toBeNull();
    expect(screen.getByText(`${regions.highestWinrate}%`)).not.toBeNull();
    expect(screen.getByText(regions.playersAbove1000LP)).not.toBeNull();
    expect(screen.getByText(regions.hotStreaks)).not.toBeNull();
    expect(screen.getByText(regions.veterans)).not.toBeNull();

    // Render europe region page
    act(() => screen.getByText('Europe').click());

    const { entries } = regions.regions[0].Europe;

    const player1 = entries[3].summonerName;
    const player2 = entries[9].summonerName;
    const player3 = entries[17].summonerName;

    // Check if the App rendered a list of players
    expect(screen.getByText(player1)).not.toBeNull();
    expect(screen.getByText(player2)).not.toBeNull();
    expect(screen.getByText(player3)).not.toBeNull();

    // Render player match histories
    const playerData = regions.regions[0].Europe.entries[0];

    await act(() => store.dispatch(getAccountBySummonerId({
      region: 'Europe',
      id: playerData.summonerId,
    })));

    act(() => screen.getByText(playerData.summonerName).click());

    // Check if the app rendered player page title
    expect(screen.getByText('Games History')).not.toBeNull();

    // Check if the app rendered games details
    const { player } = store.getState();

    expect(screen.getAllByText(player.games[0].info.gameMode).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/(Victory)|(Defeat)/).length).toBeGreaterThan(0);
    expect(screen.getByText(player.summoner.name)).not.toBeNull();
  });
});
