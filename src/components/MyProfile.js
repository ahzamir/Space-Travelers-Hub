import React from 'react';
import { useSelector } from 'react-redux';
import MyMissions from './Missions/MyMissions';
import MyRockets from './rockets/MyRockets';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => (mission.status === true));
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="myProfile">
      <ul className="joinedMissions">
        <h2>
          My Missions
        </h2>
        {joinedMissions.map((mission) => (
          <MyMissions
            key={mission.mission_id}
            title={mission.mission_name}
          />
        ))}
      </ul>
      <ul>
        <h2>
          My Rockets
        </h2>
        {reservedRockets.map((rocket) => (
          <MyRockets
            key={rocket.id}
            name={rocket.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default MyProfile;
