// import React, { useEffect, useState } from 'react';
// import { Howl } from 'howler';
// import { Range } from 'react-range';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
// import '../AmbiancePlayer.css';

// const AmbiancePlayer = ({ src, title }) => {
//   const [isPlaying, setPlaying] = useState(false);
//   const [volume, setVolume] = useState(0.5);
//   const sound = new Howl({ src: [src], loop: true, volume });

//   useEffect(() => {
//     if (isPlaying) {
//       sound.play();
//     } else {
//       sound.pause();
//     }

//     return () => {
//       sound.unload();
//     };
//   }, [isPlaying, sound]);

//   const handleToggle = () => {
//     setPlaying((prevState) => !prevState);
//   };


//   const handleVolumeChange = (values) => {
//     const newVolume = values[0];
//     setVolume(newVolume);
//     sound.volume(newVolume);
//   };
  

//   return (
//     <div className="ambiance-player">
//       <div className="ambiance-header">
//         <h3 className="ambiance-title">
//           {title} {' '}
//           <FontAwesomeIcon
//             className={`icon-button ${isPlaying ? 'playing' : ''}`}
//             icon={isPlaying ? faPause : faPlay}
//             onClick={handleToggle}
//           />
//         </h3>
//       </div>
//        <div className="player-controls">
//         <div className="volume-slider">
//           <Range
//             step={0.01}
//             min={0}
//             max={1}
//             values={[volume]}
//             onChange={(values) => handleVolumeChange(values)}
//             renderTrack={({ props, children }) => (
//               <div {...props} className="volume-track">
//                 {children}
//               </div>
//             )}
//             renderThumb={({ props }) => (
//               <div {...props} className="volume-thumb" />
//             )}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

//  export default AmbiancePlayer;
import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import { Range } from 'react-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause,  faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import '../AmbiancePlayer.css';

const AmbiancePlayer = ({ src, title }) => {
  const [isPlaying, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const sound = new Howl({ src: [src], loop: true, volume });

  // New state to track volume changes
  const [displayVolume, setDisplayVolume] = useState(volume);

  // Update the sound volume whenever displayVolume changes
  useEffect(() => {
    sound.volume(displayVolume);
  }, [displayVolume, sound]);

  useEffect(() => {
    if (isPlaying) {
      sound.play();
    } else {
      sound.pause();
    }

    return () => {
      sound.unload();
    };
  }, [isPlaying, sound]);

  const handleToggle = () => {
    setPlaying((prevState) => !prevState);
  };

  // Handler for volume changes
  const handleVolumeChange = (newVolume) => {
    setDisplayVolume(newVolume);
  };

  return (
    <div className="ambiance-player">
      <div className="ambiance-header">
        <h3 className="ambiance-title">
          {title}{' '}
          <FontAwesomeIcon
            className={` play-pause-icon ${isPlaying ? 'playing' : ''}`}
            icon={isPlaying ? faPause : faPlay}
            onClick={handleToggle}
          />
        </h3>
      </div>

      {/* Volume control
      <div className="volume-control">
      {/* <label> */}
          {/* <FontAwesomeIcon icon={faVolumeUp} /> Volume icon */}
        {/* </label> 
        <Range
          step={0.01}
          min={0}
          max={1}
          values={[displayVolume]}
          onChange={(values) => handleVolumeChange(values[0])}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '3px',
                width: '200%',
                background: '#314545',
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '14px',
                width: '14px',
                backgroundColor: 'white',
                borderRadius: '50%',
                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.5)',
              }}
            />
          )}
        />
      </div>
    </div> */}
     {/* Volume control */}

     <div className="volume-control">
         <div className="volume-icon"> 
          <FontAwesomeIcon icon={faVolumeUp} /> 
         </div>
        <div className="volume-range">
          <Range
            step={0.01}
            min={0}
            max={1}
            values={[displayVolume]}
            onChange={(values) => handleVolumeChange(values[0])}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                 height: '3px',
                 width: '170%',
                   background: '#314545',
                   // marginRight: '10px'
                 }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props} className='react-range-thumb'
                // style={{
                //   ...props.style,
                //   height: '14px',
                //   width: '14px',
                //   backgroundColor: '#f6ece2',
                //   borderRadius: '50%',
                //   boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.5)',
                // }}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default AmbiancePlayer;
