import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import LearnMoreButton from "../aux-components/learnMoreButton";
import customSoftwareIcon from "../../../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../../../assets/mobileIcon.svg";
import websitesIcon from "../../../assets/websiteIcon.svg";

import theme from "../theme";

const useStyle = makeStyles(() => ({
  serviceContainer: {
    "&.MuiGrid-root": {
      padding: "18em 5em 12em",
      [theme.breakpoints.down("md")]: {
        padding: "9em 2em 9em",
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
      ...theme.typography.learnMoreBtn,
      marginTop: "1em",
    },
  },

  icon: {
    width: "11em",
  },
}));

interface ServiceSectionProps {
  routeValueHandler: (n: number) => void;
  toolTipValueHandler: (n: number | undefined) => void;
}

const ServicesSection: React.FC<ServiceSectionProps> = ({
  routeValueHandler,
  toolTipValueHandler,
}) => {
  const classes = useStyle();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction='column' className={classes.serviceContainer}>
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
          <div style={{ marginTop: "0.5em" }}>
            <LearnMoreButton
              routeValueHandler={routeValueHandler}
              routeValue={1}
              toolTipValueHandler={toolTipValueHandler}
              toolTipValue={1}
              path={"/customsoftware"}
              height={35}
              width={130}
            />
          </div>
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
          <div style={{ marginTop: "0.5em" }}>
            <LearnMoreButton
              routeValueHandler={routeValueHandler}
              path='/mobileapps'
              routeValue={1}
              toolTipValueHandler={toolTipValueHandler}
              toolTipValue={2}
              height={35}
              width={130}
            />
          </div>
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
          <div style={{ marginTop: "0.5em" }}>
            <LearnMoreButton
              routeValueHandler={routeValueHandler}
              path='/websites'
              routeValue={1}
              toolTipValueHandler={toolTipValueHandler}
              toolTipValue={3}
              height={35}
              width={130}
            />
          </div>
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

export default ServicesSection;
