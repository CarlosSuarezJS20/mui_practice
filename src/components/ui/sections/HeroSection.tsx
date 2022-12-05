import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@mui/styles";
import { Grid, Typography, Hidden, Button } from "@mui/material";

import animationData from "../../../animations/landinganimation/data";
import ArrowComponent from "../ArrowComponent";
import theme from "../theme";

const useStyle = makeStyles(() => ({
  heroContainer: {
    "&.MuiGrid-root": {
      marginTop: "2em",
      [theme.breakpoints.down("md")]: {
        marginTop: "2em",
      },
    },
  },

  esttimateBtn: {
    "&.MuiButtonBase-root": {
      ...theme.typography.estimateBtn,
      backgroundColor: theme.palette.common.orange,
      borderRadius: 50,
      height: 45,
      width: 145,
      "&:hover": {
        background: theme.palette.secondary.light,
      },
    },
  },
  learnMoreBtn: {
    "&.MuiButtonBase-root": {
      borderRadius: 50,
      height: 45,
      textTransform: "none",
      fontWeight: "bold",
      width: 145,
    },
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyle();

  const defaultOptionsLottie = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction='column' className={classes.heroContainer}>
      <Grid item>
        <Grid
          container
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems='center'>
          <Grid item sm>
            <Typography align='center' variant='h2'>
              Bring West Coast Technology <br /> to the Midwest
            </Typography>
            <Grid
              container
              sx={{ marginTop: "1em", marginBottom: "4em" }}
              justifyContent='center'
              spacing={2}>
              <Grid item>
                <Button className={classes.esttimateBtn} variant='contained'>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' className={classes.learnMoreBtn}>
                  <span style={{ marginRight: 10 }}>Learn more</span>
                  <ArrowComponent
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid
              style={{
                maxWidth: "45em",
                minWidth: "21em",
                marginLeft: "10%",
                marginTop: "1em",
              }}
              item
              sm>
              <Lottie
                options={defaultOptionsLottie}
                height={"100%"}
                width={"100%"}
              />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
