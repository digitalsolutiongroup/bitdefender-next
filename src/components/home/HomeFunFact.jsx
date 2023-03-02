import React from "react";

import styled from "styled-components";

// import { AnimationOnScroll } from "react-animation-on-scroll";

import style from "./home.module.css";

export default function HomeFunFact() {
  const CustomCircle = ({ children }) => {
    return (
      <>
        <div className={style.customcirlce}>{children}</div>
      </>
    );
  };

  const funFactList = [
    {
      head: "Founded",
      sub: "2001, Romania",
    },
    {
      head: "Partners & Resellers",
      sub: "20.000+",
    },
    {
      head: "Employees",
      sub: "1600+",
    },
  ];

  return (
    <>
      <div
        className="flex-full-center"
        style={{
          padding: 25,
          backgroundColor: "rgba(3,20,36)",
          paddingBottom: 125,
        }}
      >
        <div className="max-width">
          <div className="flex-row flex-column-900 gap-50">
            {/* <AnimationOnScroll
              style={{ flexShrink: 0 }}
              animateIn="animate_fadeIn"
              duration={"550ms"}
              animateOnce={true}
            > */}
            <CustomCircle>Tentang Bitdefender</CustomCircle>
            {/* </AnimationOnScroll> */}
            {/* <AnimationOnScroll
              style={{ width: "100%" }}
              animateIn="animate_fadeIn"
              duration={"550ms"}
              delay={550}
              animateOnce={true}
            > */}
            <div className="flex-column full-width">
              {funFactList &&
                funFactList?.map((list) => (
                  <div
                    className="flex-column full-width gap-5"
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.25)",
                      padding: 25,
                    }}
                  >
                    <span className="white-text">{list?.head}</span>
                    <span style={{ fontSize: "2rem", fontWeight: 700 }}>
                      {list?.sub}
                    </span>
                  </div>
                ))}
            </div>
            {/* </AnimationOnScroll> */}
          </div>
        </div>
      </div>
    </>
  );
}
