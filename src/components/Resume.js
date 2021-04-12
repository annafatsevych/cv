import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "white",
    marginTop: "44px",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid steelblue",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid steelblue",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "steelblue steelblue transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "steelblue",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent steelblue steelblue",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "white",
    background: "lightsteelblue",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "steelblue",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "darkseagreen",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "steelblue",
    fontWeight: "bold",
  },
  subtitle1: {
    color: "steelblue",
  },
  secondary: {
    color: "darkseagreen",
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Present
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            UX, React, Redux, C#
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            TripStack previously FlightNetwork          
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <List dense style={{ textAlign: "center"}}>
                <ListItem>
                  <ListItemText style={{ textAlign: "center"}}
                    primary="Delivered many successful features in agile and fast-paced environment"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText style={{ textAlign: "center"}}
                    primary="Took on main projects from the kick off meeting to delivery and release"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText style={{ textAlign: "center"}}
                    primary="Took ownership and responsibilities for seeking out and implementing new technologies.  Held Scrum ceremonies, as well as stakeholder meetings"
                  />
                </ListItem>
              </List>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            JavaScript, Python, C++
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
          Centre for Development of Open Technology at Seneca
            </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <List dense style={{ textAlign: "center"}}>
              <ListItem>
                <ListItemText style={{ textAlign: "center"}}
                  primary="Developed a website to perform an image search by hashing for Creative Commons Licensing"
                />
              </ListItem>
              <ListItem>
                <ListItemText style={{ textAlign: "center"}}
                  primary="Worked in a small team of two developers and delivered the product"
                />
              </ListItem>
              <ListItem>
                <ListItemText style={{ textAlign: "center"}}
                  primary="Used Flickr API as well as Python and PHP, with JavaScript front end and a C++ backend daemon"
                />
              </ListItem>
            </List>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2015
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            CSS, HTML, PHP, Adobe (PS, AI)
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Delicious Scrap Shop          
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
          <List dense style={{ textAlign: "center"}}>
              <ListItem>
                <ListItemText style={{ textAlign: "center"}}
                  primary="Built (using open source PHP ZenCart) and Blogger an online graphic design business"
                />
              </ListItem>
              <ListItem>
                <ListItemText style={{ textAlign: "center"}}
                  primary="Mainted a list of over 5,000 clients, using marketing tools as MailChimp and AdWords"
                />
              </ListItem>
              <ListItem>
                <ListItemText style={{ textAlign: "center"}}
                  primary="Created e-commerce sites for clients"
                />
              </ListItem>
            </List>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2007
        </Typography>
      </Box>
    </Box>
  );
};

export default Resume;
