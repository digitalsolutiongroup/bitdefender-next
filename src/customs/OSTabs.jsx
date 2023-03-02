import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  FaWindows,
  FaAndroid,
  FaApple,
  FaShieldAlt,
  FaTachometerAlt,
  FaLock,
} from "react-icons/fa/index";
import { SiMacos } from "react-icons/si/index";
import Dropdown from "./Dropdown";

export default function OSTabs({ allTab, disableFeat }) {
  const listed = [];

  allTab?.featWin && listed.push(allTab?.featWin);
  allTab?.featMac && listed.push(allTab?.featMac);
  allTab?.featIOS && listed.push(allTab?.featIOS);
  allTab?.featAnd && listed.push(allTab?.featAnd);

  return (
    <>
      <Tabs>
        <TabList
          style={{ marginBottom: 60, display: `${disableFeat && "none"}` }}
        >
          {!disableFeat && allTab?.featWin && (
            <>
              <Tab>
                <FaWindows size={18} /> Windows
              </Tab>
            </>
          )}
          {!disableFeat && allTab?.featMac && (
            <>
              <Tab>
                <SiMacos size={30} /> MacOS
              </Tab>
            </>
          )}
          {!disableFeat && allTab?.featIOS && (
            <>
              <Tab>
                <FaApple size={18} /> iOS
              </Tab>
            </>
          )}
          {!disableFeat && allTab?.featAnd && (
            <>
              <Tab>
                <FaAndroid size={24} /> Android
              </Tab>
            </>
          )}
        </TabList>
        {listed &&
          listed.map((oneTab) => {
            return (
              <>
                <TabPanel>
                  <div
                    className={`grid-3 gap-25 ${disableFeat && "grid-center"}`}
                    style={{ rowGap: 40 }}
                  >
                    {oneTab &&
                      oneTab.map((lists) => {
                        return (
                          <>
                            <div className="grid-border flex-column gap-15">
                              <div className="flex-column gap-10">
                                <div className="flex-row gap-15 align-center">
                                  {lists.title === "Protection" && (
                                    <FaShieldAlt size={32} />
                                  )}
                                  {lists.title === "Performance" && (
                                    <FaTachometerAlt size={32} />
                                  )}
                                  {lists.title === "Privacy" && (
                                    <FaLock size={32} />
                                  )}
                                  <span className="text-medium">
                                    {lists.title}
                                  </span>
                                </div>
                                <span className="white-text">{lists.desc}</span>
                              </div>

                              <div className="flex-column gap-5">
                                {lists.feat &&
                                  lists.feat.map((list) => (
                                    <Dropdown
                                      title={list.title}
                                      desc={list.desc}
                                    />
                                  ))}
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </TabPanel>
              </>
            );
          })}
      </Tabs>
    </>
  );
}
