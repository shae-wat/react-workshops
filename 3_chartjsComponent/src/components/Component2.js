import React, { Component } from 'react';
import ChartJS from './ChartJS.js';

import './Component.css';

class Component2 extends Component {
  render() {
    if (this.props.activeTab !== '2') return null;

    return (
      <div>
        <ChartJS
          data={{
              labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              datasets: [{
                  label: 'Users',
                  data: [12, 19, 3, 5, 2, 3, 1],
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor: 'rgba(255,99,132,1)',
                  borderWidth: 1
              }]
          }}
          options={{
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }]
            },
            title: {
              display: true,
              text: 'Users Per Day',
              position: 'bottom',
              fontSize: 20,
            },
          }}
        />
      </div>
    );
  }

}

export default Component2;
