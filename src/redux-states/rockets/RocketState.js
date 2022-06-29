import axios from 'axios';

const GET_ROCKETS = 'Space-Travelers-Hub/rockets/GET_ROCKETS';
const ADD_ROCKETS_RESERVATION = 'Space-Travelers-Hub/rockets/ADD_ROCKETS_RESERVATION';

export const getRockets = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

export const addReservation = (payload) => ({
  type: ADD_ROCKETS_RESERVATION,
  payload,
});

const url = 'https://api.spacexdata.com/v3/rockets';
export const fetchRockets = () => async (dispatch) => {
  try {
    const response = await axios.get(url);
    const results = await response.data;
    const rockets = [];
    results.forEach((rocket) => {
      rockets.push({
        id: rocket.id,
        image: rocket.flickr_images[0],
        name: rocket.rocket_name,
        description: rocket.description,
        reserved: false,
      });
    });
    dispatch(getRockets(rockets));
  } catch (error) {
    <h2>Error</h2>;
  }
};

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case ADD_ROCKETS_RESERVATION: {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) { return rocket; }
        const newState = { ...rocket, reserved: !rocket.reserved };
        return newState;
      });
    }
    default:
      return state;
  }
};

export default rocketReducer;
