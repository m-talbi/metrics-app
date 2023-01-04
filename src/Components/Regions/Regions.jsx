/* eslint-disable react/prop-types */
import './regions.scss';
import { BsArrowRightCircle } from 'react-icons/bs';
import brazilMap from '../../Assets/brazil.png';
import russiaMap from '../../Assets/russia.png';
import europeMap from '../../Assets/europe.png';
import koreaMap from '../../Assets/korea.png';
import japanMap from '../../Assets/japan.png';
import northAmericaMap from '../../Assets/north america.png';

const Regions = ({ regions, navigate }) => {
  const regionMaps = {
    Brazil: brazilMap,
    Russia: russiaMap,
    Europe: europeMap,
    Korea: koreaMap,
    Japan: japanMap,
    'North America': northAmericaMap,
  };

  return (
    <div className="regions">
      {
        regions.map((region) => (
          Object.keys(region).map((key) => (
            <div role="presentation" key={key} className="region" onClick={navigate(key)}>
              <BsArrowRightCircle />
              <figure>
                <img className="region-map" src={regionMaps[key]} alt={`${key} region map`} />
              </figure>
              <span className="region-name">{key}</span>
            </div>
          ))
        ))
      }
    </div>
  );
};

export default Regions;
