import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Main from './Pages/Main/Main';
import './App.scss';
import Header from './Components/Header/Header';
import { getAllRegionPlayersThunk } from './Redux/regions/regionsSlice';
import Region from './Pages/Region/Region';
import Player from './Pages/Player/Player';

function App() {
  const dispatch = useDispatch();
  dispatch(getAllRegionPlayersThunk());

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/region/:regionName" element={<Region />} />
          <Route path="/region/:regionName/player/:id" element={<Player />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
