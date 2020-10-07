const notes = [
  'D4', 
  'G2', 
  'B3', 
  'F#4', 
  'A4', 
  'D3', 
  'G4',
  'C3',
]


const volume = [ -20, -16, -12, -10, -8, -6, -4, -4 ]


export default function setSettings(synthGroup, index, new_deaths, new_cases) {
  
  //Handle deaths
  if (new_deaths < 10) {
    synthGroup.delay.set({
      delayTime: 1.0,
      feedback: 0.01,
    });
  } else if (new_deaths >= 10 && new_deaths < 20) {
    synthGroup.delay.set({
      delayTime: 0.75,
      feedback: 0.2,
    });
  } else if (new_deaths >= 20 && new_deaths < 30) {
    synthGroup.delay.set({
      delayTime: 0.65,
      feedback: 0.25,
    });
  } else if (new_deaths >= 30 && new_deaths < 50) {
    synthGroup.delay.set({
      delayTime: 0.5,
      feedback: 0.30,
    });
  } else if (new_deaths >= 50 && new_deaths < 100) {
    synthGroup.delay.set({
      delayTime: 0.5,
      feedback: 0.4,
    });
  } else if (new_deaths >= 100 && new_deaths < 600) {
    synthGroup.delay.set({
      delayTime: 0.5,
      feedback: 0.5,
    });
  } else if (new_deaths >= 600 && new_deaths < 1000) {
    synthGroup.delay.set({
      delayTime: 0.25,
      feedback: 0.6,
    });
  } else if (new_deaths >= 1000) {
    synthGroup.delay.set({
      delayTime: 0.25,
      feedback: 0.75,
    });
  }


  //Handle cases
  if (new_cases < 10) {
    synthGroup.volume.set({
      volume: volume[0],
    });
  } else if (new_cases >= 10 && new_cases >= 50) {
    synthGroup.volume.set({
      volume: volume[1],
    });
  } else if (new_cases >=  50  && new_cases < 300) {
    synthGroup.volume.set({
      volume: volume[2],
    });
  } else if (new_cases >= 300 && new_cases < 500) {
    synthGroup.volume.set({
      volume: volume[3],
    });
  } else if (new_cases >= 500 && new_cases < 1000) {
    synthGroup.volume.set({
      volume: volume[4],
    });
  } else if (new_cases >= 1000 && new_cases < 2000) {
    synthGroup.volume.set({
      volume: volume[5],
    });
  } else if (new_cases >= 2000 && new_cases < 5000) {
    synthGroup.volume.set({
      volume: volume[6],
    });
  } else if (new_cases >= 5000) {
    synthGroup.volume.set({
      volume: volume[7],
    })
  }


  if (new_deaths) {
    synthGroup.synth.triggerAttackRelease(notes[index % notes.length], '8n')
  }

}

