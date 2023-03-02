import React from "react";
import Dropdown from "@/customs/Dropdown";

// import { AnimationOnScroll } from "react-animation-on-scroll";

export default function FAQs({ List }) {
  return (
    <>
      <div
        className="flex-full-center"
        style={{ padding: 25, paddingTop: 100, paddingBottom: 100 }}
      >
        <div className="max-width">
          {/* <AnimationOnScroll
            style={{ flexShrink: 0 }}
            animateIn="animate_fadeIn"
            duration={"550ms"}
            animateOnce={true}
          > */}
          <div className="flex-column align-center gap-25">
            <h2 className="text-center">FAQs</h2>
            <div
              className="flex-column gap-10"
              style={{ maxWidth: 750, width: "100%" }}
            >
              {List &&
                List.map((list) => {
                  return (
                    <>
                      <Dropdown
                        type="large"
                        title={list.title}
                        desc={list.desc}
                      />
                    </>
                  );
                })}
            </div>
          </div>
          {/* </AnimationOnScroll> */}
        </div>
      </div>
    </>
  );
}
