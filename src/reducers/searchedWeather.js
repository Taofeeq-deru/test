const searchedWeatherReducer = (
  state = { cod: 200, temp: 25, desc: "few clouds", icon: "02n" },
  action
) => {
  switch (action.type) {
    case "SEE_SEARCHED":
      return action.payload;
    default:
      return state;
  }
};

export default searchedWeatherReducer;
