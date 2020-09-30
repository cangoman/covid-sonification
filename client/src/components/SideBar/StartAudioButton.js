import React, { useState } from 'react'
import { Button } from "react-bootstrap"
import * as Tone from 'tone';


function StartAudioButton(props) {
  const [audioOn, setAudioOn] = useState(false)

  const handleClick = () => {
    if (!audioOn) 
      initializeAudio();
    else if (Tone.context.state !== 'running')
      Tone.context.resume();
  }

  const initializeAudio = async () => {
    await Tone.start()
    console.log("Audio ready") 
    setAudioOn(true);   
  }

  return (
    <Button 
    variant="outline-light"
    onClick={() => handleClick()} 
    >
      Start Audio
    </Button>
  )
}

export default StartAudioButton;