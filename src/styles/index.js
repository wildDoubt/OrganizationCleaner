import {css} from "@emotion/react";

export const avatarWrapper = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    margin-right: 10px;
  }
`

export const TableWrapper = css`
  @media screen and (min-width: 360px) {
    min-width: 30vh;
  }

  @media screen and (min-width: 425px) {
    min-width: 40vh;
  }

  @media screen and (min-width: 768px) {
    min-width: 60vh;
  }
`
export const titleWrapper = css`
  font-family: 'Work Sans', sans-serif;
  color: #EDEBEC;

  @media screen and (min-width: 360px) {
    font-size: 3vw;
  }

  @media screen and (min-width: 426px) {
    font-size: 4vw;
  }
`

export const buttonWrapper = css`
  font-family: 'Open Sans Condensed', sans-serif;
  color: #FFF;

  @media screen and (min-width: 360px) {
    width: 26vw;
    height: 6vw;
  }

  @media screen and (min-width: 426px) {
    width: 30vw;
    height: 6vw;
  }
`

export const textInBody = css`
  color: #F7F8FB
`
