const geoCityReducer = (state = "Lagos", action) => {
  switch (action.type) {
    case "GEOLOCATION":
      return action.payload;
    default:
      return state;
  }
};

export default geoCityReducer;
