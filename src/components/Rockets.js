import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { fetchRockets } from '../redux-states/rockets/RocketState';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  const rockets = useSelector((state) => state.rockets);
  return (
    <>
      <div className="rockets-container">
        <ul className="rockets">
          {rockets.map((rocket) => (
            <Rocket
              key={rocket.id}
              myRockets={rocket}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Rockets;
