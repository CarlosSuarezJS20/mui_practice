import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ForwardArrow from "./aux-components/forwardArrow";
import BackArrow from "./aux-components/backArrow";
import analytics from "../../assets/analytics.svg";
import globe from "../../assets/globe.svg";
import outreach from "../../assets/outreach.svg";
import seo from "../../assets/seo.svg";

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
      ...theme.typography.titles,
      marginLeft: "1em",
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

  return (
    <Grid
      container
      direction='column'
      sx={{ padding: matchesSml ? "1em" : "2em 4em" }}>
      <Grid item className={classes.rowSection}>
        <Grid
          container
          alignItems={matchesMd ? "flex-start" : "initial"}
          justifyContent={"space-between"}>
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
                    Website Development
                  </Typography>
                  <Typography paragraph>
                    Having a website is a necessity in today’s business world.
                    They give you one central, public location to let people
                    know who you are, what you do, and why you’re the best at
                    it.
                  </Typography>
                  <Typography paragraph>
                    From simply having your hours posted to having a full
                    fledged online store, making yourself as accessible as
                    possible to users online drives growth and enables you to
                    reach new customers.
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
      <Grid item sx={{ marginBottom: "5em", padding: "0 2em" }}>
        <Grid
          container
          direction={matchesMd ? "column" : "row"}
          justifyContent={matchesMd ? "center" : "initial"}
          alignItems={matchesMd ? "center" : "initial"}
          textAlign={matchesMd ? "center" : "initial"}>
          <Grid item>
            <Grid container direction='column'>
              <Grid item>
                <Typography className={classes.subtitle}>Analytics</Typography>
              </Grid>
              <Grid item>
                <Grid item>
                  <img src={analytics} alt='data' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item width='25em'>
            <Typography paragraph>
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ marginBottom: "5em", padding: "0 2em" }}>
        <Grid
          container
          direction={matchesMd ? "column" : "row"}
          justifyContent={matchesMd ? "center" : "flex-end"}
          alignItems={matchesMd ? "center" : "initial"}
          textAlign={matchesMd ? "center" : "initial"}>
          <Grid item>
            <Grid container direction='column'>
              <Grid item>
                <Typography className={classes.subtitle}>E-Commerce</Typography>
              </Grid>
              <Grid item>
                <Grid item>
                  <img src={globe} alt='data' width='220px' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item width='25em'>
            <Typography paragraph>
              It’s no secret that people like to shop online.
            </Typography>
            <Typography paragraph>
              In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
              for your slice of that pie.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ marginBottom: "5em", padding: "0 2em" }}>
        <Grid
          container
          direction={matchesMd ? "column" : "row"}
          justifyContent={matchesMd ? "center" : "flex-start"}
          alignItems={matchesMd ? "center" : "initial"}
          textAlign={matchesMd ? "center" : "initial"}>
          <Grid item>
            <Grid container direction='column'>
              <Grid item>
                <Typography className={classes.subtitle}>Outreach</Typography>
              </Grid>
              <Grid item>
                <Grid item>
                  <img src={outreach} alt='data' width='220px' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item width='25em'>
            <Typography paragraph>
              Draw people in with a dazzling website. Showing off your products
              online is a great way to help customers decide what’s right for
              them before visiting in person.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ padding: "0 2em" }}>
        <Grid
          container
          direction={matchesMd ? "column" : "row"}
          justifyContent={matchesMd ? "center" : "flex-end"}
          alignItems={matchesMd ? "center" : "initial"}
          textAlign={matchesMd ? "center" : "initial"}>
          <Grid item>
            <Grid container direction='column'>
              <Grid item>
                <Typography className={classes.subtitle}>Outreach</Typography>
              </Grid>
              <Grid item>
                <Grid item>
                  <img src={seo} alt='data' width='220px' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item width='25em'>
            <Typography paragraph>
              How often have you ever been to the second page of Google results?
              If you’re like us, probably never. Customers don’t go there
              either, so we make sure your website is
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IosAndroidAppPage;
