import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/avatar.png";

import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
    background: "white",
  },
  title: {
    color: "steelblue",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,

  },
  divider: {
    margin: "0 1rem",
    background: "white",
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center" alignItems="center">
        <Avatar className={classes.avatar} src={avatar} alt="Meee" />
        <Divider className={classes.divider} orientation="vertical" flexItem />

        <Grid style={{ textAlign: "left"}} item>
        <Typography className={classes.title} variant="h3">
          Anna Fatsevych
      </Typography>



      <Typography  className={classes.title} variant="h5">
          Software Developer
      </Typography>
        <Footer />
      </Grid>

      </Grid>
      <Typography className={classes.title} variant="h4">
      </Typography>



    </Box>
  );
};

export default Header;