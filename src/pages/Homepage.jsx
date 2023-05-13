import React from "react";
import TopNav from "../components/TopNav";
import Feed from "./Feed";

const Homepage = ({ posts, setPosts }) => {
  return (
    <>
      <TopNav />
      <div className="homepage">
        <Feed posts={posts} setPosts={setPosts} />
      </div>
    </>
  );
};

export default Homepage;
