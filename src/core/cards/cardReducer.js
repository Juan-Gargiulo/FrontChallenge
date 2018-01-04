import { FETCHING_CARDS, FILTER_CARD, SET_CARDS } from '../constants'

const initialState = {
    fetching: false,
    filter: "",
    cards: []
}

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {

      case FETCHING_CARDS:
        console.log("fetching")
        return { ...state, fetching: true }


      case SET_CARDS:
        console.log(action.cards)
        return { ...state, ...{fetching: false, cards: action.cards} }

      case FILTER_CARD:
        return { ...state, filter: action.filter }

      default:
        return state
    }
  }

  export default cardsReducer
