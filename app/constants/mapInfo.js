const mapBoxToken = process.env.MAP_BOX_API_KEY;

const MAP_INFO = {
  token: mapBoxToken,
  // api: 'https://maps.googleapis.com/maps/api',
  viewport: {
    latitude: 35.6967329,
    longitude: 51.2097323,
    zoom: 11,
  },
};

export default MAP_INFO;
