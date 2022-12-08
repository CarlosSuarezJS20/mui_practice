import { makeStyles } from "@mui/styles";
import theme from "../theme";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const useStyle = makeStyles(() => ({
  estimateBtnClass: {
    "&.MuiButton-root": {
      ...theme.typography.estimateBtn,
      borderRadius: "50px",
      marginLeft: "25px",
      marginRight: "25px",
      height: "50px",
      "&:hover": {
        background: theme.palette.secondary.light,
      },
    },
  },
}));

interface EstimateProps {
  routeValueHandler: (n: number) => void;
}

const EstimateButton: React.FC<EstimateProps> = ({ routeValueHandler }) => {
  const classes = useStyle();
  return (
    <Button
      className={classes.estimateBtnClass}
      component={Link}
      to='/estimate'
      variant='contained'
      color='secondary'
      onClick={() => {
        routeValueHandler(5);
      }}>
      Free Estimate
    </Button>
  );
};

export default EstimateButton;
