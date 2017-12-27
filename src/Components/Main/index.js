import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';

import { Container } from './style.js'


const Main = props => {
    return (
        <Container>
            <Header/>
            <Sidebar visible={true}/>
        </Container>
    )
}

export default Main
