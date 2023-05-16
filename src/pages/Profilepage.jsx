import React, { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import profileImg from "../assets/profile.jpeg";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import Axios from "axios";

const Profilepage = ({ posts, setPosts, likes, setLikes }) => {
  const [savedPosts, setSavedPosts] = useState([]);
  useEffect(() => {
    Axios.get(`https://ventsocialback-production.up.railway.app/posts`).then(
      (res) => {
        setSavedPosts(res.data);
        setLikes(res.data.length);
      }
    );
  }, []);

  const [dbPosts, setDbPosts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAddPostForm, setShowAddPostForm] = useState(false);
  const [postText, setPostText] = useState("");

  const cursorStyle = () => {
    return {
      cursor: "pointer",
    };
  };

  const updatePosts = () => {
    const timestamp = new Date().getTime();
    const newPost = {
      text: postText,
      timestamp: timestamp,
      elapsedTime: getTimeElapsed(timestamp),
    };

    Axios.post(
      `https://ventsocialback-production.up.railway.app/createPost`,
      newPost
    )
      .then(() => {
        setDbPosts([...dbPosts, newPost]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${profileImg})`,
  };

  const handleTextChange = (event) => {
    const text = event.target.value;
    setPostText(text);
  };

  const addPost = () => {
    const newPost = {
      text: postText,
      timestamp: new Date().getTime(),
      timeElapsed: getTimeElapsed(new Date().getTime()),
    };

    // setPosts((prevPosts) => [...prevPosts, newPost]);
    setShowAddPostForm(false);
    setSelectedImage(null);
    setPostText("");
    // setLikes((prevLikes) => prevLikes + 1);
    updatePosts();
  };
  const toggleAddPostForm = () => {
    setShowAddPostForm((prevValue) => !prevValue);
  };
  const getTimeElapsed = (timestamp) => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - timestamp;
    const secondsElapsed = Math.floor(timeDifference / 1000);
    const minutesElapsed = Math.floor(timeDifference / (1000 * 60));

    if (secondsElapsed < 10) {
      return "Just now";
    } else if (minutesElapsed < 1) {
      return `${secondsElapsed} seconds ago`;
    } else if (minutesElapsed === 1) {
      return "1 minute ago";
    } else {
      return `${minutesElapsed} minutes ago`;
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setPosts((prevPosts) =>
        prevPosts.map((post) => ({
          ...post,
          timeElapsed: getTimeElapsed(post.timestamp),
        }))
      );
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const addStory = () => {};

  const userName = useContext(UserContext);

  return (
    <>
      <div className="profilePageContainer">
        <div className="profileNav">
          <h1>{userName}</h1>
          <ul className="profileNavUl">
            <li>
              <AddIcon style={cursorStyle()} />
            </li>
            <li>
              <MenuIcon style={cursorStyle()} />
            </li>
          </ul>
        </div>
        <div className="profileStats">
          <div className="profile-picture" style={backgroundImageStyle}></div>{" "}
          {/* this image is hard coded dont forget to make dynamic by using a post req for the db on the server. */}
          <ul style={{ padding: "0" }}>
            <li>
              <div className="profileStatsInfo">
                <span>{likes}</span>
                <span>Posts</span>
              </div>
            </li>
            <li>
              <div className="profileStatsInfo">
                <span>0</span>
                <span> Followers</span>
              </div>
            </li>
            <li>
              <div className="profileStatsInfo">
                <span>0</span>
                Following
                <span></span>
              </div>
            </li>
          </ul>
        </div>{" "}
        <button
          style={{ marginLeft: "16px", borderRadius: "5px" }}
          onClick={toggleAddPostForm}
        >
          Add Post
        </button>
        {showAddPostForm && (
          <div className="addPostForm">
            <textarea value={postText} onChange={handleTextChange} />
            <button onClick={() => addPost(postText)}>Submit</button>
          </div>
        )}
      </div>{" "}
      <div className="postsContainer">
        {posts.map((post, id) => {
          return (
            <div className="postsP" key={id}>
              <div className="postPinfo">
                <span style={{ display: "block" }}>{post.text}</span>
                <span>{post.timeElapsed}</span>
              </div>
            </div>
          );
        })}
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

export default Profilepage;
