import { useDispatch } from 'react-redux/es/exports';
import { addReservation } from '../redux-states/rockets/RocketState';

function Rocket(props) {
  const dispatch = useDispatch();
  const list = props;
  const {
    id, name, image, description, reserved,
  } = list.myRockets;

  const reservationHandler = () => {
    dispatch(addReservation(id));
  };

  return (
    <div className="rocket">
      <img src={image} alt={name} className="rocket-images" />
      <div className="rocket-info">
        <span className="rocket-name">
          {name}
        </span>
        <div className="rocket-reserv">
          <div className="rocket-bagde" style={reserved ? null : { display: 'none' }}>Reserved</div>
          <span className="rocket-description">
            {' '}
            {description}
            {' '}
          </span>
        </div>
        { reserved ? <button type="button" className="cancel-button" onClick={reservationHandler}>Cancel Reservation</button>
          : <button type="button" className="reserve-button" onClick={reservationHandler}>Reserve Rocket</button> }
      </div>
    </div>
  );
}

export default Rocket;
