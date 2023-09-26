"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

const paddleft = "22px";

export const StyleMainJobDatails = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  /* -s--- contain left and right parts --- */
  .contain__left__and__right__part {
    display: flex;
    /* justify-content: space-between; */
    /* background: darkmagenta; */
    padding: 30px 0;
  }
  /* -e--- contain left and right parts --- */
`;

export const StyleLeftPart = styled.div`
  width: 680px;

  /* -s--- ifo for title --- */
  .ifo__for__title {
    width: 100%;
    border: 1px solid ${theme.colors.colorBorder};
    border-radius: 16px 0 0 0;
    padding-left: ${paddleft};

    h2 {
      padding-block: 25px;
    }

    .contain__span {
      display: block;
      padding-block: 10px 37px;
    }
    span {
      display: block;
      padding-block: 2px;
    }
    .span__style {
      text-decoration: underline;
      color: ${theme.colors.colorGreenYellow};
    }
    .span__time {
      counter-reset: ${theme.colors.colorGreenOfont};
    }

    .span__for__text__and__text {
      padding-top: 8px;
      .css-1bptiuh-MuiSvgIcon-root {
        position: relative;
        top: 5px;
      }
    }
  }
  /* -e--- ifo for title --- */

  /* -s--- info description --- */
  .info__description {
    width: 100%;
    min-height: 100px;
    border: 1px solid ${theme.colors.colorBorder};
    padding-left: ${paddleft};

    span {
      display: block;
      width: 587px;
      line-height: 22px;
      letter-spacing: 0.8px;
      padding-block: 28px;
    }
  }
  /* -e--- info description --- */

  /* -s--- info job type --- */
  .info__jobtype {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 26px;
    
    padding-left: ${paddleft};
    width: 100%;
    background: teal;
    padding-block: 20px 50px;
    border: 1px solid ${theme.colors.colorBorder};

    .cotain__levelexperience {
      display: flex;
      gap: 6px;
      width: 194px;
      background: palegreen;

      svg {
        transform: scaleX(-1);
      }
      .text__levelex {
        span {
          display: block;
        }
      }
    }

    /* -s--- cotain budget ---  */
    .cotain__budget {
      display: flex;
      gap: 6px;
      width: 130px;
      background: tomato;
      span {
        display: block;
      }
    }
    /* -e--- cotain budget ---  */

    /* -s--- cotain deadline ---  */
    .contain__deadline {
      display: flex;
      gap: 6px;
      width: 150px;
      background: tan;
      span {
        display: block;
      }
    }
    /* -e--- cotain deadline ---  */

    /* -s--- cotain hiringtype ---  */
    .contain__hiringtype {
      display: flex;
      gap: 6px;
      width: 86px;
      background: tan;
      span {
        display: block;
      }
    }
    /* -e--- cotain hiringtype ---  */

    /* -s--- cotain fixed ---  */
    .contain__fixed {
      display: flex;
      gap: 6px;
      width: 100px;
      background: tan;
      span {
        display: block;
      }
    }
    /* -e--- cotain fixed ---  */
  }
  /* -e--- info job type --- */

  /* -s--- inf activity on --- */

  .info__activityon {
    padding-left: ${paddleft};
    width: 100%;
    padding-block: 13px 24px;
    border: 1px solid ${theme.colors.colorBorder};
    border-radius: 0 0 0 16px;
    P {
      padding-block: 2px 14px;
    }
    span {
      svg {
        position: relative;
        top: 5px;
      }
    }
  }
  /* -e--- inf activity on --- */
`;

export const StyleRightPart = styled.div`
  width: 268px;
  border-radius: 0 16px 0 0;
  border: 1px solid ${theme.colors.colorBorder};

  .interact__with__job__apply__and__save {
    width: 208px;
    margin-inline: 30px;

    .css-sghohy-MuiButtonBase-root-MuiButton-root {
      background-color: ${theme.colors.colorGreenYellow} !important;
      border-radius: 16px !important;
      text-transform: none;
      font-weight: 700;
      width: 100%;
      box-shadow: none;
      margin-block: 24px;
    }
    .css-1rwt2y5-MuiButtonBase-root-MuiButton-root {
      color: ${theme.colors.colorGreenYellow} !important;
      border-color: ${theme.colors.colorGreenYellow};
      border-radius: 16px !important;
      width: 100%;
      margin-block: 0 17px;
    }

    p {
      color: ${theme.colors.colorGreenYellow} !important;
      font-size: 15px;
      font-weight: 500;
      .css-ptiqhd-MuiSvgIcon-root {
        position: relative;
        top: 3px;
      }
    }
    .match__send,
    .availavle__connects {
      display: block;
      padding-block: 8px 0px;
    }
    /* -s--- Divider --- */
    .css-9mgopn-MuiDivider-root {
      width: 268px;
      position: relative;
      right: 30px;
      top: 15px;
    }
    /* -s--- Divider --- */
  }
`;
