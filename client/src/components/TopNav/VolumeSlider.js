import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeDown, faVolumeOff } from '@fortawesome/free-solid-svg-icons'
import "./VolumeSlider.scss"


function VolumeSlider(props) {
  const [volume, setVolume] = useState(50);
  const [mute, setMute] = useState(false)
  
  useEffect( () => {

  }, [volume])

  const volumeIcon = () => {
    if (volume < 1 || mute)
      return faVolumeOff;
    return volume < 50 ? faVolumeDown : faVolumeUp;
  }
  
  return (
    <div className="volume-control">
      <FontAwesomeIcon 
        icon={volumeIcon()} 
        size="2x"  
        className={"volume-icon"} 
        onClick={() => setMute(!mute)}
      />
  
      <input 
        id="volume"
        type="range"
        min={0}
        max={100}
        onChange={ e => {
          setVolume(e.currentTarget.value);
        }}
        disabled={mute} 
      ></input>
    </div>
  )
}



export default VolumeSlider;