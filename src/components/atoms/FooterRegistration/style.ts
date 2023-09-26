'use client'

import { FlexForCenter } from "@/styles/common";
import { theme } from "@/styles/theme";
import styled from "styled-components";


export const StyleMainFooterRegistration = styled(FlexForCenter)`


  background: ${theme.colors.colorGreenDark};
  width: calc(100% - 5.6rem);
  height: 100px;
  margin-inline: auto;
  margin-bottom: 11px;

  .text__footer {
    color: ${theme.colors.colorWhite};
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  
  `;


