import React, { Component } from 'react';

import './Component2.css';

class Component2 extends Component {
  render() {
    if (this.props.activeTab !== '2') return null;

    return (
      <div className='Component2__container'>
        <div className='Component2__monster' />
      </div>
    );
  }

}

export default Component2;
