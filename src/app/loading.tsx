import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <Box 
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
    }}
    >
      <Image
        src="/assets/images/login/logo.svg"
        alt="logo-upwork"
        width={120}
        height={60}
        loading="eager"
        priority={true}
      />
      
    </Box>
  );
};

export default Loading;
