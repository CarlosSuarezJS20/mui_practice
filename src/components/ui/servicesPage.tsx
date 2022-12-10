import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import LearnMoreButton from "./aux-components/learnMoreButton";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../../assets/mobileIcon.svg";
import websitesIcon from "../../assets/websiteIcon.svg";

import theme from "./theme";

const useStyle = makeStyles(() => ({
  servicesHolder: {
    "&.MuiGrid-item": {
      marginBottom: "2em",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "7em",
      },
    },
  },
  serviceBtnHolder: {
    "&.MuiGrid-item": {
      marginTop: "0.6em",
    },
  },
  icon: {
    width: "9em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3em",
    },
  },
  titleService: {
    "&.MuiTypography-root": {
      ...theme.typography.titles,
      lineHeight: 1.2,
    },
  },
  subTitle: {
    "&.MuiTypography-root": {
      marginBottom: "1em",
      color: theme.palette.common.grey,
    },
  },
  servicesPunchLine: {
    "&.MuiTypography-root": {
      lineHeight: 1.2,
      color: theme.palette.common.grey,
      [theme.breakpoints.down("sm")]: {
        marginBottom: "1em",
      },
    },
  },
}));

interface ServicePageProps {
  routerValueHandler: (n: number) => void;
  toolTipValueHandler: (n: number | undefined) => void;
}

const ServicesPage: React.FC<ServicePageProps> = ({
  routerValueHandler,
  toolTipValueHandler,
}) => {
  const classes = useStyle();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      direction='column'
      sx={{ padding: `2em ${matches ? "3em" : "10em"}` }}
      textAlign={matches ? "center" : "inherit"}>
      <Grid item>
        <Typography
          variant='h2'
          sx={{ marginBottom: matches ? "2em" : "inherite" }}>
          Services
        </Typography>
      </Grid>
      <Grid item className={classes.servicesHolder}>
        <Grid
          container
          justifyContent={matches ? "center" : "flex-end"}
          textAlign={matches ? "center" : "inherit"}
          alignItems='center'
          spacing={2}>
          <Grid item>
            <Grid container direction='column'>
              {matches ? (
                <Grid item>
                  <img
                    alt='custom software image'
                    src={customSoftwareIcon}
                    className={classes.icon}
                  />
                </Grid>
              ) : null}
              <Grid item>
                <Typography className={classes.titleService}>
                  Custome Software Development
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography className={classes.subTitle}>
                Save Energy, Save Time, Save Money
              </Typography>
            </Grid>
            <Grid item>
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
            </Grid>
            <Grid item className={classes.serviceBtnHolder}>
              <LearnMoreButton
                path='/customsoftware'
                routeValueHandler={routerValueHandler}
                toolTipValueHandler={toolTipValueHandler}
                toolTipValue={1}
                routeValue={1}
                height={matches ? 50 : 33}
                width={140}
              />
            </Grid>
          </Grid>
          {matches ? null : (
            <Grid item>
              <img
                alt='custom software image'
                src={customSoftwareIcon}
                className={classes.icon}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          justifyContent={matches ? "center" : "flex-start"}
          textAlign={matches ? "center" : "inherit"}
          alignItems='center'
          spacing={2}>
          <Grid item className={classes.servicesHolder}>
            <Grid container direction='column'>
              {matches ? (
                <Grid item>
                  <img
                    alt='mobile phone icon'
                    src={mobileAppsIcon}
                    className={classes.icon}
                  />
                </Grid>
              ) : null}
              <Grid item>
                <Typography className={classes.titleService}>
                  OS/Android App Development
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography className={classes.subTitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.servicesPunchLine}>
                Integrate your web experience or create a standalone app{" "}
                {matches ? null : <br />}
                with either mobile platform.
              </Typography>
            </Grid>

            <Grid item className={classes.serviceBtnHolder}>
              <LearnMoreButton
                path='/customsoftware'
                routeValueHandler={routerValueHandler}
                toolTipValueHandler={toolTipValueHandler}
                toolTipValue={2}
                routeValue={1}
                height={matches ? 50 : 33}
                width={140}
              />
            </Grid>
          </Grid>
          {matches ? null : (
            <Grid item>
              <img
                alt='mobile phone icon'
                src={mobileAppsIcon}
                className={classes.icon}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item className={classes.servicesHolder}>
        <Grid
          container
          justifyContent={matches ? "center" : "flex-end"}
          textAlign={matches ? "center" : "inherit"}
          alignItems='center'
          spacing={2}>
          <Grid item>
            <Grid container direction='column'>
              {matches ? (
                <Grid item>
                  <img
                    alt='website icon'
                    src={websitesIcon}
                    className={classes.icon}
                  />
                </Grid>
              ) : null}
              <Grid item>
                <Typography className={classes.titleService}>
                  Website Development
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography className={classes.subTitle}>
                Reach more. Discover More. Sell More.
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.servicesPunchLine}>
                Optimized for search engines, build for speed.
              </Typography>
            </Grid>

            <Grid item className={classes.serviceBtnHolder}>
              <LearnMoreButton
                path='/customsoftware'
                routeValueHandler={routerValueHandler}
                toolTipValueHandler={toolTipValueHandler}
                toolTipValue={3}
                routeValue={1}
                height={matches ? 50 : 33}
                width={140}
              />
            </Grid>
          </Grid>
          {matches ? null : (
            <Grid item>
              <img
                alt='website icon'
                src={websitesIcon}
                className={classes.icon}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServicesPage;
