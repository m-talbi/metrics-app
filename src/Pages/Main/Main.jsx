import './main.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegionsStats from '../../Components/RegionsStats/RegionsStats';
import Regions from '../../Components/Regions/Regions';
import MainLoading from '../../Components/MainLoading/MainLoading';

const Main = () => {
  const regions = useSelector((state) => state.regions);
  const navigate = useNavigate();

  const navigateToRegion = (key) => () => {
    const path = `region/${key.toLowerCase().replace(' ', '-')}`;
    navigate(path, {
      state: {
        region: key,
        path: path.split('/'),
      },
    });
  };

  return (
    <div className="app-main">
      <div className="main-league-stats">
        <figure>
          <img src={`${process.env.PUBLIC_URL}/challenger2.png`} alt="League of Legends Challenger" />
        </figure>
      </div>
      {
        regions ? (
          <>
            <RegionsStats
              highestLeaguePoints={regions.highestLeaguePoints}
              highestWins={regions.highestWins}
              highestWinrate={regions.highestWinrate}
              playersAbove1000LP={regions.playersAbove1000LP}
              hotStreaks={regions.hotStreaks}
              veterans={regions.veterans}
            />
            <Regions regions={regions.regions} navigate={navigateToRegion} />
          </>
        ) : (
          <MainLoading />
        )
      }
    </div>
  );
};

export default Main;
