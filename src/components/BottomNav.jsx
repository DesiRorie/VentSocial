import React from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="bottomNav">
      <ul className="bottomNavUl">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/explore">
          <li>Explore</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </ul>
    </div>
  );
};

export default BottomNav;
