import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { FaShieldAlt, FaTachometerAlt } from "react-icons/fa/index";

// import Link from "next/link";

import AvTestAward from "@/assets/images/avtestaward.png";
import AvComp from "@/assets/images/avcomp.png";
import TechRadar from "@/assets/images/techradar.png";
import PCEditor from "@/assets/images/pceditor.png";

import Products from "./Products";
import Chart from "@/customs/Chart";
import Terms from "./Terms";
import Container from "@/customs/Container";

export default function Home() {
  const ImageWrapper = styled.div`
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 50%;
    padding: 20px;

    @media (max-width: 750px) {
      height: 75px;
      width: 75px;
      padding: 15px;
    }

    & img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  `;

  const CustomLink = styled.span`
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.75);
    border-radius: 7px;
    font-size: 0.96rem;
    cursor: pointer;
    filter: drop-shadow(4px 0 15px rgba(0, 0, 0, 0.25));
    backdrop-filter: blur(15px);
    transition: background-color 250ms, box-shadow 250ms, color 250ms,
      filter 250ms;

    &:hover {
      background-color: rgba(255, 255, 255, 0.25);
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.75) inset;
      color: rgba(255, 255, 255);
      filter: drop-shadow(4px 0 15px rgba(0, 0, 0, 0.25));
    }

    @media (max-width: 1000px) {
      font-size: 0.76rem;
      padding: 5px 15px;
    }
  `;

  return (
    <>
      <div
        className="header header-alt"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80)`,
        }}
      >
        <div className="max-width" style={{ height: "100%" }}>
          <div className="header-content align-center text-center">
            <br></br>
            <div className="flex-column align-center gap-35 animate_fadeIn">
              <span className="span-pill" style={{ color: "white" }}>
                Home Product
              </span>
              <h1 style={{ maxWidth: 450 }}>
                Award-Winning Cybersecurity You Can Trust And Rely On
              </h1>
              <div className="flex-row justify-center flex-wrap gap-15">
                <ImageWrapper>
                  <Image src={AvTestAward} alt="AvTestAward" />
                </ImageWrapper>
                <ImageWrapper>
                  <Image src={AvComp} alt="AvComp" />
                </ImageWrapper>
                <ImageWrapper>
                  <Image src={TechRadar} alt="TechRadar" />
                </ImageWrapper>
                <ImageWrapper>
                  <Image src={PCEditor} alt="PCEditor" />
                </ImageWrapper>
              </div>
            </div>
            <div className="flex-row align-end justify-between flex-column-700 align-start-700 gap-50-700">
              <div
                className="flex-row flex-wrap gap-15 justify-center"
                style={{ rowGap: 10 }}
              >
                <CustomLink>Devices Security</CustomLink>
                <CustomLink>Devices Security for Mac & mobile</CustomLink>
                <CustomLink>Privacy Solution</CustomLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT */}
      <Products />
      <Container>
        <h2 style={{ maxWidth: 450 }}>
          How Bitdefender compares to other cybersecurity brands
        </h2>
      </Container>
      {/* ================= */}
      {/* Protection Charts */}
      {/* ================= */}
      <Chart
        name="Best Protection Against Infections"
        source="Overall Score. January 2011 - June 2022. AV TEST"
        sub="(On a scale of 0 to 6 and 6 being the highest protection)"
        icon={<FaShieldAlt size={34} />}
        limit={6}
        ChartData={[
          {
            name: "Kaspersky",
            value: 5.92,
          },
          {
            name: "Bitdefender",
            value: 5.94,
            top: true,
          },
          {
            name: "Norton",
            value: 5.86,
          },
          {
            name: "McAfee",
            value: 5.32,
          },
        ]}
      />
      {/* ============= */}
      {/* Impact Charts */}
      {/* ============= */}
      <Chart
        name="Lowest Impact on Performance"
        source="Overall Score. January 2013 - June 2022. AV TEST"
        sub="(On a scale of 0 to 6 and 6 being the lowest impact)"
        icon={<FaTachometerAlt size={34} />}
        limit={6}
        ChartData={[
          {
            name: "Kaspersky",
            value: 5.82,
          },
          {
            name: "Bitdefender",
            value: 5.83,
            top: true,
          },
          {
            name: "Norton",
            value: 5.54,
          },
          {
            name: "McAfee",
            value: 5.42,
          },
        ]}
      />
      <Terms />
    </>
  );
}
