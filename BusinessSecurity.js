const text = {
  productName: `GravityZone Business Security`,
  productDesc: `Budget-friendly business next-gen AV Intelligent prevention for
    companies that look to secure their business on a budget.`,
  productTitle: `Paket lengkap keamanan menyeluruh`,
  productDesc2: `GravityZone Business Security adalah paket keamanan siber hemat
    sumber daya yang dirancang untuk semua perusahaan kecil hingga
    menengah yang mencari keseimbangan sempurna antara kemudahan
    penggunaan, kinerja, dan biaya.`,
  productDetailTitle: `GravityZone Business Security lebih dari sekadar perangkat
    lunak antivirus bisnis`,
  productDetail: [
    `Memastikan perlindungan lengkap terhadap semua jenis malware:
    ransomware, phishing, serangan zero-day, virus, spyware, dll.`,
    `Menggunakan beberapa teknik pembelajaran mesin, analisis
    perilaku, dan pemantauan berkelanjutan dari proses yang
    berjalan untuk mengikuti ancaman terbaru.`,
    `Tersedia dalam satu platform yang mudah digunakan untuk semua
    perangkat Anda: desktop, laptop, server fisik dan virtual,
    memungkinkan Anda untuk memilih antara cloud atau konsol
    manajemen yang dihosting di tempat.`,
  ],
  productImg:
    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",
  productImg2: `https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`,
  productImg3: `https://www.bitdefender.com/content/dam/bitdefender/business/products/bs/featuresbenefits_1_630x380.jpg`,
};

const PricingList = [
  {
    min: 10,
    max: 50,
    price: 375000,
  },
  {
    min: 51,
    max: 99,
    price: 349000,
  },
  {
    min: 100,
    price: null,
  },
];

const DropdownList = [
  {
    title: "Layered Protection For Endpoints",
    desc: "Protect desktops, laptops, and servers with layered security for effective malware detection and minimum false positives. A comprehensive technology stack comes to play to help you achieve complete business security against all kinds of threats.",
  },
  {
    title: "Ransomware Prevention & Mitigation",
    desc: "Ransomware is a deep concern for organizations worldwide and the best protection against modern ransomware attacks is to implement a defense-in-depth architecture. Start with reducing the attack surface, combined with automated prevention controls to prevent most of the security incidents.",
  },
  {
    title: "Single Console for Easy Management",
    desc: "Bitdefender GravityZone Business Security features a single integrated management console, the GravityZone Control Center, that provides one view for all security management components.",
  },
  {
    title: "Web-Based Security",
    desc: "Save time by remotely installing protection on all unprotected computers through a simple and comprehensive procedure.",
  },
];

const AntiRansomeWare = {
  title: "Teknologi Anti-Ransomware di GravityZone Business Security",
  desc: `Cybersecurity adalah permainan dengan kedua belah pihak terus
    berinovasi. Agar dapat selalu terlindungi, Anda perlu menerapkan
    kontrol pencegahan otomatis yang andal untuk mencegah sebagian
    besar insiden keamanan.`,
  list: [
    {
      icon: <FaLaptop size={30} />, // Dont' change This
      title: "Preemptive Protection",
      desc: "Ransomware Mitigation is a feature designed to mitigate the impact of an active ransomware attack. identifies whenever a possible new ransomware strain attempts to encrypt files and automatically creates a backup of targeted files that will be restored after the malware is blocked. Bitdefender blocks processes involved in the attack and starts remediation, while also notifying IT administrators.",
    },
    {
      icon: <FaBriefcase size={30} />, // Dont' change This
      title: "Blocking & Prevention",
      desc: `Several adaptive defenses come to play against ransomware:
        - Machine Learning Anti-Malware accurately detects new patterns at runtime,
        - Advanced Anti-Exploit quickly identifies and terminates malicious processes automatically
        - Network Attack Defense blocks ransomware exploits that arrive via network ingress points.`,
    },
    {
      icon: <FaNetworkWired size={30} />, // Dont' change This
      title: "Real-Time Monitoring",
      desc: `GravityZone’s multiple risk mitigation technologies ensure that system and application vulnerabilities and misconfigurations don’t leave organizations susceptible to ransomware attacks.
        The unique Human Risk Analytics module blocks ransomware attacks that exploit risky user actions and behaviors.`,
    },
    {
      icon: <FaLaptop size={30} />, // Dont' change This
      title: "Risk Mitigation",
      desc: `GravityZone’s multiple risk mitigation technologies ensure that system and application vulnerabilities and misconfigurations don’t leave organizations susceptible to ransomware attacks. The unique
        Human Risk Analytics module blocks ransomware attacks that exploit risky user actions and behaviors.`,
    },
  ],
};

