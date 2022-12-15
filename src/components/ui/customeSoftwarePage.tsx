import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ForwardArrow from "./aux-components/forwardArrow";
import BackArrow from "./aux-components/backArrow";
import lightbulb from "../../assets/bulb.svg";
import stopWatch from "../../assets/stopwatch.svg";
import cash from "../../assets/cash.svg";

import { LoremIpsum } from "react-lorem-ipsum";

import theme from "./theme";

const useStyle = makeStyles(() => ({
  titleService: {
    "&.MuiTypography-root": {
      ...theme.typography.titles,
      lineHeight: 1.2,
      [theme.breakpoints.down("sm")]: {
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
  imageIconBulb: {
    width: "30px",
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

  return (
    <Grid container direction='column' sx={{ padding: "3em" }}>
      <Grid item>
        <Grid container justifyContent='space-between'>
          <Grid item xs={1}>
            <BackArrow
              toolTipValueHandler={toolTipValueHandler}
              serviceIndexPosition={toolTipValue}
            />
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              <Grid item>
                <Typography className={classes.titleService}>
                  Custome Software Development
                </Typography>
              </Grid>
              <Grid item>
                <LoremIpsum avgWordsPerSentence={10} />
              </Grid>

              <Grid item>
                <LoremIpsum avgWordsPerSentence={10} />
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
          sx={{ marginTop: "1.2em", height: "300px" }}
          container
          direction={matches ? "column" : "row"}
          justifyContent={"center"}
          spacing={3}
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
                <img className={classes.imageIcon} src={cash} alt='cash' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomDevelopmentPage;
