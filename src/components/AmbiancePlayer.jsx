
import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import { Range } from 'react-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause,  faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import '../AmbiancePlayer.css';

const AmbiancePlayer = ({ src, title }) => {
  const [isPlaying, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const sound = new Howl({ src: [src], loop: true, volume});

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
               
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default AmbiancePlayer;