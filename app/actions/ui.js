export const SET_VISIBILITY = 'SET_VISIBILITY';
export const TOGGLE_DIV = 'TOGGLE_DIV';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const setVisibilityFilter = filter => (
  {
    type: 'SET_VISIBILITY',
    filter
  }
);

export const toggleDiv = targetDiv => ({
  type: 'TOGGLE_DIV',
  targetDiv
});
