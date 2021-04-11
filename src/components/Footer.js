import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  bottomNavContainer: {
    justifyContent: "flex-start"
  },
  root: {
    padding: " 0.5rem",
    background: "transparent",
    "& .MuiSvgIcon-root": {
      fill: "white",
      "&:hover": {
        fill: "steelblue",
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
      <LinkedIn className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;