import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import forwardArrowDisabled from "../../../assets/forwardArrowDisabled.svg";
import forwardArrow from "../../../assets/forwardArrow.svg";

const useStyle = makeStyles(() => ({}));

interface ForwardArrowProps {
  toolTipValueHandler: (n: number | undefined) => void;
  //   Limits the forward action if user is in the last service page
  serviceIndexPosition: number;
}

const ForwardArrow: React.FC<ForwardArrowProps> = ({
  toolTipValueHandler,
  serviceIndexPosition,
}) => {
  const classes = useStyle();
  const routes = ["/services", "/customsorftware", "/mobileapps", "/websites"];

  return serviceIndexPosition === 3 ? (
    <Button disabled>
      <img src={forwardArrowDisabled} />
    </Button>
  ) : (
    <Button
      component={Link}
      to={routes[serviceIndexPosition + 1]}
      onClick={() => {
        toolTipValueHandler(serviceIndexPosition + 1);
      }}>
      <img src={forwardArrow} />
    </Button>
  );
};

export default ForwardArrow;
