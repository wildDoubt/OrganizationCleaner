import { css } from '@emotion/react';

export const avatarWrapper = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    margin-right: 10px;
  }
`;

export const TableWrapper = css`
  @media screen and (min-width: 360px) {
    max-width: 30vh;
  }

  @media screen and (min-width: 425px) {
    max-width: 40vh;
  }

  @media screen and (min-width: 768px) {
    max-width: 70vh;
  }
  @media screen and (min-width: 1096px) {
    max-width: 120vh;
  }
`;
export const titleWrapper = css`
  font-family: 'Work Sans', sans-serif;
  color: #EDEBEC;

  @media screen and (min-width: 360px) {
    font-size: 5vw;
  }

  
  @media screen and (min-width: 426px) {
    font-size: 5vw;
  }
`;

export const buttonWrapper = css`
  font-family: 'Open Sans Condensed', sans-serif;
  color: #FFF;

  @media screen and (min-width: 360px) {
    width: 26vw;
    font-size: 2vw;
    height: 10vw;
  }

  @media screen and (min-width: 426px) {
    width: 30vw;
    font-size: 3vw;
    height: 6vw;
  }
`;

export const textInBody = css`
  color: #F7F8FB
`;
