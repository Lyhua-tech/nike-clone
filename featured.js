function hoverDrop(x){
    if (x === 1){
      document.querySelector('#new-feature').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.remove('hidden');
    }
    if (x === 2){
      document.querySelector('#men').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.remove('hidden');
    }
    if (x === 3){
      document.querySelector('#women').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.remove('hidden');
    }
    if (x === 4){
      document.querySelector('#kids').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.remove('hidden');
    }
    if (x === 5){
      document.querySelector('#sales').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.remove('hidden');
    }
    if (x === 6){
      document.querySelector('#jordan').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.remove('hidden');
    }
  }
  function hoverHide(x){
    if (x === -1){
      document.querySelector('#new-feature').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.add('hidden');
    }
    if (x === -2){
      document.querySelector('#men').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.add('hidden');
    }
    if (x === -3){
      document.querySelector('#women').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.add('hidden');
    }
    if (x === -4){
      document.querySelector('#kids').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.add('hidden');
    }
    if (x === -5){
      document.querySelector('#sales').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.add('hidden');
    }
    if (x === -6){
      document.querySelector('#jordan').classList.toggle('hidden');
      document.getElementById('overlay-blur1').classList.add('hidden');
    }
  }

// Hamburger Sidebar
function openNav() {
    document.getElementById("mySidenav").classList.toggle('w-[55%]');
    document.getElementById('overlay-blur').classList.remove('hidden');
    document.querySelector('body').classList.add('overflow-y-hidden')
}

function closeNav() {
    document.getElementById("mySidenav").classList.toggle('w-[55%]');
    document.getElementById('overlay-blur').classList.add('hidden');
    document.querySelector('body').classList.remove('overflow-y-hidden')
}

function hideDropDown(x){
    if (x === -1){
        let dropdownside = document.getElementById('newfeature');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === -2){
        let dropdownside = document.getElementById('men-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === -3){
        let dropdownside = document.getElementById('women-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === -4){
        let dropdownside = document.getElementById('kids-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === -5){
        let dropdownside = document.getElementById('sales-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
    if (x === -6){
        let dropdownside = document.getElementById('jordan-drop');
        dropdownside.classList.toggle('h-[300px]')
    }
}