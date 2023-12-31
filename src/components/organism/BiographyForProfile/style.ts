"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyleMainBiographyForProfile = styled.div`
  padding: 30px;
  border-bottom: 1px solid ${theme.colors.colorBorder};
  .main__head__datails {
    display: flex;
    justify-content: space-between;

    .contain__title__work {
      display: flex;
      align-items: center;
      gap: 10px;
      width: fit-content;
    }
    .contin__price__link {
      display: flex;
      gap: 20px;
      width: fit-content;
      .price__in__hr {
        h2 {
          font-weight: 700;
        }
        display: flex;
        align-items: center;
        gap: 10px;
        width: fit-content;
      }
    }
  }

  .txet__biography {
    position: relative;
    margin-top: 30px;
    span {
      width: 70%;
      display: block;
    }
    .style__place {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;
// .css-1t1j96h-MuiPaper-root-MuiDialog-paper {
//   max-width: 750px;
// }

export const StyleForDialog = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 17px;
  .contain__title__and__iconX {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: fit-content;
    padding: 10px 0;
  }
  .show__your__title__and__input {
    width: 100%;
    padding-bottom: 20px;
    span {
      display: block;
    }
    .span__tit {
      padding-block: 0 10px;
    }
    .span__disc {
      padding-block: 10px 30px;
    }
    .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
      width: 550px;
      padding: 8.5px 14px;
    }
  }

  .contain__btns {
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    button {
      width: 96px;
      height: 40px;
      border-radius: 18px;
    }

    button:first-child {
      color: ${theme.colors.colorGreenForest};
    }
    button:first-child:hover {
      text-decoration: underline;
    }
    button:last-child {
      background-color: ${theme.colors.colorGreenForest};
    }
  }
`;

export const StyleForDialogHourly = styled.div`
  width: 750px;
  height: 504px;
  padding: 10px 20px;
  .h_color {
    color: ${theme.colors.colorGreenOfont};
  }
  .contain__hourly__and__iconX {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: fit-content;
    padding: 10px 0;
  }
  .contain__note {
    padding-top: 15px;
    span {
      display: block;
      padding-bottom: 10px;
    }
    span:first-child {
      padding-bottom: 10px;
    }
  }

  .contain__filed__inputs {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-block: 40px;

    .filed__1 {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      border-bottom: 1px solid ${theme.colors.colorBorder};
      .houly__text {
        width: fit-content;
        span {
          display: block;
        }
      }
      .houly__input {
        display: flex;
        align-items: center;
        gap: 8px;

        .css-1iz4cux {
          width: fit-content;
        }
      }
    }
  }
  .contain__btns {
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    button {
      width: 96px;
      height: 40px;
      border-radius: 18px;
    }

    button:first-child {
      color: ${theme.colors.colorGreenForest};
    }
    button:first-child:hover {
      text-decoration: underline;
    }
    button:last-child {
      background-color: ${theme.colors.colorGreenForest};
    }
  }

  /* -s--- For Hrurly Rate --- */
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    width: 170px;
    height: 40px;
    padding: 0;
    padding-right: 10px;
    text-align: end;
  }
  /* -s--- For Hrurly Rate --- */

  .input__faild2 {
    background: ${theme.colors.colorGrayLight};
  }
`;

export const StyleForDialogTextBiograph = styled.div`
  width: 750px;
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 17px;
  .contain__title__and__iconX {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: fit-content;
    padding: 10px 0;
    border-bottom: 1px solid ${theme.colors.colorBorder};
  }

  .overview__contain {
    
    .overview__text__static {
      padding-block: 30px 57px;

      .tit__txt1 {
        display: block;
        padding-bottom: 1rem;
      }
      ul {
        padding-left: 20px;

        li {
          padding-block: 6px;
        }
      }
      .span__green {
        color: ${theme.colors.colorGreenYellow};
        display: block;
        padding-bottom: 7px;
      }
      textarea {
        width: 100%;
        padding: 10px 15px;
        border-radius: 5px;
        border: 2px solid ${theme.colors.colorGrayLight};
      }      
    }
  }

  .contain__btns {
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    button {
      width: 96px;
      height: 40px;
      border-radius: 18px;
    }

    button:first-child {
      color: ${theme.colors.colorGreenForest};
    }
    button:first-child:hover {
      text-decoration: underline;
    }
    button:last-child {
      background-color: ${theme.colors.colorGreenForest};
    }
  }


  
  
  




`;
