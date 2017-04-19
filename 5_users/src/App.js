import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header.js';
import Toggle from './components/Toggle.js';
import Component1 from './components/Component1.js';
import Component2 from './components/Component2.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('App section id', this.props.section.id)
    return (
      <section className='animationComponent'>
        <Header
          logo={logo}
        />
        <Toggle
          tab={this.props.section.id}
          handleToggle={this.handleToggle}
        />
        <Component1
          activeTab={this.props.section.id}
        />
        <Component2
          activeTab={this.props.section.id}
        />
      </section>
    );
  }

  handleToggle = (tab) => {
    this.props.onChangeSection(tab);
  }
}

export default App;
