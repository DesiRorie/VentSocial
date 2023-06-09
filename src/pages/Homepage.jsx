import React from "react";
import TopNav from "../components/TopNav";
import Feed from "./Feed";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Homepage = ({ posts, setPosts }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [savedPosts, setSavedPosts] = useState([]);
  const userName = useContext(UserContext);

  useEffect(() => {
    Axios.get(`https://ventsocialserver.onrender.com/posts`)
      .then((res) => {
        setSavedPosts(res.data);
        setLikes(res.data.length);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <TopNav />
      <div className="homepage">
        <div className="postsContainer">
          {isLoading ? <span>Loading posts...</span> : ""}
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
