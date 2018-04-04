var sb;

window.onload = function() {
  setupSpacebrew();
  // setupUI();
  window.addEventListener("keydown", dealWithKeyboard, false);
  window.addEventListener("keypress", dealWithKeyboard, false);
  window.addEventListener("keyup", dealWithKeyboard, false);
};

function setupSpacebrew() {
  sb = new Spacebrew.Client(); //connect to  Spacebrew

  sb.name("new 훈민정악"); //The name of App
  sb.description("this is a TECIT Group app.");

  sb.addPublish("text", "string", ""); //out
  sb.addSubscribe("text", "string"); //in

  // sb.onBooleanMessage = onBooleanMessage;
  sb.onStringMessage = onStringMessage; //String = Text
  // sb.onRangeMessage = onRangeMessage;
  // sb.onCustomMessage = onCustomMessage;

  sb.connect();

  var button = document.getElementById("btnSend"); //Button
  button.addEventListener("mouseup", onButtonPress); //Button Pressed
}

// function onBooleanMessage(name, value) {
//   console.log("Boolean: " + name + ":" + value);
// }

function onStringMessage(name, value) {
  console.log("String: " + name + ":" + value); //input Text
  document.getElementById("txtReceive").innerHTML = value; //Show on HTML
}

function dealWithKeyboard(e) {
  var textfield = document.getElementById("txtSend").value; //Prepare to send text
  sb.send("text", "string", textfield); //Send
}
// function onRangeMessage(name, value) {
//   console.log("Range: " + name + ":" + value);
// }
//
// function onCustomMessage(name, value) {
//   console.log("Custom: " + name + ":" + value);
// }

// function setupUI() {
//   var about = document.getElementById("appname");
//   about.innerHTML = appName;
// }

function onButtonPress() {
	var textfield = document.getElementById("txtSend").value; //Prepare to send text
  sb.send("text", "string", textfield); //Send
  console.log("[onButtonPress] button has been pressed" + ":" + " " + textfield);
}
