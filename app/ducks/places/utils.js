/* eslint-disable */
const utils = {
  deletePlace: (places, selectedPlace) => {
    const filteredPlaces = places.filter(
      place =>
        place.lat !== selectedPlace.lat && place.lng !== selectedPlace.lng,
    );
    return [...filteredPlaces];
  },
};

export default utils;
