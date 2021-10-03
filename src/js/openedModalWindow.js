import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

import refs from './refs';
import { showsTextPrompts, textPromts } from './showsTextPrompts';
import { win } from './selectsElement';
import renderListBoxes from './renderListBoxes'
// import { state } from './buysGames';

const instance = () => {
  return basicLightbox.create(
    `
    <div class="modal">
    <p class="modal-text">
    ${returnsTextForModal()}
   </p>
        <button>Ок</button>
    </div>
`,
    {
      onShow: instance => {
        instance.element().querySelector('button').onclick = () => {
          showsTextPrompts(textPromts.сlickStart());
          renderListBoxes()
          return instance.close();
        };
      },
      closable: false,
    },
  );
};

const returnsTextForModal = () => {
  if (win) {
    return 'К сожалению вы проиграли, еще раз ?';
  }
  return 'Да ты красавчик, так держать! Еще раз ?';
};

export default instance;

