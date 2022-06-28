import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/RocketState';

const rootReducer = combineReducers({
  rockets: rocketReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
