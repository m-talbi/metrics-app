import { useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearPlayer, getAccountBySummonerId } from '../../Redux/player/playerSlice';
import './player.scss';
import MatchHistoryCard from '../../Components/MatchHistoryCard/MatchHistoryCard';
import PlayerLoading from '../../Components/PlayerLoading/PlayerLoading';

const Player = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);

  useEffect(() => {
    dispatch(getAccountBySummonerId({
      region: location.state.region,
      id: location.state.player.summonerId,
    }));

    return () => dispatch(clearPlayer());
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="app-player-info">
      {
        player ? (
          <>
            <div className="summoner-details">
              <figure>
                <img
                  src={`${process.env.PUBLIC_URL}/profile/${location.state.profilePicId}.png`}
                  alt="Summoner icon"
                />
              </figure>
              <div className="details">
                <p>{player?.summoner?.name}</p>
                <p>
                  Summoner Level:
                  {' '}
                  {player?.summoner?.summonerLevel}
                </p>
                <p>
                  League Points:
                  {' '}
                  {location.state.player.leaguePoints}
                </p>
                <p>
                  Total Wins:
                  {' '}
                  {location.state.player.wins}
                </p>
                <p>
                  Total Losses:
                  {' '}
                  {location.state.player.losses}
                </p>
              </div>
            </div>
            <div className="player-match-history">
              <p className="title">Games History</p>
              <div className="games">
                {
                  player?.games && player.games.map((game) => (
                    <MatchHistoryCard
                      key={game.metadata.matchId}
                      game={game}
                      summoner={player.summoner}
                    />
                  ))
                }
              </div>
            </div>
          </>
        ) : (
          <>
            <PlayerLoading />
          </>
        )
      }
    </div>
  );
};

export default Player;
