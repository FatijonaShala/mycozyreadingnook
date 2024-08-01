import React from "react";
import Playlist from "./Playlist";
import AmbiancePlayer from "./AmbiancePlayer";
import Layout from "./Layout";

const CoffeeShop = ({ changeAmbientSpace }) => {
  return (
    <Layout
      imageSrc="images/coffee.png"
      changeAmbientSpace={changeAmbientSpace}
    >
      <Playlist
        playlistUrl="https://open.spotify.com/embed/playlist/2s9R059mmdc8kz6lrUqZZd?utm_source=generator"
        title="my cozy coffee shop"
        description="Relax and enjoy the coffee shop vibes."
      />
      <div>
        <AmbiancePlayer src="/audio/coffee-shop.mp3" title="coffee shop" />
        <AmbiancePlayer src="/audio/rain.mp3" title="rainy day" />
        <AmbiancePlayer src="/audio/sunny.mp3" title="sunny day" />
        <AmbiancePlayer
          src="/audio/people-talking.mp3"
          title="people talking"
        />
        <AmbiancePlayer
          src="/audio/espresso-machine.mp3"
          title="espresso machine"
        />
      </div>
    </Layout>
  );
};

export default CoffeeShop;
