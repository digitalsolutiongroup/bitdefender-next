import React, { useEffect, useState } from "react";

import styled from "styled-components";
import CustomSelect from "./CustomSelect";

import PriceFormat from "@/others/PriceFormat";

import ContactUs from "@/others/ContactUs";

import style from "./pricing.module.css";

export default function PricingCard({ PricingList }) {
  const [devices, setDevices] = useState({ name: "10 Devices", value: 10 });
  const [tahun, setTahun] = useState({
    name: "1 Tahun",
    value: 1,
  });

  const [totalPrice, setTotalPrice] = useState();

  const setPriceFunc = () => {
    let price = 0;

    PricingList?.map((obj) => {
      if (obj?.max) {
        if (devices?.value >= obj?.min && devices?.value <= obj?.max) {
          return (price = obj?.price);
        }
      }

      if (!obj?.max) {
        if (devices?.value >= obj?.min) {
          price = obj?.price;
        }
      }
    });
    // if (devices?.value >= 10 && devices?.value <= 50) {
    //   price = 375000;
    // } else if (devices?.value >= 51 && devices?.value <= 99) {
    //   price = 349000;
    // } else if (devices?.value >= 100) {
    //   price = null;
    // }

    setTotalPrice((prevState) => {
      const sum = price * devices?.value * tahun?.value;

      if (price == null) {
        return null;
      }

      return sum;
    });
  };

  useEffect(() => {
    setPriceFunc();
  }, []);

  useEffect(() => {
    setPriceFunc();
  }, [tahun, devices]);

  const Container = ({ children }) => {
    return (
      <>
        <div className={style.container}>{children}</div>
      </>
    );
  };

  const GreenPill = ({ children }) => {
    return (
      <>
        <div className={style.greenPill}>{children}</div>
      </>
    );
  };

  return (
    <>
      <Container>
        <div className="flex-row gap-10">
          <CustomSelect
            handler={{ value: devices, setValue: setDevices }}
            input={{ placeholder: "Perangkat...", model: "Devices" }}
            minInput={10}
            list={[
              {
                name: "10 Devices",
                value: 10,
              },
              {
                name: "20 Devices",
                value: 20,
              },
              {
                name: "50 Devices",
                value: 50,
              },
            ]}
            defaultValue={devices}
          ></CustomSelect>
          <CustomSelect
            handler={{ value: tahun, setValue: setTahun }}
            input={{ placeholder: "Tahun...", model: "Tahun" }}
            minInput={1}
            list={[
              {
                name: "1 Tahun",
                value: 1,
              },
              {
                name: "3 Tahun",
                value: 3,
              },
              {
                name: "5 Tahun",
                value: 5,
              },
            ]}
            defaultValue={tahun}
          ></CustomSelect>
        </div>
        <div
          className="flex-row justify-between"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.25)",
            paddingBottom: 10,
            marginBottom: 10,
          }}
        >
          <GreenPill>30% OFF</GreenPill>
          <span style={{ textDecoration: "line-through" }}>-</span>
        </div>
        <div className="flex-row justify-between">
          <span>Estimasi Harga</span>
          <span className="text-medium">
            {totalPrice == null ? "Contact Us" : PriceFormat(totalPrice)}
          </span>
        </div>
        <p
          className="text-normal"
          style={{ fontSize: "0.76rem", maxWidth: 450 }}
        >
          Masukkan jumlah perangkat yang ingin anda proteksi. Jumlah minimal
          perangkat adalah 10 buah. Belum termasuk pajak
        </p>
        <button
          onClick={() =>
            ContactUs(
              `Hai,%0ASaya tertarik dengan produk Bitdefender GravityZone untuk ${devices?.value} perangkat dengan masa ${tahun?.value} Tahun`
            )
          }
          style={{ marginLeft: "auto" }}
          className="button"
        >
          Beli Sekarang
        </button>
      </Container>
    </>
  );
}
