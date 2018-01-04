import React, { Component } from 'react'
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import { style } from './style'

import debounce from 'lodash.debounce';

export default class Search extends Component {

  constructor(props) {
    super(props);
  }

  debounceEventHandler(fn) {
    const debounced = debounce(fn, 1000);

    return (e) => {
      e.persist();
      return debounced(e.currentTarget.value);
    };
  }

  render() {

    const { hintText, filterFn } = this.props

    return (
      <div style={style.container}>
        <TextField
          hintText={style.hintText}
          fullWidth={true}
          inputStyle={style.inputStyle}
          hintStyle={style.hintStyle}
          onChange={this.debounceEventHandler(filterFn)}
        />
      </div>
    )
  }

}

Search.propTypes = {
  hintText: PropTypes.string,
  filterFn: PropTypes.func
};
