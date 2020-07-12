const onLoadReducer = (state = true, action) => {
  switch (action.type) {
    case "OWN":
      return (state = true);
    case "OTHER":
      return (state = false);
    default:
      return state;
  }
};

export default onLoadReducer;
