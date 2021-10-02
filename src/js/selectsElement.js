import refs from './refs';

let win = false;

function selectElement() {
  refs.listItems.addEventListener('click', openBox);

  function openBox(event) {
    if (event.target.nodeName === 'LI') {
      event.target.classList.add(returnsClassName());
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

export default selectElement;
