import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './region.scss';
import PlayerCard from '../../Components/PlayerCard/PlayerCard';
import brazilMap from '../../Assets/brazil.png';
import russiaMap from '../../Assets/russia.png';
import europeMap from '../../Assets/europe.png';
import koreaMap from '../../Assets/korea.png';
import japanMap from '../../Assets/japan.png';
import northAmericaMap from '../../Assets/north america.png';

const Region = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [topPlayer, setTopPlayer] = useState();
  const [ladder, setLadder] = useState();

  const region = useSelector((state) => state.regions)
    ?.regions
    ?.find((region) => region[location.state.region])[location.state.region];

  useEffect(() => {
    if (region) {
      const sorted = [...region.entries];
      sorted.sort((player1, player2) => player1.leaguePoints < player2.leaguePoints);

      setTopPlayer(sorted[0]);
      setLadder(sorted);
    }
  }, [region]);

  const navigateToProfile = (player, imageName) => () => {
    const path = `player/${player.summonerName}`;
    navigate(path, {
      state: {
        ...location.state,
        player,
        imageName,
        path: [...location.state.path, ...path.split('/')],
      },
    });
  };

  const regionMaps = {
    Brazil: brazilMap,
    Russia: russiaMap,
    Europe: europeMap,
    Korea: koreaMap,
    Japan: japanMap,
    'North America': northAmericaMap,
  };

  return (
    <div className="app-region-players">
      <div className="region-header">
        <figure>
          <img
            className="region-map"
            src={regionMaps[location.state.region]}
            alt={`${location.state.region} region map`}
          />
        </figure>
        <div className="region-name">
          <p>{location.state.region}</p>
          <p>Highest LP</p>
          <p>{topPlayer?.leaguePoints}</p>
        </div>
      </div>
      <div className="region-players">
        <p className="title">All Players</p>
        <div className="players-list">
          {
            ladder?.map((player, idx) => (
              <PlayerCard
                leaguePoints={player.leaguePoints}
                key={player.summonerId}
                playerName={player.summonerName}
                imageName={idx}
                navigate={navigateToProfile(player, idx)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Region;
