"use client"

import React from 'react'
import { StyleMainProfilePage } from './style'
import Container from '@/components/atoms/Container'
import { Avatar, Box, Button, Chip } from '@mui/material'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { Body, Heading, MainHeading, SmallText2 } from '@/components/atoms/typography'
import HeaderMain from '@/components/organism/HeaderMain'
import Image from 'next/image'
import FooterMain from '@/components/organism/FooterMain'
import SidebarLeftProfile from '@/components/organism/SidebarLeftProfile'
import ContentRightProfile from '@/components/organism/ContentRightProfile'
import { profileImg } from '@/constants'


const ProfilePage = () => {
  return (

    <StyleMainProfilePage>
      <HeaderMain />
      <Container>

        <div className="user__information">
          <Box className="contain__boxs__avatar__namedata">
            <Box className="box___avatar">
              <EditIcon fontSize='medium' className='icon__edit' />
              <Avatar
                alt="Hazem Badran"
                src={profileImg}
                sx={{ width: 80, height: 80 }}
              />
              <RadioButtonCheckedIcon fontSize='small' className='icon__rdio' />
            </Box>
            <Box className="box__name__and__data" >
              <MainHeading>Hazem A.</MainHeading>
              <SmallText2><LocationOnIcon fontSize='small' />Gaza, Palestinian Territories</SmallText2>
              <Box className="box__stateAvailabe" >
                <Button variant="outlined" startIcon={<ElectricBoltIcon />}>Available now</Button>
                <EditIcon fontSize='medium' className='icon__edit' />
              </Box>
            </Box>
          </Box>


          <Box className="box__btns__profile">
            <Button variant="outlined" className='btn__see__pub'>See public view</Button>
            <Button variant="contained" className='btn__prof__sett'>Profile settings</Button>
          </Box>
        </div>

        <div className="contain__left__right">


          <SidebarLeftProfile />

          <ContentRightProfile />


        </div>

      </Container>

      <FooterMain />


    </StyleMainProfilePage>
  )
}

export default ProfilePage