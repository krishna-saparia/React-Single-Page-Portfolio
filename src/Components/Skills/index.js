import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default class Skills extends Component {
//   displayName: 'PieExample'

  render() {
    return (
      <div>
        <h2>Pie Example</h2>
        <Pie data={data}   
            ref="chart"  
            width={100}
            height={50}
            options={{ maintainAspectRatio: false }} />
      </div>
    );
  }
};