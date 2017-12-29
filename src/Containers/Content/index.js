import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom'

import Gallery from '../Gallery';
import Detail from '../Detail';

import { Container, Body } from './style.js'


export const Content = ({...props}) => (
    <Router>
        <Container>
                <Route exact path="/" component={Gallery}/>
                <Route exact path="/detail" component={Detail}/>
        </Container>
    </Router>
)



