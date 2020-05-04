import React from "react";
import { useState, useEffect } from "react";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "../../components/Customise";
import EducationJsonData from "./education-details.json";
import Paper from "@material-ui/core/Paper";

export default function Education() {
  const classes = useStyles();
  const [educationHistory, setEducationHistory] = useState([]);

  useEffect(() => {
    console.log(EducationJsonData);
    setEducationHistory(EducationJsonData);
  },[]);

  return (
    <div className={classes.root}>
      {educationHistory.map((qualification, index) => {
        /*       console.log(qualification.headingName);
            console.log(qualification.percentage); */
        return (
          <ExpansionPanel key={index}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.typography1}>
                {qualification.headingName}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Paper className={classes.paper}>
              <Typography>
                <div>{qualification.qualificationName}</div>
                <div>Institution: {qualification.institution}</div>
                <div>Board: {qualification.board}</div>
                <div>Branch/Specilization: {qualification.specialization}</div>
                <div>Board: {qualification.percentage}</div>
              </Typography>
              </Paper>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
}
