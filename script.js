
//TODO: Create a key listener
//TODO: Connect key press play a beat
//TODO: Create a databasae of beats

let beats={
    "a": "./assets/drum snare.mp3",
    "s": "./assets/bass drum.mp3",
    "d": "./assets/crash cymbal.mp3",
    "f": "./assets/hi-hat.mp3",
    "g": "./assets/floor tom.mp3",
    "h": "./assets/china cymbal.mp3",
    "j": "./assets/medium tom.mp3",
    "k": "./assets/drum sticks.mp3",
    "l": "./assets/ride cymbal rattle.mp3"
}
const playBeat= (buttonKey)=>{
    let audioSrc= beats[buttonKey];
    let audio= new Audio(audioSrc);
    audio.currentTime=0;//audio has not finished yet, reset it
    audio.play();
    
}
document.addEventListener('keydown',()=>{
    console.log(event.key);
    playBeat(event.key);
})

