import MapInfo from '../constants/mapInfo'

const URI = {
  SMAPP_SEARCH_LOCATION: ({ query, lat, lng }) =>
      `${MapInfo.baseUrl(
        'search',
      )}/autocomplete/json/?input=${query}&location=${lat},${lng}`,
};
export default URI;
