"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

// -s------ Style Main Categories For Header Main ------
export const StyleMainCategoriesForHeaderMain = styled.div`

  display: flex;
  width: fit-content;
    padding-top: 2px;
  gap: 13px;


  /* -s--- fild contain for nav --- */
  .fild__contain {
    width: 94px;
    background: transparent;
    font-size: 14px;

    .for__margin__top {
      margin-bottom: 10px;
      img {
        margin-left: 5px;
      }
    }
    .span__opt {
      position: absolute;
      display: none;
      /* display: block; */
      width: 240px;
      height: fit-content;
      background: yellowgreen;
      position: relative;
      margin-top: 9px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      

      .opt__1,
      .opt__2,
      .opt__3,
      .opt__4,
      .opt__5,
      .opt__6 {
        display: block;
        background: ${theme.colors.colorWhite};
        padding-top: 5px;
        padding-left: 1rem;
        width: 100%;
        height: 32px;
        color: ${theme.colors.colorGreenYellow};

      }
      .opt__2,
      .opt__3,
      .opt__4,
      .opt__5,
      .opt__6 {
        color: ${theme.colors.colorGreenDark};
      }
    }
    .span__opt::before {
      content: "";
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent white transparent;
      position: absolute;
      left: 13px;
      top: -20px;
      z-index: 1;
      transition: 0.3s;
    }
  }
  /* -e--- fild contain for nav --- */

  .fild__cont__1 {
    width: 88px;
    color: ${theme.colors.colorGreenYellow};
  }
  .fild__cont__2 {
    width: 74px;
  }
  .fild__cont__3 {
    width: 70px;
  }
  .fild__cont__1:hover > .span__opt {
    display: block;
    position: absolute;
    z-index: 11111111;
  }
  .fild__cont__2:hover > .span__opt {
    display: block;
    position: absolute;
    z-index: 11111111;
  }
  .fild__cont__3:hover > .span__opt {
    display: block;
    position: absolute;
    z-index: 11111111;
  }
  .fild__cont__4:hover > .span__opt {
    display: block;
    position: absolute;
    z-index: 11111111;
  }
`;
// -s------ Style Main Categories For Header Main ------
