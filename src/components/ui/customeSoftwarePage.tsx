import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ForwardArrow from "./aux-components/forwardArrow";
import BackArrow from "./aux-components/backArrow";

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
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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
        <Grid container>
          <Grid item>
            <Typography></Typography>
          </Grid>
          <Grid item></Grid>
          <Grid item>
            <Typography></Typography>
          </Grid>
          <Grid item></Grid>
          <Grid item>
            <Typography></Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomDevelopmentPage;
