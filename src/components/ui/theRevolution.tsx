import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import vision from "../../assets/vision.svg";
import android from "../../assets/android.svg";

import theme from "./theme";
import CallToActionSection from "./homepage-sections/callToAction";

const useStyle = makeStyles(() => ({
  title: {
    "&.MuiTypography-root": {
      ...theme.typography.revolutionTitle,
      fontSize: "2em",
    },
  },
  subTitle: {
    "&.MuiTypography-root": {
      ...theme.typography.titles,
      lineHeight: 1.2,
      marginBottom: "1em",
    },
  },
}));

interface TheRevolutionPageProps {
  routerValueHandler: (n: number) => void;
}

const TheRevolutionPage: React.FC<TheRevolutionPageProps> = ({
  routerValueHandler,
}) => {
  const classes = useStyle();
  const matchesSml = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        container
        direction='column'
        sx={{ padding: matchesSml ? "1em" : "2em 4em" }}>
        <Grid item sx={{ padding: "0 4em" }}>
          <Typography className={classes.title}>the revolution</Typography>
          <Box height='1em' />
        </Grid>
        <Grid item padding='0 1em'>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item md textAlign='center'>
              <img src={vision} alt='montain' style={{ width: "400px" }} />
            </Grid>
            <Grid item md>
              <Grid container direction={"column"}>
                <Grid item>
                  <Box height='3em' />
                  <Typography
                    className={classes.subTitle}
                    textAlign={matchesMd ? "center" : "right"}>
                    Vision
                  </Typography>
                  <Typography paragraph>
                    The rise of computers, and subsequently the Internet, has
                    completely altered every aspect of human life. This has
                    increased our comfort, broadened our connections, and
                    reshaped how we view the world.
                  </Typography>
                  <Typography paragraph>
                    What once was confined to huge rooms and teams of engineers
                    now resides in every single one of our hands. Harnessing
                    this unlimited potential by using it to solve problems and
                    better lives is at the heart of everything we do.
                  </Typography>
                  <Typography paragraph>
                    We want to help businesses capitalize on the latest and
                    greatest technology. The best way to predict the future is
                    to be the one building it, and we want to help guide the
                    world into this next chapter of technological expansion,
                    exploration, and innovation.
                  </Typography>
                  <Typography paragraph>
                    By holding ourselves to rigorous standards and pristine
                    quality, we can ensure you have the absolute best tools
                    necessary to thrive in this new frontier.
                  </Typography>
                  <Typography paragraph>
                    We see a future where every individual has personalized
                    software custom tailored to their lifestyle, culture, and
                    interests, helping them
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item padding='0 1em'>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item md>
              <Grid container direction={"column"}>
                {matchesMd ? (
                  <Grid item md textAlign='center'>
                    <img
                      src={android}
                      alt='montain'
                      style={{ width: "300px" }}
                    />
                  </Grid>
                ) : null}
                <Grid item>
                  <Box height='3em' />
                  <Typography
                    className={classes.subTitle}
                    textAlign={matchesMd ? "center" : "left"}>
                    Technology
                  </Typography>
                  <Typography paragraph>
                    In 2013, Facebook invented a new way of building websites.
                    This new system, React.js, completely revolutionizes the
                    process and practice of website development.
                  </Typography>
                  <Typography paragraph>
                    Instead of chaining together long individual pages, like
                    traditional websites, React websites are built with little
                    chunks of code called components. These components are
                    faster, easier to maintain, and are easily reused and
                    customized, each serving a singular purpose.
                  </Typography>
                  <Typography paragraph>
                    Two years later they shocked the world by releasing a
                    similar system, React Native, for producing iOS and Android
                    apps. Instead of having to master two completely separate
                    development platforms, you can leverage the knowledge you
                    already possessed from building websites and reapply it
                    directly! This was a huge leap forward.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {matchesMd ? null : (
              <Grid item md textAlign='center'>
                <img src={android} alt='montain' style={{ width: "300px" }} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      <CallToActionSection routerValueHandler={routerValueHandler} />
    </>
  );
};

export default TheRevolutionPage;
