/* eslint-disable react/prop-types */
import { BsArrowRightCircle } from 'react-icons/bs';
import './playerCard.scss';

const PlayerCard = ({
  playerName,
  leaguePoints,
  imageName,
  navigate,
}) => (
  <div role="presentation" className="card" onClick={navigate}>
    <BsArrowRightCircle />
    <figure>
      <img src={`${process.env.PUBLIC_URL}/profile/${imageName}.png`} alt="Profile icon" />
    </figure>
    <div className="player-stats">
      <p>{playerName}</p>
      <p>
        {leaguePoints}
        {' '}
        LP
      </p>
    </div>
  </div>
);

export default PlayerCard;
