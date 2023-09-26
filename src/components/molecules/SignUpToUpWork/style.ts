import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyleMainSignUpToUpWork = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  width: fit-content;
  align-items: center;
  border: 1px solid ${theme.colors.colorGrayCharcoal};
  margin-inline: auto;
  padding: 30px 75px;
  margin-top: 70px;
  margin-bottom: 40px;


  .main__heading {
    text-align: center;
    margin-block: 16px 18px;
  }
  

  /* -s--- signup from control ---*/
  .signup__from__control {
    width: 608px;

    .input__signup {
      width: 289px;
      height: 40px;

      margin-block: 16px;

      .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
        padding: 8.5px 14px;
      }
    }

    .contain__full__name {
      display: flex;
      justify-content: space-between;
    }

    .inp__email,
    .inp__password,
    .inp__select {
      width: 100%;
    }

    .sginup__chexkbox {
      color: ${theme.colors.colorGreenYellow};
    }
    .for__color__words__green {
      color: ${theme.colors.colorGreenYellow};
    }
    .chec__2 {
      margin-bottom: 11px;
    }

    .btn__with__create {
      background: ${theme.colors.colorGreenYellow};
      border-radius: 16px;
      margin-block: 20px 0;

      
    }

    .span__text {
      margin-block: 20px 0;
      text-align: center;
    }
  }

  /* -e--- signup from control ---*/
`;
