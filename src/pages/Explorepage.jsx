import React, { useState } from "react";
import { useEffect } from "react";
import Feed from "./Feed";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Explorepage = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
          <div key={id} className="feedImages">
            <div>
              <img src={image.url} alt={image.name} />
            </div>
          </div>
        );
      })}
      <div style={{ marginBottom: "5em", textAlign: "center" }}>
        <h2>No more posts</h2>
        <button className="scrollButton" onClick={handleScroll}>
          <ArrowUpwardIcon />
        </button>
      </div>
    </div>
  );
};

export default Explorepage;

// give the recommendations real values
