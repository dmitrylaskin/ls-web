let video;
let durationControl;
let soundControl;
let intervalId;
let soundLevel;

$().ready(function () {
    initVars();
    initPlayButtons();
    addListeners();

    durationControl.min = 0;
    durationControl.value = 0;

    soundControl.min = 0;
    soundControl.max = 10;

    soundControl.value = soundControl.max;
});

function addListeners() {
    video.addEventListener('click', playStop);

    durationControl.addEventListener('click', setVideoDuration);
    durationControl.addEventListener('onmousemove', setVideoDuration);
    durationControl.addEventListener('mousedown', stopInterval);
    soundControl.addEventListener('click', changeSoundVolume);
    soundControl.addEventListener('onmousemove', changeSoundVolume);
}

function changeSoundVolume() {
    video.volume = soundControl.value / 10;
}

function stopInterval() {
    clearInterval(intervalId);
}

function setVideoDuration() {
    video.currentTime = durationControl.value;
    intervalId = setInterval(updateDuration, 1000 / 66);
}

function initVars() {
    video = document.getElementById('player');
    durationControl = document.getElementById('durationLevel');
    soundControl = document.getElementById('micLevel');
}

function initPlayButtons() {
    const playButtons = document.querySelectorAll('.play');
    playButtons.forEach(btn => {
        btn.addEventListener('click', playStop);
    });

    const micControl = document.getElementById('mic');
    micControl.addEventListener('click', soundOf);
}

function soundOf() {
    if (video.volume === 0){
        video.volume = soundLevel;
        soundControl.value = soundLevel * 10;
    }else{
        soundLevel = video.volume;
        video.volume = 0;
        soundControl.value = 0;
    }
}

function playStop() {

    $('.video__player-img').toggleClass('video__player-img--active');

    durationControl.max = video.duration;

    if (video.paused) {
        video.play();
        intervalId = setInterval(updateDuration, 1);
    } else {
        video.pause();
        clearInterval(intervalId);
    }
}

function updateDuration() {
    durationControl.value = video.currentTime;
}
