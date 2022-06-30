import { combineReducers } from 'redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './missions/MissionState';
import rocketReducer from './rockets/RocketState';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  missions: missionsReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
