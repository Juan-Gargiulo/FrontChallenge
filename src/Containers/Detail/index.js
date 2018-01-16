import React from 'react'
import { connect } from 'react-redux'
import RC2 from 'react-chartjs2';

import { BackButton } from '../../Components/backButton'

import { cardById } from '../../core/cards/cardSelectors'

// Styles
import { COLOR } from '../../common/colors'

import {
  Container,
  DescriptionContainer,
  Description,
  HeaderContainer,
  HeaderTitle,
  Graph,
} from './style'

import { compose, withProps, pure } from 'recompose'
import withLoading from '../Hocs/LoadingHoc'

const CardDetail = ({
    ...props,
    card,
    getCardDetail,
    history : { goBack },
    match : { params : id }

}) => {

    const chartData = {
      datasets: [
        {
          label: card.cardTitle + 'Development',
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],

          borderWidth: 0,
          data: card.cardGraph.data,
        }
      ]
    };

    return <Container backFn={goBack}>
        <HeaderContainer img={card.cardPost.postImageUrl}>
            <BackButton top={"10px"} {...props}/>
            <HeaderTitle>{card.cardTitle}</HeaderTitle>
        </HeaderContainer>
        <DescriptionContainer>
        <Description>{card.cardPost.postDescription}</Description>
        <Graph>
          <RC2 data={chartData}  type='doughnut' />
        </Graph>
        </DescriptionContainer>
    </Container>
}

export default compose(
    connect(
        (state, props) => ({
          loading: state.cards.fetching,
          card: cardById(state, props),
        }),
    ),
    withProps({
        spinnerColor: COLOR.primaryColor,
        spinnerthickness: 15,
        spinnerSize: 100
    }),
    withLoading,
    pure
)(CardDetail);
