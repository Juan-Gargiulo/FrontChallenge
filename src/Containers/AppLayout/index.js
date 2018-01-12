import React, { Component } from 'react'
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    overflow-y: none;
`

export const Body = styled.div`
    display: flex;
    height: calc(100vh - 60px);
`

export const Content = styled.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default class AppLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navVisible: true
        };

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar(){
        this.setState({
            navVisible: !this.state.navVisible
        })
    }

    render() {

        const { Component } = this.props;

        return (
                <Container>
                    <Header toggleSidebar={this.toggleSidebar}/>
                    <Body>
                        <Sidebar navVisible={this.state.navVisible}/>
                        <Content navVisible={this.state.navVisible}>
                          <Component {...this.props}/>
                        </Content>
                    </Body>
                </Container>

        )
    }
}
