import { createContext, useReducer } from "react";

export const DataContext = createContext();

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return state;
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, {
    productList: [
      {
        id: 1,
        link: "familypack",
        brand: "Bitdefender",
        name: "Family Pack",
        price: 607960,
        price_ori: 1519900,
      },
      {
        id: 2,
        link: "totalsecurity",
        brand: "Bitdefender",
        name: "Total Security",
        price: 455960,
        price_ori: 1139900,
      },
      {
        id: 3,
        link: "internetsecurity",
        brand: "Bitdefender",
        name: "Internet Security",
        price: 403960,
        price_ori: 1009900,
      },
      {
        id: 4,
        link: "antivirusplus",
        brand: "Bitdefender",
        name: "Antivirus Plus",
        price: 303960,
        price_ori: 759900,
      },
      {
        id: 5,
        link: "antivirusmac",
        brand: "Bitdefender",
        name: "Antivirus for Mac",
        price: 203960,
        price_ori: 509900,
      },
      {
        id: 6,
        link: "mobileios",
        brand: "Bitdefender",
        name: "Mobile Security for iOS",
        price: 189900,
      },
      {
        id: 7,
        link: "mobileandroid",
        brand: "Bitdefender",
        name: "Mobile Security for Android",
        price: 189900,
      },
      {
        id: 8,
        link: "premiumvpn",
        brand: "Bitdefender",
        name: "Premium VPM",
        price: 377940,
        price_ori: 629900,
      },
    ],
    category: [
      {
        name: "Device Security",
        desc: "Our bestselling security solutions",
      },
      {
        name: "Device Security for Mac & Mobile",
        desc: "Our security solutions for Mac, iOS and Android",
      },
      {
        name: "Privacy Solutions",
      },
    ],
    product: [
      // Start Here
      {
        id: 1,
        link_id: "familypack", // Don't Change
        brand: "Bitdefender",
        name: "Family Pack",
        category: "Device Security", // Don't Change
        desc: `One security suite for your entire family
        Keep your family safe from all types of online threats with the ultimate digital protection pack.`,
        support: "w-m-i-a",
        price: 607960,
        price_ori: 1519900,
        feat: [
          "Protect up to 15 devices",
          "Unbeatable threat detection to stop sophisticated attacks with virtually no impact on system performance",
          "Advanced parental controls to discreetly supervise your kids’ online activities",
          "Multi-layer ransomware protection to keep your documents, family photos and videos safe",
          "Secure VPN for complete online privacy, 200 MB/day/device",
          "Comprehensive support 24/7",
        ],
        pageData: {
          bgimg:
            "https://images.unsplash.com/photo-1575290970649-8490709215cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          awards: [
            {
              title: "PCMag Editor's Choice",
              source: "PCMag December 2021",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/bitdefender-premium-security/editors-choice-h_2x.png",
            },
            {
              title: "Outstanding Security Product",
              source: "AV-Comparative January 2022",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/images/2022_award_poty.png",
            },
            {
              title: "TechRadar Editor's Choice",
              source: "TechRadar March 2022",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/toolbox/techradar-5-star-2020.png",
            },
          ],
          chartInfection: {
            name: "Best Protection Against Infections",
            source: "Overall Score. January 2011 - June 2022. AV TEST",
            sub: "(On a scale of 0 to 6 and 6 being the highest protection)",
            limit: 6,
            ChartData: [
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
            ],
          },
          chartPerformance: {
            name: "Lowest Impact on Performance",
            source: "Overall Score. January 2013 - June 2022. AV TEST",
            sub: "(On a scale of 0 to 6 and 6 being the lowest impact)",
            limit: 6,
            ChartData: [
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
            ],
          },
          compareTitle: [1, 2, 3],
          compareValue: [
            {
              title: "Protected Family Devices",
              value: [true, false, false],
            },
            {
              title: "Protection for every OS: Windows, macOS, Android and iOS",
              value: [true, true, "w"],
            },
            {
              title: "Devices Optimizer",
              value: [true, true, false],
            },
            {
              title: "Parental Control",
              value: [true, true, true],
            },
            {
              title: "Protection against malware, spyware, adware",
              value: [true, true, true],
            },
            {
              title: "Multi-Layer Ransomware Protection",
              value: [true, true, true],
            },
          ],
          featDetail: {
            title: "Complete Protection for Windows, macOS, iOS, and Android",
            desc: `Bitdefender Family Pack brings major changes to the way online
                threats are detected and repelled. The latest network-based
                adaptive layer of protection prevents exploitation of
                vulnerabilities in your system, and detects and blocks
                brute-force attempts. Stops botnet attacks from compromising
                your device and prevents the sending of sensitive information in
                unencrypted forms.`,
          },
          featWin: [
            {
              title: "Protection",
              desc: "Bitdefender`s unbeatable multi-layered protection keeps your devices safe from all new and existing online threats.",
              feat: [
                {
                  title: "Complete Real-Time Data Protection",
                  desc: `Absolute power in the most efficient security solution available today. 
                        Bitdefender Family Pack works against all e-threats, from viruses, 
                        worms and Trojans, to ransomware, zero-day exploits, rootkits and spyware. 
                        Your data and privacy are safe.`,
                },
                {
                  title: "Network Threat Prevention",
                  desc: `Bitdefender Family Pack stops attacks before they even begin. The new cyber threat intelligence technologies included can analyze and identify suspicious network-level activities, and block sophisticated exploits, malware and botnet-related URLs, and brute force attacks.`,
                },
                {
                  title: "Advanced Threat Defense",
                  desc: `Bitdefender Family Pack uses a technique called behavioral detection to closely monitor active apps. The moment it detects anything suspicious, it takes instant action to prevent infections.`,
                },
                {
                  title: "Multi-Layer Ransomware Protection",
                  desc: `Bitdefender’s multi-layered approach against ransomware includes a data-protection layer that safeguards your documents, pictures, videos, and music against all kinds of ransomware attacks. It works with the Advanced Threat Defense module to protect your most important files from encryption by ransomware.`,
                },
                {
                  title: "Vulnerability Assessment",
                  desc: `Scan for security holes and vulnerabilities with just one click. Bitdefender checks your PC for outdated and vulnerable software, missing Windows security patches and potentially unsafe system settings, then indicates the best fix.`,
                },
                {
                  title: "Web Attack Prevention",
                  desc: `Our web-filtering technology ensures that you never land on a harmful website. Find out whether your search results are safe to access before you actually click on a link. Bitdefender Family Pack also blocks all known infected links.`,
                },
                {
                  title: "Anti-Phising",
                  desc: `Online scams are on the rise, but our advanced anti-phishing protection easily keeps you out of danger. Bitdefender Family Pack sniffs and blocks websites that masquerade as trustworthy in order to steal financial data such as passwords or credit card numbers.`,
                },
                {
                  title: "Anti-Fraud",
                  desc: `Our advanced filtering system warns you whenever you visit websites that may try to scam you.`,
                },
                {
                  title: "Antispam",
                  desc: `Filters irrelevant messages in your Inbox. It’s available for local email clients (Microsoft Outlook, Thunderbird).`,
                },
                {
                  title: "Rescue Environtment",
                  desc: `Some sophisticated malware, like rootkits, need to be removed before Windows starts. When Bitdefender Family Pack detects such threats, it reboots the computer in Rescue Environment for clean-up and restoration.`,
                },
              ],
            },
            {
              title: "Performance",
              desc: "Bitdefender’s security software reacts instantly to online threats with no compromise to your system’s performance.",
              feat: [
                {
                  title: "Autopilot",
                  desc: `Bitdefender Autopilot is designed to act as a Security Advisor and to give you deeper insights into your security posture. Its smart capabilities mean that it can recommend security actions in the context of your system needs and usage patterns.`,
                },
                {
                  title: "Bitdefender Photon",
                  desc: `This innovative, exclusive technology helps Bitdefender Family Pack adapt to your system’s hardware and software configuration to save computing resources and improve speed and performance.`,
                },
                {
                  title: "Global Protective Network",
                  desc: `Most heavy scanning takes place in the cloud, so there is virtually zero impact on your local resources. This means your system’s speed and performance remain unaffected. And your files are always completely private: Bitdefender does not scan the actual contents of your files, and never uploads or stores them in the cloud.`,
                },
                {
                  title: "Game, Movie, and Work Modes",
                  desc: `Bitdefender Family Pack detects when you play, work or watch a movie, so it knows not to bother you with unnecessary requests. Depending on what you are doing, Bitdefender temporarily halts pop-ups, adjusts visual settings, and pauses unimportant background activities so you can enjoy your device to the max.`,
                },
                {
                  title: "Speed Up Your Devices",
                  desc: `Improve speed and performance for your devices with OneClick Optimizer.`,
                },
                {
                  title: "Battery Mode",
                  desc: `This useful, intelligent feature saves battery life for laptops and tablets by temporarily tweaking system settings such as display, system cooling, system updates and Bluetooth connectivity.`,
                },
              ],
            },
            {
              title: "Privacy",
              desc: "Bitdefender Family Pack takes care of your online privacy and personal information.",
              feat: [
                {
                  title: "Bitdefender VPN",
                  desc: `With Bitdefender VPN, you can stop worrying about privacy on the web. It protects your online presence by encrypting all Internet traffic. Bitdefender Family Pack includes up to 200 MB per day of encrypted traffic for your Windows, Android, macOS and iOS devices.`,
                },
                {
                  title: "Anti-tracker",
                  desc: `The Anti-tracker extension blocks trackers that collect your data, and it allows you to view and manage this information on each website you visit. It keeps your browsing data private and enhances performance by loading webpages faster.`,
                },
                {
                  title: "Microphone Monitor",
                  desc: `Regain control over your own devices with Microphone Monitor. Use it and you can see what apps have access to your device’s microphone and when.`,
                },
                {
                  title: "Webcam Protection ",
                  desc: `Protect your privacy and prevent webcam leaks. Webcam Protection notifies you when apps try to access your webcam, and lets you block unauthorized access.`,
                },
                {
                  title: "Safe Online Banking",
                  desc: `Bank and shop from a unique, dedicated browser that secures your transactions to prevent fraud. Bitdefender Safepay can now also automatically fill out credit card details in billing fields.`,
                },
                {
                  title: "Parental Control",
                  desc: `Parental Control offers digital help to parents and extra online safety to children. Filter out inappropriate content and limit screen time. Log in remotely to Bitdefender Central to monitor your kids’ online activities. *Parental Control is also available on macOS, iOS and Android with a different feature set depending on each platform.`,
                },
                {
                  title: "Privacy Firewall",
                  desc: `With Bitdefender Family Pack, you get a powerful layer of network protection, so your personal information stays safe from hackers and data snoops.`,
                },
                {
                  title: "Anti-Theft",
                  desc: `Bitdefender Family Pack packs effective anti-loss and anti-theft tools for your Windows laptop or tablet, remotely accessible from anywhere in the world via your Bitdefender Central account.`,
                },
                {
                  title: "Wi-Fi Security Advisor",
                  desc: `Assess the security of your Wi-Fi network and router, no matter where you connect.`,
                },
                {
                  title: "Social Network Protection",
                  desc: `Stay safe from malicious links and any online threats your friends unwittingly pass on to you via social networks.`,
                },
                {
                  title: "File Shredder",
                  desc: `Use this tool when you wish to delete a file for good and leave no traces that it ever existed on your PC.`,
                },
              ],
            },
          ],
          featMac: [
            {
              title: "Protection",
              desc: "Bitdefender`s unbeatable multi-layered protection keeps your devices safe from all new and existing online threats.",
              feat: [
                {
                  title: "Safe Files ",
                  desc: `With Bitdefender Safe Files, you can prevent unauthorized changes to your most important files. Simply add folders to the watch list, and Bitdefender guards the files stored in them against ransomware and other malware. Only applications you explicitly trust can access your Safe Files.`,
                },
                {
                  title: "Time Machine Protection",
                  desc: `If you use Time Machine to back up your files, you’ll want this extra security layer to stay safe from sophisticated ransomware attacks. Ransomware, an extremely dangerous type of malware, acts by encrypting precious files such as pictures, videos and other documents, rendering them unusable. With this complex feature, Mac users can restore their files without having to pay ransom. Time Machine Protection gives you the edge against any malware that tries to encrypt or destroy your backups.`,
                },
                {
                  title: "Adware Blocker",
                  desc: `Unsolicited ads popping up in your browser are unpleasant, and even Macs can pick up these intrusive adware infections that divert your focus and slow you down. Bitdefender Family Pack detects and removes adware, malicious hijacker programs, unwanted toolbars and other annoying browser add-ons, so you can enjoy your Mac to the max.`,
                },
                {
                  title: "Cross-Platform Malware Detection",
                  desc: `Your Mac may be safe from malicious content designed for Windows, but you’ll want to make sure you don’t pick it up and pass it on to PC users. Bitdefender Family Pack detects and removes both malware targeting macOS and threats made for Windows, so you know the files you send to others are not compromised.`,
                },
                {
                  title: "Traffic Light (browser extension)",
                  desc: `Bitdefender Family Pack ensures protection for all your browsing, including your online shopping and banking, and can filter out inappropriate content. With automatic protection on, our artificial intelligence system scans all links before you even click on them, so you never unknowingly open harmful web pages.`,
                },
                {
                  title: "Anti-Phishing",
                  desc: `Online scams are on the rise, but our advanced anti-phishing protection keeps you far from danger. Bitdefender Family Pack sniffs and blocks websites that masquerade as trustworthy in order to steal financial data such as passwords or credit card numbers.`,
                },
                {
                  title: "Bitdefender Shield",
                  desc: `Handles all your security needs so you don’t need to bother with the nitty-gritty. Once switched on, it combines a series of innovative proprietary technologies to automatically detect and remove any threat, with no negative impact on your Mac’s speed and performance. Turn it on and forget about it.`,
                },
              ],
            },
            {
              title: "Performance",
              desc: "Bitdefender’s security software reacts instantly to online threats with no compromise to your system’s performance.",
              feat: [
                {
                  title: "Autopilot",
                  desc: `Bitdefender Autopilot is designed to act as a Security Advisor and to give you deeper insights into your security posture. Its smart capabilities mean that it can recommend security actions in the context of your system needs and usage patterns.`,
                },
                {
                  title: "Ultra-Fast Scanning",
                  desc: `Ironclad protection is great, but it’s even better when it comes with unrivaled speed and performance. Bitdefender Family Pack combines accuracy and speed so you get ultra-fast scans and the best detection rate in the industry.`,
                },
                {
                  title: "24/7 Cloud-Based Guard Duty",
                  desc: `Through permanent updates, our Bitdefender Family Pack is always aware of zero-day attacks. We use amazingly powerful Cloud-based technologies to detect and eliminate e-threats, wherever they come from, to give you instant worldwide protection. As the heavy lifting is done in the Cloud, there’s no drag on your Mac’s resources, and your personal information remains safely stored on your computer.`,
                },
              ],
            },
            {
              title: "Privacy",
              desc: "Bitdefender Family Pack takes care of your online privacy and personal information.",
              feat: [
                {
                  title: "Bitdefender VPN ",
                  desc: `With Bitdefender VPN, you can stop worrying about privacy on the web. It protects your online presence by encrypting all Internet traffic. Bitdefender Family Pack includes up to 200 MB per day of encrypted traffic for your Windows, Android, macOS and iOS devices.`,
                },
                {
                  title: "Anti-tracker",
                  desc: `The Anti-tracker extension blocks trackers that collect your data and allows you to view and manage this information on each website you visit. Keeps your browsing data private and enhances performance by loading webpages faster.`,
                },
                {
                  title: "Parental Control",
                  desc: `Parental Control offers digital help to parents and extra online safety to children.`,
                },
              ],
            },
          ],
          featIOS: [
            {
              title: "Protection",
              desc: "Bitdefender`s unbeatable multi-layered protection keeps your devices safe from all new and existing online threats.",
              feat: [
                {
                  title: "Web Protection",
                  desc: `Our anti-phishing system scans webpages and warns you when you come across fraudulent pages. Bitdefender Web Protection filters all traffic, not only your intentional browsing, and offers real-time protection against all online dangers.`,
                },
                {
                  title: "Scan",
                  desc: `Protects your phone and its data by detecting security misconfigurations and helping you remediate them.`,
                },
              ],
            },
            {
              title: "Privacy",
              desc: "Bitdefender Family Pack takes care of your online privacy and personal information.",
              feat: [
                {
                  title: "Bitdefender VPN",
                  desc: `With Bitdefender VPN, you can stop worrying about privacy on the web. It protects your online presence by encrypting all Internet traffic. Bitdefender Family Pack includes up to 200 MB per day of encrypted traffic for your Windows, Android, macOS and iOS devices.`,
                },
                {
                  title: "Account Privacy",
                  desc: `Check straight from your iPhone whether your online accounts have been involved in any data breaches. With so many popular websites and apps issuing warnings about database leaks, it’s easy to lose track of your exposed accounts. Account Privacy notifies you when your sensitive data is at risk, and lets you take action depending on its status.`,
                },
                {
                  title: "Parental Control",
                  desc: `Parental Control offers digital help to parents and extra online safety to children.`,
                },
              ],
            },
          ],
          featAnd: [
            {
              title: "Protection",
              desc: "Browsing the Internet can take you to dangerous places, but Bitdefender Android security is always there to protect you. Our anti-phishing system scans webpages and warns you when you come across fraudulent pages.",
              feat: [
                {
                  title: "On-Demand & On-Install Scan",
                  desc: `Scan your Android phone or tablet any time to make sure all your apps are clean. Plus, the antivirus module automatically scans each app once you install it, and immediately lets you know whether it poses any danger.`,
                },
                {
                  title: "Web Protection",
                  desc: `Browsing the Internet can take you to dangerous places, but Bitdefender Android security is always there to protect you. Our anti-phishing system scans webpages and warns you when you come across fraudulent pages.`,
                },
                {
                  title: "Scam Alert",
                  desc: `Our newest technology proactively protects you against the rising mobile attacks relying on links to enter your device, to stop you and others from falling victim to scams.`,
                },
                {
                  title: "WearON",
                  desc: `WearON extends mobile security to your smart watch. And if you don’t know where your phone is, use WearON from your Android to activate a sound alert so you can easily find it. Receive an alert when you step too far away from your phone, so you never leave it behind.`,
                },
                {
                  title: "Anti-Theft",
                  desc: `With Bitdefender Anti-Theft, you can remotely locate, lock, wipe or send a message to your device in case of loss or theft. Plus, your Android phone is capable of self-defense: it snaps a mugshot of anyone who tries to tamper with it in your absence, then sends it to you in your Bitdefender Central account.`,
                },
              ],
            },
            {
              title: "Performance",
              desc: "WearON extends mobile security to your smart watch. And if you don’t know where your phone is, use WearON from your Android to activate a sound alert so you can easily find it. Receive an alert when you step too far away from your phone, so you never leave it behind.",
              feat: [
                {
                  title: "Autopilot",
                  desc: `Bitdefender Autopilot is designed to act as a Security Advisor and to give you deeper insights into your security posture. Its smart capabilities mean that it can recommend security actions in the context of your system needs and usage patterns.`,
                },
                {
                  title: "Battery & Performance Saver",
                  desc: `We designed Bitdefender Family Pack to give you the most effective protection, combined with efficient power management. Since most heavy lifting takes place in the cloud, it doesn’t drain your device’s resources, and your battery life remains virtually unaffected.`,
                },
                {
                  title: "Fast & Light-Weight",
                  desc: `Bitdefender Family Pack is amazingly powerful against online threats, yet easy on your phone’s resources, so you won’t see any negative impact on performance. On-demand scanning is lightning fast, and the app only adds a second to the reboot time.`,
                },
              ],
            },
            {
              title: "Privacy",
              desc: "With Bitdefender Anti-Theft, you can remotely locate, lock, wipe or send a message to your device in case of loss or theft. Plus, your Android phone is capable of self-defense: it snaps a mugshot of anyone who tries to tamper with it in your absence, then sends it to you in your Bitdefender Central account.",
              feat: [
                {
                  title: "Bitdefender VPN",
                  desc: `With Bitdefender VPN, you can stop worrying about privacy on the web. It protects your online presence by encrypting all Internet traffic. Bitdefender Family Pack includes up to 200 MB per day of encrypted traffic for your Windows, Android, macOS and iOS devices.`,
                },
                {
                  title: "App Lock",
                  desc: `App Lock protects your most sensitive apps so no one can mess with your settings or private info. Bitdefender Family Pack adds an extra layer of protection by giving you the possibility to lock apps with a PIN code. With Smart Unlock you can set your phone to allow direct access to your protected apps when using a trusted Wi-Fi network.`,
                },
                {
                  title: "Account Privacy",
                  desc: `Check if your online accounts have been involved in any data breaches. With so many popular websites and apps that issuing warnings about database leaks, it’s easy to lose track of your exposed accounts. Account Privacy notifies you when your sensitive data is at risk, and lets you take action depending on its status.`,
                },
                {
                  title: "Parental Control",
                  desc: `Parental Control offers digital help to parents and extra online safety to children.`,
                },
              ],
            },
          ],
          reqWin: [
            {
              brand: "Bitdefender",
              name: "Family Pack",
              req: (
                <>
                  Operating System : Windows 7 with Service Pack 1, Windows 8.1,
                  Windows 10 and Windows 11<br></br>
                  RAM : 2GB <br></br>
                  Available free hard disk space : 2.5 GB free space <br></br>
                  Software Required : Internet Explorer version 11 <br></br>
                  *System performance may be affected on devices that have old
                  generation CPUs
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Parental Control",
              req: (
                <>
                  Operating System : Windows 7 with Service Pack 1, Windows 8.1,
                  Windows 10 and Windows 11<br></br>
                  RAM : 2GB <br></br>
                  Available free hard disk space : 2.5 GB free space <br></br>
                  Software Required : Supported Browser; Chrome Browser, Mozilla
                  Firefox, Opera<br></br>
                  *System performance may be affected on devices that have old
                  generation CPUs
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Central",
              req: (
                <>
                  Software Required : Supported Browser; Chrome 56 or later,
                  Firefox 52 and later, Microsoft Edge <br></br>
                  *System performance may be affected on devices that have old
                  generation CPUs
                </>
              ),
            },
          ],
          reqMac: [
            {
              brand: "Bitdefender",
              name: "Family Pack",
              req: (
                <>
                  Operating System: macOS X Yosemite (10.10) or later <br></br>
                  Available free hard disk space: 1 GB free space <br></br>
                  Browsers Supported: Safari, Firefox, Google Chrome <br></br>
                  *You may install Bitdefender VPN only on devices with macOS
                  Sierra (10.12 or later)
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Parental Control",
              req: (
                <>
                  Operating System: macOS X Yosemite (10.10) or later <br></br>
                  Memory (RAM): 2 GB <br></br>
                  Minimum hard disk space: 200 MB <br></br>
                  Software Requirement: Supported browsers - latest released
                  versions of; Chrome, Mozilla Firefox, Safari, Opera
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Central",
              req: (
                <>
                  Operating System: macOS X Yosemite (10.10) or later <br></br>
                  Available free hard disk space: 1 GB free space <br></br>
                  Browsers Supported: Safari, Firefox, Google Chrome <br></br>
                  *You may install Bitdefender VPN only on devices with macOS
                  Sierra (10.12 or later)
                </>
              ),
            },
          ],
          reqIOS: [
            {
              brand: "Bitdefender",
              name: "Family Pack",
              req: (
                <>
                  Operating System: iOS 11.2 or later <br></br>
                  An active Internet Connection
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Parental Control",
              req: (
                <>
                  Operating System: iOS 11.2 or later <br></br>
                  An active Internet connection <br></br>
                  Note: With iPad support <br></br>
                  Software Requirement: Supported browsers; Chrome Browser,
                  Mozilla Firefox, Opera
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Central",
              req: (
                <>
                  Operating System: iOS 11.2 or later <br></br>
                  An active Internet Connection
                </>
              ),
            },
          ],
          reqAnd: [
            {
              brand: "Bitdefender",
              name: "Family Pack",
              req: (
                <>
                  Operating System: Android 5.0 or later <br></br>
                  An active Internet Connection
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Parental Control",
              req: (
                <>
                  Operating System: Android 5.0 or later <br></br>
                  An active Internet connection <br></br>
                  Software Requirement: Supported browsers; Chrome Browser,
                  Mozilla Firefox, Opera
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Central",
              req: (
                <>
                  Operating System: Android 5.0 or later <br></br>
                  An active Internet Connection
                </>
              ),
            },
          ],
          faq: [
            {
              title: `How does Bitdefender Family Pack protect me against cyber threats?`,
              desc: `Bitdefender Family Pack provides the best protection in the industry, as proven by the last 10 years of independent test scores.
                Easy to install and use, Bitdefender Family Pack reacts instantly to cyber threats with no compromise to your system’s performance.`,
            },
            {
              title: `Does Bitdefender Family Pack protect me against ransomware?`,
              desc: `Ransomware is malicious software designed to block access to the personal files on your computer until a sum of money is paid to the attacker.
                Bitdefender Family Pack offers unbeatable ransomware protection that keeps your documents, pictures and videos safe from all known and emerging cyber threats.
                This security solution can identify even the latest ransomware families through the use of multiple layers of protection designed to detect malware during various stages of the attack.`,
            },
            {
              title: `What type of devices and operating systems does Bitdefender Family Pack Cover`,
              desc: `Bitdefender Family Pack will protect your Windows PCs, Macs, smartphones and tablets running Android or iOS against all cyber threats.`,
            },
            {
              title: `Why do I need Bitdefender Family Pack on Windows 10/ macOS/ Android?`,
              desc: `Windows 10 lets you run the security program of your choosing, and Bitdefender Family Pack is the perfect option if you need a complex digital protection suite that covers all devices and operating systems in your household.
                With the rapid evolution of malware, Macs have become increasingly vulnerable. This is why it is always recommended to leave security in the hands of specialists. Bitdefender Family Pack makes sure your Mac is protected from all new and existing cyber-threats.
                Some of your most personal data is stored on your Android smartphone - and you need to know it is safe at all times. Bitdefender Family Pack takes care of your online privacy and private information without interfering in your day-to-day activities.`,
            },
            {
              title: `How does Bitdefender Family Pack compare to other Bitdefender security suites?`,
              desc: `Bitdefender Family Pack offers cross-platform protection that covers Windows PCs, Macs, Smartphones and Tablets running Android or iOS for up to 15 devices.
                Need unlimited VPN traffic? Bitdefender Premium Security includes Bitdefender Total Security, Bitdefender Premium VPN for Unlimited Traffic & Premium Support.`,
            },
            {
              title: `Do I get a VPN with my Bitdefender Family Pack subscription?`,
              desc: `Bitdefender Family Pack comes with a basic version of Bitdefender VPN that includes a generous amount of traffic (200 MB/ day, a total of 6GB/ month), free of charge.`,
            },
            {
              title: `Can I try Bitdefender Family Pack before buying?`,
              desc: `You can always try before you buy. Download your free 30-day full trial version of Bitdefender Family Pack and test the complete package, no credit card required.`,
            },
            {
              title: `How do I activate Bitdefender Family Pack?`,
              desc: `Just go to your email after your purchase and follow the steps to create a Bitdefender Central Account and activate your subscription. Once your subscription is active in your Bitdefender Account, you can start installing & protecting your devices.`,
            },
            {
              title: `I changed my computer. How do I reinstall Bitdefender Family Pack?`,
              desc: `Log in to your Bitdefender Central account, go to My Devices and start installing Bitdefender on your new device. If the old computer is no longer in use, you will not need an additional slot on your subscription.`,
            },
            {
              title: `Do I have to renew Bitdefender Family Pack?`,
              desc: `To help you stay protected, Bitdefender Family Pack can be purchased as a subscription that will automatically renew if you enrolled at the time of purchase.
                You can check and modify the status any time in your Central Account (My Subscriptions -> My Payments) if you activated the subscription on the same email address used for purchase.
                If you purchased Bitdefender Family Pack, you can choose to renew early or purchase for another year (or upgrade) close to the expiration date, depending on the time left on your subscription.
                In any case, starting 30 days before your expiration date, you will receive emails informing you that your subscription is about to expire and describing the next steps.`,
            },
            {
              title: `I have not received the activation code. What should I do?`,
              desc: `Confirmation emails are typically received shortly after an order is placed. Make sure you also check your Promotions and Spam folders if your email client categorizes emails automatically. For more information, check this Support article.
                Didn't find what you were looking for?
                Log in to your Bitdefender account at Bitdefender Central to find out more about your Bitdefender Family Pack subscription (video tutorials included).
                Helpful articles are also available in Bitdefender Support Center.`,
            },
          ],
        },
      },
      // End Here
      // Start Here
      {
        id: 2,
        link_id: "totalsecurity", // Don't Change
        brand: "Bitdefender",
        name: "Total Security",
        category: "Device Security", // Don't Change
        desc: `The leading anti-malware solution against advanced attacks in independent tests`,
        support: "w-m-i-a",
        price: 455960,
        price_ori: 1139900,
        feat: [
          "Bitdefender outperforms competitors in terms of malware protection and impact on system performance.",
          "Enjoy unrivaled online peace of mind with zero impact on your device’s speed.",
        ],
        pageData: {
          bgimg:
            "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
          awards: [
            {
              title: "PCMag Editor's Choice",
              source: "PCMag November 2022",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/bitdefender-premium-security/editors-choice-h_2x.png",
            },
            {
              title: "Product of The Year",
              source: "AV-Comparative January 2023",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/images/2022_award_poty.png",
            },
            {
              title: "TechRadar Editor's Choice",
              source: "TechRadar March 2022",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/images/TechRadar_%20Editor%27s%20Choice-5%20star%20logo_2020%20version%20(2)%20(1).png",
            },
          ],
          compareTitle: [1, 2, 3],
          compareValue: [
            {
              title: "Protection for every OS: Windows, macOS, Android and iOS",
              value: [true, "w", "w"],
            },
            {
              title: "Device Optimizer",
              value: [true, false, false],
            },
            {
              title: "Privacy Firewall",
              value: [true, true, false],
            },
            {
              title: "Parental Control",
              value: [true, true, false],
            },
            {
              title: "Protection against malware, spyware, adware",
              value: [true, true, true],
            },
            {
              title: "Multi-Layer Ransomware Protection",
              value: [true, true, true],
            },
          ],
          featDetail: {
            title: "Complete Protection for Windows, macOS, iOS, and Android",
            desc: `Bitdefender Total Security gives you the best anti-malware protection against e-threats 
            across all major operating systems.`,
          },
          featWin: [
            {
              title: "Protection",
              desc: "Bitdefender`s unbeatable multi-layered protection keeps your devices safe from all new and existing e-threats.",
              feat: [
                {
                  title: "Complete Real-Time Data Protection",
                  desc: `Absolute power in the most efficient security solution available today. 
                        Bitdefender Family Pack works against all e-threats, from viruses, 
                        worms and Trojans, to ransomware, zero-day exploits, rootkits and spyware. 
                        Your data and privacy are safe.`,
                },
                {
                  title: "Network Threat Prevention",
                  desc: `Bitdefender Family Pack stops attacks before they even begin. The new cyber threat intelligence technologies included can analyze and identify suspicious network-level activities, and block sophisticated exploits, malware and botnet-related URLs, and brute force attacks.`,
                },
                {
                  title: "Advanced Threat Defense",
                  desc: `Bitdefender Family Pack uses a technique called behavioral detection to closely monitor active apps. The moment it detects anything suspicious, it takes instant action to prevent infections.`,
                },
                {
                  title: "Multi-Layer Ransomware Protection",
                  desc: `Bitdefender’s multi-layered approach against ransomware includes a data-protection layer that safeguards your documents, pictures, videos, and music against all kinds of ransomware attacks. It works with the Advanced Threat Defense module to protect your most important files from encryption by ransomware.`,
                },
                {
                  title: "Vulnerability Assessment",
                  desc: `Scan for security holes and vulnerabilities with just one click. Bitdefender checks your PC for outdated and vulnerable software, missing Windows security patches and potentially unsafe system settings, then indicates the best fix.`,
                },
                {
                  title: "Web Attack Prevention",
                  desc: `Our web-filtering technology ensures that you never land on a harmful website. Find out whether your search results are safe to access before you actually click on a link. Bitdefender Family Pack also blocks all known infected links.`,
                },
                {
                  title: "Anti-Phising",
                  desc: `Online scams are on the rise, but our advanced anti-phishing protection easily keeps you out of danger. Bitdefender Family Pack sniffs and blocks websites that masquerade as trustworthy in order to steal financial data such as passwords or credit card numbers.`,
                },
                {
                  title: "Anti-Fraud",
                  desc: `Our advanced filtering system warns you whenever you visit websites that may try to scam you.`,
                },
                {
                  title: "Antispam",
                  desc: `Filters irrelevant messages in your Inbox. It’s available for local email clients (Microsoft Outlook, Thunderbird).`,
                },
                {
                  title: "Rescue Environtment",
                  desc: `Some sophisticated malware, like rootkits, need to be removed before Windows starts. When Bitdefender Family Pack detects such threats, it reboots the computer in Rescue Environment for clean-up and restoration.`,
                },
              ],
            },
            {
              title: "Performance",
              desc: "Bitdefender security software reacts instantly to malware without compromising your systems performance.",
              feat: [
                {
                  title: "Autopilot",
                  desc: `Bitdefender Autopilot is designed to act as a Security Advisor and to give you deeper insights into your security posture. Its smart capabilities mean that it can recommend security actions in the context of your system needs and usage patterns.`,
                },
                {
                  title: "Bitdefender Photon",
                  desc: `This innovative, exclusive technology helps Bitdefender Family Pack adapt to your system’s hardware and software configuration to save computing resources and improve speed and performance.`,
                },
                {
                  title: "Global Protective Network",
                  desc: `Most heavy scanning takes place in the cloud, so there is virtually zero impact on your local resources. This means your system’s speed and performance remain unaffected. And your files are always completely private: Bitdefender does not scan the actual contents of your files, and never uploads or stores them in the cloud.`,
                },
                {
                  title: "Game, Movie, and Work Modes",
                  desc: `Bitdefender Family Pack detects when you play, work or watch a movie, so it knows not to bother you with unnecessary requests. Depending on what you are doing, Bitdefender temporarily halts pop-ups, adjusts visual settings, and pauses unimportant background activities so you can enjoy your device to the max.`,
                },
                {
                  title: "Speed Up Your Devices",
                  desc: `Improve speed and performance for your devices with OneClick Optimizer.`,
                },
                {
                  title: "Battery Mode",
                  desc: `This useful, intelligent feature saves battery life for laptops and tablets by temporarily tweaking system settings such as display, system cooling, system updates and Bluetooth connectivity.`,
                },
              ],
            },
            {
              title: "Privacy",
              desc: "Bitdefender complete protection takes care of your online privacy and personal information.",
              feat: [
                {
                  title: "Bitdefender VPN",
                  desc: `With Bitdefender VPN, you can stop worrying about privacy on the web. It protects your online presence by encrypting all Internet traffic. Bitdefender Family Pack includes up to 200 MB per day of encrypted traffic for your Windows, Android, macOS and iOS devices.`,
                },
                {
                  title: "Anti-tracker",
                  desc: `The Anti-tracker extension blocks trackers that collect your data, and it allows you to view and manage this information on each website you visit. It keeps your browsing data private and enhances performance by loading webpages faster.`,
                },
                {
                  title: "Microphone Monitor",
                  desc: `Regain control over your own devices with Microphone Monitor. Use it and you can see what apps have access to your device’s microphone and when.`,
                },
                {
                  title: "Webcam Protection ",
                  desc: `Protect your privacy and prevent webcam leaks. Webcam Protection notifies you when apps try to access your webcam, and lets you block unauthorized access.`,
                },
                {
                  title: "Safe Online Banking",
                  desc: `Bank and shop from a unique, dedicated browser that secures your transactions to prevent fraud. Bitdefender Safepay can now also automatically fill out credit card details in billing fields.`,
                },
                {
                  title: "Parental Control",
                  desc: `Parental Control offers digital help to parents and extra online safety to children. Filter out inappropriate content and limit screen time. Log in remotely to Bitdefender Central to monitor your kids’ online activities. *Parental Control is also available on macOS, iOS and Android with a different feature set depending on each platform.`,
                },
                {
                  title: "Privacy Firewall",
                  desc: `With Bitdefender Family Pack, you get a powerful layer of network protection, so your personal information stays safe from hackers and data snoops.`,
                },
                {
                  title: "Anti-Theft",
                  desc: `Bitdefender Family Pack packs effective anti-loss and anti-theft tools for your Windows laptop or tablet, remotely accessible from anywhere in the world via your Bitdefender Central account.`,
                },
                {
                  title: "Wi-Fi Security Advisor",
                  desc: `Assess the security of your Wi-Fi network and router, no matter where you connect.`,
                },
                {
                  title: "Social Network Protection",
                  desc: `Stay safe from malicious links and any online threats your friends unwittingly pass on to you via social networks.`,
                },
                {
                  title: "File Shredder",
                  desc: `Use this tool when you wish to delete a file for good and leave no traces that it ever existed on your PC.`,
                },
              ],
            },
          ],
          featMac: [
            {
              title: "Protection",
              desc: "Bitdefender`s unbeatable multi-layered protection keeps your devices safe from all new and existing threats.",
              feat: [
                {
                  title: "Safe Files ",
                  desc: `With Bitdefender Safe Files, you can prevent unauthorized changes to your most important files. Simply add folders to the watch list, and Bitdefender guards the files stored in them against ransomware and other malware. Only applications you explicitly trust can access your Safe Files.`,
                },
                {
                  title: "Time Machine Protection",
                  desc: `If you use Time Machine to back up your files, you’ll want this extra security layer to stay safe from sophisticated ransomware attacks. Ransomware, an extremely dangerous type of malware, acts by encrypting precious files such as pictures, videos and other documents, rendering them unusable. With this complex feature, Mac users can restore their files without having to pay ransom. Time Machine Protection gives you the edge against any malware that tries to encrypt or destroy your backups.`,
                },
                {
                  title: "Adware Blocker",
                  desc: `Unsolicited ads popping up in your browser are unpleasant, and even Macs can pick up these intrusive adware infections that divert your focus and slow you down. Bitdefender Family Pack detects and removes adware, malicious hijacker programs, unwanted toolbars and other annoying browser add-ons, so you can enjoy your Mac to the max.`,
                },
                {
                  title: "Cross-Platform Malware Detection",
                  desc: `Your Mac may be safe from malicious content designed for Windows, but you’ll want to make sure you don’t pick it up and pass it on to PC users. Bitdefender Family Pack detects and removes both malware targeting macOS and threats made for Windows, so you know the files you send to others are not compromised.`,
                },
                {
                  title: "Traffic Light (browser extension)",
                  desc: `Bitdefender Family Pack ensures protection for all your browsing, including your online shopping and banking, and can filter out inappropriate content. With automatic protection on, our artificial intelligence system scans all links before you even click on them, so you never unknowingly open harmful web pages.`,
                },
                {
                  title: "Anti-Phishing",
                  desc: `Online scams are on the rise, but our advanced anti-phishing protection keeps you far from danger. Bitdefender Family Pack sniffs and blocks websites that masquerade as trustworthy in order to steal financial data such as passwords or credit card numbers.`,
                },
                {
                  title: "Bitdefender Shield",
                  desc: `Handles all your security needs so you don’t need to bother with the nitty-gritty. Once switched on, it combines a series of innovative proprietary technologies to automatically detect and remove any threat, with no negative impact on your Mac’s speed and performance. Turn it on and forget about it.`,
                },
              ],
            },
            {
              title: "Performance",
              desc: "Bitdefender security software reacts instantly to malware without compromising your system’s performance.",
              feat: [
                {
                  title: "Autopilot",
                  desc: `Bitdefender Autopilot is designed to act as a Security Advisor and to give you deeper insights into your security posture. Its smart capabilities mean that it can recommend security actions in the context of your system needs and usage patterns.`,
                },
                {
                  title: "Ultra-Fast Scanning",
                  desc: `Ironclad protection is great, but it’s even better when it comes with unrivaled speed and performance. Bitdefender Family Pack combines accuracy and speed so you get ultra-fast scans and the best detection rate in the industry.`,
                },
                {
                  title: "24/7 Cloud-Based Guard Duty",
                  desc: `Through permanent updates, our Bitdefender Family Pack is always aware of zero-day attacks. We use amazingly powerful Cloud-based technologies to detect and eliminate e-threats, wherever they come from, to give you instant worldwide protection. As the heavy lifting is done in the Cloud, there’s no drag on your Mac’s resources, and your personal information remains safely stored on your computer.`,
                },
              ],
            },
            {
              title: "Privacy",
              desc: "Bitdefender complete protection takes care of your online privacy and personal information.",
              feat: [
                {
                  title: "Bitdefender VPN ",
                  desc: `With Bitdefender VPN, you can stop worrying about privacy on the web. It protects your online presence by encrypting all Internet traffic. Bitdefender Family Pack includes up to 200 MB per day of encrypted traffic for your Windows, Android, macOS and iOS devices.`,
                },
                {
                  title: "Anti-tracker",
                  desc: `The Anti-tracker extension blocks trackers that collect your data and allows you to view and manage this information on each website you visit. Keeps your browsing data private and enhances performance by loading webpages faster.`,
                },
                {
                  title: "Parental Control",
                  desc: `Parental Control offers digital help to parents and extra online safety to children.`,
                },
              ],
            },
          ],
          featIOS: [
            {
              title: "Protection",
              desc: "Bitdefender`s unbeatable multi-layered protection keeps your devices safe from all new and existing threats.",
              feat: [
                {
                  title: "Web Protection",
                  desc: `Our anti-phishing system scans webpages and warns you when you come across fraudulent pages. Bitdefender Web Protection filters all traffic, not only your intentional browsing, and offers real-time protection against all online dangers.`,
                },
                {
                  title: "Scan",
                  desc: `Protects your phone and its data by detecting security misconfigurations and helping you remediate them.`,
                },
              ],
            },
            {
              title: "Privacy",
              desc: "Bitdefender complete protection takes care of your online privacy and personal information",
              feat: [
                {
                  title: "Bitdefender VPN",
                  desc: `With Bitdefender VPN, you can stop worrying about privacy on the web. It protects your online presence by encrypting all Internet traffic. Bitdefender Family Pack includes up to 200 MB per day of encrypted traffic for your Windows, Android, macOS and iOS devices.`,
                },
                {
                  title: "Account Privacy",
                  desc: `Check straight from your iPhone whether your online accounts have been involved in any data breaches. With so many popular websites and apps issuing warnings about database leaks, it’s easy to lose track of your exposed accounts. Account Privacy notifies you when your sensitive data is at risk, and lets you take action depending on its status.`,
                },
                {
                  title: "Parental Control",
                  desc: `Parental Control offers digital help to parents and extra online safety to children.`,
                },
              ],
            },
          ],
          featAnd: [
            {
              title: "Protection",
              desc: "Bitdefender`s unbeatable multi-layered protection keeps your devices safe from all new and existing threats.",
              feat: [
                {
                  title: "On-Demand & On-Install Scan",
                  desc: `Scan your Android phone or tablet any time to make sure all your apps are clean. Plus, the antivirus module automatically scans each app once you install it, and immediately lets you know whether it poses any danger.`,
                },
                {
                  title: "Web Protection",
                  desc: `Browsing the Internet can take you to dangerous places, but Bitdefender Android security is always there to protect you. Our anti-phishing system scans webpages and warns you when you come across fraudulent pages.`,
                },
                {
                  title: "Scam Alert",
                  desc: `Our newest technology proactively protects you against the rising mobile attacks relying on links to enter your device, to stop you and others from falling victim to scams.`,
                },
                {
                  title: "WearON",
                  desc: `WearON extends mobile security to your smart watch. And if you don’t know where your phone is, use WearON from your Android to activate a sound alert so you can easily find it. Receive an alert when you step too far away from your phone, so you never leave it behind.`,
                },
                {
                  title: "Anti-Theft",
                  desc: `With Bitdefender Anti-Theft, you can remotely locate, lock, wipe or send a message to your device in case of loss or theft. Plus, your Android phone is capable of self-defense: it snaps a mugshot of anyone who tries to tamper with it in your absence, then sends it to you in your Bitdefender Central account.`,
                },
              ],
            },
            {
              title: "Performance",
              desc: "Bitdefender security software reacts instantly to malware without compromising your system’s performance.",
              feat: [
                {
                  title: "Autopilot",
                  desc: `Bitdefender Autopilot is designed to act as a Security Advisor and to give you deeper insights into your security posture. Its smart capabilities mean that it can recommend security actions in the context of your system needs and usage patterns.`,
                },
                {
                  title: "Battery & Performance Saver",
                  desc: `We designed Bitdefender Family Pack to give you the most effective protection, combined with efficient power management. Since most heavy lifting takes place in the cloud, it doesn’t drain your device’s resources, and your battery life remains virtually unaffected.`,
                },
                {
                  title: "Fast & Light-Weight",
                  desc: `Bitdefender Family Pack is amazingly powerful against online threats, yet easy on your phone’s resources, so you won’t see any negative impact on performance. On-demand scanning is lightning fast, and the app only adds a second to the reboot time.`,
                },
              ],
            },
            {
              title: "Privacy",
              desc: "Bitdefender complete protection takes care of your online privacy and personal information.",
              feat: [
                {
                  title: "Bitdefender VPN",
                  desc: `With Bitdefender VPN, you can stop worrying about privacy on the web. It protects your online presence by encrypting all Internet traffic. Bitdefender Family Pack includes up to 200 MB per day of encrypted traffic for your Windows, Android, macOS and iOS devices.`,
                },
                {
                  title: "App Lock",
                  desc: `App Lock protects your most sensitive apps so no one can mess with your settings or private info. Bitdefender Family Pack adds an extra layer of protection by giving you the possibility to lock apps with a PIN code. With Smart Unlock you can set your phone to allow direct access to your protected apps when using a trusted Wi-Fi network.`,
                },
                {
                  title: "Account Privacy",
                  desc: `Check if your online accounts have been involved in any data breaches. With so many popular websites and apps that issuing warnings about database leaks, it’s easy to lose track of your exposed accounts. Account Privacy notifies you when your sensitive data is at risk, and lets you take action depending on its status.`,
                },
                {
                  title: "Parental Control",
                  desc: `Parental Control offers digital help to parents and extra online safety to children.`,
                },
              ],
            },
          ],
          reqWin: [
            {
              brand: "Bitdefender",
              name: "Total Security",
              req: (
                <>
                  Operating System: Windows 7 with Service Pack 1, Windows 8.1,
                  Windows 10 and Windows 11 <br></br>
                  Memory (RAM): 2 GB<br></br>
                  Available free hard disk space: 2.5 GB free space<br></br>
                  Software Requirements: Internet Explorer version 11<br></br>*
                  System performance may be affected on devices that have old
                  generation CPUs
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Parental Control",
              req: (
                <>
                  Operating System: Windows 7 with Service Pack 1 or later
                  <br></br>
                  Memory (RAM): 2 GB<br></br>
                  Minimum hard disk space: 200 MB<br></br>
                  Software Requirements: Supported browsers - latest released
                  versions of; Chrome Browser, Mozilla Firefox, Opera
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Central",
              req: (
                <>
                  Software Requirements: Supported browsers; Chrome 56 and
                  later, Firefox 52 and later, Microsoft Edge
                </>
              ),
            },
          ],
          reqMac: [
            {
              brand: "Bitdefender",
              name: "Total Security",
              req: (
                <>
                  Operating System: macOS X Yosemite (10.10) or later <br></br>
                  Available free hard disk space: 1 GB free space <br></br>
                  Browsers Supported: Safari, Firefox, Google Chrome <br></br>
                  *You may install Bitdefender VPN only on devices with macOS
                  Sierra (10.12 or later)
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Parental Control",
              req: (
                <>
                  Operating System: macOS X Yosemite (10.10) or later <br></br>
                  Memory (RAM): 2 GB <br></br>
                  Minimum hard disk space: 200 MB <br></br>
                  Software Requirement: Supported browsers - latest released
                  versions of; Chrome, Mozilla Firefox, Safari, Opera
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Central",
              req: (
                <>
                  Operating System: macOS X Yosemite (10.10) or later <br></br>
                  Available free hard disk space: 1 GB free space <br></br>
                  Browsers Supported: Safari, Firefox, Google Chrome <br></br>
                  *You may install Bitdefender VPN only on devices with macOS
                  Sierra (10.12 or later)
                </>
              ),
            },
          ],
          reqIOS: [
            {
              brand: "Bitdefender",
              name: "Total Security",
              req: (
                <>
                  Operating System: iOS 11.2 or later <br></br>
                  An active Internet Connection
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Parental Control",
              req: (
                <>
                  Operating System: iOS 11.2 or later <br></br>
                  An active Internet connection <br></br>
                  Software Requirement: Supported browsers; Chrome Browser,
                  Mozilla Firefox, Opera
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Central",
              req: (
                <>
                  Operating System: iOS 11 or later <br></br>
                  An active Internet Connection
                </>
              ),
            },
          ],
          reqAnd: [
            {
              brand: "Bitdefender",
              name: "Total Security",
              req: (
                <>
                  Operating System: Android 5.0 or later <br></br>
                  An active Internet Connection
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Parental Control",
              req: (
                <>
                  Operating System: Android 5.0 or later <br></br>
                  An active Internet connection <br></br>
                  Software Requirement: Supported browsers; Chrome Browser,
                  Mozilla Firefox, Opera
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Central",
              req: (
                <>
                  Operating System: Android 5.0 or later <br></br>
                  An active Internet Connection
                </>
              ),
            },
          ],
          faq: [
            {
              title: `How does Bitdefender Total Security protect me against viruses, malware and cyber threats?`,
              desc: `Bitdefender Total Security provides the best anti-malware protection in the industry, as proven by the last 10 years of independent test scores.
                You get a wealth of advanced security and privacy features for Windows, Android and iOS - plus many bonus features, including VPN and Premium Parental Control.
                Easy to install and use, Bitdefender Total Security reacts instantly to malware with no compromise to your system’s performance.`,
            },
            {
              title: `Does Bitdefender Total Security protect me against ransomware?`,
              desc: `Ransomware is malicious software designed to block access to the personal files on your computer until a sum of money is paid to the attacker.
                Bitdefender Total Security offers unbeatable ransomware protection that keeps your documents, pictures and videos safe from all known and emerging cyber threats.
                This security solution can identify even the latest ransomware families through the use of multiple layers of protection designed to detect malware during various stages of the attack.`,
            },
            {
              title: `What type of devices and operating systems does Bitdefender Total Security cover?`,
              desc: `Bitdefender Total Security will protect your Windows PCs, Macs, smartphones and tablets running Android or iOS against all malware threats.`,
            },
            {
              title: `Why do I need Bitdefender Total Security on Windows 10/ macOS/ Android?`,
              desc: `Windows 10 lets you run the anti-malware program of your choosing, and Bitdefender Total Security is the perfect option if you need a security suite that goes beyond traditional malware protection.
                With the rapid evolution of malware, Macs have become increasingly vulnerable. This is why it is always recommended to leave security in the hands of specialists. Bitdefender Total Security makes sure your Mac is protected from all new and existing cyber-threats.
                Some of your most personal data is stored on your Android smartphone - and you need to know it is safe at all times. Bitdefender Total Security takes care of your online privacy and private information without interfering in your day-to-day activities.`,
            },
            {
              title: `How does Bitdefender Total Security compare to other Bitdefender security suites?`,
              desc: `Bitdefender Total Security offers cross-platform protection that covers Windows PCs, Macs, Smartphones and Tablets running Android or iOS for up to 10 devices.
                Need more devices? Bitdefender Family Pack includes Bitdefender Total Security for up to 15 devices.
                If you are a Small Business, check Bitdefender Small Office Security, which is available for up to 20 devices.
                Need unlimited VPN traffic? Bitdefender Premium Security includes Bitdefender Total Security, Bitdefender Premium VPN for Unlimited Traffic & Premium Support.`,
            },
            {
              title: `Do I get a VPN with my Bitdefender Total Security subscription?`,
              desc: `Bitdefender Total Security comes with a basic version of Bitdefender VPN that includes a generous amount of traffic (200 MB/ day, a total of 6GB/ month), free of charge.`,
            },
            {
              title: `Can I try Bitdefender Total Security before buying?`,
              desc: `You can always try before you buy. Download your free 30-day full trial version of Bitdefender Total Security and test the complete package, no credit card required.`,
            },
            {
              title: `How do I activate Bitdefender Total Security?`,
              desc: `Just go to your email after your purchase and follow the steps to create a Bitdefender Central Account and activate your subscription. Once your subscription is active in your Bitdefender Account, you can start installing & protecting your devices.`,
            },
            {
              title: `I changed my computer. How do I reinstall Bitdefender Total Security?`,
              desc: `Log in to your Bitdefender Central account, go to My Devices and start installing Bitdefender on your new device. If the old computer is no longer in use, you will not need an additional slot on your subscription.`,
            },
            {
              title: `Do I have to renew Bitdefender Total Security?`,
              desc: `If you need unlimited traffic, add Bitdefender Premium VPN to your Bitdefender subscription.
                To help you stay protected, Bitdefender Total Security can be purchased as a subscription that will automatically renew if you enrolled at the time of purchase.
                You can check and modify the status any time in your Central Account (My Subscriptions -> My Payments) if you activated the subscription on the same email address used for purchase.
                If you purchased Bitdefender Total Security, you can choose to renew early or purchase for another year (or upgrade) close to the expiration date, depending on the time left on your subscription.
                In any case, starting 30 days before your expiration date, you will receive emails informing you that your subscription is about to expire and describing the next steps.`,
            },
            {
              title: `I have not received the activation code. What should I do?`,
              desc: `Confirmation emails are typically received shortly after an order is placed. Make sure you also check your Promotions and Spam folders if your email client categorizes emails automatically. For more information, check this Support article.
                Didn't find what you were looking for?
                Log in to your Bitdefender account at Bitdefender Central to find out more about your Bitdefender Total Security subscription (video tutorials included). 
                Helpful articles are also available in Bitdefender Support Center.`,
            },
          ],
        },
      },
      // End Here
      // Start Here
      {
        id: 3,
        link_id: "internetsecurity", // Don't Change
        brand: "Bitdefender",
        name: "Internet Security",
        category: "Device Security", // Don't Change
        desc: `Best security against all Internet threats on Windows PCs
        Choose the best-rated Internet security suite to protect your Windows PC against all online threats.`,
        support: "w",
        price: 403960,
        price_ori: 1009900,
        feat: [
          "Unbeatable threat detection to keep all Internet threats away",
          "Privacy firewall to block intrusions and filter your network traffic",
          "Webcam and microphone protection to prevent eavesdropping",
          "Secure VPN for complete online privacy, 200 MB/day/device",
        ],
        pageData: {
          bgimg:
            "https://images.unsplash.com/photo-1575290970649-8490709215cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          awards: [
            {
              title: "PCMag Editor's Choice",
              source: "PCMag November 2022",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/bitdefender-premium-security/editors-choice-h_2x.png",
            },
            {
              title: "Outstanding Security Product",
              source: "AV-Comparative January 2022",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/images/2022_award_poty.png",
            },
            {
              title: "TechRadar Editor's Choice",
              source: "TechRadar March 2022",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/toolbox/techradar-5-star-2020.png",
            },
          ],
          chartInfection: {
            name: "Best Protection Against Infections",
            source: "Overall Score. January 2011 - June 2022. AV TEST",
            sub: "(On a scale of 0 to 6 and 6 being the highest protection)",
            limit: 6,
            ChartData: [
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
            ],
          },
          chartPerformance: {
            name: "Lowest Impact on Performance",
            source: "Overall Score. January 2013 - June 2022. AV TEST",
            sub: "(On a scale of 0 to 6 and 6 being the lowest impact)",
            limit: 6,
            ChartData: [
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
            ],
          },
          compareTitle: [1, 2, 3],
          compareValue: [
            {
              title: "Protection for every OS: Windows, macOS, Android and iOS",
              value: [true, "w", "w"],
            },
            {
              title: "Device Optimizer",
              value: [true, false, false],
            },
            {
              title: "Privacy Firewall",
              value: [true, true, false],
            },
            {
              title: "Parental Control",
              value: [true, true, false],
            },
            {
              title: "Protection against malware, spyware, adware",
              value: [true, true, true],
            },
            {
              title: "Multi-Layer Ransomware Protection",
              value: [true, true, true],
            },
          ],
          featDetail: {
            title: "Best security against all Internet threats on Windows PCs",
            desc: `Bitdefender Internet Security has won the Product of The Year award from AV-Comparatives. 
            It protects Windows PCs against all types of online threats, and includes Bitdefender VPN and 
            Bitdefender Safepay for your privacy and secure online banking.`,
          },
          featWin: [
            {
              title: "Protection",
              desc: "Bitdefender`s unbeatable multi-layered protection keeps your devices safe from all new and existing online threats.",
              feat: [
                {
                  title: "Complete Real-Time Data Protection",
                  desc: `Absolute power in the most efficient security solution available today. 
                        Bitdefender Family Pack works against all e-threats, from viruses, 
                        worms and Trojans, to ransomware, zero-day exploits, rootkits and spyware. 
                        Your data and privacy are safe.`,
                },
                {
                  title: "Network Threat Prevention",
                  desc: `Bitdefender Internet Security stops attacks before they even begin. The new cyber threat intelligence technologies included can analyze and identify suspicious network-level activities, and block sophisticated exploits, malware and botnet-related URLs, and brute force attacks.`,
                },
                {
                  title: "Advanced Threat Defense",
                  desc: `Bitdefender Internet Security uses a technique called behavioral detection to closely monitor active apps. The moment it detects anything suspicious, it takes instant action to prevent infections.`,
                },
                {
                  title: "Multi-Layer Ransomware Protection",
                  desc: `Bitdefender’s multi-layered approach against ransomware includes a data-protection layer that safeguards your documents, pictures, videos and music against all kinds of ransomware attacks. It works with the Advanced Threat Defense module to protect your most important files from encryption by ransomware.`,
                },
                {
                  title: "Vulnerability Assessment",
                  desc: `Scan for security holes and vulnerabilities with just one click. Bitdefender Internet Security checks your PC for outdated and vulnerable software, missing Windows security patches and potentially unsafe system settings, then indicates the best fix.`,
                },
                {
                  title: "Web Attack Prevention",
                  desc: `Our web-filtering technology ensures that you never land on a harmful website. Find out whether your search results are safe to access before you actually click on a link. Bitdefender Internet Security also blocks all known infected links.`,
                },
                {
                  title: "Anti-Phising",
                  desc: `Online scams are on the rise, but our advanced anti-phishing protection easily keeps you out of danger. Bitdefender Internet Security sniffs and blocks websites that masquerade as trustworthy in order to steal financial data such as passwords or credit card numbers.`,
                },
                {
                  title: "Anti-Fraud",
                  desc: `Our advanced filtering system warns you whenever you visit websites that may try to scam you.`,
                },
                {
                  title: "Antispam",
                  desc: `Filters irrelevant messages in your Inbox. It’s available for local email clients (Microsoft Outlook, Thunderbird).`,
                },
                {
                  title: "Rescue Environtment",
                  desc: `Some sophisticated malware, like rootkits, need to be removed before Windows starts. When Bitdefender Internet Security detects such threats, it reboots the computer in Rescue Environment for clean-up and restoration.`,
                },
              ],
            },
            {
              title: "Performance",
              desc: "Bitdefender’s security software reacts instantly to online threats with no compromise to your system’s performance.",
              feat: [
                {
                  title: "Autopilot",
                  desc: `Bitdefender Autopilot is designed to act as a Security Advisor and give you deeper insights into your security posture. Its smart capabilities mean that it can recommend security actions in the context of your system needs and usage patterns.`,
                },
                {
                  title: "Bitdefender Photon",
                  desc: `This innovative, exclusive technology helps Bitdefender Internet Security adapt to your system’s hardware and software configuration to save computing resources and improve speed and performance.`,
                },
                {
                  title: "Global Protective Network",
                  desc: `Most heavy scanning takes place in the cloud, so there is virtually zero impact on your local resources. This means your system’s speed and performance remain unaffected. And your files are always completely private: Bitdefender does not scan the actual contents of your files, and never uploads or stores them in the cloud.`,
                },
                {
                  title: "Game, Movie, and Work Modes",
                  desc: `Bitdefender Internet Security detects when you play, work or watch a movie, so it knows not to bother you with unnecessary requests. Depending on what you are doing, Bitdefender temporarily halts pop-ups, adjusts visual settings, and pauses unimportant background activities so you can enjoy your device to the max.`,
                },
                {
                  title: "Battery Mode",
                  desc: `This useful, intelligent feature saves battery life for laptops and tablets by temporarily tweaking system settings such as display, system cooling, system updates and Bluetooth connectivity.`,
                },
              ],
            },
            {
              title: "Privacy",
              desc: "Bitdefender Family Pack takes care of your online privacy and personal information.",
              feat: [
                {
                  title: "Bitdefender VPN",
                  desc: `With Bitdefender VPN, you can stop worrying about privacy on the web. It protects your online presence by encrypting all Internet traffic. Bitdefender Internet Security includes up to 200 MB per day of encrypted traffic for your Windows devices.`,
                },
                {
                  title: "Anti-tracker",
                  desc: `The Anti-tracker extension blocks trackers that collect your data, and it allows you to view and manage this information on each website you visit. It keeps your browsing data private and enhances performance by loading webpages faster.`,
                },
                {
                  title: "Microphone Monitor",
                  desc: `Regain control over your own devices with Microphone Monitor. Use it and you can see what apps have access to your device’s microphone and when.`,
                },
                {
                  title: "Webcam Protection ",
                  desc: `Protect your privacy and prevent webcam leaks. Webcam Protection notifies you when apps try to access your webcam, and lets you block unauthorized access.`,
                },
                {
                  title: "Safe Online Banking",
                  desc: `Bank and shop from a unique, dedicated browser that secures your transactions to prevent fraud. Bitdefender Safepay can now also automatically fill out credit card details in billing fields.`,
                },
                {
                  title: "Parental Control",
                  desc: `Parental Control offers digital help to parents and extra online safety to children. Filter out inappropriate content and limit screen time. Log in remotely to Bitdefender Central to monitor your kids’ online activities.`,
                },
                {
                  title: "Privacy Firewall",
                  desc: `With Bitdefender Internet Security, you get a powerful layer of network protection, so your personal information stays safe from hackers and data snoops.`,
                },
                {
                  title: "Wi-Fi Security Advisor",
                  desc: `Assess the security of your Wi-Fi network and router, no matter where you connect.`,
                },
                {
                  title: "Social Network Protection",
                  desc: `Stay safe from malicious links and any online threats your friends unwittingly pass on to you via social networks.`,
                },
                {
                  title: "File Shredder",
                  desc: `Use this tool when you wish to delete a file for good and leave no traces that it ever existed on your PC.`,
                },
              ],
            },
          ],

          reqWin: [
            {
              brand: "Bitdefender",
              name: "Internet Security",
              req: (
                <>
                  Operating System : Windows 7 with Service Pack 1, Windows 8.1,
                  Windows 10 and Windows 11<br></br>
                  RAM : 2GB <br></br>
                  Available free hard disk space : 2.5 GB free space <br></br>
                  Software Required : Internet Explorer version 11 <br></br>
                  *System performance may be affected on devices that have old
                  generation CPUs
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Central",
              req: (
                <>
                  Software Required : Supported Browser; Chrome 56 or later,
                  Firefox 52 and later, Microsoft Edge <br></br>
                </>
              ),
            },
          ],
          faq: [
            {
              title: `How does Bitdefender Internet Security protect me against cyber threats?`,
              desc: `Bitdefender Internet Security provides the best protection in the industry, as proven by the last 10 years of independent test scores.
              Bitdefender Internet Security has won the Product of The Year award from AV-Comparatives.
              You get a wealth of advanced security and privacy features for Windows - plus many bonus features, including secure VPN, Firewall and Parental Control.`,
            },
            {
              title: `Does Bitdefender Internet Security protect me against ransomware?`,
              desc: `Bitdefender Internet Security offers unbeatable ransomware protection that keeps your documents, pictures and videos safe from all known and emerging cyber threats.
              This security solution can identify even the latest ransomware families through the use of multiple layers of protection.`,
            },
            {
              title: `What type of devices and operating systems does Bitdefender Internet Security cover?`,
              desc: `Bitdefender Internet Security is a security software designed especially for Windows PCs.`,
            },
            {
              title: `Why do I need Bitdefender Internet Security on Windows 10?`,
              desc: `Windows 10 lets you run the security program of your choosing, and Bitdefender Internet Security is the perfect option if you need the best protection available today.`,
            },
            {
              title: `How does Bitdefender Internet Security compare to other Bitdefender security products?`,
              desc: `Bitdefender Internet Security is a security software designed especially for Windows PCs.
              Need security for all operating systems? Bitdefender Total Security offers cross-platform protection that covers Windows PCs, Macs, Smartphones and Tablets running Android or iOS for up to 10 devices.
              Need more devices? Bitdefender Family Pack includes Bitdefender Total Security for up to 15 devices.
              Need unlimited VPN traffic? Bitdefender Premium Security includes Bitdefender Total Security, Bitdefender Premium VPN for Unlimited Traffic & Premium Support.`,
            },
            {
              title: `Do I get a VPN with my Bitdefender Internet Security subscription?`,
              desc: `Bitdefender Internet Security comes with a basic version of Bitdefender VPN that includes a generous amount of traffic (200 MB/ day, a total of 6GB/ month), free of charge.
              If you need unlimited traffic, add Bitdefender Premium VPN to your Bitdefender subscription.`,
            },
            {
              title: `Can I try Bitdefender Internet Security before buying?`,
              desc: `You can always try before you buy. Download your free 30-day full trial version of Bitdefender Internet Security and test the complete package, no credit card required.`,
            },
            {
              title: `How do I activate Bitdefender Internet Security?`,
              desc: `Just go to your email after your purchase and follow the steps to create a Bitdefender Central Account and activate your subscription. Once your subscription is active in your Bitdefender Account, you can start installing & protecting your devices.`,
            },
            {
              title: `I changed my computer. How do I reinstall Bitdefender Internet Security?`,
              desc: `Log in to your Bitdefender Central account, go to My Devices and start installing Bitdefender on your new device. If the old computer is no longer in use, you will not need an additional slot on your subscription.`,
            },
            {
              title: `Do I have to renew Bitdefender Internet Security?`,
              desc: `To help you stay protected, Bitdefender Internet Security can be purchased as a subscription that will automatically renew if you enrolled at the time of purchase.
              You can check and modify the status any time in your Central Account (My Subscriptions -> My Payments) if you activated the subscription on the same email address used for purchase.
              If you purchased Bitdefender Internet Security, you can choose to renew early or purchase for another year (or upgrade) close to the expiration date, depending on the time left on your subscription.
              In any case, starting 30 days before your expiration date, you will receive emails informing you that your subscription is about to expire and describing the next steps.`,
            },
            {
              title: `I have not received the activation code. What should I do?`,
              desc: `Confirmation emails are typically received shortly after an order is placed. Make sure you also check your Promotions and Spam folders if your email client categorizes emails automatically. For more information, check this Support article.
              Didn't find what you were looking for?
              Log in to your Bitdefender account at Bitdefender Central to find out more about your Bitdefender Internet Security subscription (video tutorials included).
              Helpful articles are also available in Bitdefender Support Center.`,
            },
          ],
        },
      },
      // End Here
      // Start Here
      {
        id: 4,
        link_id: "antivirusplus", // Don't Change
        brand: "Bitdefender",
        name: "Antivirus Plus",
        category: "Device Security", // Don't Change
        desc: `Best antivirus protection for Windows PCs. Choose a lightweight antivirus that offers essential protection for your Windows PC.`,
        support: "w",
        price: 303960,
        price_ori: 759900,
        feat: [
          "Essential real-time protection for Windows PCs against all viruses and ransomware",
          "Prevents phishing and online fraud while you shop and browse",
          "Secure VPN for complete online privacy, 200 MB/day/device",
        ],
        pageData: {
          bgimg:
            "https://images.unsplash.com/photo-1642783327704-2500e96fe3d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          awards: [
            {
              title: "PCMag Editor's Choice",
              source: "PCMag November 2022",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/bitdefender-premium-security/editors-choice-h_2x.png",
            },
            {
              title: "Product of The Year",
              source: "AV Comparative January 2023",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/images/2022_award_poty.png",
            },
            {
              title: "TechRadar Editor's Choice",
              source: "TechRadar",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/toolbox/techradar-5-star-2020.png",
            },
          ],
          chartInfection: {
            name: "Best Protection Against Infections",
            source: "Overall Score. January 2011 - June 2022. AV TEST.",
            sub: "Best Protection Against Infections (On a scale of 0 to 6 and 6 being the highest protection)",
            limit: 6,
            ChartData: [
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
            ],
          },
          chartPerformance: {
            name: "Lowes Impact on Peformance",
            source: "Overall Score. January 2013 - June 2022. AV TEST.",
            sub: "Lowest Impact on Performance (On a scale of 0 to 6 and 6 being the lowest impact)",
            limit: 6,
            ChartData: [
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
            ],
          },
          compareTitle: [2, 3, 4],
          compareValue: [
            {
              title: "Protection for every OS: Windows, macOS, Android and iOS",
              value: [true, "w", "w"],
            },
            {
              title: "Device Optimizer",
              value: [true, false, false],
            },
            {
              title: "Privacy Firewall",
              value: [true, true, false],
            },
            {
              title: "Parental Control",
              value: [true, true, false],
            },
            {
              title: "Protection against malware, spyware, adware",
              value: [true, true, true],
            },
            {
              title: "Multi-Layer Ransomware Protection",
              value: [true, true, true],
            },
          ],
          featDetail: {
            title: "Best antivirus protection for Windows",
            desc: `Bitdefender Antivirus Plus packs the next-gen cybersecurity that won the “Product of the Year” award from AV-Comparatives. It protects Windows PCs against all online threats, and includes privacy tools such as Bitdefender VPN and Bitdefender Safepay.`,
          },
          featWin: [
            {
              title: "Protection",
              desc: "Bitdefender`s unbeatable multi-layered protection keeps your devices safe from all new and existing threats.",
              feat: [
                {
                  title: "Complete and Real-Time Data Protection",
                  desc: `Absolute power in the best antivirus solution available today. Bitdefender Antivirus Plus works against all e-threats, from viruses, worms and Trojans, to ransomware, zero-day exploits, rootkits and spyware. Your data and privacy are safe.`,
                },
                {
                  title: "Network Threat Prevention",
                  desc: `Bitdefender Antivirus Plus stops attacks before they even begin. The new cyber threat intelligence technologies included can analyze and identify suspicious network-level activities, and block sophisticated exploits, malware and botnet-related URLs, and brute force attacks.`,
                },
                {
                  title: "Advanced Threat Defense",
                  desc: `Bitdefender Antivirus Plus uses a technique called behavioral detection to closely monitor active apps. The moment it detects anything suspicious, it takes instant action to prevent infections.`,
                },
                {
                  title: "Multi-Layer Ransomware Protection",
                  desc: `Bitdefender’s multi-layered approach against ransomware includes a data-protection layer that safeguards your documents, pictures, videos, and music against any kind of ransomware attacks. It works with the Advanced Threat Defense module to protect your most important files from encryption by ransomware.`,
                },
                {
                  title: "Vulnerability Assessment ",
                  desc: `Scan for security holes and vulnerabilities with just one click. Bitdefender Antivirus Plus checks your PC for outdated and vulnerable software, missing Windows security patches and potentially unsafe system settings,then indicates the best fix.`,
                },
                {
                  title: "Web Attack Prevention",
                  desc: `Our web-filtering technology ensures that you never land on a harmful website. Find out whether your search results are safe to access before you actually click on a link. Bitdefender Antivirus Plus also blocks all known infected links.`,
                },
                {
                  title: "Anti-Phishing",
                  desc: `Online scams are on the rise, but our advanced anti-phishing protection easily keeps you out of danger. Bitdefender Antivirus Plus sniffs and blocks websites that masquerade as trustworthy in order to steal financial data such as passwords or credit card numbers.`,
                },
                {
                  title: "Anti-Fraud",
                  desc: `Our advanced filtering system warns you whenever you visit websites that may try to scam you.`,
                },
                {
                  title: "Rescue Environment",
                  desc: `Some sophisticated malware, like rootkits, need to be removed before Windows starts. When Bitdefender Antivirus Plus detects such threats, it reboots the computer in Rescue Environment for clean-up and restoration.`,
                },
              ],
            },
            {
              title: "Performance",
              desc: "Bitdefender Antivirus Plus reacts instantly to e-threats with no compromise to your system’s performance.",
              feat: [
                {
                  title: "Autopilot",
                  desc: `Bitdefender Autopilot is designed to act as a Security Advisor and give you deeper insights into your security posture. Its smart capabilities mean that it can recommend security actions in the context of your system needs and usage patterns.`,
                },
                {
                  title: "Bitdefender Photon™",
                  desc: `This innovative, exclusive technology helps Bitdefender Antivirus Plus adapt to your system’s hardware and software configuration to save computing resources and improve speed and performance.`,
                },
                {
                  title: "Global Protective Network ",
                  desc: `Most heavy scanning takes place in the cloud, so there is virtually zero impact on your local resources. This means your system’s speed and performance remain unaffected. And your files are always completely private: Bitdefender does not scan the actual contents of your files, and never uploads or stores them in the cloud.`,
                },
                {
                  title: "Game, Movie and Work Modes",
                  desc: `Bitdefender Antivirus Plus detects when you play, work or watch a movie, so it knows not to bother you with unnecessary requests. Depending on what you are doing, Bitdefender temporarily halts pop-ups, adjusts visual settings, and pauses unimportant background activities so you can enjoy your device to the max.`,
                },
                {
                  title: "Battery Mode",
                  desc: `This useful, intelligent feature saves battery life for laptops and tablets by temporarily tweaking system settings such as display, system cooling, system updates and Bluetooth connectivity.`,
                },
              ],
            },
            {
              title: "Privacy",
              desc: "Bitdefender Antivirus Plus takes care of your online privacy and personal information.",
              feat: [
                {
                  title: "Bitdefender VPN ",
                  desc: `With Bitdefender VPN, you can stop worrying about privacy on the web. It protects your online presence by encrypting all Internet traffic. Bitdefender Antivirus Plus includes up to 200 MB per day of encrypted traffic for your Windows devices.`,
                },
                {
                  title: "Anti-tracker",
                  desc: `The Anti-tracker extension blocks trackers that collect your data and allows you to view and manage this information on each website you visit. It keeps your browsing data private and enhances performance by loading webpages faster.`,
                },
                {
                  title: "Safe Online Banking",
                  desc: `Bank and shop from a unique, dedicated browser that secures your transactions to prevent fraud. Bitdefender Safepay can now also automatically fill out credit card details in billing fields.`,
                },
                {
                  title: "Wi-Fi Security Advisor",
                  desc: `Assess the security of your Wi-Fi network and router, no matter where you connect.`,
                },
                {
                  title: "Social Network Protection",
                  desc: `Stay safe from malicious links and any online threats your friends unwittingly pass on to you via social networks.`,
                },
                {
                  title: "File Shredder",
                  desc: `Use this tool when you wish to delete a file for good and leave no traces that it ever existed on your PC.`,
                },
              ],
            },
          ],

          reqWin: [
            {
              brand: "Bitdifender",
              name: "Antivirus Plus",
              req: (
                <>
                  Operating System: Windows 7 with Service Pack 1, Windows 8.1,
                  Windows 10 and Windows 11<br></br>
                  Memory (RAM): 2 GB<br></br>
                  Available free hard disk space: 2.5 GB free space<br></br>
                  Software Requirement : Internet Explorer version 11<br></br>
                  *System performance may be affected on devices that have old
                  generation CPUs
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Central",
              req: (
                <>
                  Software Requirement : Supported browsers; Chrome 56 and
                  later, Firefox 52 and later, Microsoft Edge
                </>
              ),
            },
          ],
          faq: [
            {
              title: `How does Bitdefender Antivirus Plus protect me against viruses and other cyber threats?`,
              desc: `Bitdefender Antivirus Plus provides the best antivirus protection in the industry, as proven by the last 10 years of independent test scores.
              You get a wealth of advanced security and privacy features for Windows - plus many bonus features, including secure VPN, Anti-Tracker and Wi-Fi Security Advisor.`,
            },
            {
              title: `Does Bitdefender Antivirus Plus protect me against ransomware?`,
              desc: `Bitdefender Antivirus Plus offers unbeatable ransomware protection that keeps your documents, pictures and videos safe from all known and emerging cyber threats.
              This antivirus solution can identify even the latest ransomware families through the use of multiple layers of protection.`,
            },
            {
              title: `What type of devices and operating systems does Bitdefender Antivirus Plus cover?`,
              desc: `Bitdefender Antivirus Plus is an antivirus software designed especially for Windows PCs.`,
            },
          ],
        },
      },
      // End Here
      // Start Here
      {
        id: 5,
        link_id: "antivirusmac", // Don't Change
        brand: "Bitdefender",
        name: "Antivirus for Mac",
        category: "Device Security for Mac & Mobile", // Don't Change
        desc: `Absolute antivirus protection against Mac-related threats
        Choose the antivirus solution that offers complete protection and maximum speed for your Mac.`,
        support: "m",
        price: 203960,
        price_ori: 509900,
        feat: [
          "Real-time protection against viruses and ransomware",
          "Adware blocking and removal",
          "VPN included for a fast, anonymous and secure online experience - 200 MB/day/device",
          "Protection for all your browsing, including online shopping and banking",
          "Time Machine Protection for your backed-up files in case of a ransomware attack",
        ],
        pageData: {
          bgimg:
            "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
          awards: [
            {
              title: "",
              source: "AV-Comparatives 2019",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/bitdefender-mobile-security-for-ios/av-comp-2019-mac.png",
            },
            {
              title: "A Superlative Mac Protector",
              source: "PC Mag December 2021",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/bitdefender-antivirus-for-mac/EditorsChoice_vert_2x.png",
            },
            {
              title: "Best Mac Antivirus",
              source: "PCMag January 2023",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/images/best%20mac%20antivirus%20protection.png",
            },
          ],
          chartInfection: {
            name: "Absolute Protection. Designed for Mac.",
            source:
              "The highest overall score, 18 points. The overall score includes Protection (max. 6 pts), Performance (max. 6 pts) and Usability (max 6 pts) categories.",
            sub: "",
            limit: 18,
            ChartData: [
              {
                name: "Bitdefender",
                value: 18.0,
                top: true,
              },
              {
                name: "Avast",
                value: 16.5,
              },
              {
                name: "AVG",
                value: 16.5,
              },
              {
                name: "Avira",
                value: 15.5,
              },
            ],
          },
          compareTitle: [1, 2, 3],

          featDetail: {
            title: "Absolute Protection for macOS",
            desc: `Bitdefender Antivirus for Mac gives you absolute protection with no impact on speed or performance. This powerful solution includes free VPN, anti-ransomware and adware removal features.`,
          },
          featMac: [
            {
              title: "Protection",
              desc: "Bitdefender`s unbeatable protection keeps your macOS devices safe from all new and existing threats.",
              feat: [
                {
                  title: "Safe Files",
                  desc: `With Bitdefender Safe Files, you can prevent unauthorized changes to your most important files. Simply add folders to the watch list, and Bitdefender guards the files stored in them against ransomware and other malware. Only applications you explicitly trust can access your Safe Files.`,
                },
                {
                  title: "Time Machine Protection",
                  desc: `If you use Time Machine to back up your files, you’ll want this extra security layer to stay safe from sophisticated ransomware attacks. Ransomware, an extremely dangerous type of malware, acts by encrypting precious files such as pictures, videos and other documents, rendering them unusable. With this complex feature, Mac users can restore their files without having to pay ransom. Time Machine Protection gives you the edge against any malware that tries to encrypt or destroy your backups.`,
                },
                {
                  title: "Adware Blocker",
                  desc: `Unsolicited ads popping up in your browser are unpleasant, and even Macs can pick up these intrusive adware infections that divert your focus and slow you down. Bitdefender Antivirus for Mac detects and removes adware, malicious hijacker programs, unwanted toolbars and other annoying browser add-ons, so you can enjoy your Mac to the max.`,
                },
                {
                  title: "Cross-Platform Malware Detection",
                  desc: `Your Mac may be safe from malicious content designed for Windows, but you’ll want to make sure you don’t pick it up and pass it on to PC users. Bitdefender Antivirus for Mac detects and removes both malware targeting macOS and threats made for Windows, so you know the files you send to others are not compromised.`,
                },
                {
                  title: "Traffic Light (browser extension)",
                  desc: `Bitdefender Antivirus for Mac ensures protection for all your browsing, including your online shopping and banking, and can filter out inappropriate content. With automatic protection on, our artificial intelligence system scans all links before you even click on them, so you never unknowingly open harmful web pages.`,
                },
                {
                  title: "Anti-Phishing",
                  desc: `Online scams are on the rise, but our advanced anti-phishing protection keeps you far from danger. Bitdefender Antivirus for Mac sniffs and blocks websites that masquerade as trustworthy in order to steal financial data such as passwords or credit card numbers.`,
                },
                {
                  title: "Bitdefender Shield",
                  desc: `Handles all your security needs so you don’t need to bother with the nitty-gritty. Once switched on, it combines a series of innovative proprietary technologies to automatically detect and remove any threat, with no negative impact on your Mac’s speed and performance. Turn it on and forget about it.`,
                },
              ],
            },
            {
              title: "Performance",
              desc: "Bitdefender Antivirus for Mac reacts instantly to online threats without compromising your system’s performance.",
              feat: [
                {
                  title: "Autopilot",
                  desc: `Bitdefender Autopilot is designed to act as a Security Advisor and to give you deeper insights into your security posture. Its smart capabilities mean that it can recommend security actions in the context of your system needs and usage patterns.`,
                },
                {
                  title: "Ultra-Fast Scanning",
                  desc: `Ironclad protection is great, but it’s even better when it comes with unrivaled speed and performance. Bitdefender Antivirus for Mac combines accuracy and speed so you get ultra-fast scans and the best detection rate in the industry.`,
                },
                {
                  title: "24/7 Cloud-Based Guard Duty",
                  desc: `Through permanent updates, Bitdefender Antivirus for Mac is always aware of zero-day attacks. We use amazingly powerful Cloud-based technologies to detect and eliminate e-threats, wherever they come from, to give you instant protection anywhere in the world. As the heavy lifting is done in the Cloud, there’s no drag on your Mac’s resources, and your personal information remains safely stored on your computer.`,
                },
              ],
            },
            {
              title: "Privacy",
              desc: "Bitdefender Antivirus for Mac takes care of your online privacy and personal information.",
              feat: [
                {
                  title: "Bitdefender VPN",
                  desc: `With Bitdefender VPN, you can stop worrying about privacy on the web. It protects your online presence by encrypting all Internet traffic. Bitdefender Antivirus for Mac includes up to 200 MB per day of encrypted traffic for macOS devices.`,
                },
                {
                  title: "Anti-tracker",
                  desc: `The Anti-tracker extension blocks trackers that collect your data and allows you to view and manage this information on each website you visit. Keeps your browsing data private and enhances performance by loading webpages faster.`,
                },
              ],
            },
          ],

          reqMac: [
            {
              brand: "Bitdefender",
              name: "Antivirus for Mac",
              req: (
                <>
                  Operating System: macOS X Yosemite (10.10) or later<br></br>
                  Available free hard disk space: 1 GB free space<br></br>
                  Browsers Supported: Safari, Firefox, Google Chrome<br></br>
                  *You may install Bitdefender VPN only on devices with macOS
                  Sierra(10.12 or later)
                </>
              ),
            },
            {
              brand: "Bitdefender",
              name: "Central",
              req: (
                <>
                  Supported browsers: Chrome 56 and later Firefox 52 and later
                  Safari 10.0 and later
                </>
              ),
            },
          ],
          faq: [
            {
              title: `How does Bitdefender Antivirus for Mac protect me against viruses and cyber threats?`,
              desc: `Bitdefender Antivirus for Mac is a powerful antivirus, which can block, detect and remove all kinds of malicious software ("malware"), including; Ransomware, Adware, Viruses, Spyware, Trojans, Keyloggers, Worms.
              Easy to install and use, Bitdefender Antivirus for Mac reacts instantly to viruses and other e-threats with no compromise to your system’s performance. It detects and removes not only Mac malware, but also Windows malicious content, thus preventing you from accidentally sending infected files to your family, friends and colleagues using PCs.`,
            },
            {
              title: `Does Bitdefender Antivirus for Mac protect me against ransomware?`,
              desc: `Ransomware is malicious software designed to block access to the personal files on your computer until a sum of money is paid to the attacker.
              Bitdefender Antivirus for Mac offers unbeatable ransomware protection that keeps your documents, pictures and videos safe from all known and emerging cyber threats.
              This antivirus solution can identify even the latest ransomware families through the use of multiple layers of protection designed to detect malware during various stages of the attack.`,
            },
            {
              title: `Why do I need Bitdefender Antivirus for Mac on macOS?`,
              desc: `With the rapid evolution of malware, Macs have become increasingly vulnerable. This is why it is always recommended to leave security in the hands of specialists. Bitdefender Antivirus for Mac makes sure your Mac is protected from all new and existing cyber-threats.`,
            },
          ],
        },
      },
      // End Here
      // Start Here
      {
        id: 6,
        link_id: "mobileios", // Don't Change
        brand: "Bitdefender",
        name: "Mobile Security for iOS",
        category: "Device Security for Mac & Mobile", // Don't Change
        desc: `Enjoy your iOS. We keep it safe.
        Bitdefender Mobile Security for iOS is a mobile app especially designed to keep your sensitive data safe from prying eyes.`,
        support: "i",
        price: 189900,
        feat: [
          "Get the most powerful protection against threats with the least impact on battery",
          "Protect your personal data: passwords, address, social and financial information",
          "Easily check your phone security to detect and fix misconfigurations that might expose it",
          "Avoid accidental data exposure and misuse for all installed apps",
          "Scan your device to achieve optimal security and privacy settings",
          "Gain usage insights into your online activity and history of prevented incidents",
          "Check your online accounts against data breaches",
          "Encrypt all internet traffic with the included VPN",
        ],
        pageData: {
          bgimg:
            "https://images.unsplash.com/photo-1597392959978-1c1edcc91eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
          awards: [
            {
              title: "Outstanding Security Product",
              source: "AV-Comparatives, January 2022",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/images/2022_award_poty.png",
            },
            {
              title:
                "Outstanding scores in independent lab tests and our web protection tests",
              source: "PC Mag, August 2021",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/bitdefender-mobile-security-for-ios/EditorsChoice_vert_2x.png",
            },
          ],

          featDetail: {
            title: "Best Protection for your iOS devices",
            desc: `You get the most innovative technologies that predict, prevent, detect and remediate even the latest cyber-threats, anywhere in the world`,
          },
          featIOS: [
            {
              title: "Protection",
              desc: "",
              feat: [
                {
                  title: "Protects your personal data",
                  desc: `Your passwords, address, social and financial information are now safe.`,
                },
                {
                  title: "Prevents interception",
                  desc: `You can use your card online without worrying that your financial data will be stolen.`,
                },
              ],
            },
            {
              title: "Performance",
              desc: "",
              feat: [
                {
                  title: "Minimal impact on battery life",
                  desc: `Offers the most powerful protection against threats with the least impact on battery.`,
                },
              ],
            },
            {
              title: "Privacy",
              desc: "",
              feat: [
                {
                  title: "Helps you stay safe",
                  desc: `You can easily scan your phone to learn if there are any misconfigurations that put your data at risk and close those gaps to enjoy complete security.`,
                },
                {
                  title: "Filters traffic for all apps",
                  desc: `It’s not just your browsing activity that gets protected. Any app on your iPhone that sends information over the internet is prevented from misusing it.`,
                },
                {
                  title: "Provides usage insights",
                  desc: `See what your online activity looks like: daily usage, traffic categorization and incidents prevented.`,
                },
              ],
            },
          ],

          reqIOS: [
            {
              brand: "Bitdefender",
              name: "Mobile Security for iOS",
              req: (
                <>
                  Operating System: iOS 12 or later<br></br>
                  An active Internet connection
                </>
              ),
            },
          ],
          faq: [
            {
              title: `How does Bitdefender Mobile Security for iOS protect me against viruses and cyber threats?`,
              desc: `Bitdefender Mobile Security for iOS provides absolute protection against all cyber threats and is especially designed to keep your sensitive data safe from prying eyes.
              You get a wealth of advanced security and privacy features for your iPhone and iPad - plus many bonus features, including VPN and Web Protection.
              Easy to install and use, Bitdefender Mobile Security for iOS reacts instantly to viruses and malware with no compromise to your system’s performance.`,
            },
            {
              title: `What type of devices and operating systems does Bitdefender Mobile Security for iOS cover?`,
              desc: `Bitdefender Mobile Security for iOS will protect your smartphones and tablets running iOS against all cyber threats.`,
            },
            {
              title: `Why do I need Bitdefender Mobile Security for iOS on Apple OS?`,
              desc: `Some of your most personal data is stored on your iPhone or iPad - and you need to know it is safe at all times. Bitdefender Mobile Security for iOS provides absolute protection against cyber threats and takes care of your online privacy and private information without interfering in your day-to-day activities.`,
            },
            {
              title: `Do I get a VPN with my Bitdefender Mobile Security for iOS subscription?`,
              desc: `Bitdefender Mobile Security for iOS comes with a basic version of Bitdefender VPN that includes a generous amount of traffic (200 MB/ day, a total of 6GB/ month) free of charge.
              If you need unlimited traffic, add Bitdefender Premium VPN to your Bitdefender subscription.`,
            },
          ],
        },
      },
      // End Here
      // Start Here
      {
        id: 7,
        link_id: "mobileandroid", // Don't Change
        brand: "Bitdefender",
        name: "Mobile Security for Android",
        category: "Device Security for Mac & Mobile", // Don't Change
        desc: `Best protection for Android devices
        Bitdefender Mobile Security for Android gives your mobile devices absolute protection against viruses and malware.`,
        support: "a",
        price: 189900,
        feat: [
          "Best protection for your Android smartphone and tablet",
          "Protects you from falling victim to link-based mobile scams",
          "Secure VPN for a fast, anonymous and safe experience while surfing the web – 200 MB/ day",
          "Remotely locate, lock and wipe your Android device in case of loss or theft",
          "Account Privacy that verifies whether your email account has been breached",
          "Minimal impact on battery life",
        ],
        pageData: {
          bgimg:
            "https://images.unsplash.com/photo-1612442443556-09b5b309e637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          awards: [
            {
              title:
                "Bitdefender Mobile Security for Android provides a wide range of tools for monitoring the device’s security and privacy.",
              source: "AV-Comparatives, June 2022",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/bitdefender-mobile-security-for-android/AV-Comp_Mobile%20Security%202022.png",
            },
            {
              title: "Android users made it clear their choice is Bitdefender",
              source: "Reader`s Choice, PCMag, January 2021",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/bitdefender-mobile-security-for-android/pc-rc.jpeg",
            },
            {
              title: "Best Android security product",
              source: "AV-Test, 2021",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/images/avtest_award_2021_best_android_security_bitdefender%20(1).png",
            },
          ],
          chartInfection: {
            name: "Best Protection Against Infections",
            source: "Overall Score. January 2011 - June 2022. AV TEST.",
            sub: "Best Protection Against Infections (On a scale of 0 to 6 and 6 being the highest protection)",
            limit: 6,
            ChartData: [
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
            ],
          },
          chartPerformance: {
            name: "Lowest Impact on Performance",
            source: "Overall Score. January 2013 - June 2022. AV TEST.",
            sub: "Lowest Impact on Performance (On a scale of 0 to 6 and 6 being the lowest impact)",
            limit: 6,
            ChartData: [
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
            ],
          },
          compareTitle: [1, 2, 3],
          compareValue: [
            {
              title: "Windows Protection",
              value: [false, true],
            },
            {
              title: "macOS Protection",
              value: [false, true],
            },
            {
              title: "Android Protection",
              value: [true, true],
            },
            {
              title: "iOS Protection",
              value: [false, true],
            },
            {
              title: "Automatic Upgrades",
              value: [true, true],
            },
            {
              title: "Free Online Support",
              value: [true, true],
            },
          ],
          featDetail: {
            title: "Best Protection for Android",
            desc: `Bitdefender Mobile Security provides unbeatable cloud-based malware detection and a smart anti-theft experience for your Android device, with virtually no battery impact.`,
          },
          featWin: [
            {
              title: "Protection",
              desc: "Bitdefender`s mobile security app keeps your Android device safe from all new and existing online threats.",
              feat: [
                {
                  title: "Malware Scanner",
                  desc: `Receive in-depth information about the type of threats you are protected against, so you know first-hand you’ve made the right choice to safeguard your Android devices.`,
                },
                {
                  title: "On-Demand & On-Install Scan",
                  desc: `Scan your Android phone or tablet any time to make sure all your apps are clean. Plus, the antivirus module automatically scans each app once you install it, and immediately lets you know whether it poses any danger.`,
                },
                {
                  title: "Web Protection",
                  desc: `Browsing the Internet can take you to dangerous places, but Bitdefender Android security is always there to protect you. Our anti-phishing system scans webpages and warns you when you come across fraudulent pages.`,
                },
                {
                  title: "Scam Alert",
                  desc: `Keeps mobile devices safe from phishing, scam and fraud attempts by scanning suspicious links received via texts, messaging apps and notifications. Also halts propagation by preventing forwarding of these links.`,
                },
                {
                  title: "WearON",
                  desc: `WearON extends mobile security to your smart watch. And if you don’t know where your phone is, use WearON from your Android to activate a sound alert so you can easily find it. Receive an alert when you step too far away from your phone, so you never leave it behind.`,
                },
                {
                  title: "Anti-Theft",
                  desc: `With Bitdefender Anti-Theft, you can remotely locate, lock, wipe or send a message to your device in case of loss or theft. Plus, your Android phone is capable of self-defense: it snaps a mugshot of anyone who tries to tamper with it in your absence, then sends it to you in your Bitdefender Central account.`,
                },
              ],
            },
            {
              title: "Performance",
              desc: "Bitdefender Mobile Security for Android reacts instantly to online threats without compromising your system’s performance.",
              feat: [
                {
                  title: "Autopilot",
                  desc: `Bitdefender Autopilot is designed to act as a Security Advisor and to give you deeper insights into your security posture. Its smart capabilities mean that it can recommend security actions in the context of your system needs and usage patterns.`,
                },
                {
                  title: "Battery & Performance Saver",
                  desc: `We designed Bitdefender Mobile Security for Android to give you the most effective protection, combined with efficient power management. Since most heavy lifting takes place in the cloud, it doesn’t drain your device’s resources, and your battery life remains virtually unaffected.`,
                },
                {
                  title: "Fast & Light-Weight",
                  desc: `Bitdefender Mobile Security for Android is amazingly powerful against malware, yet easy on your phone’s resources, so you won’t see any negative impact on performance. On-demand scanning is lightning fast, and the app only adds a second to the reboot time.`,
                },
              ],
            },
            {
              title: "Privacy",
              desc: "Bitdefender’s mobile security app takes care of your online privacy and personal information.",
              feat: [
                {
                  title: "Bitdefender VPN",
                  desc: `With Bitdefender VPN, you can stop worrying about privacy on the web. It protects your online presence by encrypting all Internet traffic. Bitdefender Mobile Security for Android includes up to 200 MB per day of encrypted traffic for your Android device.`,
                },
                {
                  title: "App Lock",
                  desc: `App Lock protects your most sensitive apps so no one can mess with your settings or private info. Bitdefender Mobile Security for Android adds an extra layer of protection by giving you the possibility to lock apps with a PIN code. With Smart Unlock, you can set your phone to allow direct access to your protected apps when using a trusted Wi-Fi network.`,
                },
                {
                  title: "Account Privacy",
                  desc: `Check if your online accounts have been involved in any data breaches. With so many popular websites and apps issuing warnings about database leaks, it’s easy to lose track of your exposed accounts. Account Privacy notifies you when your sensitive data is at risk, and lets you take action depending on its status.`,
                },
              ],
            },
          ],

          reqAnd: [
            {
              brand: "Bitdefender",
              name: "Mobile Security for Android",
              req: (
                <>
                  Operating System: Android 5.0 or later<br></br>
                  An active Internet connection
                </>
              ),
            },
          ],

          faq: [
            {
              title: `How does Bitdefender Mobile Security for Android protect me against viruses and cyber threats?`,
              desc: `Bitdefender Mobile Security for Android is the most advanced mobile security app for Android devices, as proven by independent test scores over the past years.
              You get a wealth of advanced security and privacy features for your Android smartphones and tablets - plus many bonus features, including VPN, Anti-Theft and WearON.
              Easy to install and use, Bitdefender Mobile Security for Android reacts instantly to viruses and malware with no compromise to your system’s performance.`,
            },
            {
              title: `What type of devices and operating systems does Bitdefender Mobile Security for Android cover?`,
              desc: `Bitdefender Mobile Security for Android will protect your smartphones and tablets running Android against all cyber threats.`,
            },
            {
              title: `Why do I need Bitdefender Mobile Security for Android on Android?`,
              desc: `Some of your most personal data is stored on your Android smartphone - and you need to know it is safe at all times. Bitdefender Mobile Security for Android provides absolute protection against cyber threats and takes care of your online privacy and private information without interfering in your day-to-day activities.`,
            },
          ],
        },
      },
      // End Here
      // Start Here
      {
        id: 8,
        link_id: "premiumvpn", // Don't Change
        brand: "Bitdefender",
        name: "Premium VPN",
        category: "Privacy Solutions", // Don't Change
        desc: `Ultra-fast VPN that keeps your online identity and activities safe from hackers, ISPs and snoops`,
        support: "w-m-i-a",
        price: 377940,
        price_ori: 629900,
        feat: [
          "Unlimited encrypted traffic for up to 10 devices",
          "Safe online media streaming and downloads",
          "4000+ servers in over 49 countries around the world",
          "Complete online protection and anonymity, no traffic logs",
        ],
        pageData: {
          bgimg:
            "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          awards: [
            {
              title: "PCMag Editor's Choice",
              source: "PCMag November 2022",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/bitdefender-premium-security/editors-choice-h_2x.png",
            },
            {
              title: "Product of The Year",
              source: "AV Comparatives January 2023",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/solutions/images/2022_award_poty.png",
            },
            {
              title: "TechRadar Editor's Choice",
              source: "TechRadar",
              img: "https://www.bitdefender.com/content/dam/bitdefender/consumers/toolbox/techradar-5-star-2020.png",
            },
          ],
          featDetail: {
            title: "Bitdefender Premium VPN",
            desc: `Bitdefender Premium VPN is the service that grants you online anonymity by encrypting all incoming and outgoing traffic on your PC, Mac or mobile devices.`,
          },
          featWin: [
            {
              title: "",
              feat: [
                {
                  title: "Surf the web truly incognito",
                  desc: `Private browsing is not enough to stay anonymous these days. Your real IP is concealed with Bitdefender Premium VPN so your online activity cannot be linked to you. We believe in protecting your right to privacy, so we keep no traffic logs.`,
                },
                {
                  title: "Secure all your traffic on public networks",
                  desc: `Public networks like airports, lounges, hotels, restaurants and shopping malls are easy targets for those trying to capture and exploit your traffic. Connect your virtual private network to any of our servers to secure your traffic with military-grade encryption, making it impossible for anyone to access it.`,
                },
                {
                  title: "Access geo-restricted content",
                  desc: `Governments, universities and even some ISPs from all over the world practice online censorship by blocking access to apps and websites. If this is already part of your daily life, break free from your regional restrictions and explore the true Internet with Bitdefender Premium VPN service.`,
                },
                {
                  title: "Bypass the ISP throttling",
                  desc: `Pressure on ISP infrastructure is constantly increasing, especially during these times. Not all of them can keep up with the demand and some may choose to cap your bandwidth, depending on the type of traffic that you are doing. This can affect your experience while gaming or streaming your favorite show in HD. With Bitdefender Premium VPN, your traffic is encrypted and no one can track what you are doing online, not even your ISP.`,
                },
                {
                  title: "Unlock potentially cheaper travel costs",
                  desc: `Many travel portals and airline companies use a dynamic pricing mechanism to tailor their offers, but this sometimes works to your disadvantage. Use Bitdefender Premium VPN and connect to several countries to find the best offer.`,
                },
                {
                  title: "Watch your favorite shows when you are far from home",
                  desc: `Whether you are on vacation or a business trip, at the end of the day you want to sit down, relax and stream your favorite movie. If it is not available in your current location, you can simply connect to a VPN server in your home country and enjoy the show.`,
                },
                {
                  title: "Protection against targeted attacks",
                  desc: `A secure VPN service such as Bitdefender Premium VPN is especially useful when you are gaming and your opponent is trying to gain that extra edge by employing unorthodox methods such as DDoS attacks to slow you down.`,
                },
              ],
            },
          ],
          disableFeat: true,
          reqWin: [
            {
              brand: "Bitdefender",
              name: "Premium VPN",
              req: (
                <>
                  Operating System: Windows 7 with Service Pack 1, Windows 8,
                  Windows 8.1, Windows 10 and Windows 11<br></br>
                  Memory (RAM): 1 GB<br></br>
                  Available free hard disk space: 500 MB free space<br></br>
                  *System performance may be affected on devices that have old
                  generation CPUs<br></br>
                  Software Requirement : Net Framework: min version 4.5.2
                </>
              ),
            },
          ],
          reqMac: [
            {
              brand: "Bitdefender",
              name: "Premium VPN",
              req: (
                <>
                  Operating System: macOS Sierra (10.12) or later<br></br>
                  Available free hard disk space: 100MB free space
                </>
              ),
            },
          ],
          reqIOS: [
            {
              brand: "Bitdefender",
              name: "Premium VPN",
              req: (
                <>
                  Operating System: iOS 12 or later<br></br>
                  Storage on iPhone: 50MB<br></br>
                  Storage on iPad: 100MB<br></br>
                  An active Internet connection
                </>
              ),
            },
          ],
          reqAnd: [
            {
              brand: "Bitdefender",
              name: "Premium VPN",
              req: (
                <>
                  Operating System: Android 5.0 or later <br></br>
                  Storage: 100MB<br></br>
                  An active Internet connection
                </>
              ),
            },
          ],
          faq: [
            {
              title: `Why choose Bitdefender Premium VPN?`,
              desc: `Developed by an award-winning security provider that puts your privacy first;
              Fast connection to 4000+ servers in over 49 countries worldwide;
              Unlock media, videos and messaging from all over the world`,
            },
          ],
        },
      },
      // End Here
    ],
  });

  return (
    <>
      <DataContext.Provider value={[state, dispatch]}>
        {children}
      </DataContext.Provider>
    </>
  );
};
