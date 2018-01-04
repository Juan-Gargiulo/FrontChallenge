import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCards } from '../../core/cards/cardsActions'
import CircularProgress from 'material-ui/CircularProgress';

import { compose, withProps, lifecycle, setDisplayName } from 'recompose'
import withLoading from '../Hocs/LoadingHoc'
import { cardsFiltered } from '../../core/cards/cardSelectors'

import Card from '../../Components/Card'
import PageTitle from '../../Components/layout/PageTitle'

import { primaryColor } from '../../common/colors'
import { Container, GalleryCont } from './style.js'


const Gallery = ({ cards, fetching, getCards, ...props }) => {
   return (
      <Container {...this.props}>
            <PageTitle title={'LANGUAGES & TECHNOLOGIES'} />
            <GalleryCont >
            { renderCards(cards) }
            </GalleryCont>
      </Container>
   )
}

const renderCards = cards => cards.map(card => <Card card={card} key={card.cardId} />)


const enchanced = compose(
      connect(
            state => ({
                  loading: state.cards.fetching,
                  cards: cardsFiltered(state)
            }),
            dispatch => ({
                  getCards: () => dispatch(getCards())
            })
      ),
      withProps({
        spinnerColor: primaryColor,
        spinnerthickness: 15,
        spinnerSize: 100
		  }),
      lifecycle({
            componentWillMount() {
                  this.props.getCards();
            },
      }),
      withLoading, //spinner HOC
)

export default enchanced(Gallery);
