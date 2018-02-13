function displayNextImage() {
      x = (x === images.length - 1) ? 0 : x + 1;

      document.getElementById("img0").src = images[(x + 0) % (images.length)];
      document.getElementById("img1").src = images[(x + 1) % (images.length)];
      document.getElementById("img2").src = images[(x + 2) % (images.length)];
      document.getElementById("img3").src = images[(x + 3) % (images.length)];
}

function startTimer() {
  setInterval(displayNextImage, 3000);
}

var images = [], x = -1;
images[0] = "assets/img/screen/screen1.jpg";
images[1] = "assets/img/screen/screen2.jpg";
images[2] = "assets/img/screen/screen3.jpg";
images[3] = "assets/img/screen/screen2.png";
