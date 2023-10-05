"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyleMainHeaderForDrawer = styled.div`
  /* -s--- box main ---  */
  .box__main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 10px 30px; */

    .css-i4bv87-MuiSvgIcon-root {
      position: relative;
      left: 5px;
    }

    .box__new__window {
      width: fit-content;
      display: flex;

      color: ${theme.colors.colorGreenYellow};
      a:hover {
        text-decoration: underline;
      }
    }
  }
  /* -s--- box main ---  */
`;
