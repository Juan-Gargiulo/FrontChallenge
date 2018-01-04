import React from 'react'
import { Container } from './style'

import Search from '../controls/Search'


const mostrarMsg = msg => {
  console.log(msg)
}

const Sidebar = props => {
  return (
    <Container {...props} >
      <Search
        hintText="search in cards"
        filterFn={mostrarMsg}
      />
    </Container>
  )
}

export default Sidebar
