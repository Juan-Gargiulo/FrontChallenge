import React, { Component } from 'react'
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import { style } from './style'

import debounce from 'lodash.debounce';

import { primaryColor, primaryFontColor, primaryColorStrong } from '../../../common/colors'


export const styles = {
  container: {padding: '25px 20px 10px 25px'},
  inputStyle: {color: primaryColorStrong},
  hintStyle: {color: primaryFontColor},
  underlineStyle: {fill: primaryColor},
  floatingLabelFocusStyle: {fill: primaryColor}
};

export default class Search extends Component {

  constructor(props) {
    super(props);
  }

  debounceEventHandler(fn) {
    const debounced = debounce(fn, 1000);

    return (e) => {
      e.persist();
      return debounced(e.currentTarget.value.toLowerCase());
    };
  }

  render() {

    const { hintText, filterFn } = this.props

    return (
      <div style={styles.container}>
        <TextField
          hintText={hintText}
          fullWidth={true}
          onChange={this.debounceEventHandler(filterFn)}
          {...styles}
        />
      </div>
    )
  }

}

Search.propTypes = {
  hintText: PropTypes.string,
  filterFn: PropTypes.func
};
