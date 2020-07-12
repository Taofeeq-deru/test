import React from "react";
import "../styles/style.css";
import "../styles/responsive.css";
import Geolocation from "../component/Geolocation";
import SearchForm from "../component/SearchForm";
import Notification from "../component/Notification";

const Layout = () => {
  return (
    <div id="container">
      <div id="header">
        <h1>What's the weather like?</h1>
      </div>
      <div id="form">
        <SearchForm />
        <Notification />
      </div>

      <div id="box">
        <Geolocation />
      </div>
    </div>
  );
};

export default Layout;
