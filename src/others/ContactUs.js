import React from "react";

export default function ContactUs(text) {
  const phone = `+6281233345119`;

  const formatted = text?.replace(/ /, "%20");
  window.open(`https://wa.me/${phone}?text=${formatted}`);
  return;
}
