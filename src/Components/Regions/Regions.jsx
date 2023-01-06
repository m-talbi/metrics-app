/* eslint-disable react/prop-types */
import './regions.scss';
import { BsArrowRightCircle } from 'react-icons/bs';

const Regions = ({ regions, navigate }) => (
  <div className="regions">
    {
        regions.map((region) => (
          Object.keys(region).map((key) => (
            <div role="presentation" key={key} className="region" onClick={navigate(key)}>
              <BsArrowRightCircle />
              <figure>
                <img
                  className="region-map"
                  src={`${process.env.PUBLIC_URL}/regions/${key.toLocaleLowerCase()}.png`}
                  alt={`${key} region map`}
                />
              </figure>
              <span className="region-name">{key}</span>
            </div>
          ))
        ))
      }
  </div>
);

export default Regions;
