"use client";

import React from "react";
import JobDatails from "@/components/organism/JobDatails";
import { Box, Typography } from "@mui/material";
import HeaderMain from "@/components/organism/HeaderMain";
import Container from "@/components/atoms/Container";

const JopInformationPage = () => {
  var idJob = null;

  if (typeof window !== "undefined") {
    idJob = localStorage.getItem("jobC");
  }

  // console.log(idJob);

  let objJob = null;

  if (idJob) {
    objJob = JSON.parse(idJob);
  } else {
    objJob = {};
  }
  return (
    <Box>
      <HeaderMain />
      
        <Typography variant="h5"  pl={"15%"}>Job details</Typography>
      
        <JobDatails idhaz={objJob.id} style={{pading:"0 70px"}} />
    </Box>
  );
};

export default JopInformationPage;
