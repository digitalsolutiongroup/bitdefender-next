import React from "react";
import Image from "next/image";

import AvTest from "@/assets/images/avtest.jpg";
import AvCertified from "@/assets/images/avcertified.png";
import Mitre from "@/assets/images/mitre.png";
import Gartner from "@/assets/images/gartner.png";
import Forrester from "@/assets/images/forrester.png";
// import styled from "styled-components";

import style from "./other.module.css";

// import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Awards() {
  const ImageWrapper = ({ children }) => {
    return (
      <>
        <div className={style.imagewrapper}>{children}</div>
      </>
    );
  };

  return (
    <>
      <div
        className="flex-full-center"
        style={{
          padding: 25,
          paddingTop: 150,
          paddingBottom: 150,
        }}
      >
        <div className="max-width">
          <div className="flex-full-center gap-65">
            {/* <AnimationOnScroll
              style={{ flexShrink: 0 }}
              animateIn="animate_fadeIn"
              duration={"550ms"}
              animateOnce={true}
            > */}
            <div className="flex-full-center gap-15" style={{ maxWidth: 550 }}>
              <span className="text-large text-center">
                Penghargaan Industri
              </span>
              <p className="white-text text-center">
                Bitdefender sering menerima penghargaan industri dan diakui
                sebagai pemimpin dalam keamanan siber melalui pengujian
                independen organisasi dan perusahaan analis industri.
              </p>
            </div>
            {/* </AnimationOnScroll> */}
            {/* <AnimationOnScroll
              style={{ flexShrink: 0 }}
              animateIn="animate_fadeIn"
              duration={"550ms"}
              delay={350}
              animateOnce={true}
            > */}
            <div className="flex-row flex-wrap justify-center gap-25">
              <ImageWrapper>
                <Image src={AvTest} />
              </ImageWrapper>
              <ImageWrapper>
                <Image src={AvCertified} />
              </ImageWrapper>
              <ImageWrapper>
                <Image src={Forrester} />
              </ImageWrapper>
              <ImageWrapper>
                <Image src={Mitre} />
              </ImageWrapper>
              <ImageWrapper>
                <Image src={Gartner} />
              </ImageWrapper>
            </div>
            {/* </AnimationOnScroll> */}
          </div>
        </div>
      </div>
    </>
  );
}
