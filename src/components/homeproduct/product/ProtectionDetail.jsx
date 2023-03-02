import React from "react";
import OSTabs from "@/customs/OSTabs";

export default function ProtectionDetail({ title, desc, allTab, disableFeat }) {
  return (
    <>
      <div className="flex-full-center margin-top-75" style={{ padding: 25 }}>
        <div className="max-width">
          <div className="card-container">
            <div
              className={`card-header ${disableFeat && "card-header-alt"}`}
              style={{
                borderBottom: "none",
                columnGap: 25,
                rowGap: 10,
              }}
            >
              <h2 style={{ maxWidth: 550 }}>{title}</h2>
              <p className="text-normal" style={{ maxWidth: 450 }}>
                {desc}
              </p>
            </div>
            <div className="card-content">
              <OSTabs allTab={allTab} disableFeat={disableFeat} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
