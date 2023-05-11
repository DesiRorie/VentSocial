import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import profileImg from "../assets/profile.jpeg";
const Profilepage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${profileImg})`,
  };
  const userName = useContext(UserContext);
  return (
    <div className="profilePageContainer">
      <div className="profileNav">
        <h1>{userName}</h1>
        <ul className="profileNavUl">
          <li>Add Story</li>
          <li>Info</li>
        </ul>
      </div>

      <div className="profileStats">
        <div className="profile-picture" style={backgroundImageStyle}></div>{" "}
        {/* this image is hard coded dont forget to make dynamic by using a post req for the db on the server. */}
        <ul style={{ padding: "0" }}>
          <li>
            <div className="profileStatsInfo">
              <span>0</span>
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
      </div>
    </div>
  );
};

export default Profilepage;
