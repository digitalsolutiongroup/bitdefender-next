import Dropdown from "@/customs/Dropdown";
import React from "react";

export default function Requirements({ list }) {
  return (
    <>
      <div className="flex-column gap-25    ">
        <h3>System Requirements</h3>
        <div className="flex-column gap-10">
          {list &&
            list?.map((obj) => (
              <>
                <Dropdown title={obj?.title} desc={obj?.desc} />
              </>
            ))}
        </div>
      </div>
    </>
  );
}
