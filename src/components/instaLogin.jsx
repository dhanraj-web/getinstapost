import React from "react";
import InstagramLogin from "react-instagram-login";

const InstaLogin = () => {
  const responseInstagram = (response) => {
    console.log(response);
  };
  return (
    <InstagramLogin
      clientId="605028720691089"
      buttonText="Login"
      onSuccess={(res) => console.log(res)}
      onFailure={(res) => console.log(res)}
      scope={["user_profile", "user_media"]}
      redirectUri="https://getinstanft.herokuapp.com/"
      // redirectUri="https://localhost:3000/"
    />
  );
};

export default InstaLogin;
