import React from "react";

import { makeStyles } from "@mui/styles";
import { Grid, Hidden } from "@mui/material";
import theme from "./theme";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    position: "relative",
    zIndex: 1302,
  },
  footerImg: {
    verticalAlign: "bottom",
    width: "25em",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "15em",
    },
  },
  mainContainer: {
    "&.MuiGrid-root": {
      position: "absolute",
      marginTop: "15px",
    },
  },

  mainContainerItem: {
    "&.MuiGrid-item": {
      margin: "30px",
    },
  },

  link: {
    "&.MuiGrid-item": {
      color: "white",
      fontFamily: "Arial",
      fontSize: "0.79rem",
      fontWeight: "bold",
      textDecoration: "none",
    },
  },

  iconsContainer: {
    "&.MuiGrid-root": {
      position: "absolute",
      marginTop: "-4.2em",
      [theme.breakpoints.down("sm")]: {
        marginTop: "-6em",
      },
    },
  },

  socialMedia: {
    height: "2.5em",
    width: "2.5em",
    margin: "10px",
  },
}));

// props
interface FooterComProps {
  routeValueHandler: {
    routeValueHandler: (n: number) => void;
    routeValue: number;
  };
  headerModalToolTipSelectedTabHandler: {
    headerModalToolTipSelectedTabHandler: (n: number) => void;
    toolTipSelectedTabeValue: number;
  };
}

const Footer: React.FC<FooterComProps> = ({
  routeValueHandler,
  headerModalToolTipSelectedTabHandler,
}) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justifyContent='center'
          className={classes.mainContainer}>
          <Grid className={classes.mainContainerItem} item>
            <Grid spacing='1' container direction='column'>
              <Grid
                item
                component={Link}
                to='/'
                onClick={() => {
                  routeValueHandler.routeValueHandler(0);
                }}
                className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.mainContainerItem} item>
            <Grid spacing='8' container direction='column'>
              <Grid
                item
                component={Link}
                to='/services'
                onClick={() => {
                  routeValueHandler.routeValueHandler(1);
                }}
                className={classes.link}>
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to='/customsoftware'
                className={classes.link}
                onClick={() => {
                  routeValueHandler.routeValueHandler(1);
                  headerModalToolTipSelectedTabHandler.headerModalToolTipSelectedTabHandler(
                    1
                  );
                }}>
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to='/mobileapps'
                className={classes.link}
                onClick={() => {
                  routeValueHandler.routeValueHandler(1);
                  headerModalToolTipSelectedTabHandler.headerModalToolTipSelectedTabHandler(
                    2
                  );
                }}>
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                to='/websites'
                className={classes.link}
                onClick={() => {
                  routeValueHandler.routeValueHandler(1);
                  headerModalToolTipSelectedTabHandler.headerModalToolTipSelectedTabHandler(
                    3
                  );
                }}>
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.mainContainerItem} item>
            <Grid spacing='8' container direction='column'>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
                onClick={() => {
                  routeValueHandler.routeValueHandler(2);
                }}>
                The Revolution
              </Grid>
              <Grid item className={classes.link}>
                Vision
              </Grid>
              <Grid item className={classes.link}>
                Tech
              </Grid>
              <Grid item className={classes.link}>
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.mainContainerItem} item>
            <Grid spacing='8' container direction='column'>
              <Grid
                item
                component={Link}
                to='/about'
                onClick={() => {
                  routeValueHandler.routeValueHandler(3);
                }}
                className={classes.link}>
                About Us
              </Grid>
              <Grid item className={classes.link}>
                History
              </Grid>
              <Grid item className={classes.link}>
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.mainContainerItem} item>
            <Grid spacing='1' container direction='column'>
              <Grid
                item
                component={Link}
                to='/contact'
                onClick={() => {
                  routeValueHandler.routeValueHandler(4);
                }}
                className={classes.link}>
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt='black decoration slash'
        className={classes.footerImg}
        src={footerAdornment}
      />
      <Grid
        justifyContent='flex-end'
        container
        className={classes.iconsContainer}>
        <Grid
          item
          component='a'
          href='https://www.facebook.com'
          rel='noopener noreferrer'
          target='_blank'>
          <img alt='facebook' src={facebook} className={classes.socialMedia} />
        </Grid>
        <Grid
          item
          component='a'
          href='https://www.twitter.com'
          rel='noopener noreferrer'
          target='_blank'>
          <img alt='twitter' src={twitter} className={classes.socialMedia} />
        </Grid>
        <Grid
          item
          component='a'
          href='https://www.instagram.com'
          rel='noopener noreferrer'
          target='_blank'>
          <img
            alt='instagram'
            src={instagram}
            className={classes.socialMedia}
          />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
