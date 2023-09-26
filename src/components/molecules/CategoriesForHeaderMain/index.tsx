'use client'

import React from 'react'
import Image from 'next/image'
import { StyleMainCategoriesForHeaderMain } from './style'

const CategoriesForHeaderMain = () => {
  return (
    <StyleMainCategoriesForHeaderMain>
      <div className="fild__contain fild__cont__1">
        <div className="for__margin__top">
          Find Work
          <Image
            src="/assets/images/homeJops/arowDown.svg"
            alt="arowDown"
            width={12}
            height={12}
            loading="eager"
            priority={true}
          />
        </div>
        <span className="span__opt">
          <span className="opt__0 opt__1">Proposals</span>
          <span className="opt__0 opt__2">Saved Jobs</span>
          <span className="opt__0 opt__3">Profile</span>
          <span className="opt__0 opt__4">find Work</span>
          <span className="opt__0 opt__5">My Stats</span>
          <span className="opt__0 opt__6">My Project Dashboard</span>
        </span>
      </div>
      <div className="fild__contain fild__cont__2 ">
        <div className="for__margin__top">
          My Jobs
          <Image
            src="/assets/images/homeJops/arowDown.svg"
            alt="arowDown"
            width={12}
            height={12}
            loading="eager"
            priority={true}
          />
        </div>
        <span className="span__opt">
          <span className="opt__0 opt__1">Proposals</span>
          <span className="opt__0 opt__2">Saved Jobs</span>
          <span className="opt__0 opt__3">Profile</span>
          <span className="opt__0 opt__4">find Work</span>
          <span className="opt__0 opt__5">My Stats</span>
          <span className="opt__0 opt__6">My Project Dashboard</span>
        </span>
      </div>
      <div className="fild__contain fild__cont__3">
        <div className="for__margin__top">
          Reports
          <Image
            src="/assets/images/homeJops/arowDown.svg"
            alt="arowDown"
            width={12}
            height={12}
            loading="eager"
            priority={true}
          />
        </div>
        <span className="span__opt">
          <span className="opt__0 opt__1">Proposals</span>
          <span className="opt__0 opt__2">Saved Jobs</span>
          <span className="opt__0 opt__3">Profile</span>
          <span className="opt__0 opt__4">find Work</span>
          <span className="opt__0 opt__5">My Stats</span>
          <span className="opt__0 opt__6">My Project Dashboard</span>
        </span>
      </div>
      <div className="fild__contain fild__cont__4 ">
        <div className="for__margin__top">
          Messageas
          <Image
            src="/assets/images/homeJops/arowDown.svg"
            alt="arowDown"
            width={12}
            height={12}
            loading="eager"
            priority={true}
          />
        </div>
        <span className="span__opt">
          <span className="opt__0 opt__1">Proposals</span>
          <span className="opt__0 opt__2">Saved Jobs</span>
          <span className="opt__0 opt__3">Profile</span>
          <span className="opt__0 opt__4">find Work</span>
          <span className="opt__0 opt__5">My Stats</span>
          <span className="opt__0 opt__6">My Project Dashboard</span>
        </span>
      </div>
    </StyleMainCategoriesForHeaderMain>
  )
}

export default CategoriesForHeaderMain