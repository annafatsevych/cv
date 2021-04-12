import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";

import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import Send from "@material-ui/icons/Send";


const useStyles = makeStyles({
  bottomNavContainer: {
    justifyContent: "flex-start"
  },
  root: {
    padding: " 0.5rem",
    background: "transparent",
    "& .MuiSvgIcon-root": {
      fill: "darkseagreen",
      "&:hover": {
        fill: "white",
        fontSize: "1.6rem",
        cursor: "pointer",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root} style={{ justifyContent: "flex-start"}}>
      <GitHub  className={classes.root} onClick={() => window.open('https://github.com/annafatsevych', '_blank')} />
      <LinkedIn className={classes.root} onClick={() => window.open('https://www.linkedin.com/in/anna-fatsevych-2096a664/', '_blank')} />
      <Send className={classes.root} onClick={() => window.open('mailto:anna.fatsevych@gmail.com', 'blank')} />

    </BottomNavigation>
  );
};
export default Footer;