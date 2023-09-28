"use client";

import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import {
  Heading,
  MainHeading,
  SmallText2,
  VerySmall,
} from "@/components/atoms/typography";
import {
  StyleForDialog,
  StyleForDialogHourly,
  StyleForDialogTextBiograph,
  StyleMainBiographyForProfile,
} from "./style";
//

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Skeleton, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  getUserInfoAction,
  updateHourlyRateAcrion,
  updateJobTitleAcrion,
  updateUserBiographyAcrion,
} from "@/redux/slices/userSlice";

import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { placeHoldTextDailogOverview } from "@/constants";

//  -----------------Hourly Rate----------------
export interface SimpleDialogHourlyRateProps {
  open: boolean;
  onClose: (value: string) => void;
}

function SimpleDialogHourlyRate(props: SimpleDialogHourlyRateProps) {
  const { onClose, open } = props;
  const [textFiledHourly, setTextFiledHourly] = useState("");
  const { user, isLoading } = useAppSelector((state) => state.userhaz);
  const dispatch = useAppDispatch();

  const priceHourlyExclTax = +textFiledHourly;
  const matchTax = priceHourlyExclTax * 0.1;
  const priceHourlyInclTax = priceHourlyExclTax - matchTax;

  // console.log( priceHourlyExclTax );
  // console.log( priceHourlyInclTax );

  const handleChangeHourly = (e: any) => {
    setTextFiledHourly(e.target.value);
    console.log(e.target.value);
  };

  const handelSave = () => {
    if (textFiledHourly.length > 0) {
      console.log(textFiledHourly);
      dispatch(updateHourlyRateAcrion(textFiledHourly));
      onClose(textFiledHourly);
    }
  };
  const handleClose = () => {
    // console.log(selectedValue)
    onClose(textFiledHourly);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "750px",
          },
        },
      }}
    >
      <StyleForDialogHourly>
        <div className="contain__hourly__and__iconX">
          <Heading>Change hourly rate</Heading>
          <CloseIcon onClick={handleClose} />
        </div>
        <div className="contain__note">
          <SmallText2>
            Please note that your new hourly rate will only apply to new
            contracts.
          </SmallText2>
          <SmallText2 className="h_color">
            Your profile rate: $<strong>14.40</strong>/hr
          </SmallText2>
        </div>

        <div className="contain__filed__inputs">
          <div className="filed__1">
            <div className="houly__text">
              <SmallText2>
                <strong>Hourly Rate</strong>
              </SmallText2>
              <VerySmall>Total amount the client will see</VerySmall>
            </div>

            <div className="houly__input">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "fit-content" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  // value={100}
                  className="input__faild"
                  onChange={handleChangeHourly}
                />
              </Box>
              <SmallText2>/hr</SmallText2>
            </div>
          </div>

          <div className="filed__1">
            <div className="houly__text">
              <SmallText2>
                <strong>10% Upwork Service Fee</strong>
              </SmallText2>
            </div>

            <div className="houly__input">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "fit-content" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={`-$${matchTax}`}
                  className="input__faild2"
                  disabled
                />
              </Box>
              <SmallText2>/hr</SmallText2>
            </div>
          </div>

          <div className="filed__1">
            <div className="houly__text">
              <SmallText2>
                <strong>{`You'll Receive`}</strong>
              </SmallText2>
              <SmallText2>{`The estimated amount you'll receive after service fees`}</SmallText2>
            </div>

            <div className="houly__input">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "fit-content" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={`$${priceHourlyInclTax}`}
                  className="input__faild2"
                  disabled
                />
              </Box>
              <SmallText2>/hr</SmallText2>
            </div>
          </div>
        </div>

        <div className="contain__btns">
          <Button variant="text" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="contained" onClick={handelSave}>
            Save
          </Button>
        </div>
      </StyleForDialogHourly>
    </Dialog>
  );
}
//  -----------------edit Hourly----------------

//  -----------------edit title----------------
export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

