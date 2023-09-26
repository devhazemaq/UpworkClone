'use client'

import React from "react";
import { StyleHeaderMain } from "./style";
import Image from "next/image";
import CategoriesForHeaderMain from "@/components/molecules/CategoriesForHeaderMain";
import SearchAndIconsForHeader from "@/components/molecules/SearchAndIconsForHeader";
import Link from "next/link";



const HeaderMain = () => {


  return (
    <StyleHeaderMain>
      <div className="contain__elements">
        <Link href="/">
          <Image
            src="/assets/images/login/logo.svg"
            className="img__logo"
            alt="logo-upwork"
            width={82}
            height={22.5}
            loading="eager"
            priority={true}
          />
        </Link>
        <CategoriesForHeaderMain />

      </div>


      <SearchAndIconsForHeader />


    </StyleHeaderMain>
  );
};

export default HeaderMain;
