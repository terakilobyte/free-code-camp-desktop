// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FontIcon from 'material-ui/FontIcon';

const Login = (props) => (
  <FlatButton {...props} label="Login" />
);

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */

 const styles = {
   backgroundColor: 'darkGreen'
 }
export default class Home extends Component {

  constructor(props: Object) {
    super(props);
    this.state = {
      logged: true
    };
  }

  render() {
    return (
      <div>
        <AppBar
          title="freeCodeCamp"
          style={styles}
          iconElementLeft={<IconButton><FontIcon className="fa fa-free-code-camp" /></IconButton>}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
      </div>
    );
  }
}
