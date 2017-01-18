var key;
var keyElement;
var audio;

window.onload = init;

function init() {
  window.addEventListener("keydown", function(event) {
    setKeyVariables(event);
    keyElement.className += " playing";
    audio = document.querySelector("audio[data-key=\"" + key + "\"]");
    if (!audio.paused) { // Stops sound if it's currently playing
      audio.pause();
      audio.currentTime = 0;
    }
    audio.play();
  });
  window.addEventListener("keyup", function(event) {
    setKeyVariables(event);
    keyElement.className = "key";
  });
}

function setKeyVariables(event) {
  key = event.keyCode;
  keyElement = document.querySelector("div[data-key=\"" + key + "\"]");
}
