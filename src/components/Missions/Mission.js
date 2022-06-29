import React from 'react';

const Mission = ({ title, description, status }) => (
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
      >
        Join Mission
      </button>
    </div>
  </li>
);

export default Mission;
