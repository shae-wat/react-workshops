import React, { Component } from 'react';

import './Component.css';

class Component2 extends Component {
  render() {
    if (this.props.activeTab !== '2') return null;

    return (
      <div>
        Component2
      </div>
    );
  }

}

export default Component2;
