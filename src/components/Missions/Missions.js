import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux-states/missions/MissionState';
import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(getMissions());
  }, []);
  return (
    <ul className="missionsLists">
      <li className="missions border">
        <h2 className="border missionContents">Missions</h2>
        <h2 className="border missionContents">Description</h2>
        <h2 className="border missionContents">Status</h2>
        <p className="border missionContents" />
      </li>
      {missions.map((mission) => (
        <Mission
          key={mission.mission_id}
          title={mission.mission_name}
          description={mission.description}
          status={mission.status}
          id={mission.mission_id}
        />
      ))}
    </ul>
  );
};

export default Missions;
