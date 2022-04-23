import { Route, Routes, Router } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutUs from './pages/AboutUs';
import Navbar from './Navbar';
import Clips from './pages/Clips';
import './App.css'
import './fonts/FinkHeavy.ttf'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<MainPage />}
        />
        <Route
          path='/memories'
          element={<AboutUs />}
        />
        <Route
          path='/clips'
          element={<Clips />}
        />
      </Routes>
    </div>
  );
}

export default App;
