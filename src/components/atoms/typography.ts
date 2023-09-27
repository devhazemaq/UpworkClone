import { theme } from "@/styles/theme";
import { styled } from "styled-components";

const BigHeading = styled.h1`
  font-family: ${theme.fonts.primary};
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.2px;
  line-height :36px;
  color: ${theme.colors.colorGreenDark};
`;

const MainHeading = styled.h1`
  font-family: ${theme.fonts.primary};
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: ${theme.colors.colorGreenDark};
`;

const Heading = styled.h2`
  font-family: ${theme.fonts.primary};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  color: ${theme.colors.colorGreenDark};
`;


const Body = styled.p`
  font-family: ${theme.fonts.primary};
  font-size: 1rem;
  font-style: normal;
  font-weight:  400;
  color: ${theme.colors.colorGreenDark};
  line-height: 23px;
`;

const SmallText = styled.span`
  font-family: ${theme.fonts.primary};
  font-size: 0.75rem;
  font-style: normal;
  font-weight:  400;
  color: ${theme.colors.colorGreenDark};
  line-height: 18px;
  
`;
const SmallText2 = styled.span`
  font-family: ${theme.fonts.primary};
  font-size: 0.875rem; /* 14px  */
  font-style: normal;
  font-weight:  400;
  color: ${theme.colors.colorGreenDark};
  line-height: 18px;
  letter-spacing: 0.6px;
`;

const VerySmall = styled.span`
  font-family: ${theme.fonts.primary};
  font-size: 12px; 
  font-style: normal;
  font-weight:  400;
  color: ${theme.colors.colorGreenDark};
  line-height: 18px;
  letter-spacing: 0.6px;
`;


export { BigHeading, MainHeading, Heading, Body, SmallText, SmallText2, VerySmall };