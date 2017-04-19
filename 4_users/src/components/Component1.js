import React, { Component } from 'react';

import Button from './Button.js';
import './Component.css';

class Component1 extends Component {
  render() {
    if (this.props.activeTab !== '1') return null;

    return (
      <div>
        <div className='login-container'>
          <div className='login-fields'>
            Login
            Sign Up
          </div>
          <div className='login-submit'>
            <Button
              handleClick={this.handleClick}
              text='SUBMIT'
            />
          </div>
        </div>
      </div>
    );
  }

  handleClick = () => {
    console.log('handleClick');
    //dispatch(addUser('email', 'password'))
  }

}

export default Component1;