function SimpleDialogTitle(props: SimpleDialogProps) {
  const { onClose, open } = props;
  const [textFiledTitle, setTextFiledTitle] = useState("");
  const { user, isLoading } = useAppSelector((state) => state.userhaz);
  const dispatch = useAppDispatch();

  const handleChangeTitle = (e: any) => {
    setTextFiledTitle(e.target.value);
    // console.log(e.target.value);
  };

  const handelSave = () => {
    if (textFiledTitle.length > 0) {
      console.log(textFiledTitle);
      dispatch(updateJobTitleAcrion(textFiledTitle));
      onClose(textFiledTitle);
    }
  };
  const handleClose = () => {
    // console.log(selectedValue)
    onClose(textFiledTitle);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <StyleForDialog className="ContainEditYourTitle">
        <div className="contain__title__and__iconX">
          <Heading>Edit yort title</Heading>
          <CloseIcon onClick={handleClose} />
        </div>
        <div className="show__your__title__and__input">
          <SmallText2 className="span__tit">Your title</SmallText2>
          <SmallText2 className="span__disc">
            Enter a single sentence description of your professional
            skills/experience (e.g. Expert Web Designer with Ajax experience)
          </SmallText2>

          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="web developer"
            onChange={handleChangeTitle}
          />
        </div>
        <div className="contain__btns">
          <Button variant="text" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="contained" onClick={handelSave}>
            Save
          </Button>
        </div>
      </StyleForDialog>
    </Dialog>
  );
}
//  -----------------edit title----------------

