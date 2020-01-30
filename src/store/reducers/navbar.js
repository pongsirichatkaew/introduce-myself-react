import * as actionTypes from '../actions/actionTypes';
const initialState = {
  selectedKey: '1',
  animated: { main: true, about: false, skills: false, portfolio: false }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_SECTION_HAD_SCROLLED:
      const newAnimated = { ...state.animated };
      if (action.selectedKey === '1') {
        newAnimated.main = true;
      } else if (action.selectedKey === '2') {
        newAnimated.about = true;
      } else if (action.selectedKey === '3') {
        newAnimated.skills = true;
      } else if (action.selectedKey === '4') {
        newAnimated.portfolio = true;
      }
      const newSelectedKey = {
        ...state,
        selectedKey: action.selectedKey,
        animated: newAnimated
      };
      return newSelectedKey;
    default:
      return state;
  }
};

export default reducer;
