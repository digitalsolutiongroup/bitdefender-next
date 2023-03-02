import React from "react";

export default function Container({ children, style }) {
  return (
    <>
      <div className="flex-full-center" style={{ padding: 25 }}>
        <div className="max-width">{children}</div>
      </div>
    </>
  );
}
