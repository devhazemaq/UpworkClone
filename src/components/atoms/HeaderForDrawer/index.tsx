'use client'

import React from 'react'
import { StyleMainHeaderForDrawer } from './style'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, IconButton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';


const HeaderForDrawer = () => {
  return (
    <StyleMainHeaderForDrawer>
      <Box className="box__main" >
        <IconButton aria-label="ArrowBackIosIcon" >

          <ArrowBackIosIcon fontSize='medium' />

        </IconButton>
        <Box className="box__new__window">
          <OpenInNewIcon  fontSize='small'/>  <Link href={"/openJob"}  target="_blank" >Open job in a new window</Link>
        </Box>
      </Box>
    </StyleMainHeaderForDrawer>
  )
}

export default HeaderForDrawer