import React from "react";
import ReqTabs from "@/customs/ReqTabs";

export default function Requirement({ reqAllTabs }) {
  return (
    <>
      <div
        className="flex-full-center margin-top-50 margin-bottom-50"
        style={{ padding: 25 }}
      >
        <div className="max-width">
          <ReqTabs allTabs={reqAllTabs} />
        </div>
      </div>
    </>
  );
}
