import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import { projects } from "./projects";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "white",
    height: "100%",
    padding: " 0 3rem"
  },
  avatar: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: theme.spacing(1),
    background: "white",
    boxShadow: theme.shadows[5],
  },
  cardContainer: {
    maxWidth: 600,
    margin: "2rem auto",
  },
  heading: {
    color: "steelblue",
    padding: "3rem 0",
    textTransform: "uppercase",
    marginTop: "44px",
  },
  reverse: {
    flexFlow: "row-reverse",
    flexWrap: "wrap",
    margin: "1.5rem 0"
  },
  wrap: {
    flexWrap: "wrap",
    margin: "1.5rem 0",
  },
  title: {
    padding: "1rem 0"
  }

}));

const Portfolio = () => {
  const classes = useStyles();

  const renderImageCard = (project) => (
    <div style={{display: "flex", justifyContent: "center"}}>
      <Avatar className={classes.avatar} src={project.image} alt="Meee" />
    </div>
  )

  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Projects
      </Typography>
      {projects.map((project, i) => (
        <Grid container justify="center" alignItems="center" className={i%2 == 0 ? classes.wrap : classes.reverse}>
          <Grid item xs={12} sm={12} md={6} key={i} >
            {renderImageCard(project)}
          </Grid>
          <Grid item xs={12} sm={12} md={6} key={i}>
            <Typography variant="h4" align="center" color="primary" className={classes.title}>
              {project.name}
            </Typography>
            <Typography color="textPrimary" variant="body1" align="center" className={classes.test} >
              {project.description}
            </Typography>

            <Typography color="secondary" variant="h5" align="center" className={classes.title} >
              {project.techStack}
            </Typography>
          </Grid>
        </Grid>      
      ))}
    </Box>
  );
};


export default Portfolio;
