import { makeStyles } from '@material-ui/core/styles';


  export const useStyles = makeStyles((theme) => ({
    root: {
      margin: '3%',
      width: '100%',
      
    },
    typography1: {
        // In Chinese and Japanese the characters are usually larger,
        // so a smaller fontsize may be appropriate.
        fontFamily : 'Ubuntu',
        fontWeight: 400
      },
      paper: {
        
        padding: theme.spacing(2),
        textAlign: 'left',
        color: "rgb(255, 255, 255)",
        backgroundColor: "rgb(0, 48, 63)",
        boxShadow: "5px",
        width: '100%'
       
      }
  }));