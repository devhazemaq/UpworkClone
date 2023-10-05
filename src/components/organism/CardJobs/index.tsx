"use client";

import React, { useEffect, useState } from "react";
import { StyleMainCardJob } from "./style";
import { Body, SmallText, SmallText2 } from "@/components/atoms/typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import PlaceIcon from "@mui/icons-material/Place";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { IJob } from "@/@tyeps/typesForrJob";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import HeaderForDrawer from "@/components/atoms/HeaderForDrawer";
import JobDatails from "../JobDatails";
import { getJobsAction } from "@/redux/slices/jopsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { saveNewJobAction } from "@/redux/slices/savejobSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CardJobs = () => {
  const dispatch = useAppDispatch();
  const { allJobs } = useAppSelector((state) => state.allJobs);
  const [count, setCount] = useState(0);
  const [idForJobCurent, setIdForJobCurent] = useState<number>(0);

  const [jobFavorites, setJobFavorites] = useState<Record<string, boolean>>({});

  const [state, setState] = useState({ right: false });

  const toggleDrawer =
    (open: boolean, idJob?: number) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (typeof idJob === "number") {
        setIdForJobCurent(idJob);
      }

      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState((prevState) => ({ ...prevState, right: open }));
    };

  useEffect(() => {
    dispatch(getJobsAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFavoriteJob = (e: React.MouseEvent, job: IJob) => {
    e.stopPropagation();
    console.log("This is favotite job");
    dispatch(saveNewJobAction(job));
  };

  const toggleFavoriteJob = (jobId: number) => {
    setJobFavorites((prevState) => ({
      ...prevState,
      [jobId]: !prevState[jobId],
    }));
  };

  return (
    <StyleMainCardJob>
      {allJobs?.map((job) => (
        <>
          <div
            key={job?.id}
            className="card__contain"
            // onClick={toggleDrawer(true)}
            onClick={toggleDrawer(true, job?.id)}

            // onClickCapture={toggleDrawer(true, job)}
          >
            <Body as="h2" className="job__title">
              {job?.title}
            </Body>

            {job?.jobType === "Fixed-price" && (
              <SmallText className="Price__details">
                {job?.jobType} - {job?.levelExperience} - Est. Budget: $
                {job?.budget.fixed} - {job?.postTime}
              </SmallText>
            )}
            {job?.jobType === "Hourly" && (
              <SmallText className="Price__details">
                {job?.jobType}: ${job?.budget.hourly.from}-$
                {job?.budget.hourly.to} - {job?.levelExperience} - Est. Time: $
                {job?.budget.fixed} - {job?.postTime}
              </SmallText>
            )}

            <SmallText2 as="p" className="job__description">
              {job?.description}
            </SmallText2>

            <Stack direction="row" spacing={1}>
              {job?.jobSkills?.map((skill, index) => (
                <Chip key={index} label={skill} />
              ))}
            </Stack>

            <SmallText>
              Proposals: <strong>{job?.proposals}</strong>
            </SmallText>

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
              <span className="contain__spent__and__country">
                <span className="span__color">
                  <span className="span__color">$2</span>K+
                </span>
                spent
                <PlaceIcon fontSize="small" className="mui__placeicon" />
                <span className="span__color">{job?.country}</span>
              </span>
            </div>

            <div className="interaction___iconn">
              <div
                className="favorite__and__dislike__contain for__hover__1"
                onClick={(e) => {
                  handleFavoriteJob(e, job);
                  toggleFavoriteJob(job?.id);
                }}
              >
                {jobFavorites[job?.id] ? (
                  <FavoriteIcon color="success" />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </div>
              <div className="favorite__and__dislike__contain for__hover__2">
                <ThumbDownOffAltIcon />
              </div>
            </div>
          </div>
          <Drawer
            sx={{ backgroundColor: "transparent", opacity:"0.5" }}
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer(false)}
          >
            <Box
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              sx={{
                width: "100%",
                height: "100%",
                padding: " 2px 23px 10px 20px",
              }}
            >
              <HeaderForDrawer />
              <JobDatails idhaz={idForJobCurent} />
            </Box>
          </Drawer>
        </>
      ))}
    </StyleMainCardJob>
  );
};

export default CardJobs;
