import './sass/main.scss';
import refs from './js/refs';

const state = {
  gamesАvailable: 0,
  gamesQuantity: 0,
  sum: 0,
};

const price = 5;
// let gamesАvailable = 0;
// let gamesQuantity = 0;
// let sum = 0;

refs.btnPlus.addEventListener('click', plusToQuantity);
refs.btnMinus.addEventListener('click', minusFromQuantity);
refs.btnBuy.addEventListener('click', buyedGames);

function plusToQuantity() {
  state.gamesQuantity += 1;
  state.sum += 5;
  renderQuantity();

  refs.btnMinus.classList.remove('player-scoreboard__btn-minus--disabled');
}

function minusFromQuantity() {
  if (state.gamesQuantity > 0) {
    state.gamesQuantity -= 1;
    state.sum -= 5;
    renderQuantity();
  }

  if (state.gamesQuantity === 0) {
    refs.btnMinus.classList.add('player-scoreboard__btn-minus--disabled');
  }
}

function renderQuantity() {
  refs.gamesQuantity.textContent = state.gamesQuantity;
  refs.sum.innerHTML = `${state.sum} <span class="player-scoreboard__sum-icon">$</span>`;

  // .player-scoreboard__btn
}

function renderGamesAvailable() {
  state.gamesАvailable += state.gamesQuantity;
  refs.gamesAvailable.textContent = state.gamesАvailable;
}

function buyedGames() {
  if (state.gamesQuantity === 0) {
    return;
  }
  renderGamesAvailable();
  resetNumbers();
  refs.btnMinus.classList.add('player-scoreboard__btn-minus--disabled');
  renderQuantity();
}

function resetNumbers() {
  state.gamesQuantity = 0;
  state.sum = 0;
}

export default state;

// import '../node_modules/basiclightbox/dist/basiclightbox.min.css';

// import { fetchImages, clearDom } from './js/apiService';
// import '../node_modules/toastr/build/toastr.css';
