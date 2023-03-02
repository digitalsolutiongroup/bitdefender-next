import Image from "next/image";
import React from "react";

// import BackgroundImage from "../../../assets/images/cherrydeck.jpg";

export default function Description() {
  const OfferList = [
    {
      title: "Unified endpoint security and analytics",
      desc: "Across endpoints and hybrid workloads with easy administration",
    },
    {
      title: "Unmatched attack prevention",
      desc: "Technologies and machine-learning models to identify and stop more attacks",
    },
    {
      title: "Experts you can hold accountable",
      desc: "24x7 security operations with pre-defined response playbooks",
    },
    {
      title: "Advanced threat intelligence built-in",
      desc: "Threat research from the front lines, collaborating with law enforcement and academia",
    },
    {
      title: "Better return on investment",
      desc: "Engineering the complexity out of security to reduce risk at a lower total cost",
    },
  ];

  return (
    <>
      <div
        className="flex-full-center"
        style={{ padding: 25, marginTop: 35, marginBottom: 35 }}
      >
        <div className="max-width">
          <div className="grid-2 gap-25">
            <div className="flex-column gap-15">
              <img
                width={350}
                height={550}
                style={{ width: "100%", borderRadius: 20, objectFit: "cover" }}
                src="https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80"
                alt=""
              />
              <span className="text-normal">
                In a hyperconnected world where cyber attackers seek to do harm
                24x7 and organizations face unpredictable risks, Bitdefender is
                built for resilience.{" "}
              </span>
            </div>
            <div className="flex-column gap-25">
              <span className="text-small">What we can offer to you</span>
              <div className="flex-column gap-15">
                {OfferList &&
                  OfferList.map((list) => {
                    return (
                      <>
                        <div className="flex-column gap-10">
                          <span className="border-pill">{list.title}</span>
                          <span className="text-normal margin-left-25">
                            {list.desc}
                          </span>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
