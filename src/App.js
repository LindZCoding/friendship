import { Route, Routes, Router } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutUs from './pages/AboutUs';
import Navbar from './Navbar';

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
          path='/about'
          element={<AboutUs />}
        />
      </Routes>
    </div>
  );
}

export default App;
