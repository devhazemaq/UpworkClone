"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

// -s------ StyleMainConnectsInfo ------
export const StyleMainConnectsInfo = styled.div`
  width: 100%;
  padding: 0px 10px 0 27px;
  /* background: tan; */
  border: 1px solid ${theme.colors.colorBorder};
  border-radius: 16px 16px 0 0;

  /* -s------ dropmenuo__contain ------ */
  .dropmenuo__contain {
    /* -s--- title__type__icon--- */
    .title__type__icon {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* padding-bottom: 10px; */
      padding: 8px 3px 8px 0;
      p {
        font-weight: bold;
      }
    }
    /* -e--- title__type__icon--- */

    /* -s--- options for dropmenuo--- */
    .options__dropmenuo {
      span {
        padding-block: 7px;
        display: block;
        /* color: green; */
        a {
          color: ${theme.colors.colorGreenForest};
        }
      }
      .span__buy__connects {
        color: green;
        padding: 10px 0 25px 0;
      }
    }
    /* -e--- options for dropmenuo--- */
  }
  /* -s------ dropmenuo__contain ------ */
`;
// -s------ StyleMainConnectsInfo ------
