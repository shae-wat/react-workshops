import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header.js';
import Toggle from './components/Toggle.js';
import Component1 from './components/Component1.js';
import Component2 from './components/Component2.js';
import section from './actions/section.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: '1' };
  }

  render() {
    return (
      <section className='animationComponent'>
        <Header
          logo={logo}
        />
        <Toggle
          tab={this.state.activeTab}
          handleToggle={this.handleToggle}
        />
        <Component1
          activeTab={this.state.activeTab}
        />
        <Component2
          activeTab={this.state.activeTab}
        />
      </section>
    );
  }

  handleToggle = (tab) => {
    this.setState({
      activeTab: tab,
    });
    //section.setSection('component1');
  }
}

export default App;
