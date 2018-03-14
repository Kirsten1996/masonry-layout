var backgroundImage = document.getElementById("bg-image");
backgroundImage.addEventListener("click", changeImage);

function changeImage() {
  document.getElementById("body").style.backgroundImage = "URL('https://images.pexels.com/photos/173301/pexels-photo-173301.jpeg?h=350&auto=compress&cs=tinysrgb')";
}