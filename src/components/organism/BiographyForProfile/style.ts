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
