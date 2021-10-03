import refs from "./refs";



const renderListBoxes = () => {
  const listBoxes =  '<li class="game-area__item game-area-item-js"></li><li class="game-area__item game-area-item-js"></li><li class="game-area__item game-area-item-js"></li><li class="game-area__item game-area-item-js"></li><li class="game-area__item game-area-item-js"></li><li class="game-area__item game-area-item-js"></li><li class="game-area__item game-area-item-js"></li><li class="game-area__item game-area-item-js"></li><li class="game-area__item game-area-item-js"></li>'
  refs.listItems.innerHTML = listBoxes;
}
 
export default renderListBoxes;
