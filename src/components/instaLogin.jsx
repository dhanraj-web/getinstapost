import axios from "axios";
import React from "react";
import InstagramLogin from "react-instagram-login";

const InstaLogin = () => {
  const getUserAccessCode = async (res) => {
    console.log(res);
    try {
      const b = await axios.post(
        "https://api.instagram.com/oauth/access_token",
        {
          client_id: "605028720691089",
          client_secret: "4936eebe886d1bde895304f850e0b344",
          grant_type: "authorization_code",
          redirect_uri: "https://getinstanft.herokuapp.com/",
          code: res,
        }
      );
    } catch (error) {
      console.log(error);
    }
    // await axios
    //   .post(
    //     `https://api.instagram.com/oauth/access_token/client_id=605028720691089/client_secret=4936eebe886d1bde895304f850e0b344/grant_type=authorization_code/redirect_uri=https://getinstanft.herokuapp.com//code=${res}`
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   });
  };

  return (
    <InstagramLogin
      clientId="605028720691089"
      buttonText="Login"
      onSuccess={(res) => getUserAccessCode(res)}
      onFailure={(res) => console.log(res)}
      scope={["user_profile", "user_media"]}
      redirectUri="https://getinstanft.herokuapp.com/"
    />
  );
};

export default InstaLogin;
