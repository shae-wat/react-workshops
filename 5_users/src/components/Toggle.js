import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import TabButton from './TabButton.js';

import './Toggle.css';

class Toggle extends Component {
  render() {
    let tabBackground = classNames('tabBackground', {
      ['rightActive']: this.props.tab === 2,
    });

    return (
      <div className='toggleContainer'>
        <div className='tabBar'>
          <TabButton
            id={1}
            tab={this.props.tab}
            text='COMPONENT 1'
            handleClick={this.props.handleToggle}
          />
          <TabButton
            id={2}
            tab={this.props.tab}
            text='COMPONENT 2'
            handleClick={this.props.handleToggle}
          />
          <div className={tabBackground}></div>
        </div>
      </div>
    );
  }
}

export default Toggle;
