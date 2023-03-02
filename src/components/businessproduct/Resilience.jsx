import React from "react";

import { FaTachometerAlt, FaShieldAlt, FaUsers } from "react-icons/fa/index";

export default function Resilience() {
  const ResilienceList = [
    {
      icon: <FaShieldAlt size={36} />,
      title: "Unified Prevention, Detection & Response Platform",
      desc: "Works across endpoints, productivity apps, identities, networks, and hybrid cloud workloads with high efficacy, multiple security functions and easy administration.",
    },
    {
      icon: <FaTachometerAlt size={36} />,
      title: "Unmatched Attack Prevention",
      desc: "Bitdefender prevention technologies and machine-learning models identify and stop more attacks; we don’t just detect & respond after the fact.",
    },
    {
      icon: <FaUsers size={36} />,
      title: "Extended Detection and Response (XDR)",
      desc: "Combines advanced threat protection with out-of-the-box analytics and rich security context for correlation of disparate alerts, quick triage of incidents and attack containment through automated and guided response.",
    },
    {
      icon: <FaUsers size={36} />,
      title: "Experts You Can Hold Accountable",
      desc: "Our Security Operations Center (SOC) works for you 24x7 – attackers never sleep and neither do we; if we call you at 3 AM, we’ll have an action plan, not just a ticket.",
    },
  ];

  return (
    <>
      <div
        className="flex-full-center"
        style={{ padding: 25, marginTop: 35, marginBottom: 35 }}
      >
        <div className="max-width">
          <h2
            className="text-center margin-bottom-25"
            style={{ marginBottom: 75 }}
          >
            Bitdefender is built for resilience
          </h2>
          <div className="grid-3 grid-3-alt">
            {ResilienceList &&
              ResilienceList.map((list) => {
                return (
                  <>
                    <div
                      className="grid-content grid-content-alt"
                      style={{ maxWidth: 425 }}
                    >
                      <div className="flex-column gap-5">
                        {list.icon}
                        <span className="text-medium">{list.title}</span>
                        <p className="text-normal">{list.desc}</p>
                      </div>
                      {list.button && (
                        <Link className="button" to={list.link}>
                          {list.button}
                        </Link>
                      )}
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
