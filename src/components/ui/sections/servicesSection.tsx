import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Button } from "@mui/material";
import ArrowComponent from "../ArrowComponent";
import customSoftwareIcon from "../../../assets/Custom Software Icon.svg";
import theme from "../theme";

const useStyle = makeStyles(() => ({
  serviceContainer: {
    "&.MuiGrid-root": {
      padding: "15em 10em 12em",
      [theme.breakpoints.down("md")]: {
        padding: "10em 3em 9em",
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
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
  },
  servicesPunchLine: {
    "&.MuiTypography-root": {
      lineHeight: 1.2,
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
  },
  learnMoreBtn: {
    "&.MuiButtonBase-root": {
      borderRadius: 50,
      height: 28,
      textTransform: "none",
      fontWeight: "bold",
      width: 80,
      fontSize: 10,
      padding: "5px 0px",
    },
  },
}));

const ServicesPage: React.FC = () => {
  const classes = useStyle();

  return (
    <Grid container direction='column' className={classes.serviceContainer}>
      <Grid container direction='row' spacing={2}>
        <Grid item>
          <Typography className={classes.titleService}>
            Custome Software Development
          </Typography>
          <Typography className={classes.subTitle}>
            Save Energy, Save Time, Save Money
          </Typography>
          <Typography className={classes.servicesPunchLine}>
            Complete digital solutions, from investigation
            <br />
            to
            <span
              style={{
                fontFamily: "Pacifico",
                color: theme.palette.common.orange,
              }}>
              {" "}
              calibration
            </span>
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
        <Grid item>
          <img alt='custom software image' src={customSoftwareIcon} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServicesPage;
