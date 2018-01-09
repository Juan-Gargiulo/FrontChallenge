import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';

import { BackButton } from '../../Components/backButton'
import { backgroudColor, primaryColorStrong, primaryColor } from '../../common/colors'

import { compose, lifecycle, withProps, pure } from 'recompose'
import withLoading from '../Hocs/LoadingHoc'

import { getCardDetail } from '../../core/cards/cardsActions'

export const Container = styled.div`
    width: ${props => props.navVisible ? "calc(100% - 300px)" : "100%"};
    height: calc(100vh - 60px);
    background-color: ${backgroudColor};
`

export const HeaderContainer = styled.div`
    background-image: url(${props => props.img});
    background-position: center;
    position: relative;
    width: 100%;
    height: 200px;
`

export const HeaderTitle = styled.p`
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2em;
    color: ${primaryColorStrong};
    text-shadow: 3px 3px 3px black

`

const CardDetail = ({
    ...props, 
    card,
    getCardDetail,
    history : { goBack },
    match : { params : id }
    
}) => {
    
    
    return <Container backFn={goBack}>
        <HeaderContainer img={card.cardPost.postImageUrl}>
            <BackButton top={"10px"} {...props}/>     
            <HeaderTitle>{card.cardTitle}</HeaderTitle>
        </HeaderContainer>
    </Container>    
}

export default compose(
    connect(
        state => ({
            loading: state.cards.fetching,
            card: state.cards.cards[0]
        }),
        dispatch => ({
            getCardDetail: id => dispatch(getCardDetail(id))
        })
    ),
    withProps({
        spinnerColor: primaryColor,
        spinnerthickness: 15,
        spinnerSize: 100
    }),
    lifecycle({
        componentWillMount() {
            const id = parseInt(this.props.match.params.id)
            console.log(id)
            this.props.getCardDetail(id);
        },
    }),
    withLoading,
    pure
)(CardDetail);
