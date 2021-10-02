import state from './buysGames'
import refs from './refs'


const textPromts = {
    game: `Поздравляем с покупкой игр(ы).Нажми кноку играть и выбери сундук!`,
    сhoice: 'Все верно, теперь выбери сундук',
    q: 'Юхууу, вы выиграли!!!',
    a: 'К сожалению фортуна не на вашей стороне'
}

function showsTextPrompts(textVariable) {
    renderTextPrompts(textVariable)
}  

function renderTextPrompts (text) {
    refs.wrapperText.textContent = text
}

export {showsTextPrompts, textPromts};