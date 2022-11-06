import {
  AppBar,
  Container,
  Typography,
} from "@material-ui/core";

import {
  makeStyles,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    tagline: {
    display: "flex",
    height: "60%",
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
  return (
  
     <AppBar color="transparent" position="static">
       <Container>
        
            <div className="foot">
            <Typography
              variant="h6"
              className={classes.title}
               onClick={() => window.scrollTo(0,0)}
            >
              Crypto Pyrates
            </Typography>
              <button type="button" className="toTop" onClick={() => window.scrollTo(0,0)}>
              Up The Wave 🏴‍☠️
              </button>
              <Typography
              className={classes.tagline}
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
           >
            Riding Waves Since 2022
          </Typography>
            
          </ div>
        </ Container>
    </AppBar>

   );
}

export default Footer;