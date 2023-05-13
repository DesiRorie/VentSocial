import React from "react";
import Feed from "./Feed";

const Explorepage = ({ posts, setPosts }) => {
  return (
    <div className="explorePage">
      <div className="searchContainer">
        <input placeholder="search" />
        <div className="recommended">
          <button>Food</button>
          <button>Anime</button>
          <button>Sports</button>
          <button>DIY</button>
        </div>
      </div>
    </div>
  );
};

export default Explorepage;

// give the recommendations real values
