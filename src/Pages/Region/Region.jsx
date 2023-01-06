import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import './region.scss';
import PlayerCard from '../../Components/PlayerCard/PlayerCard';

const Region = () => {
  const { regionName } = useParams();
  const navigate = useNavigate();
  const [highestLP, setHighestLP] = useState();
  const [ladder, setLadder] = useState();

  const region = useSelector((state) => state.regions);
  const sorted = useRef(null);
  const currentRegion = regionName.slice(0, 1).toUpperCase() + regionName.slice(1);

  useEffect(() => {
    if (region) {
      sorted.current = [
        ...region
          .regions
          .find((region) => region[currentRegion])[currentRegion].entries,
      ];

      sorted.current.sort((player1, player2) => player1.leaguePoints < player2.leaguePoints);

      setHighestLP(sorted.current[0].leaguePoints);
      setLadder(sorted.current);
    }
  }, [region]);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  const navigateToProfile = (player, profilePicId) => () => {
    navigate(`player/${player.summonerName}`, {
      state: {
        player,
        profilePicId,
        region: currentRegion,
      },
    });
  };

  const filterByName = (ev) => {
    const name = ev.target.value;
    const regex = new RegExp(name.split().join('|'), 'i');
    setLadder(() => sorted.current
      .filter((player) => regex.test(player.summonerName)));
  };

  return (
    <div className="app-region-players">
      <div className="region-header">
        <figure>
          <img
            className="region-map"
            src={`${process.env.PUBLIC_URL}/regions/${regionName}.png`}
            alt={`${regionName} region map`}
          />
        </figure>
        <div className="region-name">
          <p>{currentRegion}</p>
          <p>Highest LP</p>
          <p>{highestLP}</p>
        </div>
      </div>
      <div className="region-players">
        <div className="region-menu">
          <p className="title">All Players</p>
          <input
            className="filter-field"
            type="text"
            placeholder="Filter by name"
            onInput={filterByName}
          />
        </div>
        <div className="players-list">
          {
            ladder?.map((player) => (
              <PlayerCard
                leaguePoints={player.leaguePoints}
                key={player.summonerId}
                playerName={player.summonerName}
                imageName={player.profileId}
                navigate={navigateToProfile(player, player.profileId)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Region;
