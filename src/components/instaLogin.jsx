import axios from "axios";
import React, { useState } from "react";
import InstagramLogin from "react-instagram-login";

const InstaLogin = () => {
  const [feeds, setFeedsData] = useState([]);
  const getUserAccessCode = async (res) => {
    console.log(res);
    const formdata = new FormData();
    formdata.append("client_id", "605028720691089");
    formdata.append("client_secret", "4936eebe886d1bde895304f850e0b344");
    formdata.append("grant_type", "authorization_code");
    formdata.append("redirect_uri", "https://getinstanft.herokuapp.com/");
    formdata.append("code", res);

    try {
      await axios({
        method: "post",
        url: "https://api.instagram.com/oauth/access_token",
        data: formdata,
        header: { "content-type": "multipart/form-data" },
      }).then((res) => fetchInstagramPost(res.data.access_token));
    } catch (error) {
      console.log(error);
    }
  };

  async function fetchInstagramPost(accessKey) {
    try {
      axios
        .get(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=12&access_token=${accessKey}`
        )
        .then((resp) => {
          console.log(resp);
          setFeedsData(resp.data.data);
        });
    } catch (err) {
      console.log("error", err);
    }
  }

  console.log(feeds);

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
