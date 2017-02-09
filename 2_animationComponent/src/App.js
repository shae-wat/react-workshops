import React, { Component } from 'react';
import logo from './logo.svg';
import Toggle from './components/Toggle.js';
import Component1 from './components/Component1.js';
import Component2 from './components/Component2.js';

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
        <Toggle 
          tab={this.state.activeTab}
          handleToggle={this.handleToggle}
          />
        <Component1 
          activeTab={this.state.activeTab}
          bananas='b'
          oranges='o'
          />
        <Component2 
          activeTab={this.state.activeTab}
          />
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
