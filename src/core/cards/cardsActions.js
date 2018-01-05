import { FETCHING_CARDS, FILTER_CARD, SET_CARDS, GET_CARDS, FILTER_CARD_TECH } from '../constants'


export const getCards = () => ({
  type: GET_CARDS,
})

export const fetchingCards = () => ({
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

export const setCards = payload => ({
  type: SET_CARDS,
  payload
})
