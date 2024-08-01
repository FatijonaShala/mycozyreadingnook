import React from "react";
import Playlist from "./Playlist";
import AmbiancePlayer from "./AmbiancePlayer";
import Layout from "./Layout";

const Seaside = ({ changeAmbientSpace }) => {
  return (
    <Layout
      imageSrc="images/seaside.jpg"
      changeAmbientSpace={changeAmbientSpace}
    >
      <Playlist
        playlistUrl="https://open.spotify.com/embed/playlist/5wJ3fFCmaajmuzwlUjAsXm?utm_source=generator"
        title="my seaside retreat"
        description="Relax and enjoy the ocean waves."
      />
      <div>
        <AmbiancePlayer src="/audio/waves.mp3" title="ocean waves" />
        <AmbiancePlayer src="/audio/rain.mp3" title="rainy day" />
        <AmbiancePlayer src="/audio/sunny.mp3" title="sunny day" />
        <AmbiancePlayer
          src="/audio/people-talking.mp3"
          title="people talking"
        />
        <AmbiancePlayer src="/audio/wind.mp3" title="espresso machine" />
      </div>
    </Layout>
  );
};

export default Seaside;
