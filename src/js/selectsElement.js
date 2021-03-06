import refs from './refs';
import instance from './openedModalWindow';
import { clickStartGame } from './srartsGame';

let win = false;

function selectElement() {
  refs.listItems.addEventListener('click', openBox);

  function openBox(event) {
    if (event.target.nodeName === 'LI') {
      event.target.classList.add(returnsClassName());
      refs.listItems.classList.add('game-area__overlay')
      instance().show()
      const btn = document.querySelector('.modall-btn-js')
      clickStartGame.click = false
    }
  }
}

const returnsClassName = () => {
  let result = '';
  win = !win;
  if (win) {
    result = 'game-area__item--win';
  } else {
    result = 'game-area__item--lose';
  }
  return result;
};

export {selectElement, win};
