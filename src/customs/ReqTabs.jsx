import React from "react";

import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

import { FaWindows, FaAndroid, FaApple } from "react-icons/fa/index";
import { SiMacos } from "react-icons/si/index";

export default function ReqTabs({ allTabs }) {
  const listed = [];

  allTabs?.reqWin && listed.push(allTabs?.reqWin);
  allTabs?.reqMac && listed.push(allTabs?.reqMac);
  allTabs?.reqIOS && listed.push(allTabs?.reqIOS);
  allTabs?.reqAnd && listed.push(allTabs?.reqAnd);

  return (
    <>
      <Tabs>
        <TabList>
          <div
            className="flex-row align-end justify-between flex-column-800 align-start-800 gap-15 margin-bottom-25"
            style={{ width: "100%" }}
          >
            <div>
              <h2 style={{ maxWidth: 350 }}>System & Software Requirements</h2>
            </div>
            <div className="flex-row justify-end flex-wrap gap-10 justify-start-800">
              {allTabs?.reqWin && (
                <>
                  <Tab>
                    <FaWindows size={18} /> Windows
                  </Tab>
                </>
              )}
              {allTabs?.reqMac && (
                <>
                  <Tab>
                    <SiMacos size={30} /> MacOS
                  </Tab>
                </>
              )}
              {allTabs?.reqIOS && (
                <>
                  <Tab>
                    <FaApple size={18} /> iOS
                  </Tab>
                </>
              )}
              {allTabs?.reqAnd && (
                <>
                  <Tab>
                    <FaAndroid size={24} /> Android
                  </Tab>
                </>
              )}
            </div>
          </div>
        </TabList>
        {listed &&
          listed?.map((list) => (
            <TabPanel>
              <div className="grid-3 gap-25">
                {list?.map((detail) => (
                  <div className="grid-border flex-column">
                    <div className="flex-column">
                      <span className="white-text">{detail.brand}</span>
                      <span className="text-small">{detail.name}</span>
                    </div>
                    <div className="flex-column margin-top-35">
                      <p className="text-normal">{detail.req}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
      </Tabs>
    </>
  );
}
