import { createGlobalStyle } from "styled-components";
import SFProBlack from "./SF-Pro-Text-Black.otf";
import SFProBold from "./SF-Pro-Text-Bold.otf";
import SFProHeavy from "./SF-Pro-Text-Heavy.otf";
import SFProLight from "./SF-Pro-Text-Light.otf";
import SFProMedium from "./SF-Pro-Text-Medium.otf";
import SFProSemiBold from "./SF-Pro-Text-Semibold.otf";

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'SFProBlack';
    src: local('SFProBlack'), local('SFProBlack');
    font-style: black;
    src: url(${SFProBlack}) format('opentype');
  }
  @font-face {
    font-family: 'SFProBold';
    src: local('SFProBold'), local('SFProBold');
    font-style: bold;
    src: url(${SFProBold}) format('opentype');
  }
  @font-face {
    font-family: 'SFProHeavy';
    src: local('SFProHeavy'), local('SFProHeavy');
    font-style: black;
    src: url(${SFProHeavy}) format('opentype');
  }
  @font-face {
    font-family: 'SFProLight';
    src: local('SFProLight'), local('SFProLight');
    font-style: thin;
    src: url(${SFProLight}) format('opentype');
  }
  @font-face {
    font-family: 'SFProMedium';
    src: local('SFProMedium'), local('SFProMedium');
    font-style: initial;
    src: url(${SFProMedium}) format('opentype');
  }
  @font-face {
    font-family: 'SFProSemiBold';
    src: local('SFProSemiBold'), local('SFProSemiBold');
    font-style: medium;
    src: url(${SFProSemiBold}) format('opentype');
  }
`;

export default GlobalFont;