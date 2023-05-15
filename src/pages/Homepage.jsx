import React from "react";
import TopNav from "../components/TopNav";
import Feed from "./Feed";
import { useState, useEffect } from "react";
import Axios from "axios";

const Homepage = ({ posts, setPosts }) => {
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/posts").then((res) => {
      setSavedPosts(res.data);
    });
  }, []);

  return (
    <>
      <TopNav />
      <div className="homepage">
        <div className="postsContainer">
          {savedPosts.map((val, key) => {
            return (
              <div className="postsP" key={key}>
                <div className="postPinfo">
                  <span style={{ display: "block" }}>{val.text}</span>
                  <span>{val.elapsedTime}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Homepage;
