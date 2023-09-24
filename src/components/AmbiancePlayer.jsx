
import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import { Range } from 'react-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause,  faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../Context/DarkModeContext';


const AmbiancePlayer = ({ src, title }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  // Function to handle dark mode toggle
  const handleDarkModeToggle = () => {
    toggleDarkMode(); // Toggle dark mode state

    // Add or remove the .dark-mode class from the body element
    if (darkMode) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }

    // Save the user's preference to local storage
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };


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
                //      background: '#314545',
                   
                  }}   
                 className={ `react-range-track ${darkMode ? "dark-mode" : ""}`}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props} className= { `react-range-thumb ${darkMode ? "dark-mode" : ""}`}
               
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default AmbiancePlayer;
