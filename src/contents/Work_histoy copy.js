import React from "react";
import { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "../components/customAccordion";
//import data from "../data/work-history.json";
const myRequest = new Request("work-history.json");

function WorkContent(projectName, description) {
  this.projectName = projectName;
  this.description = description;
}
/*const getJsonData = async (id) => {
   const response = await fetch(myRequest);
  const responseData = await response.json();
  console.log(responseData);
  return responseData;
};
 const updateOp =async () => {
  const outputJsonObject = await getJsonData();
  const workExp = outputJsonObject.workingExperience;
  const lastProject = outputJsonObject.workingExperience[0].workHistory[0].projectDetails[0].projectName;
  console.log(`lastProject is====>${lastProject}`);

} */
export default function Work_History() {
  const [workHistoryData, setworkHistoryData] = React.useState([]);
  const [expanded, setExpanded] = React.useState("panel1");

  async function fetchData () {
    let responseData = {};
    try{
      const response = await fetch(myRequest);
      responseData = await response.json();
      console.log(responseData.workingExperience);
   
  
    } catch(e) {
      console.error(`An error occured while fetching data from json : ${e}`);
    } 
    setworkHistoryData(responseData.workingExperience);
  };

  //fetch data from the json
  useEffect(() => {
    fetchData();
  },[]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    // setTestState('no');
  };

  return (
    <div>
      <ul>
        <li>test</li>
        {workHistoryData.map((val, i) => {
          console.log(`i=${i}==============>`);
          console.log(val);
          return <li key={i}>{val}</li>;
        })}
      </ul>

      {/*<ExpansionPanel
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography>Wipro</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>*/}
    </div>
  );
}