const BiographyForProfile = () => {
  const { user, isLoading } = useAppSelector((state) => state.userhaz);

  const dispatch = useAppDispatch();

  const [openEditTitle, setOpenEditTitle] = useState(false);
  const [openEditHourlyRate, setOpenEditHourlyRate] = useState(false);
  const [openEditTxetBiography, setOpenEditTxetBiography] = useState(false);

  // ---------txtBiog

  const handleClickTxetBiography = () => {
    setOpenEditTxetBiography(true);
  };

  const handleCloseTxetBiography = () => {
    setOpenEditTxetBiography(false);
  };
  // ---------txtBiog

  // ---------title

  const handleClickOpenTitle = () => {
    setOpenEditTitle(true);
  };

  const handleCloseTitle = () => {
    setOpenEditTitle(false);
  };
  // ---------title

  // ---------hourly
  const handleClickOpenHourlyRate = () => {
    setOpenEditHourlyRate(true);
  };

  const handleCloseHourlyRate = () => {
    setOpenEditHourlyRate(false);
  };
  // ---------hourly

  useEffect(() => {
    if (!user.length) {
      dispatch(getUserInfoAction());

    }
    // console.log(user)
    localStorage.setItem("user1", JSON.stringify(user[0]))


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);










  return (
    <StyleMainBiographyForProfile>
      <div className="main__head__datails">
        <div className="contain__title__work">
          <MainHeading>
            {user[0]?.jobTitle || (
              <Skeleton
                sx={{ bgcolor: "grey.700" }}
                variant="rectangular"
                width={"160px"}
                height={40}
              />
            )}
          </MainHeading>
          <EditIcon
            fontSize="medium"
            className="style__edit__globle"
            onClick={handleClickOpenTitle}
          />
          <SimpleDialogTitle open={openEditTitle} onClose={handleCloseTitle} />
        </div>
        <div className="contin__price__link">
          <div className="price__in__hr">
            <Heading>${user[0]?.hourlyRate}/hr</Heading>
            <EditIcon
              fontSize="medium"
              className="style__edit__globle"
              onClick={handleClickOpenHourlyRate}
            />
            <SimpleDialogHourlyRate
              open={openEditHourlyRate}
              onClose={handleCloseHourlyRate}
            />
          </div>
          <InsertLinkIcon fontSize="medium" className="style__link__globle" />
        </div>
      </div>
      <div className="txet__biography">
        <SmallText2>
          {user[0]?.userBiography || (
            <Skeleton
              sx={{ bgcolor: "grey.700" }}
              variant="rectangular"
              height={40}
            />
          )}
        </SmallText2>
        <SimpleDialogTxetBiography
          open={openEditTxetBiography}
          onClose={handleCloseTxetBiography}
        />
        <EditIcon
          fontSize="medium"
          className="style__edit__globle style__place"
          onClick={handleClickTxetBiography}
        />
      </div>
    </StyleMainBiographyForProfile>
  );
};

export default BiographyForProfile;

//  ----------------- edit txet biography ----------------
export interface SimpleDialogTxetBiographyProps {
  open: boolean;
  onClose: (value: string) => void;
}

function SimpleDialogTxetBiography(props: SimpleDialogTxetBiographyProps) {
  const { onClose, open } = props;
  const [textFiledTitle, setTextFiledTitle] = useState("");
  const [txtBiogrFromStorge, setTxtBiogrFromStorge] = useState("");
  const [valueBiographyAfterEdit, setValueBiographyAfterEdit] = useState("");


  const { user, isLoading } = useAppSelector((state) => state.userhaz);


  const dispatch = useAppDispatch();

  const handleChangeTitle = (e: any) => {
    setTextFiledTitle(e.target.value);
    // console.log(e.target.value);
  };

  const handelSave = () => {
    if (valueBiographyAfterEdit) {
      if (valueBiographyAfterEdit !== txtBiogrFromStorge) {
        // console.log(valueBiographyAfterEdit);

        dispatch(updateUserBiographyAcrion(valueBiographyAfterEdit));
        onClose(valueBiographyAfterEdit);
      }
    }

  };
  const handleClose = () => {
    // console.log(selectedValue)
    onClose(textFiledTitle);
  };

  const handleChangeTexrarea = (e: any) => {
    if (e.target) {
      const text = e.target.value;
      // console.log(text);
      setValueBiographyAfterEdit(text);

    }

  }



  useEffect(() => {
    if (typeof window !== 'undefined') {
      const name = localStorage.getItem('user1');

      const setTxtBiogrFromStorgeCallback = (previousName: string) => {
        if (name !== null) {
          const nameObj = JSON.parse(name);
          // console.log(nameObj.userBiography);
          return nameObj.userBiography;
        } else {
          console.log(previousName);

          return previousName;
        }
      };

      setTxtBiogrFromStorge(setTxtBiogrFromStorgeCallback);
    }
  }, [])



  // console.log(txtBiogrFromStorge);
  // console.log(txtBiogrFromStorge);


  return (
    <Dialog onClose={handleClose} open={open} sx={{ "& .MuiDialog-container": { "& .MuiPaper-root": { width: "100%", maxWidth: "750px", borderRadius: "16px" }, }, }}>
      <StyleForDialogTextBiograph>
        <div className="contain__title__and__iconX">
          <Heading>Overview</Heading>
          <CloseIcon onClick={handleClose} />
        </div>
        <div className="overview__contain">
          <div className="overview__text__static">
            <SmallText2 className="tit__txt1" >{`Use this space to show clients you have the skills and experience they're looking for.`}</SmallText2>

            <ul>
              <li><SmallText2>Describe your strengths and skills</SmallText2></li>
              <li><SmallText2>Highlight projects, accomplishments and education</SmallText2></li>
              <li><SmallText2>{`Keep it short and make sure it's error-free`}</SmallText2></li>
            </ul>

            <SmallText2 className="span__green" >Learn more</SmallText2>

            <textarea
              rows={10}
              placeholder={placeHoldTextDailogOverview}
              onChange={handleChangeTexrarea}  >

              {`${txtBiogrFromStorge}`}

            </textarea>

          </div>


        </div>
        <div className="contain__btns">
          <Button variant="text" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="contained" onClick={handelSave}>
            Save
          </Button>
        </div>
      </StyleForDialogTextBiograph>
    </Dialog>
  );
}
//  -----------------edit txet biography----------------

