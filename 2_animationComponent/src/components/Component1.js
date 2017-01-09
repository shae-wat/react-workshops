import React, { Component } from 'react';
import heart from '../images/twitterExplodingHearts.png';
import classNames from 'classnames';

import './Component1.css';

class Component1 extends Component {
  render() {
    if (this.props.activeTab !== '1') return null;

    let heart = classNames('Component1__heart', 'Component1__position');

    return (
      <div className='Component1__container'>
        <div className={heart}/>
      </div>
    );
  }

}

export default Component1;
