"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

// -s------ Style Main Paper Information ------
export const StyleMainPaperInformation = styled.div`
  width: fit-content;

  .for__paper {
    width: 262px;
    height: 108px;
    display: flex;
    justify-content: space-evenly;
    padding-block: 13px;
    margin-block: 1.8rem;
    border-radius: 10px;

    .contain__info {
      p {
        padding: 0px 0 6px;
      }
      span {
        display: block;
        line-height: 1.2em;
      }
    }
    .contain__imgs {
      display: flex;
      flex-direction: column;
      width: fit-content;
      align-items: flex-end;
      gap: 6px;
      height: fit-content;
      margin-top: 4px;
    }
  }
  .for__paper:first-child, .for__paper:nth-child(2) {
    background: ${theme.colors.colorGreenPastel};
  }
  .for__paper:nth-child(3) {
    border: 1px solid ${theme.colors.colorBorder};
  }
  
`;
// -e------ Style Main Paper Information ------
