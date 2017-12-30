import React, { Component } from 'react'
import { Container } from './style.js'
import { connect } from 'react-redux'
import { getCards } from '../../core/cards/cardsActions'
import CircularProgress from 'material-ui/CircularProgress';

import Card from '../../Components/Card'

class Gallery extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        const { getCards } = this.props;
        getCards()
    }

    render() {

        const { cards, fetching } = this.props
        console.log(fetching)
        const renderCards = cards => cards.map( card => <Card card={card} /> )
        
        return (
            <Container {...this.props}> 
                { fetching ? 
                   <CircularProgress size={60} thickness={7} /> :
                    renderCards(cards) 
                }
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
      fetching: state.cards.fetching,
      cards: state.cards.cards
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        getCards: () => dispatch(getCards())
    }
}

const ConectedGallery = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Gallery)

export default ConectedGallery