import { useDispatch } from 'react-redux/es/exports';
import { addReservation, cancelReservation } from '../redux-states/rockets/RocketState';

function Rocket({ rocket }) {
  const dispatch = useDispatch();
  const {
    id, name, image, description, reserved,
  } = rocket;

  const addHandlar = (rocketId) => {
    dispatch(addReservation(rocketId));
  };

  const cancelHandler = (rocketId) => {
    dispatch(cancelReservation(rocketId));
  };

  return (
    <div className="rocket">
      <img src={image} alt={name} className="rocket-images" />
      <div className="rocket-info">
        <span className="rocket-name">
          {name}
        </span>
        <div className="rocket-reserv">
          {reserved ? (<span className="rocket-bagde ">Reserved</span>) : (false)}
          <span className="rocket-description">
            {' '}
            {description}
            {' '}
          </span>
        </div>
        {rocket.reserved ? (
          <button onClick={() => cancelHandler(id)} type="button" className="cancel-button">Cancel Reservation</button>
        ) : (
          <button onClick={() => addHandlar(id)} type="button" className="reserve-button">Reserve Rocket</button>
        )}
      </div>
    </div>
  );
}

export default Rocket;
