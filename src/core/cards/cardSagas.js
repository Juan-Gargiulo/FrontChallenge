import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { FETCHING_CARDS, SET_CARDS, GET_CARDS } from '../constants'
import { fetchCards } from './api'

function* getCards() {
    try {
       yield put({type: FETCHING_CARDS});
       const cards = yield call(fetchCards);
       yield put({type: SET_CARDS, cards});
       
    } catch (e) {
       console.log(e.message)
    }
 }


export const cardsSagas = [
    takeEvery(GET_CARDS, getCards),
];