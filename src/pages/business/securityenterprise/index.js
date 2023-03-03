import Product from "@/components/businessproduct/product/Product";
import React from "react";

import {
  FaBriefcase,
  FaLaptop,
  FaNetworkWired,
  FaShieldAlt,
  FaChartLine,
  FaSlidersH,
} from "react-icons/fa";

export default function index() {
  const text = {
    productName: `GravityZone Business Security Enterprise`,
    productDesc: `The ultimate solution for protecting your endpoints: advanced prevention, extended detection, effective response, and risk analytics. Designed to address the entire threat lifecycle.`,
    productTitle: `Unified Prevention, Cross-Endpoint Correlation, Detection, Response and Risk Analytics for Every Organization`,
    productDesc2: ``,
    productDetailTitle: `GravityZone Business Security Enterprise`,
    productDetail: [
      `(formally known as GravityZone Ultra) combines the world’s most effective endpoint protection platform with Endpoint Detection and Response (EDR) capabilities to help you defend endpoint infrastructure (workstations, servers, and containers) throughout the threat lifecycle, with high efficacy and efficiency.`,
      `The cross-endpoint event correlation takes threat detection and visibility to a new level combining the granularity and rich security context of EDR with the infrastructure-wide analytics of XDR (eXtended Detection and Response).`,
      `By incorporating Risk Analytics (for endpoint and user-generated risks) and hardening innovations natively, we minimize the endpoint attack surface, making it more difficult for attackers to penetrate.`,
    ],
    productImg:
      "https://www.bitdefender.com/content/dam/bitdefender/business/products/ultra/Bitdefender2021-Productpage_PP_Ultra_V1_header.jpg",
    productImg2: `https://www.bitdefender.com/content/dam/bitdefender/business/products/ultra/overview_660X371.jpg`,
    productImg3: `https://www.bitdefender.com/content/dam/bitdefender/business/products/business-security-premium/Bitdefender_BS_Premium_Integrated_Risk_Analytics.png`,
  };

  const PricingList = [
    {
      min: 10,
      max: 50,
      price: 549000,
    },
    {
      min: 51,
      max: 99,
      price: 525000,
    },
    {
      min: 100,
      price: null,
    },
  ];

  const DropdownList = [
    {
      title: "Cross-Endpoint Correlation",
      desc: "Quickly triage alerts and investigate incidents using GravityZone Business Security Enterprise’s attack timeline and sandbox output. Enable incident response teams to react swiftly and stop ongoing attacks with a single mouse click.",
    },
    {
      title: "Advanced prevention capabilities",
      desc: "With advanced prevention capabilities including anomaly detection and exploit defense, GravityZone Business Security Enterprise blocks sophisticated threats earlier in the attack chain. Pre-execution detection and EDR enhancements stop attackers from subverting your system and detect and block anomalous behavior based on probability.",
    },
    {
      title: "Low overhead incident investigation and response",
      desc: `Quickly triage alerts and investigate incidents using GravityZone Business Security Enterprise’s attack timeline and sandbox output. Enable incident response teams to react swiftly and stop ongoing attacks with a single mouse click.`,
    },
    {
      title: "Integrated human and endpoint risk analytics",
      desc: "Continuously analyze risk using hundreds of factors to uncover, prioritize and automatically enable hardening actions to remedy configuration risks to all your endpoints. Identify user behaviors that pose a security risk to your organization including logging into insecure websites, poor password management, and compromised USB usage.",
    },
  ];

  const AntiRansomeWare = {
    title: "Advanced Prevention Technologies",
    desc: ``,
    list: [
      {
        icon: <FaLaptop size={30} />, // Dont' change This
        title: "HyperDetect™ blocks file-less Attacks at pre-execution",
        desc: "HyperDetect contains machine learning models and stealth attack detection technology that is designed to detect attacks and suspicious activities in the pre-execution stage.",
      },
      {
        icon: <FaBriefcase size={30} />, // Dont' change This
        title: "Sandbox Analyzer enhances targeted attack detection",
        desc: `Sandbox Analyzer provides pre-execution detection of advanced attacks. It automatically sends files that require further analysis to a cloud sandbox, then takes appropriate action based on the sandbox findings.`,
      },
      {
        icon: <FaNetworkWired size={30} />, // Dont' change This
        title: "Machine Learning predicts and blocks advanced attacks",
        desc: `GravityZone uses Machine Learning across its entire technology portfolio including the scanning engine, HyperDetect, Sandbox Analyzer, content control and Global Protective Network.`,
      },
      {
        icon: <FaLaptop size={30} />, // Dont' change This
        title: "Exploit Defense safeguards memory",
        desc: `With Exploit Defense, the list of exploits blocked is extended to the pre-execution stage, protecting against known and unknown exploits early in the attack chain.`,
      },
    ],
  };

  const FAQList = [
    {
      title:
        "How can I get a license for GravityZone Business Security Enterprise?",
      desc: `After the demo period, contact your Bitdefender Partner and ask for a GravityZone Business Security Enterprise license key.`,
    },
    {
      title:
        "Are there additional features that I can add to GravityZone Business Security Enterprise?",
      desc: `Further, strengthen any of your Bitdefender endpoint security solutions and enjoy greater protection by layering on any or all of the following advanced security solutions:
      Email Security to protect your business email users from all major email threats, across multiple email providers (Office365, Gmail, Exchange and more)
      Patch Management to keep your Windows OS and applications up to date and protected.
      Full Disk Encryption to protect data residing on your endpoints.`,
    },
    {
      title:
        "I noticed that the name of this offering has changed from GravityZone Ultra to GravityZone Business Security Enterprise. Has the product changed?",
      desc: `No, there have been no changes to the product or offering. We updated the name of GravityZone Ultra to GravityZone Business Security Enterprise as of April 5, 2022. There were no functionality or capability changes associated with the name change.`,
    },
  ];

  const ThreeGrid = [
    {
      icon: <FaShieldAlt size={34} />,
      title: `World’s Most Effective Endpoint Protection`,
      desc: `Unifying EDR, Risk Analytics, and Hardening technologies in one, single-agent-single console, GravityZone leverages 30 layers of advanced techniques to successfully stop breaches throughout the entire threat lifecycle, from the first contact, exploit, persistence, and malicious activity.`,
    },
    {
      icon: <FaChartLine size={34} />,
      title: `Endpoint Detection and Response Technology`,
      desc: `The new EDR from Bitdefender extends EDR analytics and event correlation capabilities beyond the boundaries of a single endpoint, to help you deal more effectively with complex cyber-attacks involving multiple endpoints. The cross-endpoint detection and response uniquely provide you with threat visualizations at the organizational level so you can focus investigations and respond more effectively.`,
    },
    {
      icon: <FaSlidersH size={34} />,
      title: `Risk Analytics-Driven Hardening`,
      desc: `Bitdefender’s risk analytics engine continuously assesses endpoint security misconfigurations and user behaviors providing an easy-to-understand prioritized list of security posture enhancements`,
    },
  ];

  const Technology = {
    title: "GravityZone Business Security Enterprise - Security Layers",
    desc: ``,
    image:
      "https://www.bitdefender.com/content/dam/bitdefender/business/products/business-security-enterprise/GravityZone_Business_Security_Enterprise_Security_Layers.png",
  };

  return (
    <>
      <Product
        text={text}
        PricingList={PricingList}
        DropdownList={DropdownList}
        AntiRansomeWare={AntiRansomeWare}
        // ReqList={ReqList}
        FAQList={FAQList}
        ThreeGrid={ThreeGrid}
        Technology={Technology}
      />
    </>
  );
}
