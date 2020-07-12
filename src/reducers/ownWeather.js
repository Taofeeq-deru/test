const ownWeatherReducer = (
  state = { cod: 200, temp: 25, desc: "few clouds", icon: "02n" },
  action
) => {
  switch (action.type) {
    case "SEE_OWN":
      return action.payload;
    default:
      return state;
  }
};

export default ownWeatherReducer;
