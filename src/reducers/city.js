const cityReducer = (state = "Kaduna", action) => {
  switch (action.type) {
    case "GEOLOCATION":
      return action.payload;
    case "SEARCH":
      return action.payload;
    default:
      return state;
  }
};

export default cityReducer;
