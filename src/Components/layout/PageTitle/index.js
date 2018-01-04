import React from 'react';
import styled from 'styled-components';

import { secondaryColor, primaryFontColor } from '../../../common/colors'

const Container = styled.div`
    margin: 5px 2px 2px 5px;
`

const Title = styled.h2`
    color: ${primaryFontColor};
`

const pageTitle = ({title}) => {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    )
}

export default pageTitle