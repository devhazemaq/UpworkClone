'use client'

import React from 'react'
import { StyleMainBillboard } from './style'
import { MainHeading, SmallText2 } from '@/components/atoms/typography'
import { Box, Button } from '@mui/material'
import Image from 'next/image'

const Billboard = () => {
  return (
    <StyleMainBillboard>
      <Box className='main__box'>
        {/* -s--- box container billboard info ---  */}
        <Box className='box__container__billboard__info' >
          <MainHeading className='main__title' >Get 80 Connects each month</MainHeading>
          <SmallText2 className='span__text'>Join Freelancer Plus to start each month fresh with 80 Connects. You&apos;ll get a lot</SmallText2>
          <SmallText2 className='span__text' >of other perks too! Join now to unlock new features to help you grow your</SmallText2>

          <SmallText2 className='span__text' >network and market your skills.</SmallText2>

          <Button variant="contained" className='btn__billboard' >Learn more</Button>
        </Box>
        {/* -e--- box container billboard info ---  */}

        <Image src={'/assets/images/homeJops/billboardImage.svg'} alt='billboardImage' width={167} height={150} />

      </Box>


    </StyleMainBillboard>
  )
}

export default Billboard