import React from "react";
import Playlist from "./Playlist";
import AmbiancePlayer from "./AmbiancePlayer";
import Layout from "./Layout";

const Library = ({ changeAmbientSpace }) => {
  return (
    <Layout
      imageSrc="images/library.jpg"
      changeAmbientSpace={changeAmbientSpace}
    >
      <Playlist
        playlistUrl="https://open.spotify.com/embed/playlist/437XP4inCVv57ii0PNK4eG?utm_source=generator"
        title="my cozy library"
        description="Find a book and let the hours slip by."
      />
      <div>
        <AmbiancePlayer src="/audio/rain.mp3" title="rainy day" />
        <AmbiancePlayer src="/audio/sunny.mp3" title="sunny day" />
        <AmbiancePlayer src="/audio/turning-pages.mp3" title="turning pages" />
        <AmbiancePlayer
          src="/audio/fireplace.mp3"
          title="fireplace crackling"
        />
        <AmbiancePlayer
          src="/audio/typing-keyboard.mp3"
          title="typing on keyboard"
        />
      </div>
    </Layout>
  );
};

export default Library;
