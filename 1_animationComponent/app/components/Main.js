import React from 'react';
import ReactDom from 'react-dom';

let Main = React.createClass({
  render: function(){
    return (
      <div>Hello React!</div>
    )
  }
})

ReactDom.render(<Main />, document.getElementById('app'));
