
//TODO: Create a key listener
//TODO: Connect key press play a beat
//TODO: Create a databasae of beats

let beats={
    "a":{
        beat: "./assets/drum snare.mp3"
    },
    "s":{
        
        beat: "./assets/bass drum.mp3"
    },
    "d":{
        
        beat: "./assets/crash cymbal.mp3"
    },
    "f":{
        
        beat: "./assets/hi-hat.mp3"
    },
    "g":{
        
        beat: "./assets/floor tom.mp3"
    },
    "h":{
        
        beat: "./assets/china cymbal.mp3"
    },
    "j":{
        
        beat: "./assets/medium tom.mp3"
    },
    "k":{
        
        beat: "./assets/drum sticks.mp3"
    },
    "l":{
        
        beat: "./assets/ride cymbal rattle.mp3"
    },
}
const playBeat= (buttonKey)=>{
    if(buttonKey== 'a'){
        let audio= new Audio('./assets/drum snare.mp3');
        audio.currentTime=0;//audio has not finished yet, reset it
        audio.play();
    }
}
document.addEventListener('keydown',()=>{
    console.log(event.key);
    playBeat(event.key);
})

