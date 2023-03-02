import React, { useState } from "react";

import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa/index";
import {
  HiArrowLeft,
  HiArrowRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi/index";

export default function ButtonReview() {
  const Quotes = [
    {
      title: "Macmillan Cancer Support",
      sub: "Head of Information Security",
      quote: `We spend 70 percent less time on incident response, which gives us more time for other strategic and complex projects, such as network- and micro-segmentation. Even with the pandemic, the security team is less stressed, and they consistently meet project deadlines`,
    },
    {
      title: "Brendan McGowan",
      sub: "CTO, Safe Systems",
      quote: `Our customers are constantly being targeted. It never stops.  It’s the single biggest topic that comes up whenever we meet with our customers’ executive teams…They always start with “what are we doing to prevent ourselves from ending up on the front page of the newspaper?”. So, when we bring solutions to bear, we have to be sure that they’re going to keep our customers off the front page of the newspaper. Bitdefender is at the center of that effort`,
    },
    {
      title: "Kansas Public Finance Corporation keeps out ransomware with ease",
      sub: "Case Study",
      quote: `By keeping its endpoints free of ransomware, KDFA avoids costly cleanups and lost productivity, helping ensure an efficient workflow. More importantly, it keeps KDFA productive and responsive to client requests. One of the most painful repercussions following its previous ransomware attacks was telling users that certain financial documents had been lost and needed to be recreated, potentially delaying`,
    },
    {
      title: "Bitdefender blocks malware at 500-year-old university",
      sub: "Case Study",
      quote: `When the Wannacry ransomware attacked Europe, the University was not affected. The staff also was able to fine-tune GravityZone settings to target and eliminate a few lingering Cryptolocker infections`,
    },
    {
      title: "Lance Harris",
      sub: "Chief Information Security Officer, Esurance",
      quote: `GravityZone Ultra is the next step in security protection. EDR makes detection more accurate and provides a solid background on what’s happening at the endpoint. This helps us decide how to respond—whether we quarantine, lockdown, or delete files`,
    },
  ];

  const [current, setCurrent] = useState(0);

  const ButtonLeft = () => {
    setCurrent((prevState) => {
      if (prevState == 0) {
        return Quotes.length - 1;
      } else {
        return prevState - 1;
      }
    });
  };

  const ButtonRight = () => {
    setCurrent((prevState) => {
      if (prevState == Quotes.length - 1) {
        return 0;
      } else {
        return prevState + 1;
      }
    });
  };

  return (
    <>
      <div className="button-review">
        <FaQuoteLeft className="icon" size={34} />
        <span className="count">
          {current + 1}/{Quotes.length}
        </span>
        <div className="flex-column" style={{ maxWidth: 650 }}>
          <p className="quote">{Quotes[current].quote}</p>
          <span className="title">{Quotes[current].title}</span>
          <span className="sub">{Quotes[current].sub}</span>
        </div>

        <div className="flex-row gap-10">
          <button onClick={ButtonLeft} className="quote-button">
            <HiChevronLeft size={20} />
          </button>
          <button onClick={ButtonRight} className="quote-button">
            <HiChevronRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
