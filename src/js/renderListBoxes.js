import refs from "./refs";

const renderListBoxes = () => {
  const listBoxes =  '<li class="game-area__item game-area-item-js game-area__scale"></li><li class="game-area__item game-area-item-js game-area__scale"></li><li class="game-area__item game-area-item-js game-area__scale"></li><li class="game-area__item game-area-item-js game-area__scale"></li><li class="game-area__item game-area-item-js game-area__scale"></li><li class="game-area__item game-area-item-js game-area__scale"></li><li class="game-area__item game-area-item-js game-area__scale"></li><li class="game-area__item game-area-item-js game-area__scale"></li><li class="game-area__item game-area-item-js game-area__scale"></li>'
  refs.listItems.innerHTML = listBoxes;
}
 
export default renderListBoxes;
