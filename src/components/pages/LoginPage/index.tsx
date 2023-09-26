"use client"

import FooterRegistration from "@/components/atoms/FooterRegistration"
import HeaderForRegistrationPages from "@/components/molecules/HeaderForRegistrationPages"
import LogInToUpWork from "@/components/molecules/LogInToUpWork"
import { StyleMainLoginPage } from "./style"



const LoginPage = () => {
  // const newLocal = false;
  return (
    <StyleMainLoginPage>
      <HeaderForRegistrationPages  forSignup = {true}/>

      <LogInToUpWork />
      
      <FooterRegistration />
      
    </StyleMainLoginPage>
  )
}

export default LoginPage    
