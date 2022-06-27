import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Rockets />} />
      <Route path="missions" element={<Missions />} />
      <Route path="myprofile" element={<MyProfile />} />
    </Routes>
  </>
);

export default App;
