"use client"

import React from 'react'
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import GitHubIcon from '@mui/icons-material/GitHub';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import { Body, SmallText2 } from '@/components/atoms/typography'
import { StyleMainSidebarLeftProfile } from './style';


const SidebarLeftProfile = () => {
  return (
    <StyleMainSidebarLeftProfile >
      <div className="for__video_introduction">
        <Body>Vido introduction</Body>
        <AddIcon fontSize='medium' className='style__add__globle' />
      </div>
      <div className="for__Hours__per__week">
        <div className="contain__title">
          <Body className='fwe'>Hours per week</Body>
          <EditIcon fontSize='medium' className='style__edit__globle' />
          <AddIcon fontSize='medium' className='style__add__globle' />
        </div>
        <SmallText2>More than 30 hrs/week</SmallText2>
        <SmallText2 className='colgfo'>Open to contract to hire</SmallText2>
      </div>

      {/* -------------------------- */}

      <div className="for__languages">
        <div className="contain__title">
          <Body className='fwe'>Languages</Body>
          <EditIcon fontSize='medium' className='style__edit__globle' />
          <AddIcon fontSize='medium' className='style__add__globle' />
        </div>
        <SmallText2 className='span__block'><strong>English: </strong><SmallText2 className='colgfo' >Conversational</SmallText2></SmallText2>
        <SmallText2 className='span__block'><strong>Arabic: </strong><SmallText2 className='colgfo' >Native or Bilingual</SmallText2></SmallText2>
      </div>

      {/* -------------------------- */}

      <div className="for__verifications">
        <Body className='d'>Verifications</Body>
        <div className="contain__verifiv">
          <Body>Vido introduction</Body>
          <AddIcon fontSize='medium' className='style__add__globle' />
        </div>

      </div>

      {/* -------------------------- */}

      <div className="for__education">
        <div className="contain__education">
          <Body>Education</Body>
          <AddIcon fontSize='medium' className='style__add__globle' />
        </div>
        <div className="contain__collag">
          <div className="collag__cont">
            <Body>AlQuds Open University</Body>
            <DeleteIcon fontSize='medium' className='style__add__globle' />

          </div>
          <SmallText2 className='colgfo'>Bachelor of Applied Science (BASc).</SmallText2>

        </div>

      </div>

      <div className="for__btns__accounts">
        <Button variant="outlined" startIcon={<GitHubIcon />} className='btn__acount' >GitHub</Button>
        <Button variant="outlined" startIcon={<LegendToggleIcon />} className='btn__acount' >StackOverflow</Button>
      </div>


    </StyleMainSidebarLeftProfile>
  )
}

export default SidebarLeftProfile