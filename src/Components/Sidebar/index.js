import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose';

import { setCardFilter } from '../../core/cards/cardsActions';

import { Container } from './style'

import Search from '../controls/Search'



const Sidebar = ({...props, filterFn}) => {
  return (
    <Container {...props} >
      <Search
        hintText="search in cards"
        filterFn={filterFn}
      />
    </Container>
  )
}

const enchanced = compose(
  connect(
    null,
    dispatch => ({
      filterFn: filter => dispatch(setCardFilter(filter))
    })
  )
)

Sidebar.propTypes = {
  filterFn: PropTypes.func,
};

export default enchanced(Sidebar)
