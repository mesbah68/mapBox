import types from './types';

const actions = {
  getPlaces: payload => ({
    type: types.GET_PLACES,
    payload,
  }),
};
export default actions;
