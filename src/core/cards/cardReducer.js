import {
  FETCHING_CARDS,
  FILTER_CARD,
  SET_CARDS,
  FILTER_CARD_TECH,
  FILTER_CARD_DETAIL
} from './cardsActions'


const initialState = {
    fetching: false,
    filter: "",
    tech: "Frontend",
    cards: []
}

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {

      case FETCHING_CARDS:
        return { ...state, fetching: true }

      case SET_CARDS:
        return {
          ...state,
          ...{ fetching: false, cards: action.cards }
        }

      case FILTER_CARD:
        return { ...state, filter: action.filter }

      case FILTER_CARD_TECH:
        return { ...state, tech: action.filter }

      case FILTER_CARD_DETAIL:

        return {
            ...state,
            ...{ fetching: false, cards: state.cards.filter( card => card.cardId === action.payload ) }
          }

      default:
        return state
    }
  }

  export default cardsReducer
