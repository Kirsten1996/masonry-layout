var textInput = document.getElementById("textInput");
var text = document.getElementById("heading");
var btn = document.getElementById("btn");


textInput.addEventListener("change", function() {
  text.innerHTML = textInput.value;

});

var imageInput = document.getElementById("imageInput");
var image = document.getElementById("body");
var imageBtn = document.getElementById("imageBtn");


imageInput.addEventListener("change", function() {
  document.getElementById("body").style.backgroundImage = "URL("+imageInput.value+")";

});
