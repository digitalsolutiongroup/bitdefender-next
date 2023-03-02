import React, { useRef } from "react";
import { FaChevronDown } from "react-icons/fa/index";

export default function Dropdown({ type, title, desc }) {
  const dropdownRef = useRef();

  const openDropdown = () => {
    dropdownRef.current.classList.toggle("open");
  };

  return (
    <>
      <div ref={dropdownRef} className={`dropdown ${type ? type : ""}`}>
        <div className="dropdown-title" onClick={openDropdown}>
          <span className="text-normal">{title}</span>
          <FaChevronDown size={type === "large" ? 18 : 14} />
        </div>
        <div className="dropdown-content">
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}
