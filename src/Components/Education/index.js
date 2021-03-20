import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 3px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
 
}));

const EducationH1 = styled('h1')({
    fontSize: '2.5rem',
    color: '#773db4',
    margin: '30px auto 32px auto', 
})
const TimeLineContainer = styled('div')({
  fontFamily:'Source Code Pro, monospace', 
  marginBottom:'80px',
})

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <TimeLineContainer id='education'>
    <Timeline align="alternate" >
    <EducationH1>Education</EducationH1>
      <TimelineItem>
      
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            February 2020 - January 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            AEC / Mobile Application Development
            </Typography>
            <Typography>TAV College</Typography>
            <Typography>Montreal, QC</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Jun 2017 - January 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            B.E. / Computer Science Engineering
            </Typography>
            <Typography>Mahatma Gandhi Institue of technical Education & Research Center</Typography>
            <Typography>Gujarat, India</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Jun 2015 - March 2017
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
          <SchoolIcon />
          </TimelineDot>
          {/* <TimelineConnector className={classes.secondaryTail} /> */}
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Higher Secondary Education - Science
            </Typography>
            <Typography>A B School</Typography>
            <Typography>Gujarat, India</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
    </TimeLineContainer>
  );
}
