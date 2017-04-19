import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './TabButton.css';

class TabButton extends Component {
  render() {
    let isSelected = (this.props.tab === this.props.id);

    return (
      <div onClick={()=>this.props.handleClick(this.props.id)}
        className={classNames('tab', {['tabActive']: isSelected})}>
        {this.props.text}
      </div>
    );
  }
}

export default TabButton;
