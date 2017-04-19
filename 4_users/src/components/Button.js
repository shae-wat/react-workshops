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
        onClick={!this.props.disabled ? this.props.handleClick : null}
        className={button}
      >
        {this.props.text}
      </div>
    );
  }
}

Button.propTypes = {
  disabled: React.PropTypes.bool,
  text: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired,
}

export default Button;
