import {
  AppBar,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";

import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    flex: 1,
    color: "black",
    backgroundColor: "red",
    textAlign: "center",  
     fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

function Footer() {
  const classes = useStyles();
  const history = useHistory();
  return (
  
     <AppBar color="transparent" position="static">
       <Container>
        
            <div className="foot">
            <Typography
              variant="h6"
              className={classes.title}
            >
              Crypto Pyrates
            </Typography>
              <Typography
              className={classes.tagline}
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Jain ki kripa
            
          </Typography>
            
          </ div>
        </ Container>
    </AppBar>

   );
}

export default Footer;