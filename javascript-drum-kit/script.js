var key;
var keyElement;

window.onload = init;

function init() {
  window.addEventListener("keydown", function(event) {
    console.log("keydown");
    key = event.keyCode;
    keyElement = document.querySelector("div[data-key=\"" + key + "\"]");
    keyElement.className += " playing";
  });
  window.addEventListener("keyup", function(event) {
    console.log("keyup");
    keyElement.className = "key";
  });
}
