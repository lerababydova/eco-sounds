const audio = new Audio();
audio.src = "./assets/audio/forest.mp3";

document.addEventListener("DOMContentLoaded", ready);
function ready() {
  initAudioPlayer();
}

function initAudioPlayer() {
  const toggleButton = document.querySelector(".toggle-button");
  toggleButton.addEventListener("click", toggleAudio);
  const audioPreset = document.getElementById("audio-preset");
  audioPreset.addEventListener("click", handleSwitchAudio);
}

function toggleAudio() {
  const isPlay = !audio.paused;
  const toggleButton = document.querySelector(".toggle-button");

  if (isPlay) {
    audio.pause();
    toggleButton.style.backgroundImage = "url(./assets/svg/play.svg)";
  } else {
    audio.play();
    toggleButton.style.backgroundImage = "url(./assets/svg/pause.svg)";
  }
}

function handleSwitchAudio(event) {
  const fileName = event.target.dataset.audio;
  const imageBack = document.querySelector(".main");
  if (fileName) {
    audio.src = `./assets/audio/${fileName}.mp3`;
    imageBack.style.backgroundImage = `url(./assets/img/${fileName}.jpg)`;
    toggleAudio();
    const activeButtons = document.querySelectorAll("[data-audio]");
    activeButtons.forEach((el) => {
      el.classList.remove("active");
    });
    event.target.classList.add("active");
  }
}
