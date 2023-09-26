'use client'

import { theme } from "@/styles/theme";
import styled from "styled-components";


export const StyleMainOr = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 10px;
  color: ${theme.colors.colorGreenOlive};
  padding: 7px 0;

  .span__1 ,
  .span__2{
    display: inline-block;
    width: 60px;
    height: 1px;
    background: ${theme.colors.colorGrayCharcoal};
  }

  .street__line {
    width: 340px;
    height: 1px;
    background: ${theme.colors.colorGrayCharcoal};
    /* padding: 5px 0; */
  }

  p {
    color: ${theme.colors.colorGreenOfont};
  }
`;