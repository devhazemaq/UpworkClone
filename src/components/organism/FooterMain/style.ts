"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyleMainFooter = styled.footer`
  margin: 30px 0;
  width: 95%;
  margin-inline: auto;
  background: ${theme.colors.colorGreenDark};
  border-radius: 14px;
  padding: 10px 0;

  .contain__footer {
    padding: 30px 60px;
    /* background: tan; */

    .footer__services {
      display: flex;
      justify-content: flex-start;
      gap: 133px;
      margin: 16px 0;
      .serv__one,
      .serv__two,
      .serv__thtee,
      .serv__four {
        span {
          color: ${theme.colors.colorWhite};

          display: block;
          padding-block: 6px;
        }
        span:hover {
          text-decoration: underline;
        }
      }
    }

    .footer__acounts {
      display: flex;
      justify-content: space-between;
      border-bottom: 1.5px solid wheat;
      .contain__follow,
      .contain__app {
        display: flex;
        align-items: center;
        gap: 7px;
        padding-bottom: 18px;
        .span__follow__us,
        .span__app {
          display: block;
          padding-right: 8px;
          color: white;
        }
        .contin__icon {
          width: 40px;
          height: 40px;
          border: 1px solid ${theme.colors.colorWhite};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            fill: white;
          }
        }
        .contin__icon:hover {
          background-color: ${theme.colors.colorGrayishGreen};
        }
      }
    }

    .footer__text{
      padding-top: 30px ;
      span {
        color:white;
        display: block;
        text-align: center;
      }
    }
  }
`;
