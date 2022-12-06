import React from "react";

import { makeStyles } from "@mui/styles";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import ArrowComponent from "../ArrowComponent";
import theme from "../theme";
import revolutionBackground from "../../../assets/repeatingBackground.svg";

const useStyle = makeStyles(() => ({
  cardTitle: {
    "&.MuiTypography-root": {
      fontFamily: "Pacifico",
      ...theme.typography.titles,
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

  learnMoreBtn: {
    "&.MuiButtonBase-root": {
      ...theme.typography.learnMoreBtn,
    },
  },
  mainCard: {
    "&.MuiPaper-root": {
      position: "absolute",
      maxWidth: "850px",
      padding: "100px",
      textAlign: "center",
      boxShadow: theme.shadows[10],
      borderRadius: "15px",
      [theme.breakpoints.down("md")]: {
        maxWidth: "500px",
        padding: "10px",
      },
      [theme.breakpoints.down("sm")]: {
        maxWidth: "400px",
        padding: "10px",
      },
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

const RevolutionSection: React.FC = () => {
  const classes = useStyle();

  return (
    <Grid container direction='column'>
      <Grid item>
        <Grid
          container
          style={{ height: "40em" }}
          justifyContent='center'
          alignItems='center'>
          <Card className={classes.mainCard}>
            <CardContent>
              <Grid container direction='column'>
                <Grid item>
                  <Typography className={classes.cardTitle}>
                    The Revolution
                  </Typography>
                  <Grid item>
                    <Typography className={classes.subTitle}>
                      Visionary insights coupled with cutting edge technology is
                      a recipe for revolution
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
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RevolutionSection;
