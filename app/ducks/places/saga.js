import { takeLatest, call } from 'redux-saga/effects';
import types from './types';
import api from './api';

import defaultMessages from '../../constants/defaultMessages';

export function* getPlaces(action) {
  // console.log('saga', action);
  const {
    payload: { query, lat, lng, onSuccess, onFailed },
  } = action;
  try {
    const response = yield call(api.getPlaces, { query, lat, lng });
    const {
      data: { predictions },
    } = response;
    yield call(onSuccess, predictions);
  } catch (e) {
    console.log('err', e);
    let error = defaultMessages.promiseFailed;

    if (e.response) {
      const {
        response: {
          data: { error_message: errorMessage },
        },
      } = e;
      error = errorMessage;
    }
    yield call(onFailed, error);
  }
}
const placesSaga = [takeLatest(types.GET_PLACES, getPlaces)];
export default placesSaga;
