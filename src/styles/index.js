import {css} from "@emotion/react";

export const TableWrapper = css`
  @media screen and (min-width: 601px) {
    min-width: 80vh;
  }
`

export const titleWrapper = css`
  font-family: 'Work Sans', sans-serif;
  @media screen and (min-width: 601px) {
    font-size: 5vw;
  }
  @media screen and (max-width: 600px) {
    font-size: 9vw;
  }
  
  color: #EDEBEC;
`

export const buttonWrapper = css`
  font-family: 'Open Sans Condensed', sans-serif;
  color: #FFF;
  @media screen and (min-width: 601px) {
    width: 25vw;
    height: 4vw;
  }
  @media screen and (max-width: 600px) {
    width: 50vw;
    height: 9vw;
  }
`
