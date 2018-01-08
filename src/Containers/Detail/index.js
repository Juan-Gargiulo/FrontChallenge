import React, { Component } from 'react'
import { Container } from './style.js'

export default class Detail extends Component {
    render() {
        console.log(this.props)
        return (
            <Container {...this.props}>
              { this.props.match.params.id }
              <p onClick={this.props.history.goBack}>volver</p>
            </Container>
        )
    }
}
