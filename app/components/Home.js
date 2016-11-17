// @flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FontIcon from 'material-ui/FontIcon';

const Login = (props) => (
  <FlatButton onClick={props.logged} label="Login" />
);

Login.propTypes = {
  logged: React.PropTypes.func.isRequired
};

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Map" />
    <MenuItem primaryText="Forum" />
    <MenuItem primaryText="Shop" />
    <MenuItem onClick={props.logged} primaryText="Logout" />
  </IconMenu>
);

Logged.propTypes = {
  logged: React.PropTypes.func.isRequired
};

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */

const styles = {
  backgroundColor: 'darkGreen'
};

export default class Home extends Component {

  constructor(props: Object) {
    super(props);
    this.state = {
      logged: true
    };
  }

  state: {
    logged: boolean
  };

  logged() {
    this.setState({ logged: !this.state.logged });
  }


  render() {
    return (
      <div>
        <AppBar
          title="freeCodeCamp"
          style={styles}
          iconElementLeft={
            <IconButton>
              <FontIcon className="fa fa-free-code-camp" />
            </IconButton>
          }
          iconElementRight={
            this.state.logged
            ? <Logged logged={this.logged.bind(this)} />
            : <Login logged={this.logged.bind(this)} />
          }
        />
      </div>
    );
  }
}
