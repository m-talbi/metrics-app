import './header.scss';
import { RxDotsHorizontal } from 'react-icons/rx';
import { AiOutlineWifi } from 'react-icons/ai';
import { BiBluetooth } from 'react-icons/bi';
import { BsBatteryFull, BsFillMicFill } from 'react-icons/bs';
import { MdArrowBackIos, MdSettings } from 'react-icons/md';
import { useEffect, useState } from 'react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date(Date.now())
    .toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric' })
    .match(/((\d)|(\d\d)):\d\d\s\w\w/)[0]);

  useEffect(() => {
    setTimeout(() => setCurrentTime(new Date(Date.now())
      .toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric' })
      .match(/((\d)|(\d\d)):\d\d\s\w\w/)[0]), 1000 * 60);
    return () => clearTimeout();
  }, []);

  return (
    <div className="header">
      <div className="mobile-options">
        <div className="left-side">
          <RxDotsHorizontal />
          <span>BELL</span>
          <AiOutlineWifi />
        </div>
        <div className="center">
          <span className="time">{currentTime}</span>
        </div>
        <div className="right-side">
          <BiBluetooth />
          <span>100%</span>
          <BsBatteryFull />
        </div>
      </div>
      <div className="app-options">
        <div className="left-side">
          <MdArrowBackIos />
        </div>
        <div className="center">
          <span className="time">Leaderboard</span>
        </div>
        <div className="right-side">
          <BsFillMicFill />
          <MdSettings />
        </div>
      </div>
    </div>
  );
};

export default Header;
