export type visibilityStateType = {
  divVisibility: boolean
};

export type actionType = {
  type: string
};

export default (state = null, action: actionType) => {
  switch (action.type) {
    case 'SET_VISIBILITY':
      return action.divVisibility;
    default:
      return state;
  }
};
