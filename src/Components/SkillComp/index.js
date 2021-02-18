import React, {Component} from 'react';
import {Doughnut, Polar} from 'react-chartjs-2';
import { InfoContainer, InfoRow, Heading, InfoWrapper, Column1, TextWrapper, Column2, Column3, ImgWrap, Img } from './SkillcompElement';

import svg3 from '../../images/svg3.svg';

const data1 = {
	labels: [
		'AngularJS',
		'ReactJS',
        'ExpressJS',
		'Spring Tool',
        'Unity'
	],
	datasets: [{
		data: [75, 80, 80, 75, 75],
		backgroundColor: [
        '#773db4',
        '#ad30a8',
        '#d62594',
        '#f42b7c',
        '#ff4562'
		],
		hoverBackgroundColor: [
		'#773db4',
        '#ad30a8',
        '#d62594',
        '#f42b7c'
		]
	}]
};

const data2 = {
    datasets: [{
        data: [
            70,
            85,
            50,
            80,
            55,
            60,
            80
          ],
        backgroundColor: [
            '#773db4',
		    '#ad30a8',
		    '#d62594',
            '#f42b7c',
            '#ff4562',
            '#ff6547',
            '#ff862b'
          ],
          label: 'My dataset' // for legend
        }],
        labels: [
          'Java',
          'JavaScript',
          'TypeScript',
          'HTML5 & CSS3',
          'C++',
          'C#',
          'SQL Server & MySQL '
        ]
};

export default class Skills extends Component {
//   displayName: 'PieExample'
  render() {
    return (
        <InfoContainer id='skills'>
        <Heading>Technical Skills</Heading>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <Doughnut 
                                data={data1}   
                                ref="chart"  
                                width={480}
                                height={380}
                                options={{ maintainAspectRatio: false }} />
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <TextWrapper>
                        <Polar 
                                data={data2}   
                                ref="chart"  
                                width={480}
                                height={380}
                                options={{ maintainAspectRatio: false }} />
                    </TextWrapper>
                </Column2>
                {/* <Column3>
                    <TextWrapper>
                        <Doughnut 
                                data={data1}   
                                ref="chart"  
                                width={350}
                                height={280}
                                options={{ maintainAspectRatio: false }} />
                    </TextWrapper>
                </Column3> */}
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
      
    );
  }
};