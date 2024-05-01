let currentSlide = 0; 

function plusSlides(n) {
  const carousel = document.querySelector('.flex.overflow-x-auto');
  const images = carousel.querySelectorAll('.mySlides');
  const imageWidth = images[0].clientWidth; 

  currentSlide = Math.max(0, Math.min(currentSlide + n, images.length - 1)); 
  carousel.scrollTo({ left: currentSlide * imageWidth, behavior: 'smooth' });
}

function hoverShow(){
  let whiteblock = document.getElementById('white-block')
  let footersec = document.getElementById('footer-sec')
  whiteblock.classList.add('hidden')
  footersec.classList.add('top-[183px]')
}
function hoverhide(){
  let whiteblock = document.getElementById('white-block')
  let footersec = document.getElementById('footer-sec')
  whiteblock.classList.remove('hidden')
  footersec.classList.remove('top-[183px]')
}