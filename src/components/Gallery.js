import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "./projects";
import { images } from "./images";

import "../Gallery.css";


import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

const frameVariants = {
  hover: { scale: 0.95 }
};

const imageVariants = {
  hover: { scale: 1.1 }
};

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "lightsteelblue",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 600,
    margin: "2rem auto",
  },
}));



const Thumbnail = ({ id, i , image}) => (
  <motion.div className="thumbnail" variants={thumbnailVariants}>
    <motion.div
      className="frame"
      whileHover="hover"
      variants={frameVariants}
      transition={transition}
    >
      <Link to={`/image/${i + 1}`}>
        <motion.img
          src={image}
          alt="The Barbican"
          variants={imageVariants}
          transition={transition}
        />
      </Link>
    </motion.div>
  </motion.div>
);



const Gallery = () => (
    <div className="gallery">
      <motion.div
        className="thumbnails"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        {projects.map((project, i) => (
          <Thumbnail style={{ width: "400px"}} key={i} id={i} i={i} image={project.image}>
            <Grid item xs={12} sm={8} md={6} key={i}>
              <Card className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
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
          </Thumbnail>
        ))}
      </motion.div>
    </div>
)

export default Gallery;