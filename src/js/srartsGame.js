import refs from './refs';
import { showsTextPrompts, textPromts } from './showsTextPrompts';
import selectElement from './selectsElement'

function startGame() {
  refs.btnStartGame.addEventListener('click', beginsGame);

  function beginsGame() {
    showsTextPrompts(textPromts.сhoice);

    refs.items.forEach(item => {
      item.classList.add('game-area__scale');
    });
  }
  selectElement()
}

export default startGame;
