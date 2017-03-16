import React, { Component } from 'react';
import Chart from 'chart.js';

import './Component.css';

class Component1 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log('componentDidMount')
    this.createChart();
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps', this.chart)
    this.chart.update();
  }

  render() {
    if (this.props.activeTab !== '1') return null;

    return (
      <div className='chart-container'>
        <canvas 
          ref={(r)=>{this.chartRef = r;}} 
          width="300" 
          height="300"
        />
      </div>
    );
  }

  createChart = () => {
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(this.chartRef, {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: 'Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
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
      }
    });
  }

}

export default Component1;
