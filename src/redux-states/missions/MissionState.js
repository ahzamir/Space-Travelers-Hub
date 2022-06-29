const GET_MISSIONS = 'my-app/missions/GET_MISSIONS';
const JOIN_MISSION = 'my-app/missions/JOIN_MISSION';
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
  dispatch({
    type: GET_MISSIONS,
    payload: response,
  });
};

const joinMissions = (id) => (
  {
    type: JOIN_MISSION,
    payload: { id },
  }
);

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      const arrMissions = action.payload.map((object) => ({ ...object, status: false }));
      return arrMissions;
    case JOIN_MISSION:
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload.id) return mission;
        return { ...mission, status: true };
      });
      console.log(newState);
      return newState;
    default: return state;
  }
};

export default missionsReducer;
export { getMissions, joinMissions };
