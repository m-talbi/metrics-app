/* eslint-disable react/prop-types */
import './regionsStats.scss';

const RegionsStats = ({
  highestLeaguePoints,
  highestWins,
  highestWinrate,
  playersAbove1000LP,
  hotStreaks,
  veterans,
}) => (
  <div className="regions-stats">
    <div className="title">
      <span>All Stats</span>
    </div>
    <div className="main-stats">
      <div>
        <p className="value">{highestLeaguePoints}</p>
        <span className="key">
          Highest
          <br />
          LP
        </span>
      </div>
      <div>
        <p className="value">{highestWins}</p>
        <span className="key">
          Highest
          <br />
          Wins
        </span>
      </div>
      <div>
        <p className="value">{playersAbove1000LP}</p>
        <span className="key">
          LPs Above
          <br />
          1000
        </span>
      </div>
      <div>
        <p className="value">{hotStreaks}</p>
        <span className="key">
          Hot
          <br />
          Streaks
        </span>
      </div>
    </div>
    <div className="other-stats">
      <div>
        <p className="value">
          {highestWinrate}
          %
        </p>
        <span className="key">
          Highest
          <br />
          Winrate
        </span>
      </div>
      <div>
        <p className="value">{veterans}</p>
        <span className="key">
          Veterans
          <br />
          Count
        </span>
      </div>
    </div>
  </div>
);

export default RegionsStats;
