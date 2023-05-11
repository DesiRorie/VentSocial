import React from "react";
import Feed from "./Feed";

const Explorepage = () => {
  return (
    <div className="explorePage">
      <div className="searchContainer">
        <input placeholder="search" />
        <div className="recommended">
          <button>lorem</button>
          <button>lorem2</button>
          <button>lorem3</button>
          <button>lorem4</button>
        </div>
        <Feed />
      </div>
    </div>
  );
};

export default Explorepage;

// give the recommendations real values
