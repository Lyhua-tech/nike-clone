let currentSlide = 0; 

function plusSlides(n) {
  const carousel = document.querySelector('.flex.overflow-x-hidden');
  const images = carousel.querySelectorAll('.mySlides');
  const imageWidth = images[0].clientWidth; 

  currentSlide = Math.max(0, Math.min(currentSlide + n, images.length - 1)); 
  carousel.scrollTo({ left: currentSlide * imageWidth, behavior: 'smooth' });
}

function hoverShow(){
  let whiteblock = document.getElementById('white-block')
  let footersec = document.getElementById('footer-sec')
  whiteblock.classList.add('hidden')
  footersec.classList.add('top-[296px]')
}
function hoverhide(){
  let whiteblock = document.getElementById('white-block')
  let footersec = document.getElementById('footer-sec')
  let upperfooter= document.getElementById('upperfooter')
  whiteblock.classList.remove('hidden')
  footersec.classList.remove('top-[296px]')
  
}

function hoverDrop(x){
  if (x === 1){
    document.querySelector('#new-feature').classList.toggle('hidden');
  }
  if (x === 2){
    document.querySelector('#men').classList.toggle('hidden');
  }
  if (x === 3){
    document.querySelector('#women').classList.toggle('hidden');
  }
  if (x === 4){
    document.querySelector('#kids').classList.toggle('hidden');
  }
  if (x === 5){
    document.querySelector('#sales').classList.toggle('hidden');
  }
  if (x === 6){
    document.querySelector('#jordan').classList.toggle('hidden');
  }
}
function hoverHide(x){
  if (x === -1){
    document.querySelector('#new-feature').classList.toggle('hidden');
  }
  if (x === -2){
    document.querySelector('#men').classList.toggle('hidden');
  }
  if (x === -3){
    document.querySelector('#women').classList.toggle('hidden');
  }
  if (x === -4){
    document.querySelector('#kids').classList.toggle('hidden');
  }
  if (x === -5){
    document.querySelector('#sales').classList.toggle('hidden');
  }
  if (x === -6){
    document.querySelector('#jordan').classList.toggle('hidden');
  }
}

function toggleDropdown() {
  var form = document.getElementById("sales-tog");
  form.classList.toggle("h-[200px]");
}