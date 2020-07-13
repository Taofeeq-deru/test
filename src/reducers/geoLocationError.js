const geoLocationErrorReducer = (state = false, action) => {
  switch (action.type) {
    case "GEO_ERROR":
      return true;
    case "NO_GEO_ERROR":
      return false;
    default:
      return state;
  }
};

export default geoLocationErrorReducer;
