"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

const forMargin: string = "35px";
const forPadding: string = "30px";

export const StyleMainProfilePage = styled.div`
  
  .user__information {
    display: flex;
    justify-content: space-between;
    padding: ${forPadding};
    margin-inline: ${forMargin};
    border: 1px solid ${theme.colors.colorBorder};
    margin-top: 80px;
    border-radius: 16px 16px 0 0; 
    
    /* -s--- contain boxs avatar namedata --- */
    .contain__boxs__avatar__namedata {
      display: flex;
      gap: 25px;
      .box___avatar {
        position: relative;
        width: 80px;
        height: 80px;

        .icon__edit {
          position: absolute;
          z-index: 1;
          border: 2px solid ${theme.colors.colorBorder};
          border-radius: 50%;

          left: -6px;
          top: -8px;
          color: ${theme.colors.colorGreenForest};
          padding: 2px;
        }
        .icon__rdio {
          position: absolute;
          right: 0;
          bottom: 0;
          border: 4px solid white;
          border-radius: 50%;
          z-index: 1;
          color: ${theme.colors.colorGrayishGreen};
          background-color: ${theme.colors.colorGrayishGreen};
        }
      }

      .box__name__and__data {
        width: 440px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .css-ptiqhd-MuiSvgIcon-root {
          width: 0.9rem;
          height: 0.9rem;
        }

        .box__stateAvailabe {
          display: flex;
          align-items: center;
          gap: 10px;

          .css-1rwt2y5-MuiButtonBase-root-MuiButton-root {
            font-size: 11px;
            height: 20px;
            padding: 0 10px;
            border-radius: 11px;
            text-transform: none;
            .css-i4bv87-MuiSvgIcon-root {
              width: 14px;
              height: 14px;
            }
          }
          .icon__edit {
            /* position: absolute; */
            z-index: 1;
            border: 2px solid ${theme.colors.colorBorder};
            border-radius: 50%;
            width: 30px;
            height: 30px;
            /* 
      left: -6px;
      top: -8px; */
            color: ${theme.colors.colorGreenForest};
            padding: 3px;
          }
        }
      }
    }
    /* -e--- contain boxs avatar namedata --- */

    /* -s--- box btns profile --- */
    .box__btns__profile {
      display: flex;
      align-items: flex-start;
      gap: 10px;

      .css-1rwt2y5-MuiButtonBase-root-MuiButton-root {
        color: ${theme.colors.colorGreenYellow} !important;
        border: 3px solid ${theme.colors.colorGreenYellow};
        border-radius: 21px !important;
        padding: 8px 0;
        width: 168px;
        height: 40px;
        text-transform: none;
        font-weight: 500;
      }
      .css-sghohy-MuiButtonBase-root-MuiButton-root {
        background-color: #14a800 !important;
        border-radius: 21px !important;
        text-transform: none;
        font-weight: 500;
        padding: 8px 0px;
        height: 40px;
        width: 168px;
        box-shadow: none;
      }
    }
    /* -e--- box btns profile --- */
  }

  /* -s--- contai left right --- */
  .contain__left__right {
    display: flex;


    
  }
  /* -e--- contai left right --- */
`;
