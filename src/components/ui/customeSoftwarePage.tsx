import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ForwardArrow from "./aux-components/forwardArrow";
import BackArrow from "./aux-components/backArrow";
import lightbulb from "../../assets/bulb.svg";
import stopWatch from "../../assets/stopwatch.svg";
import cash from "../../assets/cash.svg";

import documentsData from "../../animations/documentsAnimation/data";
import scaleData from "../../animations/scaleAnimation/data.json";
import Lottie from "react-lottie";

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

  subtitle: {
    "&.MuiTypography-root": {
      color: theme.palette.common.blue,
      fontWeight: "bold",
      fontSize: 19,
    },
  },

  paragraph: {
    "&.MuiTypography-root": {
      fontSize: 12,
    },
  },
  imageIconBulb: {
    width: "30px",
  },
  imageIconMoney: {
    width: "55px",
  },
  imageIcon: {
    width: "40px",
  },
}));

interface CustomDevelopmentPageProps {
  toolTipValueHandler: (n: number | undefined) => void;
  toolTipValue: number;
}

const CustomDevelopmentPage: React.FC<CustomDevelopmentPageProps> = ({
  toolTipValueHandler,
  toolTipValue,
}) => {
  const classes = useStyle();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesmd = useMediaQuery(theme.breakpoints.down("md"));

  const documentsOptionsLottie = {
    loop: true,
    autoplay: true,
    animationData: documentsData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptionsLottie = {
    loop: true,
    autoplay: true,
    animationData: scaleData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid
      container
      direction='column'
      rowSpacing={20}
      sx={{ padding: matches ? "1.5em" : "3em" }}>
      <Grid item sx={{ marginBottom: "2em" }}>
        <Grid container justifyContent='space-between'>
          <Grid item xs={1}>
            <BackArrow
              toolTipValueHandler={toolTipValueHandler}
              serviceIndexPosition={toolTipValue}
            />
          </Grid>
          <Grid item xs={10}>
            <Grid container direction='column'>
              <Grid item>
                <Typography className={classes.titleService}>
                  Custome Software Development
                </Typography>
              </Grid>
              <Grid item>
                <Typography paragraph>
                  Whether we’re replacing old software or inventing new
                  solutions, Arc Development is here to help your business
                  tackle technology.
                </Typography>
              </Grid>
              <Grid item>
                <Typography paragraph>
                  Using regular commercial software leaves you with a lot of
                  stuff you don’t need, without some of the stuff you do need,
                  and ultimately controls the way you work. Without using any
                  software at all you risk falling behind competitors and
                  missing out on huge savings from increased efficiency.
                </Typography>
              </Grid>
              <Grid item>
                <Typography paragraph>
                  Our custom solutions are designed from the ground up with your
                  needs, wants, and goals at the core. This collaborative
                  process produces finely tuned software that is much more
                  effective at improving your workflow and reducing costs than
                  generalized options.
                </Typography>
              </Grid>
              <Grid item>
                <Typography paragraph>
                  We create exactly what you what, exactly how you want it.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={1}
            alignItems='flex-start'
            justifyContent='flex-end'>
            <ForwardArrow
              toolTipValueHandler={toolTipValueHandler}
              serviceIndexPosition={toolTipValue}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          justifyContent='space-between'
          alignItems={matchesmd ? "center" : "inherit"}
          rowSpacing={10}
          direction={matchesmd ? "column" : "row"}>
          <Grid item>
            <Grid
              container
              direction={matches ? "column" : "row"}
              spacing={matchesmd ? 0 : 5}>
              <Grid item md>
                <Grid
                  container
                  direction='column'
                  sx={{ maxWidth: matchesmd ? "20em" : "10em" }}>
                  <Grid item>
                    <Typography className={classes.titleService}>
                      Digital Documents & Data
                    </Typography>
                    <Typography className={classes.paragraph} paragraph>
                      Reduce Errors. Reduce Waste. Reduce Costs.
                    </Typography>
                    <Typography className={classes.paragraph} paragraph>
                      Billions are spent annually on the purchasing, printing,
                      and distribution of paper. On top of the massive
                      environmental impact this has, it causes harm to your
                      bottom line as well.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md>
                <Lottie
                  options={documentsOptionsLottie}
                  style={{ maxHeight: 170, maxWidth: 170, minHeight: 170 }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction={matches ? "column" : "row"}>
              <Grid item md>
                <Lottie
                  options={scaleOptionsLottie}
                  style={{ maxHeight: 150, maxWidth: 150 }}
                />
              </Grid>
              <Grid item md>
                <Grid
                  container
                  justifyContent='flext-start'
                  alignItems='flex-end'
                  direction='column'
                  textAlign='right'
                  sx={{ maxWidth: matchesmd ? "20em" : "15em" }}>
                  <Grid item>
                    <Typography className={classes.titleService}>
                      Scale
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.paragraph} paragraph>
                      Whether you’re a large brand, just getting started, or
                      taking off right now, our application architecture ensures
                      pain-free growth and reliability.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          sx={{ marginTop: "1.2em", height: matches ? "250px" : "300px" }}
          container
          justifyContent={"center"}
          spacing={matches ? 2 : 3}
          alignItems={matches ? "center" : "flex-start"}>
          <Grid item>
            <Grid container direction='column' textAlign='center'>
              <Grid item>
                <Typography className={classes.subtitle}>
                  Save Energy
                </Typography>
              </Grid>
              <Grid item>
                <img
                  className={classes.imageIconBulb}
                  src={lightbulb}
                  alt='light bulb'
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction='column' textAlign='center'>
              <Grid item>
                <Typography className={classes.subtitle}>Save Time</Typography>
              </Grid>
              <Grid item>
                <img
                  className={classes.imageIcon}
                  src={stopWatch}
                  alt='stop watch'
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction='column' textAlign='center'>
              <Grid item>
                <Typography className={classes.subtitle}>Save Money</Typography>
              </Grid>
              <Grid item>
                <img className={classes.imageIconMoney} src={cash} alt='cash' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomDevelopmentPage;
