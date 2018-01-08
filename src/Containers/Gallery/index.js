import React from 'react'
import { connect } from 'react-redux'
import { getCards } from '../../core/cards/cardsActions'

import { compose, withProps, lifecycle } from 'recompose'
import withLoading from '../Hocs/LoadingHoc'
import { cardsSelected } from '../../core/cards/cardSelectors'

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
                  tech: state.cards.tech,
                  cards: cardsSelected(state)
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
