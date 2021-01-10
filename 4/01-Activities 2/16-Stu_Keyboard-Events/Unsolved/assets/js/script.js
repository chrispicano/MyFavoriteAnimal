var eventType = document.querySelector("#event-type");
var keyEventsEl = document.querySelector("#key-events");
//var statusEl = document.querySelector("#status");
//var keyEl = document.querySelector("#key");

function keydownAction(event) {
  // TODO: Complete keydown function
  var keyPress = event.key;
  var keyCode = event.code;

  document.querySelector("#key").textContent = keyPress;
  document.querySelector("code").textContent = keyCode;
  
  
  document.querySelector("#status").innerHTML = "KEYUP Event";
  keyEl.innerHTML = event.keyEl
}
    

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
