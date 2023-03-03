import React from "react";
import {
  FaBars,
  FaBriefcase,
  FaChartBar,
  FaChartLine,
  FaLaptop,
  FaNetworkWired,
  FaShieldAlt,
  FaSlidersH,
  FaTrophy,
} from "react-icons/fa";
// import CustomOption from "../../../custom/CustomOption";
import PricingCard from "@/customs/PricingCard";
import Dropdown from "@/customs/Dropdown";

import style from "./product.module.css";
import Image from "next/image";
import Awards from "./Awards";
import Requirements from "./Requirements";
import FAQs from "@/others/FAQs";

export default function Product({
  text,
  PricingList,
  DropdownList,
  AntiRansomeWare,
  ReqList,
  FAQList,
  ThreeGrid,
  Technology,
}) {
  return (
    <>
      <div
        className="business-header"
        style={{ backgroundImage: `url(${text?.productImg})` }}
      >
        <div className="business-content">
          <div className="flex-column gap-10" style={{ maxWidth: 400 }}>
            <h2>{text?.productName}</h2>
            <span className="text-normal">{text?.productDesc}</span>
          </div>
          <div className="business-price full-width" style={{ maxWidth: 550 }}>
            <div className="flex-row gap-10 full-width">
              <PricingCard PricingList={PricingList} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex-full-center"
        style={{ padding: 25, paddingTop: 150 }}
      >
        <div className="max-width">
          <div className="grid-2" style={{ marginBottom: 25 }}>
            <div className="flex-column gap-10">
              <h3>{text?.productTitle}</h3>
              <span className="text-normal">{text?.productDesc2}</span>
            </div>
          </div>
          <div className="grid-2 gap-35">
            <div>
              <img
                style={{ objectFit: "cover", borderRadius: 10 }}
                width={"100%"}
                height={450}
                alt="image"
                src={text?.productImg2}
              />
            </div>
            <div className="flex-column gap-25">
              <div
                className="flex-column gap-15"
                style={{
                  backgroundColor: "rgba(255,255,255,0.075)",
                  padding: "15px 20px",
                  borderRadius: 7,
                }}
              >
                <h3>{text?.productDetailTitle}</h3>
                {text &&
                  text?.productDetail?.map((obj) => (
                    <>
                      <p className="text-normal">{obj}</p>
                    </>
                  ))}
              </div>
            </div>
          </div>

          {ThreeGrid && (
            <>
              <div
                className="grid-3 gap-50"
                style={{ paddingTop: 125, paddingBottom: 125 }}
              >
                {ThreeGrid?.map((obj) => (
                  <>
                    <div className="flex-column gap-10">
                      {obj?.icon}
                      <span className="text-medium">{obj?.title}</span>
                      <p className="text-normal">{obj?.desc}</p>
                    </div>
                  </>
                ))}
              </div>
            </>
          )}

          {/* DROPDOWN */}
          <div className="card-container">
            <div className="card-header">
              <span className="card-title">Benefit dan Kapabilitas</span>
              <p className="text-normal" style={{ maxWidth: 450 }}></p>
            </div>
            <div className="card-content">
              <div className="grid-2 gap-25">
                <div className="flex-column gap-10">
                  {DropdownList &&
                    DropdownList.map((list) => {
                      return (
                        <>
                          <Dropdown
                            type="large"
                            title={list.title}
                            desc={list.desc}
                          />
                        </>
                      );
                    })}
                </div>
                <div className="flex-column gap-15">
                  <img
                    src={text?.productImg3}
                    style={{
                      width: "100%",
                      borderRadius: 15,
                      height: 350,
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                    alt=""
                  />
                  <span className="text-normal"></span>
                </div>
              </div>
            </div>
          </div>

          {/* TECHNOLOGY */}
          <div
            className="flex-column gap-10"
            style={{ paddingTop: 125, paddingBottom: 125 }}
          >
            <h3 style={{ maxWidth: 550 }}>{Technology?.title}</h3>
            <span className="text-normal" style={{ maxWidth: 550 }}>
              {Technology?.desc}
            </span>
            <div
              style={{
                backgroundColor: "rgba(255,255,255)",
                borderRadius: 15,
                marginTop: 25,
              }}
            >
              <img
                width={"100%"}
                alt="Bitdefender Technologies"
                src={Technology?.image}
              />
            </div>
          </div>

          {/* ANTI RANSOMWARE */}
          {AntiRansomeWare && (
            <>
              <div
                className="flex-column gap-10"
                style={{ paddingTop: 10, paddingBottom: 125 }}
              >
                <h3 style={{ maxWidth: 550 }}>{AntiRansomeWare?.title}</h3>
                <span className="text-normal" style={{ maxWidth: 550 }}>
                  {AntiRansomeWare?.desc}
                </span>
                <div className="grid-4 margin-top-50 gap-50">
                  {AntiRansomeWare &&
                    AntiRansomeWare?.list?.map((obj) => (
                      <>
                        <div className="flex-column gap-10">
                          {obj.icon}
                          <span className="text-medium">{obj?.title}</span>
                          <p className="text-normal">{obj?.desc}</p>
                        </div>
                      </>
                    ))}
                </div>
              </div>
            </>
          )}

          {/* INDUSTRY ACCOLADES */}
          <Awards />

          {/* REQUIREMENTS */}
          {ReqList && <Requirements list={ReqList} />}

          {/* FAQ */}
          <FAQs List={FAQList} />
        </div>
      </div>
    </>
  );
}
