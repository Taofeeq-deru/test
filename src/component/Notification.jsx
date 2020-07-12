import React from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const notificationReducer = useSelector((state) => state.notificationReducer);
  const searchLoaderReducer = useSelector((state) => state.searchLoaderReducer);

  if (searchLoaderReducer) {
    return (
      <>
        <div id="notification">
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </>
    );
  } else if (notificationReducer.message === "success") {
    return (
      <>
        <div id="notification" className="success">
          <p>
            City found!
            <span role="img" aria-label="emoji">
              😃
            </span>
          </p>
        </div>
      </>
    );
  } else if (notificationReducer.message === "neutral") {
    return (
      <>
        <div id="notification" className="neutral">
          <p>
            City's weather already showing
            <span role="img" aria-label="emoji">
              🤨
            </span>
          </p>
        </div>
      </>
    );
  } else if (notificationReducer.message === "error") {
    return (
      <>
        <div id="notification" className="error">
          <p>
            City not found!
            <span role="img" aria-label="emoji">
              😞
            </span>
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div id="notification"></div>
      </>
    );
  }
};

export default Notification;
