import axios from 'axios';

const GET_ROCKETS = 'Space-Travelers-Hub/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'space-travellers-hub/redux/rocket/RESERVE_TICKET';
const CANCEL_RESERVATION_ACTION = 'space-travellers-hub/redux/rocket/CANCEL_RESERVATION';

export const getRockets = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

export const addReservation = (rocketId) => ({
  type: RESERVE_ROCKET,
  rocketId,
});

export const cancelReservation = (rocketId) => ({
  type: CANCEL_RESERVATION_ACTION,
  rocketId,
});

const url = 'https://api.spacexdata.com/v3/rockets';
export const fetchRockets = () => async (dispatch) => {
  const response = await axios.get(url);
  const results = await response.data;
  const rockets = [];
  results.forEach((rocket) => {
    rockets.push({
      id: rocket.id,
      name: rocket.rocket_name,
      image: rocket.flickr_images[0],
      description: rocket.description,
      reserved: false,
    });
  });
  dispatch(getRockets(rockets));
};

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.rocketId) {
          return rocket;
        }

        return { ...rocket, reserved: true };
      });

      return newState;
    }
    case CANCEL_RESERVATION_ACTION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.rocketId) {
          return rocket;
        }

        return { ...rocket, reserved: false };
      });

      return newState;
    }
    default:
      return state;
  }
};

export default rocketReducer;
