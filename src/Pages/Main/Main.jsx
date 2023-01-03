import './main.scss';
import { useSelector } from 'react-redux';
import challengerImg from '../../Assets/challenger2.png';
import RegionsStats from '../../Components/RegionsStats/RegionsStats';
import Regions from '../../Components/Regions/Regions';

const Main = () => {
  const regions = useSelector((state) => state.regions);

  return (
    <div className="main">
      <div className="league-stats">
        <figure>
          <img src={challengerImg} alt="League of Legends Challenger" />
        </figure>
      </div>
      <RegionsStats
        highestLeaguePoints={regions.highestLeaguePoints}
        highestWins={regions.highestWins}
        highestWinrate={regions.highestWinrate}
        playersAbove1000LP={regions.playersAbove1000LP}
        hotStreaks={regions.hotStreaks}
        veterans={regions.veterans}
      />
      <Regions regions={regions.regions ?? []} />
    </div>
  );
};

export default Main;
