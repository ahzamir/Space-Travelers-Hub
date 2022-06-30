import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMissions } from './redux-states/missions/MissionState';
import Navbar from './components/navBar';
import Rockets from './components/rockets/Rockets';
import Missions from './components/Missions/Missions';
import MyProfile from './components/MyProfile';
import { fetchRockets } from './redux-states/rockets/RocketState';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
    dispatch(fetchRockets());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="myprofile" element={<MyProfile />} />
      </Routes>
    </>
  );
};

export default App;
