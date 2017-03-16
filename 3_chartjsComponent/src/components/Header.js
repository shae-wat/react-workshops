import React, { Component } from 'react';

import '../App.css';

class Header extends Component {
  render() {
    return (
      <header className="appHeader">
        <img src={this.props.logo} className="appLogo" alt="logo" />
      </header>
    );
  }
}

export default Header;
