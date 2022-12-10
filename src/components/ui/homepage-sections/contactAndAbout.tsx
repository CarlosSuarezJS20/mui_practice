import React from "react";

import { makeStyles } from "@mui/styles";
import { Grid, Typography, Button, useMediaQuery } from "@mui/material";
import ArrowComponent from "../ArrowComponent";
import theme from "../theme";

import infoBackground from "../../../assets/infoBackground.svg";

const useStyle = makeStyles(() => ({
  aboutandcontactbackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  aboutandcontactBtn: {
    "&.MuiButton-root": {
      ...theme.typography.learnMoreBtn,
      marginTop: "0.5em",
      color: "white",
      border: "1px solid white",
      "&:hover": {
        border: "1.5px solid white",
      },
    },
  },
  aboutandcontacttitles: {
    "&.MuiTypography-root": {
      fontWeight: "bold",
      fontSize: 25,
      color: "white",
    },
  },
  description: {
    "&.MuiTypography-root": {
      color: "white",
    },
  },
}));

const ContactAndAboutSection: React.FC = () => {
  const classes = useStyle();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction='row' sx={{ height: "50em" }} alignItems='center'>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        sx={{
          position: "absolute",
          padding: "2em",
          textAlign: matchesSM ? "center" : "inherit",
        }}>
        <Grid xs={6} item sx={{ marginBottom: matchesSM ? "2em" : "none" }}>
          <Grid container direction='column'>
            <Typography className={classes.aboutandcontacttitles}>
              About Us
            </Typography>
            <Typography className={classes.description}>
              Let's get personal.
            </Typography>
            <Grid>
              <Button variant='outlined' className={classes.aboutandcontactBtn}>
                <span>Learn more</span>
                <ArrowComponent width={10} height={10} fill={"white"} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: matchesSM ? "center" : "right" }}>
          <Grid container direction='column'>
            <Typography className={classes.aboutandcontacttitles}>
              Contact Us
            </Typography>
            <Typography className={classes.description}>
              Say Hello! <span role='img'>👌🏽</span>
            </Typography>
            <Grid item>
              <Button variant='outlined' className={classes.aboutandcontactBtn}>
                <span>Learn more</span>
                <ArrowComponent width={10} height={10} fill={"white"} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.aboutandcontactbackground} />
    </Grid>
  );
};

export default ContactAndAboutSection;
