"use client"


import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { Heading, MainHeading, SmallText2 } from '@/components/atoms/typography'
import { StyleForDialog, StyleMainBiographyForProfile } from './style';
// 

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { blue } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import { Skeleton, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { getUserInfoAction, updateJobTitleAcrion } from '@/redux/slices/userSlice';

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from 'react-hook-form';








export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;
  const [textFiledTitle, setTextFiledTitle] = useState("");
  const { user, isLoading } = useAppSelector((state) => state.userhaz);
  const dispatch = useAppDispatch();


  const handleChangeTitle = (e: any) => {
    setTextFiledTitle(e.target.value)
    // console.log(e.target.value);
  }

  const handelSave = () => {
    if (textFiledTitle.length > 0) {
      console.log(textFiledTitle)
      dispatch(updateJobTitleAcrion(textFiledTitle));
      onClose(textFiledTitle);
    }

  }
  const handleClose = () => {
    // console.log(selectedValue)
    onClose(textFiledTitle);

  };


  return (
    <Dialog onClose={handleClose} open={open}>


      <StyleForDialog className="ContainEditYourTitle">
        <div className="contain__title__and__iconX">
          <Heading>Edit yort title</Heading>
          < CloseIcon onClick={handleClose} />
        </div>
        <div className="show__your__title__and__input">
          <SmallText2 className='span__tit'>Your title</SmallText2>
          <SmallText2 className='span__disc'>
            Enter a single sentence description of your professional
            skills/experience (e.g. Expert Web Designer with Ajax experience)
          </SmallText2>

          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder='web developer'
            onChange={handleChangeTitle}

          />
        </div>
        <div className="contain__btns">
          <Button variant="text" onClick={handleClose}>cancel</Button>
          <Button variant="contained" onClick={handelSave} >Save</Button>
        </div>
      </StyleForDialog>

    </Dialog>
  );
}







const BiographyForProfile = () => {

  const { user, isLoading } = useAppSelector((state) => state.userhaz);

  const dispatch = useAppDispatch();




  const [openEditTitle, setOpenEditTitle] = React.useState(false);
  // const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpenEditTitle(true);
  };

  const handleClose = () => {
    setOpenEditTitle(false);
  };


  useEffect(() => {
    if (!user.length) {
      dispatch(getUserInfoAction());
    }
    // console.log(user)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <StyleMainBiographyForProfile    >


      <div className="main__head__datails">
        <div className="contain__title__work">
          <MainHeading>
            {user[0]?.jobTitle || <Skeleton
              sx={{ bgcolor: 'grey.700' }}
              variant="rectangular"
              width={'160px'}
              height={40}
            />
            }
          </MainHeading>
          <EditIcon fontSize='medium' className='style__edit__globle' onClick={handleClickOpen} />
          <SimpleDialog
            open={openEditTitle}
            onClose={handleClose}
          />
        </div>
        <div className="contin__price__link">
          <div className="price__in__hr">
            <Heading>${user[0]?.hourlyRate}.00/hr</Heading>
            <EditIcon fontSize='medium' className='style__edit__globle' />
          </div>
          <InsertLinkIcon fontSize='medium' className='style__link__globle' />
        </div>
      </div>
      <div className="txet__biography">
        <SmallText2>
          {user[0]?.userBiography || <Skeleton
            sx={{ bgcolor: 'grey.700' }}
            variant="rectangular"
            height={40}
          />
          }
        </SmallText2>
        <EditIcon fontSize='medium' className='style__edit__globle style__place' />
      </div>






    </StyleMainBiographyForProfile>
  )
}

export default BiographyForProfile;


