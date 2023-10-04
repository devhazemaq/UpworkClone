'use client'


import React from 'react'
import { StyleMainUserInfo } from './style'
import { Avatar, Box, Stack } from '@mui/material'
import Link from '@mui/material/Link';
import { SmallText2 } from '../typography';
import { profileImg } from '@/constants';

const UserInfo = () => {
  return (
    <StyleMainUserInfo>

      <Box className="box__contain__userinfo">
        <Stack direction="row" spacing={2}>
        <Avatar
                alt="Hazem Badran"
                src={profileImg}
                sx={{ width: 60, height: 60 }}
              />
        </Stack>
        <Link href="/profile">Hazem B</Link>
        <SmallText2>Web Developer</SmallText2>
      </Box>

    </StyleMainUserInfo>
  )
}

export default UserInfo