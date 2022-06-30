import React from 'react';

const MyMissions = ({ title }) => (
  <li className="joinedMission border" data-testid="myMissionsContent">
    {title}
  </li>
);

export default MyMissions;
