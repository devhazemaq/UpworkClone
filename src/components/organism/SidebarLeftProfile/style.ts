"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

const forMargin: string = "35px";
const forPadding: string = "30px";

export const StyleMainSidebarLeftProfile = styled.div`
  width: 328px;
  padding: ${forPadding};
  margin-inline: ${forMargin} 0;
  border: 1px solid ${theme.colors.colorBorder};
  border-radius: 0 0 0 16px;

  .style__add__globle {
    width: 30px;
    height: 30px;
    border: 2px solid ${theme.colors.colorBorder};
    border-radius: 50%;
    color: ${theme.colors.colorGreenForest};
    padding: 2px;
  }
  .style__edit__globle {
    width: 30px;
    height: 30px;
    border: 2px solid ${theme.colors.colorBorder};
    border-radius: 50%;
    color: ${theme.colors.colorGreenForest};
    padding: 3.671px;
    svg {
      width: 14px;
      height: 14px;
    }
  }
  .style__link__globle {
    width: 40px;
    height: 40px;
    border: 2px solid ${theme.colors.colorBorder};
    border-radius: 50%;
    color: ${theme.colors.colorGreenForest};
    padding: 3.671px;
    svg {
      width: 14px;
      height: 14px;
    }
  }

  .fwe {
    font-weight: 500;
  }
  .colgfo {
    color: ${theme.colors.colorGreenOfont};
  }
  .setblolck {
    display: block;
  }

  .for__video_introduction {
    display: flex;
    gap: 10px;
  }
  .for__Hours__per__week {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-top: 30px;
    .contain__title {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    span {
      display: block;
    }
  }

  .for__languages {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-top: 30px;
    .contain__title {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .span__block {
      display: block;
    }
  }

  .for__verifications {
    margin-top: 30px;
    .contain__verifiv {
      margin-top: 10px;
      display: flex;
      gap: 10px;
    }
  }
  .for__education {
    margin-top: 30px;

    .contain__education {
      display: flex;
      gap: 10px;
    }
    .contain__collag {
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 0px;
      .collag__cont {
        display: flex;
        gap: 10px;
      }
    }
  }

  .for__btns__accounts {
    margin-top: 30px;
    .btn__acount {
      margin-top: 10px;
      color: ${theme.colors.colorGreenOfont};
      width: 100%;
      border-radius: 42px;
      border-color: ${theme.colors.colorGreenOfont};
    }
  }
`;
