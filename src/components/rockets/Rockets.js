import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <>
      <div className="rockets-container" data-testid="rocketid">
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
