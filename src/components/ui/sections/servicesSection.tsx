import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Button } from "@mui/material";
import ArrowComponent from "../ArrowComponent";
import customSoftwareIcon from "../../../assets/Custom Software Icon.svg";
import theme from "../theme";

const useStyle = makeStyles(() => ({
  serviceContainer: {
    "&.MuiGrid-root": {
      padding: "12em 10em 12em",
    },
    [theme.breakpoints.down("md")]: {
      padding: "9em 10em 9em",
    },
  },
}));

const ServicesPage: React.FC = () => {
  const classes = useStyle();

  return (
    <Grid container direction='column' className={classes.serviceContainer}>
      <Grid container direction='row' spacing={2}>
        <Grid item>
          <Typography>Custome Software Development</Typography>
          <Typography>Save Energy, Save Time, Save Money</Typography>
          <Typography>
            Complete digital solutions, from investigation
            <br />
            to<span>calibration</span>
          </Typography>
          <Button>
            <span>Learn more</span>
            <ArrowComponent
              width={15}
              height={15}
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
