"use client"

import React from 'react'
import { Chip } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { Body, Heading, MainHeading, SmallText2 } from '@/components/atoms/typography'
import Image from 'next/image'
import { StyleMainContentRightProfile } from './style';
import BiographyForProfile from '../BiographyForProfile';

const ContentRightProfile = () => {
  return (
    <StyleMainContentRightProfile >
      
      <BiographyForProfile />

      <div className="for__work__history">
        <Heading>Work History</Heading>

        <SmallText2>No work yet. Once you start getting hired on Upwork, your work with clients will show up here.</SmallText2>
        <SmallText2 className='start__search'>Start your search</SmallText2>

      </div>

      <div className="for__portfilo">
        <div className="contain__portfiloo">
          <Body>Portfilo</Body>
          <AddIcon fontSize='medium' className='style__add__globle' />
        </div>
        <div className="contain__portfiloo__imge">
          <Image src={'/assets/images/profile/bag.svg'} alt="bag" width={145} height={130} />
          <SmallText2>Talent who add portfolios to their profile are more likely to win work. (+20%)</SmallText2>
          <SmallText2 className='add__protfo'>Add a portfolio</SmallText2>

        </div>

      </div>

      <div className="for__skills">
        <div className="contain__skills">
          <Body>Skills</Body>
          <EditIcon fontSize='medium' className='style__edit__globle style__place' />
        </div>

        <div className="contain__chips">

          <Chip label="Web Application" className='mui__chip' />
        </div>

      </div>


    </StyleMainContentRightProfile>

  )
}

export default ContentRightProfile