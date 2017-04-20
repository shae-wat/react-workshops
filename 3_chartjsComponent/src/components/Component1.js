import React, { Component } from 'react';
import ChartJS from './ChartJS.js';

import './Component.css';

class Component1 extends Component {

  render() {
    if (this.props.activeTab !== '1') return null;

    return (
      <ChartJS
        data={{
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: 'Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
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
            text: 'Chart Title',
            position: 'bottom',
            fontSize: 20,
          },
        }}
      />
    );
  }
}

export default Component1;
