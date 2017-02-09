import React, { Component } from 'react';
import classNames from 'classnames';

import './Component2.css';

class Component2 extends Component {
	constructor(props) {
    super(props);
    this.state = { shouldShake: false };
  }

  render() {
    if (this.props.activeTab !== '2') return null;

    let monster = classNames('Component2__monster', {
      ['headShake']: this.state.shouldShake,
    });

    return (
      <div>
        <div className={monster} onClick={this.shake}/>
      </div>
    );
  }

  shake = () => {
  	this.setState({
      shouldShake: true,
    });
    setTimeout(()=>{
      this.setState({
	      shouldShake: false,
	    });
    }, 2000);
  }

}

export default Component2;
