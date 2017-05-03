// import { VisibilityFilters } from '../actions/ui';
// const { SHOW_ALL } = VisibilityFilters;
/*
const initialState = {
  visibiltyFilter: VisibilityFilters.SHOW_ALL
};
*/
export type uiStateType = {
  uiId: string
};

export type actionType = {
  type: string
};

export default function visibilityFilter(state = '', action: actionType) {
  switch (action.type) {
    case 'TOGGLE_DIV':
      return action.targetDiv;
    default:
      return state;
  }
}
