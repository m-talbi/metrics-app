const API_KEY = 'RGAPI-ed5f7031-5881-4109-af91-34244d9acf9c';
const RANKED_5V5_ENDPOINT = 'api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5';
const SUMMONER_ACCOUNT_ENDPOINT = 'api.riotgames.com/lol/summoner/v4/summoners';
const MATCH_HISTORY_IDS_ENDPOINT = 'api.riotgames.com/lol/match/v5/matches/by-puuid';
const MATCH_INFO_ENDPOINT = 'api.riotgames.com/lol/match/v5/matches';

const regions = {
  Europe: 'euw1',
  Russia: 'ru',
  Brazil: 'br1',
  Japan: 'jp1',
  Korea: 'kr',
  'North America': 'na1',
};

const regions2 = {
  Europe: 'europe',
  Russia: 'europe',
  Brazil: 'americas',
  Japan: 'asia',
  Korea: 'asia',
  'North America': 'americas',
};

export const getRegionPlayersAsync = async (region) => {
  const response = await fetch(`https://${regions[region]}.${RANKED_5V5_ENDPOINT}?api_key=${API_KEY}`, {
    headers: {
      'Cache-Control': 'max-age=604800',
    },
  });
  return response.json();
};

export const getAccountBySummonerIdAsync = async (region, summonerId) => {
  const response = await fetch(`https://${regions[region]}.${SUMMONER_ACCOUNT_ENDPOINT}/${summonerId}?api_key=${API_KEY}`);
  return response.json();
};

export const getMatchHistoryIdsByPuuidAsync = async (region, puuid) => {
  const response = await fetch(`https://${regions2[region]}.${MATCH_HISTORY_IDS_ENDPOINT}/${puuid}/ids?start=0&count=6&api_key=${API_KEY}`);
  return response.json();
};

export const getMatchHistoryInfoByMatchIdAsync = async (region, matchId) => {
  const response = await fetch(`https://${regions2[region]}.${MATCH_INFO_ENDPOINT}/${matchId}?api_key=${API_KEY}`);
  return response.json();
};
