import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCards } from '../../core/cards/cardsActions'
import CircularProgress from 'material-ui/CircularProgress';

import { compose, withProps, lifecycle, setDisplayName } from 'recompose'
import withLoading from '../Hocs/LoadingHoc'

import Card from '../../Components/Card'
import PageTitle from '../../Components/layout/PageTitle'
import { Container, GalleryCont } from './style.js'


const GalleryContainer = ({ cards, fetching, getCards, ...props }) => {
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
                  cards: state.cards.cards
            }),
            dispatch => ({
                  getCards: () => dispatch(getCards())
            })
      ),
      withProps({
			spinnerColor: 'black',
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

export default enchanced(GalleryContainer);
