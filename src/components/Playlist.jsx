// import React from "react";

// function Playlist({ playlistUrl, title, description }) {
//   return (
//     <div>
//       <div className="web-brand">
//         <h1 className="display-2 smaller-text">{title}</h1>
//         <p className="lead">{description}</p>
//       </div>
//       {/* Spotify widget */}
//       <div className="playlist">
//         <iframe
//           className="iframe"
//           src={playlistUrl}
//           allowFullScreen=""
//           allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// export default Playlist;

import React, { useState, useEffect } from "react";
import "./Playlist.css"; // Create a separate CSS file for this component's styling

function Playlist({ playlistUrl, title, description }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // simulate loading delay for 1 second
    return () => clearTimeout(timer);
  }, [playlistUrl]);

  return (
    <div>
      <div className="web-brand">
        <h1 className="display-2 smaller-text">{title}</h1>
        <p className="lead">{description}</p>
      </div>

      {/* Spotify widget with loading animation */}
      <div className="playlist">
        {loading ? (
          <div className="loading-spinner"></div>
        ) : (
          <iframe
            className="iframe fade-in"
            src={playlistUrl}
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            onLoad={() => setLoading(false)}
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default Playlist;
