const searchLoaderReducer = (state = false, action) => {
  switch (action.type) {
    case "SEARCH_LOADING":
      return true;
    case "DONE_LOADING":
      return false;
    default:
      return state;
  }
};

export default searchLoaderReducer;
