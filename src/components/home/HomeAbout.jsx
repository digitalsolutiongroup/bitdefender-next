import React from "react";
// import Link from "next/link";

// import { AnimationOnScroll } from "react-animation-on-scroll";

export default function HomeAbout() {
  return (
    <>
      <div
        className="flex-full-center"
        style={{
          padding: 25,
          paddingBottom: 65,
          backgroundColor: "rgba(3, 20, 36)",
        }}
      >
        <div className="max-width">
          <div
            className="flex-row gap-25 flex-column-900"
            style={{ paddingTop: 125, paddingBottom: 125 }}
          >
            {/* <AnimationOnScroll
              animateIn="animate_fadeIn"
              animateOnce={true}
              duration={"550ms"}
            > */}
            <div className="custom-card">
              <span className="custom-large-text">
                <bold>Bitdefender</bold> adalah sebuah cybersecurity terdepan
                yang memberikan pencegahan, deteksi, dan solusi ancaman tingkat
                dunia yang terbaik di kelasnya
              </span>
              <a
                target={"_blank"}
                href="https://bitdefender.com"
                className="custom-link"
              >
                Pelajari Lebih {">"}
              </a>
            </div>
            {/* </AnimationOnScroll> */}
            {/* <AnimationOnScroll
              animateIn="animate_fadeIn"
              duration={"550ms"}
              delay={250}
              animateOnce={true}
            > */}
            <div className="custom-card" style={{ justifyContent: "flex-end" }}>
              <span className="text-normal">
                Bitdefender menawarkan solusi keamanan siber dengan keamanan
                yang manjur, peforma yang bagus, dan kemudahan penggunaan untuk
                bisnis, perusahaan, dan perorangan. Dipelopori oleh pandangan
                untuk menjadi penyedia keamanan siber terbaik di dunia,
                Bitdefender berkomitmen untuk melindungi organisasi dan
                individual diseluruh dunia melawan serangan siber untuk merubah
                dan meningkatkan pengalaman digital yang lebih baik.
              </span>
            </div>
            {/* </AnimationOnScroll> */}
          </div>
        </div>
      </div>
    </>
  );
}
