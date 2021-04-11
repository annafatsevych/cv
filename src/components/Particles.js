import React from "react";
import { Particles as ReactParticles } from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    opacity: "0.5",
    position: "fixed"
    // background: "lightsteelblue",
  },
}));

const Particles = () => {
  const classes = useStyles();

  return (
    <ReactParticles
      canvasClassName={classes.particlesCanvas}
      params={{
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: "square",
            stroke: {
              width: 1,
              color: "white",
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: false,
              speed: 6,
              size_min: 0,
              sync: true,
            },
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              opacity_min: 0.1,
              sync: false,
            },
          },
        },
      }}
    />
  );
};

export default Particles;
