import React from 'react';
import ReactDom from 'react-dom';

import styles from './Main.css';

let Main = React.createClass({
  render: function(){
    return (
      <div className='mainContainer'>
        <div className='innerContainer'>
        </div>
      </div>
    )
  }
})

ReactDom.render(<Main />, document.getElementById('app'));
