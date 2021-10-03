import refs from './refs';
import {showsTextPrompts, textPromts} from './showsTextPrompts'
import {startGame} from './srartsGame'

const state = {
  gamesАvailable: 0,
  gamesQuantity: 0,
  sum: 0,
  startedGame:false,
};

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
}

function renderGamesAvailable() {
  state.gamesАvailable += state.gamesQuantity;
  refs.gamesAvailable.textContent = state.gamesАvailable;
}

function buyedGames() {
  if (state.gamesQuantity === 0) {
    return;
  }
  if(!state.startedGame){
    startGame()
    state.startedGame = true
  }
  renderGamesAvailable();
  showsTextPrompts(textPromts.game)
  resetNumbers();
  refs.btnMinus.classList.add('player-scoreboard__btn-minus--disabled');
  renderQuantity();
}

function resetNumbers() {
  state.gamesQuantity = 0;
  state.sum = 0;
}

export {renderGamesAvailable ,state};