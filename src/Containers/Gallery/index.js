import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCards } from '../../core/cards/cardsActions'
import CircularProgress from 'material-ui/CircularProgress';

import { compose, withProps, lifecycle } from 'recompose'
import withLoading from '../Hocs/LoadingHoc'

import Card from '../../Components/Card'
import { Container } from './style.js'

const Gallery = ({ cards, fetching, getCards, ...props }) => {
   return (
      <Container {...this.props}> 
         { renderCards(cards) }
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

export default enchanced(Gallery);