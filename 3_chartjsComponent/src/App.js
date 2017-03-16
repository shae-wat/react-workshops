import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header.js';
import Toggle from './components/Toggle.js';

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
      </section>
    );
  }

  handleToggle = (tab) => {
    this.setState({
      activeTab: tab,
    });
  }
}

export default App;
