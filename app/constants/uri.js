const MAP_INFO_API = 'https://maps.googleapis.com/maps/api'
const MAP_INFO_KEY = process.env.MAP_BOX_API_KEY

const URI = {
  GOOGLE_MAP: {
    TEXT_SEARCH: ({ query }) =>
      `${MAP_INFO_API}/place/textsearch/json?query=${query}&key=${MAP_INFO_KEY}`,
  },
};
export default URI;
