import React, { Component } from 'react';
import logo from './logo.svg';
import Toggle from './components/Toggle.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: '1' };
  }

  render() {
    return (
      <div className='animationComponent'>
        <div className="appHeader">
          <img src={logo} className="appLogo" alt="logo" />
        </div>
        <div className='toggle'>
          <Toggle 
            tab={this.state.activeTab}
            handleToggle={this.handleToggle}
            />
        </div>
      </div>
    );
  }

  handleToggle = (tab) => {
    this.setState({
      activeTab: tab,
    });
  }
}

export default App;
