import * as actionTypes from './actionTypes';

export const scrollToNewSection = (selectedKey, animated) => {
  return {
    type: actionTypes.NEW_SECTION_HAD_SCROLLED,
    selectedKey,
    animated
  };
};
