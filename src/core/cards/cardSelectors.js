import { createSelector } from 'reselect';

const cards = state => state.cards.cards
const filter = state => state.cards.filter

export const cardsFiltered = createSelector(
  [cards, filter],
  (cards, filter) => cards.filter(cards => cards.cardDescription.toLowerCase().includes(filter))
);
