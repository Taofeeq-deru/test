const geoCityReducer = (state = "Kaduna", action) => {
  switch (action.type) {
    case "GEOLOCATION":
      return action.payload;
    default:
      return state;
  }
};

export default geoCityReducer;
