const text = {
  productName: `GravityZone Business Security Premium`,
  productDesc: `Next-Generation Endpoint Protection. Evolved Advanced Prevention with Threat Context & Reporting​ for companies looking to elevate their business security.`,
  productTitle: `Next-Generation Endpoint Protection. Evolved.`,
  productDesc2: ``,
  productDetailTitle: `GravityZone Business Security Premium `,
  productDetail: [
    `(formally known as GravityZone Elite) safeguards your organization from sophisticated cyber-attacks like advanced persistent threats (APTs) and ransomware with multiple layers of machine-learning-driven security technologies.`,
    `No specialist security knowledge is required to install and manage GravityZone Business Security Premium. Easy to manage from a single console, the solution covers physical, virtual, mobile, and cloud-based endpoints and email. Cloud and on-premise.`,
    `GravityZone Business Security Premium adds the human element into your security ecosystem, has low overhead, and provides the visibility and control you need. Designed to cater the needs of growing medium businesses, GravityZone Business Security Premium delivers maximum security value at a fair price point that works.`,
  ],
  productImg:
    "https://images.unsplash.com/photo-1610374792793-f016b77ca51a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  productImg2: `https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`,
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
    title: "Integrated risk analytics",
    desc: "Continuously analyze endpoint risks to uncover and prioritize misconfigurations and enable automatic hardening actions to remedy vulnerabilities. Identify user actions and behavior that pose a security risk to your organization, including logging into insecure websites, poor password management, and compromised USB usage.",
  },
  {
    title: "Ransomware Prevention & Mitigation",
    desc: "Beating ransomware requires understanding the full cyber kill chain and mapping defenses to each attack stage. ",
  },
  {
    title: "Human Risk Analytics",
    desc: `Helps identify user actions and behaviors that pose a security risk to the organization such as using unencrypted web pages for logging into websites, poor password management, usage of compromised USBs in the organization’s network, recurrent infections etc.
      By placing the human element in the middle of the risk analytics and management strategy, your organization becomes even harder to breach.`,
  },
  {
    title: "Layered Defense",
    desc: "Signature-less technologies, including advanced local and cloud machine learning, behavior analysis, integrated sandbox, and device hardening, work as highly effective, layered, protection against sophisticated threats.",
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

const ReqList = [
  {
    title: "Supported Operating System",
    desc: `Windows 11 Windows 10 November 2021 Update (21H2) Windows 10 May 2021 Update (21H1) Windows 10 October 2020 Update (20H2), Windows 10 May 2020 Update (20H1), Windows 10 November 2019 Update (19H2), Windows 10 May 2019 Update (19H1), Windows 10 October 2018 Update (Redstone 5), Windows 10 April 2018 Update (Redstone 4), Windows 10 Fall Creators Update (Redstone 3), Windows 10 Creators Update (Redstone 2), Windows 10 Anniversary Update (Redstone 1), Windows 10 November Update (Threshold 2), Windows 10 (RTM, version 1507), Windows 8.1, Windows 8, Windows 7
      Ubuntu 14.04 LTS or higher, Red Hat Enterprise Linux / CentOS 6.0 or higher, SUSE Linux Enterprise Server 11 SP4 or higher, OpenSUSE Leap 42.x, Fedora 25 or higher, Debian 8.0 or higher, Oracle Linux 6.3 or higher, Amazon Linux AMI 2016.09 or higher
      macOS Monterey (12.x) macOS Big Sur (11.x), macOS Catalina (10.15), macOS Mojave (10.14), macOS High Sierra (10.13), macOS Sierra (10.12)
      Windows 10 IoT Enterprise, Windows Embedded 8.1 Industry, Windows Embedded 8 Standard, Windows Embedded Standard 7, Windows Embedded Compact 7, Windows Embedded POSReady 7, Windows Embedded Enterprise 7
      Windows Server 2022 Windows Server 2019 Core Windows Server 2019, Windows Server 2019 Core, Windows Server 2016, Windows Server 2016 Core, Windows Server 2012 R2, Windows Server 2012, Windows Small Business Server (SBS) 2011, Windows Server 2008 R2
       `,
  },
  {
    title: "Control Center Minimum Hardware Requirements",
    desc: `T CPU: 4 vCPU with 2 GHz each
      Minimum RAM memory: 6 GB recommended
      40 GB of free hard-disk space
      Internet access for updates and communication with remote and mobile endpoints.`,
  },
  {
    title: "Endpoint Hardware Requirements",
    desc: `Minimum: 2.4 GHz single-core CPU
      Recommended: 1.86 GHz or faster Intel Xeon multi-core CPU
      Memory:
      Minimum free RAM: 512 MB
      Recommended free RAM: 1 GB
      HDD Space: 1.5 GB of free hard-disk space`,
  },
  {
    title: "GravityZone Control Center (On-Premise Console)",
    desc: `GravityZone Control Center is delivered as a virtual appliance and is available in the following formats:
      OVA (compatible with VMware vSphere, View)
      XVA (compatible with Citrix XenServer, XenDesktop, VDI-in-a-Box)
      VHD (compatible with Microsoft Hyper-V)
      Support for other formats and virtualization platforms may be provided on request.`,
  },
];

const FAQList = [
  {
    title:
      "Why do you need next-gen endpoint protection security capabilities?",
    desc: `Enterprise data breaches continue to become more prevalent and damaging. Hackers constantly perfect their attacks to evade traditional antivirus solutions. Your business needs a next-gen endpoint security solution that delivers more than basic prevention and hardening.`,
  },
  {
    title: "Why GravityZone Business Security Premium?",
    desc: `When choosing the right endpoint security solution, we recommend opting for stronger prevention enhanced with technologies to reinforce security posture: harden defenses, reduce risk, and uncover the threat landscape. GravityZone Business Security Premium delivers all of this in a single package.`,
  },
  {
    title:
      "What types of devices and endpoints are compatible with GravityZone Business Security Premium?",
    desc: `GravityZone Business Security Premium protects desktops, servers (physical and virtual), mobile devices (on-prem only) and Microsoft Exchange mailboxes. It covers any OS (Windows, Mac, Linux) and all virtualized platforms.
      Top engineering firm sees malware-related incidents decrease by nearly 90 percent, faster threat detection and response and improved user experience with reduced false alerting.`,
  },
];

const ThreeGrid = [
  {
    icon: <FaShieldAlt size={34} />,
    title: `#1 Ranked Prevention Technology Stack`,
    desc: `Extensive, fully integrated range of preventive capabilities (device control, application control, risk analysis and more) that automatically stops 99% of attacks. `,
  },
  {
    icon: <FaChartLine size={34} />,
    title: `Attack Forensics and Visualization`,
    desc: `Gain insight into your threat environment and perform forensic analysis on attacks aimed at your organization. Visualize the attack kill chain and stop the threat.`,
  },
  {
    icon: <FaSlidersH size={34} />,
    title: `Analytics Driven Hardening`,
    desc: `Continuously assess, prioritize and harden endpoint security misconfigurations and settings with an easy-to-understand prioritized list.`,
  },
];

const Technology = {
  title: "GravityZone Business Security Premium Technologies",
  desc: `Integrated endpoint protection, risk management, and attack forensics platform.`,
  image:
    "https://www.bitdefender.com/content/dam/bitdefender/business/products/business-security-premium/GravityZone_Business_Security_Pemium_Security_Layers.png",
};
