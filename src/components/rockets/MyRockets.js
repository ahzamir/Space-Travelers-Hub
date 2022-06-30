import React from 'react';

const MyRockets = ({ name }) => (
  <li className="joinedMission border" data-testid="rocketid">
    {name}
  </li>
);

export default MyRockets;
