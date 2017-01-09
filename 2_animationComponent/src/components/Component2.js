import React, { Component } from 'react';

import './Component2.css';

class Component2 extends Component {
  render() {
    if (this.props.activeTab !== '2') return null;

    return (
      <div className='container'>
        Component2
      </div>
    );
  }

}

export default Component2;
