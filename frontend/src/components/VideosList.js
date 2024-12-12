import React, { useEffect, useState } from "react";

function VideosList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:300/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h2>Videos</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>{video.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default VideosList;
