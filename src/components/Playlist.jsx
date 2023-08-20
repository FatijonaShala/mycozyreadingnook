import React from "react";

function Playlist() {
  return (
    <div>
      
        <h1 className="display-2 cozy-font">my cozy reading nook</h1>
        <p className="lead">pick up a book and sit awhile.</p>
    {/* Spotify widget */}
         <div className="playlist">
        <iframe
          style={{ borderRadius: "12px", border: "none" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZwtERXCS82H?utm_source=generator"
          width="85%"
          height="351"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        </div>
    </div>
  );
}

export default Playlist;
