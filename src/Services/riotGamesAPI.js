const API_KEY = '123';
const REGION_BASE_URL = 'api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5';
const regions = {
  Europe: 'euw1',
  Russia: 'ru',
  Brazil: 'br1',
  Japan: 'jp1',
  Korea: 'kr',
  'North America': 'na1',
};

export const getRegionPlayersAsync = async (region) => {
  const response = await fetch(`https://${regions[region]}.${REGION_BASE_URL}?api_key=${API_KEY}`);
  return response.json();
};

export const getPlayerInfoAsync = async (playerName) => {
  const response = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}`);
  return response.json();
};
