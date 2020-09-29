import React, {useState, useEffect, useRef } from 'react';
import { MonoSynth, FMSynth } from 'tone';


function Synthesiser(props) {
  const synth = new MonoSynth();


  // const playSynthOne = (note) => {
  //   synthOne.triggerAttackRelease(note, '16n')
  // }

  // const playSynthTwo = (note) => {
  //   synthTwo.triggerAttackRelease(note, '16n')
  // }

  return {
    synth
  }
}



export default Synthesiser;

