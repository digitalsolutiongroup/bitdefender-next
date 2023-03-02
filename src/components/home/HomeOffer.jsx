import React from "react";

import { FaTachometerAlt, FaShieldAlt, FaUsers } from "react-icons/fa/index";
import { HiChevronRight } from "react-icons/hi/index";
import Link from "next/link";

// import { AnimationOnScroll } from "react-animation-on-scroll";

export default function HomeOffer() {
  const List = [
    {
      icon: <FaShieldAlt size={36} />,
      title: "Lindungi Keluarga dan Orang Terdekat",
      desc: "Uji coba penawaran For Home kami",
      button: "Coba For Home",
      link: "/home",
    },
    {
      icon: <FaTachometerAlt size={36} />,
      title: "Ingin Mendapatkan Keamanan Bisnis yang Serius?",
      desc: "Berbincang dengan kami untuk mendapatkan informasi lebih lanjut",
      button: "Hubungi Kami",
      link: "/contact",
    },
    {
      icon: <FaUsers size={36} />,
      title: "Ingin menjadi Partner bersama?",
      desc: "Tertarik menjadi salah satu partner/klien kami? Hubungi segera",
      button: "Hubungi Kami",
      link: "/contact",
    },
  ];

  return (
    <>
      <div
        className="flex-full-center"
        style={{
          padding: 25,
          backgroundColor: "rgba(3,20,36)",
        }}
      >
        <div className="max-width">
          {/* <AnimationOnScroll
            style={{ flexShrink: 0 }}
            animateIn="animate_fadeIn"
            duration={"550ms"}
            animateOnce={true}
          > */}
          <div className="grid-3 gap-30">
            {List &&
              List.map((list) => {
                return (
                  <>
                    <div className="custom-card">
                      <div className="flex-column gap-25">
                        {list.icon}
                        <div className="flex-column gap-5">
                          <span className="text-medium margin-top-10">
                            {list.title}
                          </span>
                          <p className="text-normal">{list.desc}</p>
                        </div>
                      </div>
                      <Link className="custom-link" href={list.link}>
                        {list.button} <HiChevronRight size={20} />
                      </Link>
                    </div>
                  </>
                );
              })}
          </div>
          {/* </AnimationOnScroll> */}
        </div>
      </div>
    </>
  );
}
