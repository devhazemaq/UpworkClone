'use client '

import React, { useEffect, useState } from "react";
import {  StyleMainCardsJobsSaved } from "./style";
import { Body, SmallText, SmallText2 } from "@/components/atoms/typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import PlaceIcon from '@mui/icons-material/Place';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { API_URL_SAVEDJOBS } from "@/config/api";

interface Job {


  id: number;
  title: string;
  description: string;
  jobSkills: string[];
  complexity: string;
  jobType: string;
  deadLine: string;
  levelExperience: string;
  hiringType: string;
  budget: {
    hourly: {
      from: number;
      to: number;
    };
    fixed: number;
  };
  image: string;
  proposals: string;
  country: string;
  postTime: string;
}
const CardsJobsSaved = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const allData = await axios.get<Job[]>(`${API_URL_SAVEDJOBS}`);
      // console.log(allData.data);
      setJobs(allData.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(jobs);
  return (
    <StyleMainCardsJobsSaved>

      {jobs?.map((job) => (
        <div key={job?.id} className="card__contain">
          <Body as="h2" className="job__title">
            <a href="/">{job?.title}</a>
          </Body>

          {job?.jobType === "Fixed-price" && (<SmallText className="Price__details">{job?.jobType} - {job?.levelExperience} - Est. Budget: ${job?.budget.fixed} - {job?.postTime}</SmallText>)}
          {job?.jobType === "Hourly" && (<SmallText className="Price__details">{job?.jobType}: ${job?.budget.hourly.from}-${job?.budget.hourly.to}  - {job?.levelExperience} - Est. Time: ${job?.budget.fixed} - {job?.postTime}</SmallText>)}

          <SmallText2 as="p" className="job__description">{job?.description}</SmallText2>

          <Stack direction="row" spacing={1}>
            {(job?.jobSkills)?.map((skill, index) => (
              <Chip key={index} label={skill} />
            ))}
          </Stack>

          <SmallText>Proposals: <strong>{job?.proposals}</strong></SmallText>

          <div className="contain__info__peyment">
            <Image
              src={"/assets/images/homeJops/verified.svg"}
              alt="verified"
              width={16}
              height={16}
            />
            <SmallText>Payment verified</SmallText>
            <Rating
              name="text-feedback"
              value={5}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <span className="contain__spent__and__country" >
              <span className="span__color">
                <span className="span__color" >$2</span>K+
              </span>
              spent
              <PlaceIcon fontSize="small" className="mui__placeicon" />
              <span className="span__color">{job?.country}</span>
            </span>

          </div>


          <div className="interaction___iconn">
            <div className="favorite__and__dislike__contain for__hover__1">
              <FavoriteBorderIcon />
            </div>
            <div className="favorite__and__dislike__contain for__hover__2">
              <ThumbDownOffAltIcon />
            </div>
          </div>



        </div>
      ))}


    </StyleMainCardsJobsSaved>
  )
};

export default CardsJobsSaved;


