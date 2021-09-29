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
  sum +=5;
  renderQuantity()
}

function minusFromQuantity() {
  if (gamesQuantity > 0) {
    gamesQuantity -= 1;
    sum -=5;
    renderQuantity()
  }
  return;
}

function renderQuantity () {
    refs.gamesQuantity.textContent = gamesQuantity;
    refs.sum.textContent = sum;
}

function renderGamesAvailable () {
    gamesАvailable += gamesQuantity;
    refs.gamesAvailable.textContent = gamesАvailable;
    console.log('gamesQuantity', gamesQuantity)
    console.log(gamesАvailable)
}


function buyedGames () {
    console.log(gamesАvailable)
    renderGamesAvailable()
    resetNumbers()
    renderQuantity()    
}


function resetNumbers() {
    gamesQuantity = 0;
    sum = 0;
}


// import '../node_modules/basiclightbox/dist/basiclightbox.min.css';

// import { fetchImages, clearDom } from './js/apiService';
// import '../node_modules/toastr/build/toastr.css';
// import debounce from 'lodash.debounce';
// import fetchHomePage from './js/fetchHomePage';
// import './js/render-saves-picture-page';
// import activePages from './js/activePages';
// import './js/observer-scroll';

// const input = refs.searchForm.firstElementChild;
// input.addEventListener('input', debounce(getsInputValue, 500));

// let query = '';
// function getsInputValue(e) {
//   query = e.target.value;
//   if (query === '') {
//     activePages.isActiveHomePage = false;
//     clearDom();
//     input.removeEventListener('input', debounce(getsInputValue, 500));
//     fetchHomePage();
//     refs.hideSpiner.classList.remove('loader');
//     refs.buttonHeaderHome.removeEventListener('click', refetchHomePageOnClick);
//     return;
//   }
//   refs.hideSpiner.classList.add('loader');
//   fetchImages(query);
//   clearDom();

//   if (!activePages.isActiveHomePage) {
//     refs.buttonHeaderHome.addEventListener('click', refetchHomePageOnClick);
//   }
// }

// function refetchHomePageOnClick() {
//   refs.buttonHeaderHome.removeEventListener('click', refetchHomePageOnClick);
//   clearDom();
//   fetchHomePage();
//   activePages.isActiveHomePage = true;
// }

// fetchHomePage();
