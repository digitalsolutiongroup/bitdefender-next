import React from "react";

import { FaQuoteLeft } from "react-icons/fa/index";

export default function Review() {
  const Review = [
    {
      name: "Jeremy Holladay",
      title: "Cybersecurity Analyst & Bitdefender User",
      quote:
        "The offer of protection provided by Bitdefender, along with its minimal footprint, is fantastic",
    },
    {
      name: "Curt Andes",
      title:
        "Project Manager, Super Computer System Development & Bitdefender User",
      quote:
        "Bitdefender is excellent protection that is easy to install and use.",
    },
    {
      name: "Philip Jacobs",
      title: "Lead Machinery Engineer & Bitdefender User",
      quote:
        "One of my co-workers always says, 'Hope is not a plan.' With security, you can't hope to be safe; you must have a plan.  For me, Bitdefender is a key part of that plan.",
    },
  ];

  return (
    <>
      <div className="flex-full-center" style={{ padding: 25 }}>
        <div className="max-width">
          <div className="grid-3 gap-15 margin-top-75">
            {Review &&
              Review.map((list) => {
                return (
                  <>
                    <div
                      className="button-review"
                      style={{ minHeight: "unset" }}
                    >
                      <FaQuoteLeft className="icon" size={34} />
                      <div className="flex-column" style={{ maxWidth: 650 }}>
                        <p className="quote">{list?.quote}</p>
                        <span className="title">{list?.name}</span>
                        <span className="sub">{list?.title}</span>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
