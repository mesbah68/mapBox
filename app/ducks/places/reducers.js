import types from './types';

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
    default:
      return state;
  }
};

export default sampleReducer;
