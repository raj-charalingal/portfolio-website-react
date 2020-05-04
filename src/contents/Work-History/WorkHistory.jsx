import React from "react";
import { useEffect } from "react";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
/* import cx from "classnames"; */
import { useStyles } from '../../components/Customise'
import workHistoryJsonData from "./work-history.json";
import "./WorkHistory.Styles.css";

export default function WorkHistory() {
  const classes = useStyles();

  const [workingExperience1, setworkingExperience1] = React.useState([]);
  const [workingExperience2, setworkingExperience2] = React.useState({});
  const [workingExperience3, setworkingExperience3] = React.useState([]);

  useEffect(() => {
    //set overall work experience obj
    const workingExp1 = workHistoryJsonData.workingExperience1;
    const workingExp2 = workHistoryJsonData.workingExperience2;
    const workingExp3 = workHistoryJsonData.workingExperience3;
    console.log(workingExp3);
    setworkingExperience1(workingExp1);
    setworkingExperience2(workingExp2);
    setworkingExperience3(workingExp3);
  }, []);

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.typography1}>Infosys Ltd.</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.root}>
            {workingExperience1.map((proj, i) => {
              return (
                <Grid container spacing={3}>
                  <Grid item>
                    <Paper className={classes.paper}>
                      <Typography>
                        <div key={i}>
                          <strong>Client Name: </strong>
                          {proj.clientName}
                        </div>
                        <div key={i}>
                          <strong>Project Name: </strong>: {proj.projectName}
                        </div>
                        <div key={i}><strong>Duration: </strong>{proj.duration}</div>
                        <div key={i}><strong>Role: </strong>{proj.role}</div>
                        <div key={i}><strong>Technology: </strong>{proj.technology}</div>
                        <div key={i}><strong>Description: </strong>{proj.projectDesc}</div>
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              );
            })}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.typography1}>JamCracker Software Technologies Ltd.</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item>
                <Paper className={classes.paper}>
                  <Typography>
                    <div>
                      <strong>Project Name: </strong>
                      {workingExperience2.projectName}
                    </div>
                    <div ><strong>Duration: </strong>{workingExperience2.duration}</div>
                    <div><strong>Role: </strong>{workingExperience2.role}</div>
                    <div><strong>Technology: </strong>{workingExperience2.technology}</div>
                    <div><strong>Responsibilities: </strong>{workingExperience2.responsibilities}</div>
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.typography1}>Wipro Technologies Ltd.</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.root}>
            {workingExperience3.map((proj, i) => {
              return (
                <Grid container spacing={3}>
                  <Grid item>
                    <Paper className={classes.paper}>
                      <Typography>
                        <div key={i}>
                          <strong>Client Name:</strong>
                          {proj.clientName}
                        </div>
                        <div key={i}>
                          <strong>Project Name: </strong>: {proj.projectName}
                        </div>
                        <div key={i}><strong>Duration: </strong>{proj.duration}</div>
                        <div key={i}><strong>Role: </strong>{proj.role}</div>
                        <div key={i}><strong>Technology: </strong>{proj.technology}</div>
                        <div key={i}><strong>Description: </strong>{proj.projectDesc}</div>
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              );
            })}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
