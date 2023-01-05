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

    window.scrollTo = jest.fn();
  });

  test('App should renders data coming from riot Games API', async () => {
    await act(() => store.dispatch(getAllRegionPlayersThunk()));
    await act(() => render(<Provider store={store}><App /></Provider>));

    const regionsCount = screen.getByText((_, element) => element
      .classList
      .contains('regions'))
      .children.length;

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

    const player1 = entries[0].summonerName;
    const player2 = entries[7].summonerName;
    const player3 = entries[13].summonerName;
    const player4 = entries[17].summonerName;
    const player5 = entries[18].summonerName;

    // Check if the App rendered a list of players
    expect(screen.getByText(player1)).not.toBeNull();
    expect(screen.getByText(player2)).not.toBeNull();
    expect(screen.getByText(player3)).not.toBeNull();
    expect(screen.getByText(player4)).not.toBeNull();
    expect(screen.getByText(player5)).not.toBeNull();

    // Render player match histories
    const playerData = regions.regions[0].Europe.entries[0];

    await act(() => store.dispatch(getAccountBySummonerId({
      region: 'Europe',
      id: playerData.summonerId,
    })));

    const { player } = store.getState();

    act(() => screen.getByText(playerData.summonerName).click());

    // should render page title
    expect(screen.getByText('Games History')).not.toBeNull();

    // should render match details
    expect(screen.getAllByText(player.games[0].info.gameMode).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/(Victory)|(Defeat)/).length).toBeGreaterThan(0);
    expect(screen.getByText(player.summoner.name)).not.toBeNull();
  });
});
