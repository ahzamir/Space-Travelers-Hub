import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './rockets/Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <>
      <div className="rockets-container">
        <ul className="rockets">
          {rockets.map((rocket) => (
            <Rocket
              key={rocket.id}
              rocket={rocket}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Rockets;
