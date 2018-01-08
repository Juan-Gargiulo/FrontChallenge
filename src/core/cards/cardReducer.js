import { FETCHING_CARDS, FILTER_CARD, SET_CARDS, FILTER_CARD_TECH } from '../constants'

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
        return { ...state, ...{fetching: false, cards: action.cards} }

      case FILTER_CARD:
        return { ...state, filter: action.filter }

      case FILTER_CARD_TECH:
        return { ...state, tech: action.filter }

      default:
        return state
    }
  }

  export default cardsReducer
