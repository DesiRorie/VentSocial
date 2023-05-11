import React from "react";
import TopNav from "../components/TopNav";
import Feed from "./Feed";

const Homepage = () => {
  return (
    <>
      <TopNav />
      <div className="homepage">
        <Feed />
      </div>
    </>
  );
};

export default Homepage;
