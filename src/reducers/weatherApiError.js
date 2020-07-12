const weatherApiReducer = (state = false, action) => {
  switch (action.type) {
    case "OWM_ERROR":
      return true;
    case "NO_OWM_ERROR":
      return false;
    default:
      return state;
  }
};

export default weatherApiReducer;
