let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slides img");
  let dots = document.querySelectorAll(".dot");
  if (n > slides.length / 3) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length / 3 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  let translateX = -(slideIndex - 1) * 100;
  document.querySelector(".slides").style.transform = `translateX(${translateX}%)`;
  dots[slideIndex - 1].className += " active";
}

let autoSlide = setInterval(nextSlide, 3000); 

document.querySelector(".slider").addEventListener("mouseover", () => {
  clearInterval(autoSlide);
});

document.querySelector(".slider").addEventListener("mouseout", () => {
  autoSlide = setInterval(nextSlide, 3000);
});
