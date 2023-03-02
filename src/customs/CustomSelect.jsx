import React, { useEffect, useState } from "react";

import { HiArrowDown } from "react-icons/hi/index";

import styled from "styled-components";

import style from "./customselect.module.css";

export default function CustomSelect({
  children,
  handler,
  list,
  defaultValue,
  input,
  minInput,
}) {
  const CustomComponents = ({ children }) => {
    return (
      <>
        <div className={style.customcomponents}>{children}</div>
      </>
    );
  };
  const { value, setValue } = handler;

  const [dropdown, setDropdown] = useState(false);

  const [inputVal, setInputVal] = useState();

  const [warning, setWarning] = useState(false);

  const inputHandler = (e) => {
    setWarning(false);
    if (e?.key === "Enter") {
      if (inputVal >= minInput) {
        setValue({
          name: `${inputVal} ${input?.model}`,
          value: `${inputVal}`,
        });
      } else {
        setWarning(true);
      }
    }
  };

  const inputValHandler = (e) => {
    setInputVal(e.target.value);
  };

  const onClickHandler = (obj) => {
    setValue(obj);
  };

  return (
    <>
      <div
        className={`${style.container} ${dropdown && style.open}`}
        onClick={() => setDropdown((prevState) => !prevState)}
      >
        <CustomComponents>
          <span>{value?.name ? value?.name : defaultValue?.name}</span>
        </CustomComponents>
        {dropdown && (
          <>
            {warning && (
              <span className={style.warning}>
                Minimum input adalah {minInput}
              </span>
            )}
            <div
              className={style.dropdown}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={style.inputcontainer}>
                <input
                  value={inputVal}
                  onChange={inputValHandler}
                  className={style.input}
                  placeholder={input?.placeholder}
                  type="number"
                  onKeyDown={inputHandler}
                />
                <HiArrowDown size={16} />
              </div>
              {list?.map((obj) => (
                <>
                  <span
                    onClick={() => onClickHandler(obj)}
                    className={style.list}
                  >
                    {obj?.name}
                  </span>
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
