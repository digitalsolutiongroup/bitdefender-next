import React from "react";

import { useRouter } from "next/router";

import { FaWindows, FaApple, FaAndroid } from "react-icons/fa/index";
import { SiMacos } from "react-icons/si/index";

// import BackgroundImage from "../../assets/images/nasa.png";
import styled from "styled-components";
import StarsBackground from "@/others/StarsBackground";

// import { AnimationOnScroll } from "react-animation-on-scroll";

import style from "./home.module.css";
import Link from "next/link";

export default function HomeHeader() {
  // Testing the Styled Components
  const Button = ({ children, link }) => {
    return (
      <>
        <Link className={style.button} href={link}>
          {children}
        </Link>
      </>
    );
  };

  // const navigate = useRouter();

  return (
    <>
      <div className="header custom-header">
        {/* EARTH BACKGROUND */}
        <div className="custom-background">
          <StarsBackground />
        </div>
        <div className="max-width" style={{ height: "100%" }}>
          <div
            className="header-content"
            style={{ justifyContent: "space-between" }}
          >
            <br></br>
            <div className="flex-column align-center gap-10">
              <div className="animate_fadeIn">
                <h1 className="text-center">
                  Global Leader in Cyber&shy;security
                </h1>
              </div>
            </div>

            <div className="flex-column align-center gap-45 margin-top-100-1100 animate_fadeIn">
              <div>
                <p
                  style={{ maxWidth: 400 }}
                  className="text-normal text-center"
                >
                  Melindungi jutaan pengguna dan layanan bisnis sejak 2001
                </p>
              </div>
              <div className="flex-row gap-15">
                <Button link="/home">For Home</Button>
                <Button link="/business">For Business</Button>
              </div>
              <div className="flex-row align-center gap-15">
                <FaWindows className="icon-normal" size={20} />
                <SiMacos className="icon-normal" size={30} />
                <FaApple className="icon-normal" size={20} />
                <FaAndroid className="icon-normal" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
