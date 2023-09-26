"ust client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

// -s------ Style Main Search For Job ------
export const StyleMainSearchForJob = styled.div`
  width: 845px;
  padding-block: 40px 30px;
  /* background: tan; */
  .input__search__jop {
    width: calc(100% - 40px);
    height: 40px;
    border: 1.5px solid ${theme.colors.colorBorder};
  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 8.2px 14px;
  }

  .icon__btn__mui {
    background: ${theme.colors.colorGreenForest};
  }
  /* -s--- mui Search Icon */
  .css-78trlr-MuiButtonBase-root-MuiIconButton-root {
    border-radius: 0;

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .css-1vooibu-MuiSvgIcon-root {
    color: ${theme.colors.colorWhite};
  }
  /* -e--- mui Search Icon */
`;
// -e------ Style Main Search For Job ------
