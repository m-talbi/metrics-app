import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getAccountBySummonerIdAsync,
  getMatchHistoryIdsByPuuidAsync,
  getMatchHistoryInfoByMatchIdAsync,
} from '../../Services/riotGamesAPI';

const getAccountBySummonerIdType = 'leagueLeaderboard/players/GET_PLAYER';

export const getAccountBySummonerId = createAsyncThunk(getAccountBySummonerIdType,
  async ({ region, id }) => {
    const summoner = await getAccountBySummonerIdAsync(region, id);
    const matchIds = await getMatchHistoryIdsByPuuidAsync(region, summoner.puuid);
    const games = await Promise.all(matchIds
      .map((id) => getMatchHistoryInfoByMatchIdAsync(region, id)
        .then((data) => data)));

    return { summoner, games };
  });

const playerSlice = createSlice({
  name: 'player',
  initialState: null,
  reducers: {
    clearPlayer: () => null,
  },
  extraReducers: (builder) => {
    builder.addCase(getAccountBySummonerId.fulfilled, (_, action) => action.payload);
  },
});

export default playerSlice.reducer;
export const { clearPlayer } = playerSlice.actions;
