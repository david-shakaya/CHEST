import {state} from './buysGames'
import refs from './refs'


const textPromts = {
    game: `Поздравляем с покупкой игр(ы).Нажми кноку играть и выбери сундук!`,
    сhoice: 'Все верно, теперь выбери сундук',
    win: 'Юхууу, вы выиграли!!!',
    lose: 'К сожалению фортуна не на вашей стороне',
    сlickStart() {
        if(!state.gamesАvailable){
           const noGames = 'Нужно купить игры для продолжения'
           return `У вас осталось ${state.gamesАvailable} игр(ы).${noGames}`
        }
      return `У вас осталось ${state.gamesАvailable} игр(ы). Нажмите кнопку ИГРАТЬ!`
    },
}

function showsTextPrompts(textVariable) {
    renderTextPrompts(textVariable)
}  

function renderTextPrompts (text) {
    refs.wrapperText.textContent = text
}

export {showsTextPrompts, textPromts};