"use client"

import { theme } from "@/styles/theme";
import styled from "styled-components";


export const StyleMain = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 0.8rem;
  padding: 15px 0;
  /* margin-top: 1rem; */
  color: ${theme.colors.colorGreenDark};
  background: white;
  z-index: 1;
`;

export const StyleSpan = styled.span`
  color: ${theme.colors.colorGreenForest};
`;
