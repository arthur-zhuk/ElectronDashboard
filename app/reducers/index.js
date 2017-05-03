// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import ui from './ui';
import divVisibility from './divVisibility';

const rootReducer = combineReducers({
  ui,
  divVisibility,
  router,
});

export default rootReducer;
