import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

interface Props {
  children: React.ReactElement;
}

const ElevationScrolling: React.FC<Props> = (props: Props) => {
  const { children } = props;

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return React.cloneElement(children, {
    elevation: scrollTrigger ? 4 : 0,
  });
};

export default ElevationScrolling;
