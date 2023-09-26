'use client'

import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyleMainLogInToUpWork = styled.div`

  .box__style {
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
    border: 1px solid ${theme.colors.colorGrayCharcoal};
    margin-inline: auto;
    padding: 30px 70px;
    /* margin-top: 40px; */
    /* margin-top: 70px; */
  margin-bottom: 40px;
  }


  .from__control {
    width: 348px;
    

    .input__login {
      height: 40px;
      width: 100%;
      border-radius: 0.7rem;
      margin-block: 40px 20px
    }

    .btn__with__email {
      height: 40px;
      border-radius: 1rem;
      background: ${theme.colors.colorGreenYellow};
      text-transform: none;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: 0.32px;
    }
    .or__sapatate {
      margin-block: 15px;
    }
    
    .btn__signup {
      width: 217px;
      height: 40px;
      color: ${theme.colors.colorGreenForest};
      text-transform: none;
      font-weight: 500;
      line-height: 22px;
      border: 1px solid ${theme.colors.colorGreenForest};
      border-radius: 1rem;
      margin-left: 65px;

    }
    
  }

  .from__control:focus {
    outline: none;
    border: none;
    border: 1px solid ${theme.colors.colorGreenForest};
  }
`;
