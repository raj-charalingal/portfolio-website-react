import React from "react";
import { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
/* import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card"; */
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import {
  useStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "../components/customAccordion";
import workHistoryJsonData from "./work-history.json";

function WorkContent(projectName, description) {
  this.projectName = projectName;
  this.description = description;
}

export default function Work_History() {
  //const classes = useStyles();
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [workingExperience1, setworkingExperience1] = React.useState([]);
  const [workingExperience2, setworkingExperience2] = React.useState({});

  useEffect(() => {
    //set overall work experience obj
    const workingExp1 = workHistoryJsonData.workingExperience1;
    const workingExp2 = workHistoryJsonData.workingExperience2;
    setworkingExperience1(workingExp1);
    setworkingExperience2(workingExp2);
  }, []);

  return (
    <div className="condiv work-hist">
      <ExpansionPanel
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>Infosys Ltd.</Typography>
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
                          <strong>Client Name:</strong>
                          {proj.clientName}
                        </div>
                        <div key={i}>
                          <strong>Project Name:</strong>: {proj.projectName}
                        </div>
                        <div key={i}>Duration: {proj.duration}</div>
                        <div key={i}>Role: {proj.role}</div>
                        <div key={i}>Description: {proj.projectDesc}</div>
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              );
            })}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography>JamCracker Software Technologies</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item>
                <Paper className={classes.paper}>
                  <Typography>
                    <div>
                      <strong>Project Name:</strong>
                      {workingExperience2.projectName}
                    </div>
                    <div>Duration: {workingExperience2.duration}</div>
                    <div>Role: {workingExperience2.role}</div>
                    <div>Description: {workingExperience2.projectDesc}</div>
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
