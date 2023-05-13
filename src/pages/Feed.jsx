import React from "react";

const Feed = ({ posts, setPosts }) => {
  if (!Array.isArray(posts)) {
    return null;
  }

  return (
    <div className="feed">
      {posts.map((post, id) => {
        return (
          <div className="explorePosts" key={id}>
            <span>{post.text}</span>
            <span>{post.timeElapsed}</span>
          </div>
        );
      })}
      {posts.length === 0 && <div>No Posts...</div>}
    </div>
  );
};

export default Feed;

// fill the feed up with real data such as images. use an api to render them?
