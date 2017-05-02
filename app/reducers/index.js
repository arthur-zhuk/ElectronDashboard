// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import ui from './ui';

const rootReducer = combineReducers({
  counter,
  ui,
  router,
});

export default rootReducer;
