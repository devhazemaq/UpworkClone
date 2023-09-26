"use client"

import SearchForJob from '@/components/atoms/SearchForJob'
import UserInfo from '@/components/atoms/UserInfo'
import Billboard from '@/components/molecules/Billboard'
import HeaderMain from '@/components/organism/HeaderMain'
import { StyleLeftPart, StyleMainHomePage, StyleRightPart } from './style'
import PaperInformation from '@/components/molecules/PaperInformation'
import ConnectsInfo from '@/components/atoms/ConnectsInfo'
import Container from '@/components/atoms/Container'
import BasicTabs from '@/components/organism/JobsYouMightLike'
import JobDatails from '@/components/organism/JobDatails'

const HomePage = () => {
  return (

    <StyleMainHomePage>

      
      <HeaderMain />

      <Container>
        {/* -s--- contain left and right parts ---  */}
        <div className="contain__left__and__right__parts">
          {/* -s------ Style Left Par ------ */}
          <StyleLeftPart>
            <Billboard />
            <SearchForJob />


            {/* <JobsYouMightLike /> */}
            <BasicTabs />
          </StyleLeftPart>
          {/* -e------ Style Left Par ------ */}

          {/* -s------ Style Right Par ------ */}
          <StyleRightPart>
            < UserInfo />
            <PaperInformation />
            <ConnectsInfo />
          </StyleRightPart>
          {/* -e------ Style Right Par ------ */}

        </div>
        {/* -e--- contain left and right parts ---  */}

      </Container>



      {/* <JobDatails /> */}
      


    </StyleMainHomePage>

  )
}

export default HomePage
