'use client'

import styled from "styled-components"

export const StyleMainSearchAndIconsForHeader = styled.div`

  position: absolute;
  right: 10px;
  top: 7px;


    /* -s--- search part --- */
    .contain_textfield__contain {
    /* background: tomato; */
    width: fit-content;

    display: flex;
    align-items: center;
    padding-inline: 7px;
    gap: 20px;
  }
  .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 26px;
    width: 290px;
    height: 34px;
    border: none !important;
    outline: none !important;
  }


  /* -s--- select for search --- */
  .select__for__search {
    width: 65px;
    height: 34px;
    border-radius: 26px;
  }
  /* -s--- select for search --- */

  /* -e--- search part --- */
`;

