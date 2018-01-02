import React from 'react';
import { Container } from './style';

const Card = ({...props, card}) => {
    console.log(card)
    return (
        <Container>
            <p>{card.cardTitle}</p>
        </Container>
    )
}

export default Card