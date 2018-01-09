import { call, put, takeEvery } from 'redux-saga/effects'
import {delay} from 'redux-saga';

import { GET_CARDS, GET_CARD_DETAIL, FILTER_CARD_DETAIL } from './cardsActions'

import { fetching, setCards, getCardDetail } from './cardsActions'
import { fetchCardsApi } from './api'

function* getCards() {
    try {
       yield put( fetching() );
       const cards = yield call( fetchCardsApi );

       yield call(delay, 1000)

       yield put( setCards(cards) );
       
    } catch (e) {
       console.log(e.message)
    }
 }

 function* filterCardDetail({payload}) {
    try {
       yield put( fetching() );

       yield call(delay, 1000)

       yield put( {
        type: FILTER_CARD_DETAIL,
        payload
      } );

       
    } catch (e) {
       console.log(e.message)
    }
 }

 function *sleep(time) {
    yield new Promise(resolve => setTimeout(resolve, time));
  }

export const cardsSagas = [
    takeEvery(GET_CARDS, getCards),
    takeEvery(GET_CARD_DETAIL, filterCardDetail),
];