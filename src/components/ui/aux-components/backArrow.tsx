import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import backArrowDisabled from "../../../assets/backArrowDisabled.svg";
import backArrow from "../../../assets/backArrow.svg";

const useStyle = makeStyles(() => ({}));

interface BackArrowProps {
  toolTipValueHandler: (n: number | undefined) => void;

  //   Limits the forward action if user is in the last service page
  serviceIndexPosition: number;
}

const BackArrow: React.FC<BackArrowProps> = ({
  toolTipValueHandler,
  serviceIndexPosition,
}) => {
  const classes = useStyle();
  const routes = ["/services", "/customsorftware", "/mobileapps", "/websites"];

  return (
    <Button
      component={Link}
      to={routes[serviceIndexPosition - 1]}
      onClick={() => {
        toolTipValueHandler(serviceIndexPosition - 1);
      }}>
      <img src={backArrow} />
    </Button>
  );
};

export default BackArrow;
