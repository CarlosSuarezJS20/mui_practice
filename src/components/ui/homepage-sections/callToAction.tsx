import React from "react";

import { makeStyles } from "@mui/styles";
import { Grid, Typography, Button, useMediaQuery } from "@mui/material";
import EstimateButton from "../aux-components/estimateButton";
import ArrowComponent from "../ArrowComponent";
import theme from "../theme";

import callToActionBackground from "../../../assets/background.jpg";

const useStyle = makeStyles(() => ({
  aboutandcontactbackground: {
    backgroundImage: `url(${callToActionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  callToActionTitle: {
    "&.MuiTypography-root": {
      ...theme.typography.titles,
      lineHeight: 1,
    },
  },
  callToActionDescription: {
    "&.MuiTypography-root": {
      ...theme.typography.h4,
      lineHeight: 1,
      marginTop: "0.5em",
    },
  },
  learnMoreBtn: {
    "&.MuiButtonBase-root": {
      ...theme.typography.learnMoreBtn,
      marginTop: "1em",
      border: "2px solid",
      "&:hover": {
        border: "2px solid",
      },
    },
  },
}));

interface CallToActionProps {
  routerValueHandler: (n: number) => void;
}

const CallToActionSection: React.FC<CallToActionProps> = ({
  routerValueHandler,
}) => {
  const classes = useStyle();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container sx={{ height: matchesSM ? "45em" : "50em" }}>
      <Grid
        container
        direction={matchesSM ? "column" : "row"}
        sx={{
          position: "absolute",
          padding: "4em",
          height: matchesSM ? "45em" : "50em",
        }}>
        <Grid
          item
          xs={5}
          container
          direction='column'
          justifyContent='center'
          alignItems={matchesSM ? "center" : "flex-end"}>
          <Grid item sx={{ textAlign: matchesSM ? "center" : "left" }}>
            <Typography className={classes.callToActionTitle}>
              Simple Software.
              <br /> Revolutionary Results.
            </Typography>
            <Typography className={classes.callToActionDescription}>
              Take advantage of the <br /> 21st Century
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
        </Grid>
        <Grid
          item
          container
          xs={7}
          direction='column'
          justifyContent='center'
          alignItems={matchesSM ? "center" : "flex-end"}>
          <EstimateButton routeValueHandler={routerValueHandler} />
        </Grid>
      </Grid>

      <div className={classes.aboutandcontactbackground} />
    </Grid>
  );
};

export default CallToActionSection;
