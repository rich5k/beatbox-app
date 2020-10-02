
//TODO: Create a key listener
//TODO: Connect key press play a beat
const playBeat= (buttonKey)=>{
    if(buttonKey== 'a'){
        let audio= new Audio('./assets/drum snare.mp3');
        audio.play();
    }
}
document.addEventListener('keydown',()=>{
    console.log(event.key);
    playBeat(event.key);
})

