import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Main from './Pages/Main/Main';
import './App.scss';
import Header from './Components/Header/Header';
import { getAllRegionPlayersThunk } from './Redux/regions/regionsSlice';

function App() {
  const dispatch = useDispatch();
  dispatch(getAllRegionPlayersThunk());

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
