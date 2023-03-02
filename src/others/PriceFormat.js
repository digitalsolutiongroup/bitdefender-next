import React from "react";

export default function PriceFormat(price) {
  let PriceFormat = new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
  });

  return PriceFormat.format(price);
}
