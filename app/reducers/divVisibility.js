export type visibilityStateType = {
  isSelected: boolean
};

export type actionType = {
  type: string
};

export default function visibilityFilter(state = null, action: actionType) {
  switch (action.type) {
    case 'SET_VISIBILITY':
      return action.isSelected;
    default:
      return state;
  }
}
