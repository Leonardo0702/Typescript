import React, { useEffect, useState } from "react";

import { Container, VideoListWrapper } from "./styles";

import AddVideo from "../AddVideo";
import Video from "../Video";

import api from "../../services/api";

function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.get("videos").then(({ data }) => {
      setVideos(data.videos);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <VideoListWrapper>
        {videos?.map((video) => (
          <Video
            key={video}
            id={1}
            title="Title test"
            link="https://www.youtube.com/watch?v=xDVjbp8l96M"
            liked={false}
          />
        ))}
        <AddVideo />
      </VideoListWrapper>
    </Container>
  );
}

export default VideoList;
