import React from 'react';
import {Container, Logo} from './style';

const Header = ({toggleSidebar, ...props}) => {
    return (
        <Container primary>
            <Logo onClick={toggleSidebar}/>
        </Container>
    )
}

export default Header