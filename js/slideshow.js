var currentSlide = 0;

function slideshow() {
  var i;
  var slides = document.getElementsByClassName("slideshow-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  currentSlide++;
  if (currentSlide > slides.length) {
    currentSlide = 1
  };
  slides[currentSlide - 1].style.display = "block";
  setTimeout(slideshow, 5000);
}

slideshow();
