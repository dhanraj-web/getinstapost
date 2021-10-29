import React from "react";
import InstaFeeds from "./components/InstaFeeds";

import "./App.css";
import InstaLogin from "./components/instaLogin";

const App = () => {
  return (
    <>
      <InstaLogin />
      <header className="App-header" style={{ textAlign: "center" }}>
        <h1>Instagram Feed with Instagram API</h1>
      </header>
      <InstaFeeds
        // token={
        //   "IGQVJXOXdrNlgzWDRlQlN5dG84UFRVUDBSbEcyM2IzM0lSV3BnbkFrN01Gc2VsdkpOZAGNmbkFsaHBPaXA0NWxjMEJJZAUwzMTRKcFZA2UjFHNmZATOWdBNXcwUnQ2SmVJejRZAa0RGc25Oc2JPb2EteUdUSwZDZ"
        // }
        limit={12}
      />
    </>
  );
};

export default App;
