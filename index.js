let currentSlide = 0; 

function plusSlides(n) {
  const carousel = document.querySelector('.flex.overflow-x-auto');
  const images = carousel.querySelectorAll('.mySlides');
  const imageWidth = images[0].clientWidth; 

  currentSlide = Math.max(0, Math.min(currentSlide + n, images.length - 1)); 
  carousel.scrollTo({ left: currentSlide * imageWidth, behavior: 'smooth' });
}
