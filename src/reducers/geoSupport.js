const geoSupportReducer = (state = "true", action) => {
  switch (action.type) {
    case "GEOLOCATION_SUPPORTED":
      return true;
    case "GEOLOCATION_NOT_SUPPORTED":
      return false;
    default:
      return true;
  }
};

export default geoSupportReducer;
