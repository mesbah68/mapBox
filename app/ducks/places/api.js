import axios from 'axios';
import axiosConfig from '../../utils/axiosConfig';

import URI from '../../constants/uri';

const api = {
  getPlaces({ query, lat, lng }) {
    const url = URI.SMAPP_SEARCH_LOCATION({
      query,
      lat,
      lng,
    });
    const config = axiosConfig({ url, method: 'GET' });
    return axios(config);
  },
};
export default api;
