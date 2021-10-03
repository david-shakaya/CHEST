import refs from './refs';
import { showsTextPrompts, textPromts } from './showsTextPrompts';
import { selectElement } from './selectsElement';
import { state, renderGamesAvailable } from './buysGames';

const clickStartGame = {
  click: false,
  addedListener: false,
};

function startGame() {

  if(!clickStartGame.addedListener) {
    refs.btnStartGame.addEventListener('click', beginsGame);
    clickStartGame.addedListener = true
  }

  function beginsGame() {
    if (state.gamesАvailable === 0 || clickStartGame.click === true) {
      return;
    }

    clickStartGame.click = !clickStartGame.click;
    showsTextPrompts(textPromts.сhoice);
    state.gamesАvailable -= 1;
    renderGamesAvailable();
    deleteClassFromGameArea()

    refs.items.forEach(item => {
      item.classList.add('game-area__scale');
    });
  }
  selectElement();
}

const deleteClassFromGameArea = () => {
  refs.listItems.classList.remove('game-area__overlay')
}

export { startGame, clickStartGame };
