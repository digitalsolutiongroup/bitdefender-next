import React from "react";

// import BackgroundImage from "../../../assets/images/cherrydeck.jpg";

import Dropdown from "@/customs/Dropdown";

export default function CyberResilience() {
  const DropdownList = [
    {
      title: "Enable Cyber Resilience",
      desc: "Enhancing your organization’s ability to withstand cyber threats is vital for business continuity",
    },
    {
      title: "Improve Cybersecurity Compliance",
      desc: "As technologies and data security regulations evolve, having the cybersecurity technology to enable your compliance efforts is vital",
    },
    {
      title: "Provide Managed Security Services",
      desc: "Capitalize on the growing demand for managed security services. Leverage the most advanced security technology and count on a simple, cost-effective business model to help you maximize profits.",
    },
    {
      title:
        "Enterprise cybersecurity solutions dedicated to cloud workload security",
      desc: "Security is the #1 cloud challenge. The rate and pace of change in business models and adoption of new cloud-based enterprise platforms has never been greater. Combine that with the increasingly dynamic nature of workloads and traditional security tools have been left in the dust.",
    },
    {
      title: "Secure DataCenters",
      desc: "80% of enterprises have adopted a hybrid-cloud strategy. As industry-analysis firm Gartner® emphasizes, “Agile, efficient infrastructure starts with your data center. From today’s software-defined data centers to an integrated hybrid cloud approach, effective data center risk protection and security enable resilience and competitiveness..”",
    },
    {
      title: "Secure Endpoints",
      desc: "Compromised endpoints cause more than half of data breaches. As your endpoint attack surface grows in complexity, modernizing your endpoint security will ensure you can withstand advanced threats.",
    },
    {
      title: "Secure Small to Medium Business",
      desc: "Protect your business against cyberthreats with a leading security solution that is easy to manage and at a price that’s right for you.",
    },
    {
      title: "Simplify Cybersecurity Operations",
      desc: "Reduce the pressure on your IT and Security teams with a service that combines industry-leading security technologies with a modern 24-hour security operation.",
    },
  ];

  return (
    <>
      <div
        className="flex-full-center"
        style={{ padding: 25, marginTop: 75, marginBottom: 75 }}
      >
        <div className="max-width">
          <div className="card-container">
            <div className="card-header">
              <span className="card-title">Be Cyber Resilient</span>
              <p className="text-normal" style={{ maxWidth: 450 }}>
                Choose our security platform or managed service to become a more
                cyber resilient business.
              </p>
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
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                    style={{
                      width: "100%",
                      borderRadius: 15,
                      height: 450,
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                    alt=""
                  />
                  <span className="text-normal">
                    Complex cyber-attacks are now a common reality, and your
                    business success also depends on the ability to continue to
                    operate when faced with attacks. Bitdefender GravityZone
                    integrates risk analysis with hardening, threat prevention,
                    detection and response capabilities to enable the cyber
                    resilience of your organization.{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
