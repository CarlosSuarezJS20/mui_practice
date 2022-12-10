import { makeStyles } from "@mui/styles";
import theme from "../theme";
import { Button } from "@mui/material";
import ArrowComponent from "../ArrowComponent";
import { Link } from "react-router-dom";

const useStyle = makeStyles(() => ({
  learnMoreBtn: {
    "&.MuiButtonBase-root": {
      ...theme.typography.learnMoreBtn,
      fontWeight: "bold",
    },
  },
}));

interface LearnMoreProps {
  routeValueHandler: (n: number) => void;
  toolTipValueHandler?: (n: number | undefined) => void;
  path: string;
  routeValue: number;
  toolTipValue?: number;
  width: number;
  height: number;
}

const LearnMoreButton: React.FC<LearnMoreProps> = ({
  routeValueHandler,
  toolTipValueHandler,
  path,
  routeValue,
  toolTipValue,
  height,
  width,
}) => {
  const classes = useStyle();
  return (
    <Button
      component={Link}
      sx={{ height: height, width: width }}
      to={path}
      variant='outlined'
      className={classes.learnMoreBtn}
      onClick={() => {
        routeValueHandler(routeValue);
        // if it doesn't exist, hero section doesn't required
        if (!toolTipValueHandler) {
          return;
        }
        toolTipValueHandler(toolTipValue);
      }}>
      <span style={{ marginRight: 5 }}>Learn more</span>
      <ArrowComponent width={15} height={15} fill={theme.palette.common.blue} />
    </Button>
  );
};

export default LearnMoreButton;
