import './sass/main.scss';
import refs from './js/refs';

const price = 5;
let gamesАvailable = 0;
let gamesQuantity = 0;
let sum = 0;

// refs.gamesAvailable.textContent = gamesАvailable;

refs.btnPlus.addEventListener('click', plusToQuantity);
refs.btnMinus.addEventListener('click', minusFromQuantity);
refs.btnBuy.addEventListener('click', buyedGames);

function plusToQuantity() {
  gamesQuantity += 1;
  sum += 5;
  renderQuantity();

  refs.btnMinus.classList.remove('player-scoreboard__btn-minus--disabled')
}

function minusFromQuantity() {
  if (gamesQuantity > 0) {
    gamesQuantity -= 1;
    sum -= 5;
    renderQuantity();
  }
  
  if(gamesQuantity === 0){
    refs.btnMinus.classList.add('player-scoreboard__btn-minus--disabled')
  }
}

function renderQuantity() {
  refs.gamesQuantity.textContent = gamesQuantity;
  refs.sum.innerHTML = `${sum} <span class="player-scoreboard__sum-icon">$</span>`;

  // .player-scoreboard__btn
}

function renderGamesAvailable() {
  gamesАvailable += gamesQuantity;
  refs.gamesAvailable.textContent = gamesАvailable;
}

function buyedGames() {
  if (gamesQuantity === 0) {
    return;
  }
  renderGamesAvailable();
  resetNumbers();
  refs.btnMinus.classList.add('player-scoreboard__btn-minus--disabled')
  renderQuantity();
  
}

function resetNumbers() {
  gamesQuantity = 0;
  sum = 0;
}



// import '../node_modules/basiclightbox/dist/basiclightbox.min.css';

// import { fetchImages, clearDom } from './js/apiService';
// import '../node_modules/toastr/build/toastr.css';
