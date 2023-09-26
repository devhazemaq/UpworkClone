"use client"

import Image from "next/image";
import Typography from "@mui/material/Typography";
import { StyleMain, StyleSpan } from "./style";

type typeForSignup = {
  forSignup: boolean;
};

const HeaderForRegistrationPages: React.FC<typeForSignup> = ({ forSignup }) => {
  return (
    <StyleMain>
      <Image
        src="/assets/images/login/logo.svg"
        alt="logo-upwork"
        width={82}
        height={22.5}
        loading="eager"
        priority={true}
      />
      {forSignup && (
        <Typography variant="body2">
          Here to hire talent? <StyleSpan>Join as a Client</StyleSpan>
        </Typography>
      )}
    </StyleMain>
  );
};

export default HeaderForRegistrationPages;

