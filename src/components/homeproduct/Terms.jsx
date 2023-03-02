import React from "react";

import Dropdown from "@/customs/Dropdown";

export default function Terms() {
  const TermsList = [
    {
      title: "Auto renewal terms",
      desc: `Your subscription automatically begins at the purchase date;
      By subscribing, you are purchasing a recurring subscription which will automatically renew;
      The Bitdefender Auto Renewal Plan is designed to save you time, effort, and minimize your vulnerability risk by extending your subscription automatically before you run out of protection`,
    },
    {
      title: "Here is what the Bitdefender Auto Renewal Plan means for you",
      desc: `Continuous protection so that you never have to worry about your subscription running out before you renew manually;
      Free upgrades whenever a new version of Bitdefender comes out;
      Peace of mind that your devices are always protected;
      Save time while we are taking care of the automatic renewal process;
      Opt out at any time so that you are always in control of your renewal options;
      24/7 security all-subscription long without interruption;
      The price offered is valid for the first year of subscription. After that, your subscription will be billed at the applicable renewal price;
      If a discount is presented, it describes the difference between the first term and renewal term subscription prices (e.g., first year price vs. each year thereafter). The prices are subject to change, but Bitdefender will send a prior notification by email, before the automatic renewal takes place. You will receive an email notification before you will be billed, along with information regarding pricing and the extension of your subscription duration.`,
    },
    {
      title: "Affirmative consent",
      desc: `Your subscription automatically begins at the purchase date;
      By subscribing, you are purchasing a recurring subscription which will automatically renew.`,
    },
    {
      title: "How to cancel + email address cancellation support",
      desc: `You can cancel your automatically subscription from Bitdefender Central or by contacting Customer Support at: cancel@bitdefender.com
      You can refund by contacting refunds@bitdefender.com within 30 days of your initial purchase or of the automatic renewal date.`,
    },
  ];

  return (
    <>
      <div
        className="flex-full-center"
        style={{ padding: 25, marginTop: 75, marginBottom: 35 }}
      >
        <div className="max-width">
          <h2 style={{ marginBottom: 25 }}>Terms of Use</h2>
          <div className="flex-column gap-10" style={{ maxWidth: 650 }}>
            {TermsList &&
              TermsList.map((list) => {
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
            <p className="text-normal margin-top-10">
              Your subscription may include product, service and/or protection
              updates and features that may be added, modified or removed
              subject to Bitdefender Subscription Agreement and Terms and
              Conditions for Home Users and Privacy Notice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
