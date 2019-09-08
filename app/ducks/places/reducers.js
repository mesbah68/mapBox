import types from './types';
import utils from './utils';

const sampleDefaultState = {
  places: [],
};

const sampleReducer = (state = sampleDefaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_PLACE:
      return {
        ...state,
        places: [...state.places, payload],
      };
    case types.DELETE_PLACE:
      return {
        ...state,
        places: utils.deletePlace(state.places, payload),
      };
    default:
      return state;
  }
};

export default sampleReducer;
