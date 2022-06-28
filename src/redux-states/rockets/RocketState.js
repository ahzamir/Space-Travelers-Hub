const GET_ROCKETS = 'Space-Travelers-Hub/rockets/GET_ROCKETS';
export const getRockets = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

const url = 'https://api.spacexdata.com/v3/rockets';
export const fetchRockets = () => async (dispatch) => {
  const response = await fetch(url);
  const results = await response.json();
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
    default:
      return state;
  }
};

export default rocketReducer;
