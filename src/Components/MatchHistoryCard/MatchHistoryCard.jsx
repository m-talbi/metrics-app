/* eslint-disable react/prop-types */
import './matchHistoryCard.scss';
import { DateTime } from 'luxon';

const MatchHistoryCard = ({ game, summoner }) => {
  const inGamePlayerStats = game
    .info
    .participants
    .find(({ puuid }) => puuid === summoner.puuid);

  return (
    <div className="match-card">
      <div className="game-type">
        <p className="type">{game.info.gameMode}</p>
        <p className="last-played">{DateTime.fromMillis(game.info.gameEndTimestamp).toFormat('yyyy/MM/dd')}</p>
        <p className={`game-result ${inGamePlayerStats.win ? 'blue' : 'red'}`}>{inGamePlayerStats.win ? 'Victory' : 'Defeat'}</p>
        <p className="game-time">
          {DateTime.fromSeconds(game.info.gameDuration).toFormat('mm')}
          {' '}
          Minutes
        </p>
      </div>
      <div className="player-champion">
        <div className="champion">
          <div>
            <p className="champion-level">{inGamePlayerStats.champLevel}</p>
            <img className="champion-logo" src={`${process.env.PUBLIC_URL}/champions/${inGamePlayerStats.championName}.png`} alt="" />
          </div>
          <div className="champion-info">
            <p>{inGamePlayerStats.championName}</p>
            <p>
              {inGamePlayerStats.kills}
              /
              {inGamePlayerStats.deaths}
              /
              {inGamePlayerStats.assists}
            </p>
            <p>
              { inGamePlayerStats.challenges.kda.toFixed(2) }
              :1 KDA
            </p>
          </div>
        </div>
        <div className="champion-items">
          <ul>
            {
              Array.from(Array(6).keys()).map((idx) => (
                inGamePlayerStats[`item${idx}`] === 0
                  ? (
                    <li className="none" key={idx} />
                  ) : (
                    <li key={idx}>
                      <img className="champion-item" src={`${process.env.PUBLIC_URL}/item/${inGamePlayerStats[`item${idx}`]}.png`} alt="" />
                    </li>
                  )))
            }
          </ul>
        </div>
      </div>
      <div className="other-ingame-stats">
        <p>
          P/Kill
          {' '}
          {inGamePlayerStats.challenges?.killParticipation?.toFixed(2)}
        </p>
        <p>
          Gold:
          <br />
          {inGamePlayerStats.goldEarned}
        </p>
        <p>
          Damage:
          <br />
          {inGamePlayerStats.totalDamageDealtToChampions}
        </p>
      </div>
    </div>
  );
};

export default MatchHistoryCard;
