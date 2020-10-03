
//TODO: Create a key listener
//TODO: Connect key press play a beat
//TODO: Create a databasae of beats
//TODO: Set colors programatically
window.onload=()=>{
    
    setColors();
}
let beats={
    "a": {
        beat:"./assets/drum snare.mp3",
        color: "#E61F34"
    },
    "s": {
        beat: "./assets/bass drum.mp3",
        color: "green"
    },
    "d": {
        beat: "./assets/crash cymbal.mp3",
        color: "yellow"
    },
    "f": {
        beat: "./assets/hi-hat.mp3",
        color:"#0079C4"
    },
    "g": {
        beat: "./assets/floor tom.mp3",
        color: "white"
    },
    "h": {
        beat: "./assets/china cymbal.mp3",
        color: "orange"
    },
    "j": {
        beat: "./assets/medium tom.mp3",
        color: "purple"
    },
    "k": {
        beat: "./assets/drum sticks.mp3",
        color: "grey"
    },
    "l": {
        beat: "./assets/ride cymbal rattle.mp3",
        color: "aqua"
    }
}
const setColors=()=>{
    for (let beatKey in beats){
        let beat =beats[beatKey];
        console.log(beat);
        const element= document.getElementById(beatKey);
        element.style.borderColor= beat.color;
    }
}
const playBeat= (buttonKey)=>{
    let audioSrc= beats[buttonKey].beat;
    let audio= new Audio(audioSrc);
    audio.currentTime=0;//audio has not finished yet, reset it
    audio.play();
    
}
document.addEventListener('keydown',()=>{
    console.log(event.key);
    playBeat(event.key);
})

