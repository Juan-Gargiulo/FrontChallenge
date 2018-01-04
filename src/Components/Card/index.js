import React from 'react';
import styled from 'styled-components';

import { secondaryColor, primaryFontColor } from '../../common/colors'

const Container = styled.div`
    display: block;
    min-height: 408px;
    width: 325px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 15px;
    background-color: white;
`
const Description = styled.div`
    padding: 15px 30px 15px 30px;
    color: ${primaryFontColor};
`


const CardImg = styled.img.attrs({
    src: props => props.card.cardImageUrl
})`
    width: 100%;
`

const Card = ({...props, card}) => {
    console.log(card)
    return (
        <Container>
            <CardImg {...props} />
            <Description>
                <p>{card.cardDescription}</p>
            </Description>
        </Container>
    )
}

export default Card