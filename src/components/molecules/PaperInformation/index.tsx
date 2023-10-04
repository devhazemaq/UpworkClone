'use client'

import React from 'react'
import { Box, Paper } from '@mui/material'
import { Body, SmallText } from '@/components/atoms/typography'
import Image from 'next/image'
import { StyleMainPaperInformation } from './style'
import { paperInformationData } from '@/constants'



const PaperInformation: React.FC = () => {
  return (
    <StyleMainPaperInformation>

      {paperInformationData.map((item) => (
        <Paper key={item?.id} elevation={3} className='for__paper' >
          <Box className="contain__info">
            <Body>{item?.title}</Body>
            <SmallText>{item?.text1}</SmallText>
            <SmallText>{item?.text2}</SmallText>
            <SmallText>{item?.text3}</SmallText>
          </Box>
          <Box className="contain__imgs">
            <Image
              src={'/assets/images/homeJops/arrowRight.svg'}
              alt='arrowRight'
              width={20}
              height={20} />
            <Image
              src={item?.image}
              alt='forPaper'
              width={50}
              height={40} />
          </Box>
        </Paper>
      ))
      }



    </StyleMainPaperInformation>
  )
}

export default PaperInformation