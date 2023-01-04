import './playerLoading.scss';

const PlayerLoading = () => (
  <div className="app-player-info-loading">
    <div className="summoner-details-loading">
      <figure>
        <div className="profile-icon skeleton" />
      </figure>
      <div className="details">
        <div className="profile-info skeleton" />
        <div className="profile-info skeleton" />
        <div className="profile-info skeleton" />
        <div className="profile-info skeleton" />
        <div className="profile-info skeleton" />
      </div>
    </div>
    <div className="player-match-history">
      <p className="title">Games History</p>
      <div className="games">
        {
          Array.from(Array(6).keys()).map((idx) => (
            <div key={idx} className="match-card-loading">
              <div className="game-type">
                <div className="game-info skeleton" />
                <div className="game-info skeleton" />
                <div className="game-info skeleton" />
                <div className="game-info skeleton" />
              </div>
              <div className="player-champion-loading">
                <div className="champion">
                  <div>
                    <div className="champion-icon-loading skeleton" />
                  </div>
                  <div className="game-stats">
                    <div className="champion-info skeleton" />
                    <div className="champion-info skeleton" />
                    <div className="champion-info skeleton" />
                  </div>
                </div>
                <div className="champion-items">
                  <ul>
                    {
                      Array.from(Array(6).keys()).map((idx) => (<li className="none" key={idx} />))
                    }
                  </ul>
                </div>
              </div>
              <div className="other-ingame-stats">
                <div className="ingame-info skeleton" />
                <div className="ingame-info skeleton" />
                <div className="ingame-info skeleton" />
                <div className="ingame-info skeleton" />
                <div className="ingame-info skeleton" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
);

export default PlayerLoading;
