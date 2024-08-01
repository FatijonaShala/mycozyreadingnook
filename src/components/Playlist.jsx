// import React from "react";

// function Playlist() {
//   return (
//     <div>
//          <div className="web-brand">
//         <h1 className="display-2 smaller-text">my cozy reading nook</h1>
//         <p className="lead">pick up a book and sit awhile.</p>
//         </div>
//     {/* Spotify widget */}
//          <div className="playlist">
//         <iframe className="iframe"
//            src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZwtERXCS82H?utm_source=generator"
//           // src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZwtERXCS82H?utm_source=generator&theme=0"

//           allowFullScreen=""
//           allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//           loading="lazy"
//         ></iframe>

//         </div>
//     </div>
//   );
// }

// export default Playlist;
import React from "react";

function Playlist({ playlistUrl, title, description }) {
  return (
    <div>
      <div className="web-brand">
        <h1 className="display-2 smaller-text">{title}</h1>
        <p className="lead">{description}</p>
      </div>
      {/* Spotify widget */}
      <div className="playlist">
        <iframe
          className="iframe"
          src={playlistUrl}
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Playlist;
