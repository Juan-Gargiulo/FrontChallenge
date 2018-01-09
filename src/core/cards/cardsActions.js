export const GET_CARDS = "GET_CARDS"
export const GET_CARD_DETAIL = "GET_CARD_DETAIL"
export const FILTER_CARD_DETAIL = "FILTER_CARD_DETAIL"
export const FILTER_CARD = "FILTER_CARD"
export const SET_CARDS = "SET_CARDS"
export const FETCHING_CARDS = "FETCHING"
export const FILTER_CARD_TECH = "FILTER_CARD_TECH"

export const getCardDetail = (id) => ({
  type: GET_CARD_DETAIL,
  payload: id
})

export const getCards = () => ({
  type: GET_CARDS,
})

export const fetching = () => ({
  type: FETCHING_CARDS,
})

export const setCardFilter = filter => ({
  type: FILTER_CARD,
  filter
})

export const setCardTech = filter => ({
  type: FILTER_CARD_TECH,
  filter
})

export const setCards = cards => ({
  type: SET_CARDS,
  cards
})
