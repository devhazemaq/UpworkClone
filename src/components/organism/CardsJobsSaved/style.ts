"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

// -s------ Style Main Card Job ------
export const StyleMainCardsJobsSaved = styled.div`
  min-height: 500px;
  /* -s------- card contain ------ */
  .card__contain {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    padding: 25px 25px 25px;
    width: 845px;
    min-height: 323px;
    max-height: fit-content;
    /* background: ${theme.colors.colorVeryLightGray}; */
    border: 1px solid ${theme.colors.colorBorder};
    border-left: none;
    border-right: none;
    border-bottom: none;
    .job__title {
      color: ${theme.colors.colorGreenOfont};
    }
    .job__title:hover {
      color: ${theme.colors.colorGreenYellow};
      text-decoration: underline;
    }
    .Price__details {
      position: relative;
      top: 6px;
    }
    .job__description {
      text-align: start;
      line-height: 20px;
      color: black;

      strong {
        color: ${theme.colors.colorGreenYellow};
      }
    }
    /* -s--- Chip --- */
    .css-1e8dhvr-MuiChip-root {
      height: 25px;
    }
    .css-niqf4j-MuiStack-root > :not(style) ~ :not(style) {
      margin-left: 6px;
    }
    /* -s--- Chip --- */
    /* -s--- Rating --- */
    .css-ryrseu-MuiRating-root {
      color: ${theme.colors.colorGreenForest};
      font-size: 1rem;
    }
    /* -e--- Rating --- */

    .contain__info__peyment {
      display: flex;
      align-items: center;
      gap: 6px;
      text-align: center;
      color: ${theme.colors.colorGreenOfont};

      /* -s--- contain spent and country --- */
      .contain__spent__and__country {
        .span__color {
          color: ${theme.colors.colorGreenOfont};
        }
      }
      /* -e--- contain spent and country --- */

      .mui__placeicon {
        color: ${theme.colors.colorGreenOfont};
      }
    }

    .interaction___iconn {
      display: flex;
      gap: 5px;
      position: absolute;
      top: 35px;
      right: 50px;
      gap: 5px;
      .favorite__and__dislike__contain {
        width: fit-content;
        height: fit-content;
        padding: 10px 13px;
        border: 1px solid ${theme.colors.colorBorder};
        border-radius: 50%;
        background: white;

        svg {
          width: 14px;
          height: 14px;
        }
      }
      .for__hover__1:hover {
        background: ${theme.colors.colorVeryLightGray};
      }
      .for__hover__2:hover {
        background: ${theme.colors.colorVeryLightGray};
      }
    }
  }
  .card__contain:first-child {
    background: ${theme.colors.colorVeryLightGray};
  }
  .card__contain:hover {
    background: ${theme.colors.colorVeryLightGray};
  }
  /* -e------- card contain ------ */
`;
// -s------ Style Main Card Job ------
