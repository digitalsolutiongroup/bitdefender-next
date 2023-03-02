import React from "react";
// import { Link } from "react-router-dom";

import BackgroundImage from "@/assets/images/cherrydeck.jpg";
import Forrester from "@/assets/images/hd/forrester.png";
import MitreAttack from "@/assets/images/hd/mitreattack.png";
import Gartner from "@/assets/images/gartner.png";
import CRN from "@/assets/images/crn.png";
import Resilience from "./Resilience";
import CyberResilience from "./CyberResilience";
import Description from "./Description";
import Reviews from "./Reviews";
import Prove from "./Prove";
import Products from "./Products";
import ContactUs from "@/others/ContactUs";
import Image from "next/image";

export default function Business() {
  return (
    <>
      <div
        className="header header-alt"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
        }}
      >
        <div className="max-width" style={{ height: "100%" }}>
          <div className="header-content">
            <br></br>
            <div className="flex-column gap-15">
              <h1 style={{ maxWidth: 450 }}>
                Enterprise Cybersecurity Built for Resilience
              </h1>
              <span className="white-text">
                Award-winning Threat Prevention, Detection & Response Platform
                and Managed Security Services
              </span>
            </div>
            <div className="flex-row align-end justify-between flex-column-700 align-start-700 gap-50-700">
              <div
                className="flex-image flex-row flex-wrap gap-25"
                style={{ marginBottom: 35 }}
              >
                <Image src={Forrester} alt="Forrester" />
                <Image src={MitreAttack} alt="MitreAttack" />
                <Image
                  style={{ borderRadius: 7, filter: "brightness(100)" }}
                  src={Gartner}
                  alt="Gartner"
                />
                <Image src={CRN} alt="CRN" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <Description />

      {/* Cyber Resilience */}
      <CyberResilience />

      {/* Resilience */}
      <Resilience />

      {/* Review */}
      <Reviews />

      {/* Prove */}
      <Prove />

      {/* Products */}
      <Products />

      {/* Bottom */}
      <div
        className="flex-full-center"
        style={{ padding: 25, marginTop: 75, marginBottom: 75 }}
      >
        <div className="max-width">
          <div className="flex-column gap-50 align-start">
            <div className="flex-column gap-10">
              <h2 style={{ maxWidth: 350 }}>
                Become a more cyber resilient business today
              </h2>
              <span className="white-text" style={{ maxWidth: 350 }}>
                We're here to help you choose the solution or service that's
                right for your business
              </span>
            </div>
            <button
              className="button"
              onClick={() => {
                ContactUs("Hai,%0ASaya tertarik dengan produk Bitdefender");
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
