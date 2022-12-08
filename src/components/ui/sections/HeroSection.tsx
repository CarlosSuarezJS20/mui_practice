import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Hidden } from "@mui/material";

import animationData from "../../../animations/landinganimation/data";

import theme from "../theme";
import EstimateButton from "../aux-components/estimateButton";
import LearnMoreButton from "../aux-components/learnMoreButton";

const useStyle = makeStyles(() => ({
  heroContainer: {
    "&.MuiGrid-root": {
      marginTop: "2em",
      [theme.breakpoints.down("md")]: {
        marginTop: "2em",
      },
    },
  },
}));

interface HeroProps {
  routerValueHandler: (n: number) => void;
}

const HomePage: React.FC<HeroProps> = ({ routerValueHandler }) => {
  const classes = useStyle();

  const defaultOptionsLottie = {
    loop: true,
    autoplay: false,
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
                <EstimateButton routeValueHandler={routerValueHandler} />
              </Grid>
              <Grid item>
                <LearnMoreButton
                  routeValueHandler={routerValueHandler}
                  path='/services'
                  routeValue={1}
                  height={45}
                  width={145}
                />
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
