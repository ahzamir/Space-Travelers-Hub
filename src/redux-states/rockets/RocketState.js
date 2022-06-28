import axios from 'axios';

const GET_ROCKETS = 'Space-Travelers-Hub/rockets/GET_ROCKETS';
const BOOKING_ROCKET = 'Space-Travelers-Hub/rockets/BOOKING_ROCKET';

export const getRockets = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

export const bookingRocket = (payload) => ({
  type: BOOKING_ROCKET,
  payload,
});

const url = 'https://api.spacexdata.com/v3/rockets';
export const fetchRockets = () => async (dispatch) => {
  const response = await axios.get(url);
  const results = await response.data;
  const rockets = [];
  Object.entries(results).forEach((result) => {
    rockets.push({ ...result[1] });
  });
  return dispatch(getRockets(rockets));
};

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case BOOKING_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
    default:
      return state;
  }
};

export default rocketReducer;
