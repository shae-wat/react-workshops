import React, { Component } from 'react';
import Chart from 'chart.js';

import './Component.css';

class ChartJS extends Component {
  componentDidMount(){
    this.createChart();
  }

  render() {
    return (
      <div className='chart-container'>
        <canvas
          ref={(r)=>{this.chartElement=r;}}
          width="400"
          height="400"
        />
      </div>
    );
  }

  createChart = () => {
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(this.chartElement, {
      type: 'line',
      data: this.props.data,
      options: this.props.options,
    });
  }

}

export default ChartJS;
