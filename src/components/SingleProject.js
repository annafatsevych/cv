import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { images } from "./images";
import { projects } from "./projects";

import "../Gallery.css";






import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    x: "15%",
    opacity: 1,
    transition
  }
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

export const SingleProject = ({ match }) => {

  const id = parseInt(match.params.id, 10);
  console.log(id)

  console.log(images.filter(image => image.id === id)[0].source)

  return (
  <motion.div className="single" initial="exit" animate="enter" exit="exit">
    {/* <motion.img
      variants={imageVariants}
      src={images.filter(image => image.id === parseInt(match.params.id, 10))[0].source}
      alt="The Barbican"
      width="500px"
    /> */}

    

      <motion.div variants={imageVariants}>

      <Grid   container
  spacing={0}
  xs={8}
  direction="column"
  alignItems="center"
  justify="center" >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="200"
                  image={projects[id -1].image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {projects[id-1].name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {projects[id-1].description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>

    </motion.div>
    <motion.div className="back" variants={backVariants}>
      <Link to="/gallery">← Back</Link>
      </motion.div>
  </motion.div>
)
  }