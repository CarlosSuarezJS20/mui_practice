import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowComponent from "../ArrowComponent";
import customSoftwareIcon from "../../../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../../../assets/mobileIcon.svg";
import websitesIcon from "../../../assets/websiteIcon.svg";

import theme from "../theme";

const useStyle = makeStyles(() => ({
  serviceContainer: {
    "&.MuiGrid-root": {
      padding: "18em 5em 12em",
      [theme.breakpoints.down("md")]: {
        padding: "10em 2em 9em",
      },
    },
  },
  serviceSection: {
    "&.MuiGrid-root": {
      marginBottom: "8em",
    },
  },
  serviceItem: {
    "&.MuiGrid-item": {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
  },
  titleService: {
    "&.MuiTypography-root": {
      ...theme.typography.titles,
      lineHeight: 1.2,
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
  },
  subTitle: {
    "&.MuiTypography-root": {
      marginBottom: "1em",
      color: theme.palette.common.grey,
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
  },
  servicesPunchLine: {
    "&.MuiTypography-root": {
      lineHeight: 1.2,
      color: theme.palette.common.grey,
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
  },
  learnMoreBtn: {
    "&.MuiButtonBase-root": {
      marginTop: "2em",
      borderRadius: 50,
      height: 28,
      textTransform: "none",
      fontWeight: "bold",
      width: 80,
      fontSize: 10,
      padding: "5px 0px",
    },
  },

  icon: {
    width: "11em",
  },
}));

const ServicesPage: React.FC = () => {
  const classes = useStyle();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction='column' className={classes.serviceContainer}>
      {/* Custome Sorfware services section */}
      <Grid
        container
        className={classes.serviceSection}
        direction='row'
        spacing={3}
        justifyContent={{ xs: "center", md: "flex-start" }}>
        <Grid item className={classes.serviceItem}>
          <Typography className={classes.titleService}>
            Custome Software Development
          </Typography>
          <Typography className={classes.subTitle}>
            Save Energy, Save Time, Save Money
          </Typography>
          <Typography className={classes.servicesPunchLine}>
            Complete digital solutions, from investigation
            {matches ? null : <br />} to
            <span
              style={{
                marginLeft: "0.2em",
                fontFamily: "Pacifico",
                color: theme.palette.common.orange,
                fontSize: 21,
              }}>
              calibration
            </span>
          </Typography>
          <Button variant='outlined' className={classes.learnMoreBtn}>
            <span>Learn more</span>
            <ArrowComponent
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item>
          <img
            className={classes.icon}
            alt='custom software image'
            src={customSoftwareIcon}
          />
        </Grid>
      </Grid>
      {/* App services section */}
      <Grid
        container
        direction='row'
        className={classes.serviceSection}
        spacing={3}
        justifyContent={{ xs: "center", md: "flex-end" }}>
        <Grid item className={classes.serviceItem}>
          <Typography className={classes.titleService}>
            IOS/Android App Development
          </Typography>
          <Typography className={classes.subTitle}>
            Extend Functionality. Extend Access. Increase Engagement.
          </Typography>
          <Typography className={classes.servicesPunchLine}>
            Integrate your web experience or create a standalone app{" "}
            {matches ? null : <br />}
            with either mobile platform.
          </Typography>
          <Button variant='outlined' className={classes.learnMoreBtn}>
            <span>Learn more</span>
            <ArrowComponent
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item>
          <img
            className={classes.icon}
            alt='mobile phone icon'
            src={mobileAppsIcon}
          />
        </Grid>
      </Grid>
      {/* Website development block */}
      <Grid
        container
        direction='row'
        spacing={3}
        justifyContent={{ xs: "center", md: "flex-start" }}>
        <Grid item className={classes.serviceItem}>
          <Typography className={classes.titleService}>
            Website Development
          </Typography>
          <Typography className={classes.subTitle}>
            Reach more. Discover More. Sell More.
          </Typography>
          <Typography className={classes.servicesPunchLine}>
            Optimized for search engines, build for speed.
          </Typography>
          <Button variant='outlined' className={classes.learnMoreBtn}>
            <span>Learn more</span>
            <ArrowComponent
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item>
          <img
            className={classes.icon}
            alt='mobile phone icon'
            src={websitesIcon}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServicesPage;
