import './mainLoading.scss';

const MainLoading = () => (
  <div className="regions-stats-loading">
    <div className="title">
      <span>All Stats</span>
    </div>
    <div className="main-stats-loading">
      <div>
        <div className="value skeleton" />
        <div className="key skeleton" />
      </div>
      <div>
        <div className="value skeleton" />
        <div className="key skeleton" />
      </div>
      <div>
        <div className="value skeleton" />
        <div className="key skeleton" />
      </div>
      <div>
        <div className="value skeleton" />
        <div className="key skeleton" />
      </div>
    </div>
    <div className="other-stats-loading">
      <div>
        <div className="value skeleton" />
        <div className="key skeleton" />
      </div>
      <div>
        <div className="value skeleton" />
        <div className="key skeleton" />
      </div>
    </div>
    <div className="regions-loading">
      {
        Array.from(Array(6).keys()).map((idx) => (
          <div role="presentation" key={idx} className="region-loading">
            <div className="region-name skeleton" />
          </div>
        ))
      }
    </div>
  </div>
);

export default MainLoading;
