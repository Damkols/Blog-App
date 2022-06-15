import React, { useEffect } from "react";
import "./HomePage.css";
import { gapi } from "gapi-script";
import { useSelector, useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../../features/userSlice";

const HomePage = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "257704578841-n39unr4eiol6n91ngkostagscn12897q.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  // const onSuccess = (response) => {
  //   console.log("SUCCESS", response);
  // };
  // const onFailure = (response) => {
  //   console.log("FAILED", response);
  // };
  // const onLogoutSuccess = () => {
  //   console.log("SUCCESS LOG OUT");
  // };

  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="homepage" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn ? (
        <div className="login-message">
          <h2>📕</h2>
          <h1>A Readers favourite place!</h1>
          <p>
            We provide high quality online resource for reading blogs. Just sign
            up and start reading some quality blogs
          </p>
          <GoogleLogin
            clientId="257704578841-n39unr4eiol6n91ngkostagscn12897q.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login-button"
              >
                This is my custom Google button
              </button>
            )}
            buttonText="Login"
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
