import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import "./VolumeSlider.scss"


function VolumeSlider(props) {
  const [volume, setVolume] = useState(null);
  
  
  return (
    <div className="volume-control">
      <FontAwesomeIcon icon={faVolumeUp} size="2x" className={"volume-icon"} />
      <input type="range"></input>
    </div>
  )
}



export default VolumeSlider;