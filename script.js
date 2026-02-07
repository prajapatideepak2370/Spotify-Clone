let play = document.getElementById('btn-play');
let progressBar = document.getElementById('seek');
let audio = new Audio('Audio/8-Dooron Dooron.mp3');

play.addEventListener('click', () => {
    if(audio.paused){
        audio.play();
        play.src = "./Assests/pause_icon.png"; 
    } else {
        audio.pause();
        play.src = "./Assests/player_icon3.png"; 
    }
});
audio.addEventListener('timeupdate', () => {
    let value = (audio.currentTime / audio.duration) * 100;
    progressBar.value = value;
    progressBar.style.background = `Linear-gradient(to right, #21a600ff ${value}%, #333333ff ${value}%)`;
});
progressBar.addEventListener('input', function(){
    let value = this.value;
    this.style.background = `Linear-gradient(to right, #21a600ff ${value}%, #333333ff ${value}%)`;
    audio.currentTime = (progressBar.value * audio.duration) / 100;
});

let playMusic = Array.from(document.getElementsByClassName('playMusic'));
playMusic.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    })
});
makeAllPlay = () => {
    playMusic.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

