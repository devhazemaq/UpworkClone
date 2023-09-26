"use client"
import React from 'react'
import { StyleMainFooter } from './style'
import { SmallText, SmallText2 } from '@/components/atoms/typography'
import Container from '@/components/atoms/Container'
import Image from 'next/image'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

const FooterMain = () => {
  return (
    <StyleMainFooter>
      <Container>
        <div className="contain__footer">

          <div className="footer__services">
            <div className="serv__one">
              <SmallText2>About Us</SmallText2>
              <SmallText2>Feedback</SmallText2>
              <SmallText2>Connunity</SmallText2>

            </div>
            <div className="serv__two">
              <SmallText2>Trust, Safety & Security</SmallText2>
              <SmallText2>Help & Support</SmallText2>
              <SmallText2>Upwork Foundation</SmallText2>

            </div>
            <div className="serv__thtee">
              <SmallText2>Terms of Service</SmallText2>
              <SmallText2>Privacy Policy</SmallText2>
              <SmallText2>CA Notice at Collection</SmallText2>
              <SmallText2>Cookie Settings</SmallText2>

            </div>
            <div className="serv__four">
              <SmallText2>Accessibility</SmallText2>
              <SmallText2>Desktop App</SmallText2>
              <SmallText2>Cookie Policy</SmallText2>
              <SmallText2>Enterprise Solutions</SmallText2>
            </div>

          </div>

          <div className="footer__acounts">
            <div className="contain__follow">
              <SmallText2 className='span__follow__us'>Follow Us</SmallText2>
              <div className="contin__icon">
                <FacebookOutlinedIcon />
              </div>
              <div className="contin__icon">
                <LinkedInIcon />
              </div>
              <div className="contin__icon">
                <TwitterIcon />
              </div>
              <div className="contin__icon">
                <YouTubeIcon />
              </div>
              <div className="contin__icon">
                <InstagramIcon />
              </div>
            </div>

            <div className="contain__app">
              <SmallText2 className='span__app'>Mobile app</SmallText2>
              <div className="contin__icon">
                <AppleIcon />
              </div>
              <div className="contin__icon">
                <AndroidIcon />
              </div>
            </div>

          </div>

          <div className="footer__text">
            <SmallText>© 2015 - 2023 Upwork® Global Inc By devhazemaq.</SmallText>
          </div>
        </div>


      </Container>

    </StyleMainFooter>
  )
}

export default FooterMain