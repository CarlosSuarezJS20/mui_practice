import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ForwardArrow from "./aux-components/forwardArrow";
import BackArrow from "./aux-components/backArrow";
import integrationData from "../../animations/integrationAnimation/data.json";
import Lottie from "react-lottie";

import swizzKnife from "../../assets/swissKnife.svg";
import extendAccess from "../../assets/extendAccess.svg";
import increaseEngagement from "../../assets/increaseEngagement.svg";

import theme from "./theme";

const useStyle = makeStyles(() => ({
  titleService: {
    "&.MuiTypography-root": {
      ...theme.typography.titles,
      lineHeight: 1.2,
      marginBottom: "1em",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
    },
  },
  rowSection: {
    "&.MuiGrid-item": {
      margin: "2em 0",
    },
  },
}));

interface CustomDevelopmentPageProps {
  toolTipValueHandler: (n: number | undefined) => void;
  toolTipValue: number;
}

const IosAndroidAppPage: React.FC<CustomDevelopmentPageProps> = ({
  toolTipValueHandler,
  toolTipValue,
}) => {
  const classes = useStyle();
  const matchesSml = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  const integrationOptionsLottie = {
    loop: true,
    autoplay: true,
    animationData: integrationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid
      container
      direction='column'
      sx={{ padding: matchesSml ? "1em" : "3em" }}>
      <Grid item className={classes.rowSection}>
        <Grid
          container
          alignItems={matchesMd ? "flex-start" : "initial"}
          justifyContent='space-between'>
          <Grid item>
            <Grid container>
              <Grid item>
                <BackArrow
                  toolTipValueHandler={toolTipValueHandler}
                  serviceIndexPosition={toolTipValue}
                />
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction='column'
                  sx={{
                    width: matchesSml ? "17em" : matchesMd ? "25em" : "35em",
                  }}>
                  <Typography className={classes.titleService}>
                    iOS/Android App Development
                  </Typography>
                  <Typography paragraph>
                    Mobile apps allow you to take your tools on the go.
                  </Typography>
                  <Typography paragraph>
                    Whether you want an app for your customers, employees, or
                    yourself, we can build cross-platform native solutions for
                    any part of your business process. This opens you up to a
                    whole new world of possibilities by taking advantage of
                    phone features like the camera, GPS, push notifications, and
                    more.
                  </Typography>
                  <Typography paragraph>Convenience. Connection.</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ForwardArrow
              toolTipValueHandler={toolTipValueHandler}
              serviceIndexPosition={toolTipValue}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.rowSection}>
        <Grid
          container
          direction={matchesMd ? "column" : "row"}
          justifyContent='center'
          alignItems='center'>
          <Grid item md>
            <Grid
              container
              direction='column'
              textAlign={matchesMd ? "center" : "left"}>
              <Typography className={classes.titleService}>
                Integration
              </Typography>
              <Typography paragraph>
                Our technology enables an innate interconnection between web and
                mobile applications, putting everything you need right in one
                convenient place.
              </Typography>
              <Typography paragraph>
                This allows you to extend your reach, reinvent interactions, and
                develop a stronger relationship with your users than ever
                before.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={integrationOptionsLottie}
              style={{ maxHeight: 280, maxWidth: 200, minHeight: 170 }}
              isStopped
            />
          </Grid>
          <Grid item md>
            <Grid
              container
              direction='column'
              textAlign={matchesMd ? "center" : "right"}>
              <Typography className={classes.titleService}>
                Simultaneous Platform Support
              </Typography>
              <Typography paragraph>
                Our cutting-edge development process allows us to create apps
                for iPhone, Android, and tablets — all at the same time.
              </Typography>
              <Typography paragraph>
                This significantly reduces costs and creates a more unified
                brand experience across all devices.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.rowSection}>
        <Grid container justifyContent='space-around' textAlign='center'>
          <Grid item sx={{ marginBottom: "4em" }}>
            <Grid container direction='column' justifyContent='center'>
              <Grid item>
                <Typography className={classes.titleService}>
                  Extend Functionality
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={swizzKnife}
                  alt='swizz knive'
                  style={{ width: "10em" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ marginBottom: "4em" }}>
            <Grid container direction='column' justifyContent='center'>
              <Grid item>
                <Typography className={classes.titleService}>
                  Extend Access
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={extendAccess}
                  alt='extend access'
                  style={{ width: "15em" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ marginBottom: "2em" }}>
            <Grid container direction='column' justifyContent='center'>
              <Grid item>
                <Typography className={classes.titleService}>
                  Increase Engagement
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={increaseEngagement}
                  alt='increase engagement'
                  style={{ width: "10em" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IosAndroidAppPage;
