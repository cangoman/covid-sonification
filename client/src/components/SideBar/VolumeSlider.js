import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeDown, faVolumeOff } from '@fortawesome/free-solid-svg-icons'
import "./VolumeSlider.scss"
import * as Tone from 'tone'


function VolumeSlider() {
  const [volume, setVolume] = useState(-12);
  const [mute, setMute] = useState(false);

  const vol = new Tone.Volume(-12).toDestination();

  
  useEffect( () => {
    console.log(volume)
  }, [volume])

  const volumeIcon = () => {
    if (volume < -55 || mute)
      return faVolumeOff;
    return volume < -30 ? faVolumeDown : faVolumeUp;
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
        min={-60}
        max={0}
        onChange={ e => {
          setVolume(e.currentTarget.value);
        }}
        disabled={mute} 
      ></input>
    </div>
  )
}



export default VolumeSlider;