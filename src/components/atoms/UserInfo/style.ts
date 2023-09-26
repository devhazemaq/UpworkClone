"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyleMainUserInfo = styled.div`
  width: fit-content;
  border: 1px solid ${theme.colors.colorBorder};
  border-radius: 16px;
  padding: 11px 30px;

  .box__contain__userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding-bottom: 21px;
    width: 200px;
    height: 200px;
    border-radius: 16px;

    a {
      display: block;
      color: black;
      font-weight: bold;
    }
  }
`;
