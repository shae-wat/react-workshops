import React, { Component } from 'react';

import './Component.css';

class Component2 extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

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
