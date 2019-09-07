import types from './types';

const actions = {
  getPlaces: payload => ({
    type: types.GET_PLACES,
    payload,
  }),
  addPlace: payload => ({
    type: types.ADD_PLACE,
    payload,
  }),
};
export default actions;
