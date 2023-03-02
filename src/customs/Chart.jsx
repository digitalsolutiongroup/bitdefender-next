import React, { useEffect, useLayoutEffect, useRef } from "react";

// import { AnimationOnScroll } from "react-animation-on-scroll";
// import CustomChart from "./CustomChart";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Chart({ name, sub, icon, source, limit, ChartData }) {
  const chartRef = useRef();
  // GSAP Scroll Trigger
  useEffect(() => {
    ScrollTrigger.create({
      trigger: chartRef.current,
      start: "top 80%",
      onToggle: () => {
        // chartRef.current.classList.add("animate_fadeIn");
        chartRef?.current?.classList?.add("chart_fill");
      },
    });
  });

  return (
    <>
      <div className="flex-full-center" style={{ padding: 25 }}>
        <div ref={chartRef} className="max-width">
          {/* <AnimationOnScroll
            style={{ flexShrink: 0 }}
            animateIn="animate_fadeIn chart_fill"
            duration={"550ms"}
            animateOnce={true}
          > */}
          <div className="chart">
            <div className="chart-data">
              {ChartData &&
                ChartData.map((chart) => {
                  return (
                    <>
                      <div
                        className={`chart-bar ${chart.top && "top"}`}
                        style={{ height: "100%" }}
                      >
                        <div className="flex-column align-center">
                          <span className="title">{chart.name}</span>
                          <span className="value">{chart.value}</span>
                        </div>
                        <span
                          className="bar"
                          style={{
                            height: `${
                              (chart.value / limit) * 333 + (chart.top ? 15 : 0)
                            }px`,
                          }}
                        ></span>
                      </div>
                    </>
                  );
                })}
            </div>
            <div className="flex-row flex-column-1000 gap-15 justify-between">
              <div className="flex-row gap-15 align-center">
                {icon}
                <div className="flex-column">
                  <span className="text-medium">{name}</span>
                  <span className="white-text" style={{ maxWidth: 500 }}>
                    {sub}
                  </span>
                </div>
              </div>
              <span
                className="white-text text-right text-left-700"
                style={{ maxWidth: 450 }}
              >
                {source}
              </span>
            </div>
          </div>
          {/* </AnimationOnScroll> */}
        </div>
      </div>
    </>
  );
}
