import './header.scss';
import { RxDotsHorizontal } from 'react-icons/rx';
import { AiOutlineWifi } from 'react-icons/ai';
import { BiBluetooth } from 'react-icons/bi';
import { BsBatteryFull, BsFillMicFill } from 'react-icons/bs';
import { MdArrowBackIos, MdSettings } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [path, setPath] = useState('All Regions');
  const [currentTime, setCurrentTime] = useState(DateTime.now().toFormat('HH:mm'));

  useEffect(() => {
    setTimeout(() => setCurrentTime(DateTime.now().toFormat('HH:mm')), 1000 * 60);
    return () => clearTimeout();
  }, []);

  useEffect(() => {
    if (location.pathname === '/') setPath('All Regions');
    else if (/region\/\w+$/.test(location.pathname)) setPath('Region');
    else setPath('Player');
  }, [location.pathname]);

  const navigateToPreviousPage = () => {
    const { path } = location.state;
    const newPath = path.slice(0, path.length - 2);
    navigate(newPath.join('/'), { state: { ...location.state, path: newPath } });
  };

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
          {
            location.pathname !== '/' && (
              <MdArrowBackIos className="navigate-icon" onClick={navigateToPreviousPage} />
            )
          }
        </div>
        <div className="center">
          <span className="time">{path}</span>
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
