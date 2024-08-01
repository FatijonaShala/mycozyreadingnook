import React from "react";
import Playlist from "./Playlist";
import AmbiancePlayer from "./AmbiancePlayer";
import Layout from "./Layout";

const ReadingNook = ({ changeAmbientSpace }) => {
  return (
    <Layout
      imageSrc="images/nobgnook1.png"
      changeAmbientSpace={changeAmbientSpace}
    >
      <Playlist
        playlistUrl="https://open.spotify.com/embed/playlist/37i9dQZF1DWZwtERXCS82H?utm_source=generator"
        title="My Cozy Reading Nook"
        description="Pick up a book and sit awhile."
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

export default ReadingNook;
