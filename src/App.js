import React from "react";
//import { useSelector, useDispatch } from "react-redux";
//import { geolocation, search } from "./actions";
import Layout from "./container/Layout";

function App() {
  //const cityReducer = useSelector((state) => state.cityReducer);
  //const dispatch = useDispatch();

  //const geoCity = "Kano";
  //const searchCity = "Delta";
  return (
    <Layout />
    /* <h5>City {cityReducer}</h5>
      <button onClick={() => dispatch(geolocation(geoCity))}>
        Geolocation
      </button> */
    /* <button onClick={() => dispatch(search(searchCity))}>Search</button> */
  );
}

export default App;
