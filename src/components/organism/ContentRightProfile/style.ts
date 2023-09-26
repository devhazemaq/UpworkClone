"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

const forMargin: string = "35px";
const forPadding: string = "30px";

export const StyleMainContentRightProfile = styled.div`
  width: 100%;

  margin-inline: 0 35px;
  border-right: 1px solid ${theme.colors.colorBorder};
  border-bottom: 1px solid ${theme.colors.colorBorder};
  border-radius: 0 0 16px 0;

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

  
  .for__work__history {
    padding: 30px;
    border-bottom: 1px solid ${theme.colors.colorBorder};

    h2 {
      margin-bottom: 20px;
    }
    span {
      display: block;
    }
    .start__search {
      color: ${theme.colors.colorGreenYellow};
      font-weight: 500;
    }
    .start__search:hover {
      text-decoration: underline;
    }
  }

  .for__portfilo {
    padding: 30px;
    border-bottom: 1px solid ${theme.colors.colorBorder};

    .contain__portfiloo {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .contain__portfiloo__imge {
      margin-top: 30px;
      margin-bottom: 30px;
      gap: 26px;
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        display: block;
        text-align: center;
      }

      .add__protfo {
        color: ${theme.colors.colorGreenForest};
        font-weight: 500;
      }
      .add__protfo:hover {
        text-decoration: underline;
      }
    }
  }

  .for__skills {
    padding: 30px;

    .contain__skills {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
    }
    .contain__chips {
      .mui__chip {
        margin: 6px;
      }
    }
  }
`;
