// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import ui from './ui';
import divVisibility from './divVisibility';

const rootReducer = combineReducers({
  counter,
  ui,
  divVisibility,
  router,
});

export default rootReducer;
