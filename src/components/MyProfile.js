import React from 'react';
import { useSelector } from 'react-redux';
import MyMissions from './Missions/MyMissions';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => (mission.status === true));
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
      </ul>
    </div>
  );
};

export default MyProfile;
