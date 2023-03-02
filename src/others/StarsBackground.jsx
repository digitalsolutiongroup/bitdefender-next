import React from "react";
import style from "./stars.module.css";

export default function StarsBackground() {
  return (
    <>
      <div style={{ position: "absolute", zIndex: "-1", left: 0 }}>
        <div className={style.stars}></div>
        {/* <div id="stars2"></div> */}
        <div className={style.stars3}></div>
      </div>
    </>
  );
}
