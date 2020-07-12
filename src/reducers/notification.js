const notificationReducer = (
  state = { loaded: false, message: "none" },
  action
) => {
  switch (action.type) {
    case "LOADING":
      return { loaded: false, message: "none" };
    case "LOADED":
      return { loaded: true, message: "none" };
    case "LOADED_AND_SUCCESS":
      return { loaded: true, message: "success" };
    case "LOADED_AND_ERROR":
      return { loaded: true, message: "error" };
    case "LOADED_AND_NEUTRAL":
      return { loaded: true, message: "neutral" };
    default:
      return state;
  }
};

export default notificationReducer;
