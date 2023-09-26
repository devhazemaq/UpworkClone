"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyleMainBillboard = styled.div`
  background: ${theme.colors.colorBlueNavy};
  width: 845px;
  height: 198px;
  border-radius: 16px;

  .main__box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    padding-top: 1rem;
    padding-left: 27px;
  }

  /* -s--- box container billboard info --- */
  .box__container__billboard__info {
    .main__title {
      color: ${theme.colors.colorWhite};
      padding-block: 10px;
    }
    .span__text {
      display: block;
      color: ${theme.colors.colorWhite};
    }
    /* -s--- btn billboard ---*/
    .btn__billboard {
      background-color: ${theme.colors.colorWhite};
      color: ${theme.colors.colorGreenForest};
      border: 2px solid ${theme.colors.colorGreenForest};
      height: 30px;
      border-radius: 16px;
      margin-top: 10px;
    }
    /* -s--- btn billboard ---*/
  }
  /* -e--- box container billboard info --- */
`;
