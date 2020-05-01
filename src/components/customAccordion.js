import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";


export const useStyles =makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgb(0, 48, 63)",
    boxShadow: "5px"
   
  },
}));
/* export const useStyles = makeStyles({
  
  root: {
    minWidth: 275,
    backgroundColor: "rgb(0, 48, 63)",
    color: "rgb(217, 217, 217)",
       
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(2.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}); */
export const ExpansionPanel = withStyles({
    root: {
      border: "1px solid rgba(0, 0, 0, .125)",
      boxShadow: "5px",
      "&:not(:last-child)": {
        borderBottom: 0,
      },
      "&:before": {
        display: "none",
      },
      "&$expanded": {
        margin: "auto",
      },
    },
    
    expanded: {},
  })(MuiExpansionPanel);
  
 export const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: "rgba(0, 0, 0, .03)",
      borderBottom: "1px solid rgba(0, 0, 0, .125)",
      marginBottom: -1,
      minHeight: 56,
      "&$expanded": {
        minHeight: 56,
      },
    },
    content: {
      "&$expanded": {
        margin: "12px 0",
      },
    },
    expanded: {},
  })(MuiExpansionPanelSummary);
  
  export const ExpansionPanelDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiExpansionPanelDetails);
  