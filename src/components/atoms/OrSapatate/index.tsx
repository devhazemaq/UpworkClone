'use client'

import { Body } from "../typography"
import { StyleMainOr } from "./style"


const OrSapatate = ({textOr}:{textOr:string}) => {
  return (
    <StyleMainOr>

      <span className='span__1' ></span>
      <Body >{textOr}</Body>
      <span className='span__2' ></span>

    </StyleMainOr>
  )
}

export default OrSapatate