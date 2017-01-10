import React, { Component } from 'react';
import classNames from 'classnames';

import './Component1.css';

class Component1 extends Component {
  render() {
    if (this.props.activeTab !== '1') return null;

    return (
      <div className='Component1__container'>
        <div className='Component1__heart' />
      </div>
    );
  }

}

export default Component1;
