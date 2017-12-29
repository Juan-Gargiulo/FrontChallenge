import React, { Component } from 'react'
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import Gallery from '../Gallery';
import Detail from '../Detail';
import { Content } from '../Content';

import { connect } from 'react-redux'

import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom'

import { Container, Body } from './style.js'

class App extends Component {

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

        const Loading = () => (
            <div>
                fetching
            </div>
        )

        return (
                <Container>
                    <Header toggleSidebar={this.toggleSidebar}/>
                    <Body>
                        <Sidebar navVisible={this.state.navVisible}/>
                        <Content />
                    </Body>
                </Container>

        )
    }
}

const mapStateToProps = state => {
    return {
      fetching: state.cards.fetching,
    }
}

const ConectedApp = connect(
    mapStateToProps,
    null
  )(App)

export default ConectedApp