import React, { useState } from 'react';

function Video({ video }) {
  const [upvote, setUpvote] = useState(video.upvotes);
  const [downvote, setDownvotes] = useState(video.downvotes);

  function handleUpvote() {
    setUpvote(upvote + 1);
  }

  function handleDownvote() {
    setDownvotes(downvote + 1);
  }

  return (
    <>
      <iframe
        width='919'
        height='525'
        src={video.embedUrl}
        frameBorder='0'
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <button onClick={handleUpvote}>{upvote}👍</button>
      <button onClick={handleDownvote}>{downvote}👎</button>
    </>
  );
}

export default Video;
