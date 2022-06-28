const GET_MISSIONS = 'my-app/missions/GET_MISSIONS';
const initialState = [];

const apiGetMissions = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};


const getMissions = () => async (dispatch) => {
  const response = await apiGetMissions();
  console.log(response)
  dispatch({
    type: GET_MISSIONS,
    payload: response,
  });
};

