import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux-states/rockets/RocketState';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <>
      <div className="rockets-container">
        <ul className="rockets">
          {rockets.map((rocket) => (
            <li className="rocket" key={rocket.id}>
              <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} className="rocket-images" />
              <div className="rocket-info">
                <span className="rocket-name">{rocket.rocket_name}</span>
                <span className="rocket-description">
                  {rocket.reserved}
                  {rocket.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Rockets;
