'use client'

import HeaderForRegistrationPages from "@/components/molecules/HeaderForRegistrationPages";
import SignUpToUpWork from "@/components/molecules/SignUpToUpWork";

const SignupPage = () => {
  return (
    <div>
      <HeaderForRegistrationPages  forSignup = {true}/>
      <SignUpToUpWork />
    </div>
  )
}

export default SignupPage;