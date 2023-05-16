// import React, { useState } from "react";
// import { useEffect } from "react";
// import Feed from "./Feed";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// const Explorepage = () => {
//   const handleScroll = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };
//   const [query, setQuery] = useState("");
//   const [memeImages, setMemeImages] = useState([]);
//   useEffect(() => {
//     fetch("https://api.imgflip.com/get_memes")
//       .then((res) => res.json())
//       .then((data) => {
//         return setMemeImages(data.data.memes);
//       });
//   }, []);
//   const handleQuery = (e) => {
//     setQuery(e.target.value);
//   };
//   return (
//     <div className="explorePage">
//       <div className="searchContainer">
//         <input onChange={handleQuery} placeholder="search" />
//         <div className="recommended">
//           <button>Food</button>
//           <button>Anime</button>
//           <button>Sports</button>
//           <button>DIY</button>
//         </div>
//       </div>
//       {memeImages.map((image, id) => {
//         return (
//           <div key={id} className="feedImages">
//             <div>
//               <img src={image.url} alt={image.name} />
//             </div>
//           </div>
//         );
//       })}
//       <div style={{ marginBottom: "5em", textAlign: "center" }}>
//         <h2>No more posts</h2>
//         <button className="scrollButton" onClick={handleScroll}>
//           <ArrowUpwardIcon />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Explorepage;

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

  const [filteredMemeImages, setFilteredMemeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setFilteredMemeImages(data.data.memes);
      });
  }, []);

  const handleQuery = (e) => {
    const value = e.target.value;

    const filteredImages = memeImages.filter((image) => {
      return image.name.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredMemeImages(filteredImages);
  };

  return (
    <div className="explorePage">
      <div className="searchContainer">
        <input onChange={handleQuery} placeholder="search" />
        <div className="recommended">
          <button>Food</button>
          <button>Anime</button>
          <button>Sports</button>
          <button>DIY</button>
        </div>
      </div>
      {filteredMemeImages.map((image, id) => {
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
