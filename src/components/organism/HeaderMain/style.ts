"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

// -s------ Style Header Main ------
export const StyleHeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 16px;
  padding: 20px 5px;

  .contain__elements {
    display: flex;
    /* background: black; */

    width: fit-content;

    .img__logo {
      margin-right: 20px;
    }
  }
`;
// -e------ Style Header Main ------
