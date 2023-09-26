'use client'

import React from 'react'
import { StyleLeftPart, StyleMainJobDatails, StyleRightPart } from './style'
import { Body, Heading, SmallText2 } from '@/components/atoms/typography'
import PinDropIcon from '@mui/icons-material/PinDrop';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventNoteIcon from '@mui/icons-material/EventNote';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import SellIcon from '@mui/icons-material/Sell';
import HelpIcon from '@mui/icons-material/Help';
import { Button, Divider } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import { useParams } from 'next/navigation';


// interface IProps {
//   params: { id: string };
// }
// { params }: IProps
const JobDatails = () => {

  // const  id  = useParams();

  // console.log(id)
  // console.log(params.id)

  return (
    <StyleMainJobDatails>


      <div className="contain__left__and__right__part">
        <StyleLeftPart>
          <div className="ifo__for__title">
            <Heading>I Need Android Devlopers</Heading>
            <div className="contain__span">


              <SmallText2 className='span__style'>Mobile App Development</SmallText2>
              <SmallText2 className="span__time">Posted 5 hours ago</SmallText2>
              <SmallText2 className='span__for__text__and__text'> <PinDropIcon fontSize='small' color="primary" /> Worldwide</SmallText2>
            </div>
          </div>

          <div className="info__description">
            <SmallText2>
              I need an expert in HTTrack to copy a website html
              the software is showing me an error everytime I try to use it</SmallText2>
          </div>

          <div className="info__jobtype">

            <div className="cotain__levelexperience">
              <PsychologyIcon />
              <div className="info__text">
                <div className="text__levelex">
                  <SmallText2><strong>interemediate</strong></SmallText2>
                  <SmallText2>I am looking for a mix of <br /> experience and value</SmallText2>
                </div>
                {/* <div className="text__levelex">
              <SmallText2><strong>Expert</strong></SmallText2>
              <SmallText2>I am willing to pay higher<br/>rates for the most<br/>experienced freelancers</SmallText2>
            </div>
            <div className="text__levelex">
              <SmallText2><strong>Entry level</strong></SmallText2>
              <SmallText2>I am looking for freelancers<br/>with the lowest rates</SmallText2>
            </div> */}
              </div>
            </div>

            <div className="cotain__budget">
              <AccessTimeIcon fontSize='small' />
              <div className="text__budget">
                <SmallText2><strong>$20.00 - $25.00</strong></SmallText2>
                <SmallText2>Hourly</SmallText2>
              </div>
            </div>

            <div className="contain__deadline">
              <EventNoteIcon fontSize='small' />
              <div className="text__deadline">
                <SmallText2><strong>Less than a month</strong></SmallText2>
                <SmallText2>Project Length</SmallText2>
              </div>
            </div>

            <div className="contain__hiringtype">
              <QueryBuilderIcon fontSize='small' />
              <div className="text__hiringtype">
                <SmallText2><strong>full time</strong></SmallText2>
                <SmallText2>Hourly</SmallText2>
              </div>
            </div>

            <div className="contain__fixed">
              <SellIcon fontSize='small' sx={{ transform: 'scaleX(-1)' }} />
              <div className="text__hiringtype">
                <SmallText2><strong> $10.00 </strong></SmallText2>
                <SmallText2>Fixed-price</SmallText2>
              </div>
            </div>


          </div>

          <div className="info__activityon">
            <Body>Activity on this job</Body>
            <SmallText2>Proposals: <HelpIcon fontSize='small' color='success' /> Less than 5</SmallText2>
          </div>

        </StyleLeftPart>


        <StyleRightPart>
          <div className="interact__with__job__apply__and__save">
            <Button variant="contained">Apply Now</Button>
            <Button variant="outlined" startIcon={<FavoriteBorderIcon />}>Save Job</Button>
            <Body><EmojiFlagsIcon fontSize='small' />Flag as inappropriate</Body>
            <SmallText2 className='match__send'>Send a proposal for: 12 Connects</SmallText2>
            <SmallText2 className='availavle__connects'>Available Connects: 110</SmallText2>
            <Divider />

          </div>
        </StyleRightPart>
      </div>



    </StyleMainJobDatails>
  )
}

export default JobDatails