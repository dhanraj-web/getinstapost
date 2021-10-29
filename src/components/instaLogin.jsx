import axios from "axios";
import React from "react";
import InstagramLogin from "react-instagram-login";

const InstaLogin = () => {
  const responseInstagram = (response) => {
    console.log(response);
  };

  const getUserAccessCode = (res) => {
    console.log(res);
    axios
      .post("https://api.instagram.com/oauth/access_token", {
        client_id: "605028720691089",
        client_secret: "4936eebe886d1bde895304f850e0b344",
        grant_type: "authorization_code",
        redirect_uri: "https://getinstanft.herokuapp.com/",
        code: "AQAnLu3I2AvjXYzRbbnsohYJ_A1_kE5GJqbNeTW-ftRsLPOnQm_lyUt2QJyTYZ0u_zqSyu7oEco8TN1Rn-c65gKLnxw03_QtmAUqp65cnwPLgsIDRYyGJctGRvieB5jsizP7InXuZwPEXBZn4RmfQxgSwIinqdJrLieKpLDYIa7Y95uZKYBK-EtfpK-3Az9Kq8YJ8hdAH7g9EneWC4a40lVBywIOAfpn5FjTfZe0Jympog",
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <InstagramLogin
      clientId="605028720691089"
      buttonText="Login"
      onSuccess={() => getUserAccessCode()}
      onFailure={(res) => console.log(res)}
      scope={["user_profile", "user_media"]}
      redirectUri="https://getinstanft.herokuapp.com/"
    />
  );
};

export default InstaLogin;
