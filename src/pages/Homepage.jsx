import React from "react";
import TopNav from "../components/TopNav";
import Feed from "./Feed";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Homepage = ({ posts, setPosts }) => {
  const [savedPosts, setSavedPosts] = useState([]);
  const userName = useContext(UserContext);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts`).then((res) => {
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
                  <span> - {userName}</span>
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
