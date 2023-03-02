import React from "react";
// import CustomOption from "../../../custom/CustomOption";
import PricingCard from "@/customs/PricingCard";

import style from "./product.module.css";

export default function Product() {
  return (
    <>
      <div className="business-header">
        <div className="business-content">
          <div className="flex-column gap-10" style={{ maxWidth: 400 }}>
            <h2>GravityZone Business Security Premium</h2>
            <span className="white-text">
              Budget-friendly business next-gen AV Intelligent prevention for
              companies that look to secure their business on a budget.
            </span>
          </div>
          <div className="business-price full-width" style={{ maxWidth: 550 }}>
            <div className="flex-row gap-10 full-width">
              <PricingCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
