import React, { useState } from 'react'
import { StyleMainConnectsInfo } from './style'
import { Body, SmallText2 } from '../typography'
import Image from 'next/image';

const ConnectsInfo = () => {

  const [showConnects, setShowConnects] = useState(true);

  const handleclick = () => {
    setShowConnects((prevState)=> 
      prevState === true ? false : true
    );
  } 

  return (
    <StyleMainConnectsInfo>
      <div className="dropmenuo__contain">
        <div className="title__type__icon" onClick={handleclick} >
          <Body>Connects</Body>
          <Image src={"/assets/images/homeJops/arowDown.svg"} alt="arowDown" width={24} height={24} />
        </div>
        {showConnects && (
          <div className="options__dropmenuo">
            <SmallText2>Available: <strong>110</strong> <a href="/">(View Details)</a> </SmallText2>
            <SmallText2 className="span__buy__connects">Buy connects</SmallText2>
          </div>
        )}
      </div>
    </StyleMainConnectsInfo>
  )
}

export default ConnectsInfo