const ReqList = [
  {
    title: "Supported Operating System",
    desc: `Windows 10 November 2021 Update (21H2) Windows 10 May 2021 Update (21H1) Windows 10 October 2020 Update (20H2), Windows 10 May 2020 Update (20H1), Windows 10 November 2019 Update (19H2), Windows 10 May 2019 Update (19H1), Windows 10 October 2018 Update (Redstone 5), Windows 10 April 2018 Update (Redstone 4), Windows 10 Fall Creators Update (Redstone 3), Windows 10 Creators Update (Redstone 2), Windows 10 Anniversary Update (Redstone 1), Windows 10 November Update (Threshold 2), Windows 10 (RTM, version 1507), Windows 8.1, Windows 8, Windows 7
      Ubuntu 14.04 LTS or higher, Red Hat Enterprise Linux / CentOS 6.0 or higher, SUSE Linux Enterprise Server 11 SP4 or higher, OpenSUSE Leap 42.x, Fedora 25 or higher, Debian 8.0 or higher, Oracle Linux 6.3 or higher, Amazon Linux AMI 2016.09 or higher
      macOS Monterey (12.x) macOS Big Sur (11.x), macOS Catalina (10.15), macOS Mojave (10.14), macOS High Sierra (10.13), macOS Sierra (10.12)
      Windows 10 IoT Enterprise, Windows Embedded 8.1 Industry, Windows Embedded 8 Standard, Windows Embedded Standard 7, Windows Embedded Compact 7, Windows Embedded POSReady 7, Windows Embedded Enterprise 7
      Windows Server 2022 Windows Server 2019 Core Windows Server 2019, Windows Server 2019 Core, Windows Server 2016, Windows Server 2016 Core, Windows Server 2012 R2, Windows Server 2012, Windows Small Business Server (SBS) 2011, Windows Server 2008 R2`,
  },
  {
    title: "Hardware Requirements",
    desc: `Minimum: 2.4 GHz single-core CPU Recommended: 1.86 GHz or faster Intel Xeon multi-core CPU
      Memory: Minimum free RAM: 512 MB Recommended free RAM: 1 GB HDD space: 1.5 GB of free hard-disk space`,
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
    title: "Who is GravityZone Business Security best suited for?",
    desc: `Ideal for businesses looking for easy to manage and affordable endpoint security, Business Security is designed to protect small- to medium-sized organizations, covering any number of file servers, desktops, laptops, and physical or virtual machines.`,
  },
  {
    title: "What is the licensing model?",
    desc: `GravityZone Business Security is available for purchase either online or with one of our partners. You can also add extra licenses, anytime you need them. If you need protection for more endpoints, you can contact one of our official partners in your region. Find your nearest partner using our partner locator.`,
  },
  {
    title: "How can I get help with installation?",
    desc: `Configuring and installing the GravityZone Business Security solution is extremely simple no advanced IT security knowledge is needed. Download our quick start guide for detailed instructions for both cloud and on-premises installations.`,
  },
];

const ThreeGrid = [
  {
    icon: <FaShieldAlt size={34} />,
    title: `Proteksi dengan performa terbaik`,
    desc: `Secara konsisten menduduki peringkat #1 dalam pengujian keamanan
      independen, memberikan keamanan tepercaya untuk organisasi
      dengan berbagai ukuran.`,
  },
  {
    icon: <FaChartLine size={34} />,
    title: `Managemen yang Efisien`,
    desc: `Semua aktivitas keamanan dikelola dari satu konsol.`,
  },
  {
    icon: <FaSlidersH size={34} />,
    title: `Kontrol Operasional Penuh`,
    desc: `Kebijakan keamanan yang sangat terperinci memastikan
      perlindungan maksimal.`,
  },
];

const Technology = {
  title: "GravityZone Busienss Security Technologies",
  desc: `Arsitektur berlapis adaptif yang mencakup kontrol titik akhir,
    pencegahan, deteksi, perbaikan, dan visibilitas`,
  image:
    "https://www.bitdefender.com/content/dam/bitdefender/business/products/business-security/GravityZone_BS_Security_Layers.png",
};
