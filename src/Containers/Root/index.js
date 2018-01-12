import * as React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Routes } from '../Routes';
import { injectGlobal } from 'styled-components';
import Roboto from '../../Roboto.ttf';

injectGlobal`
    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto});
    }

    body{
        font-family: Roboto;
    }
`

const muiTheme = getMuiTheme({
  palette: {
    disabledColor: '#628292',
    primary1Color: '#004d72'
  }
});

class Root extends React.Component {


  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Routes />
      </MuiThemeProvider>
    );
  }
}

export default Root;
