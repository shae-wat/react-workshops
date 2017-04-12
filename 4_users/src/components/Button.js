import React, { Component } from 'react';
import classNames from 'classnames';

import './Button.css';

class Button extends Component {
  render() {
    let button = classNames('button', {
      ['button-disabled']: this.props.disabled,
    });

    return (
      <div
        onClick={this.props.disabled ? null : this.props.handleClick}
        className={button}
      >
        {this.props.text}
      </div>
    );
  }
}

Button.propTypes = {
  disabled: React.PropTypes.bool,
  text: React.PropTypes.string,
  handleClick: React.PropTypes.func,
}

export default Button;
