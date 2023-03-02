import React from "react";

import styled from "styled-components";

export default function CustomChart() {
  const Bar = styled.div`
    min-height: ${(props) => props?.maxHeight}px;
    height: 100%;
    width: 35px;
    background-color: white;
  `;

  return (
    <>
      <Bar maxHeight={350}></Bar>
    </>
  );
}
