import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose';

import { setCardFilter, setCardTech } from '../../core/cards/cardsActions';

import { Container } from './style'

import Search from '../controls/Search'
import RadioGroup from '../controls/Filter'

function radioSelected(e, value) {
  console.log(value)
}

const Sidebar = ({...props, filterFn, setTech}) => {
  return (
    <Container {...props} >
      <Search
        hintText="search in cards"
        filterFn={filterFn}
      />
      <RadioGroup radioSelected={setTech}/>
    </Container>
  )
}

const enchanced = compose(
  connect(
    null,
    dispatch => ({
      filterFn: filter => dispatch(setCardFilter(filter)),
      setTech: (e, tech) => dispatch(setCardTech(tech))
    })
  )
)

Sidebar.propTypes = {
  filterFn: PropTypes.func,
};

export default enchanced(Sidebar)
