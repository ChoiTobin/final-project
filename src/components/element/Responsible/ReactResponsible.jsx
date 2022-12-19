// yarn add react-responsive

import React from "react";
import { useMediaQuery } from "react-responsive";

const Responsible = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Device Test!"),
    isDesktopOrLaptop &&
      React.createElement("p", null, "You are a desktop or laptop"),
    isBigScreen && React.createElement("p", null, "You  have a huge screen"),
    isTabletOrMobile &&
      React.createElement("p", null, "You are a tablet or mobile phone"),
    React.createElement(
      "p",
      null,
      "Your are in ",
      isPortrait ? "portrait" : "landscape",
      " orientation"
    ),
    isRetina && React.createElement("p", null, "You are retina")
  );
};

export default Responsible;