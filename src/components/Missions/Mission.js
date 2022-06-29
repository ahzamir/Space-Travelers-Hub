import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMissions, leaveMissions } from '../../redux-states/missions/MissionState';

const Mission = ({
  title, description, status, id,
}) => {
  const dispatch = useDispatch();
  return (
    <li className="missions border">
      <h2 className="border missionContents">
        {title}
      </h2>
      <p className="border missionContents missionDescription">
        {description}
      </p>
      <p className="border missionContents">
        {status ? 'Active Member' : 'Not a Member'}
      </p>
      <div className="border missionContents missionButtons">
        <button
          type="button"
          className="missionButton"
          onClick={() => { status ? dispatch(leaveMissions(id)) : dispatch(joinMissions(id)); }}
        >
          {status ? 'Leave Mission' : 'Join Mission'}
        </button>
      </div>
    </li>
  );
};

export default Mission;
