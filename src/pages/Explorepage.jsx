import React, { useState } from "react";
import { useEffect } from "react";
import Feed from "./Feed";

const Explorepage = () => {
  const [memeImages, setMemeImages] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeImages(data.data.memes));
  }, []);
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
      {memeImages.map((image, id) => {
        return (
          <div className="feedImages">
            <div key={id}>
              <img src={image.url} alt={image.name} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Explorepage;

// give the recommendations real values
