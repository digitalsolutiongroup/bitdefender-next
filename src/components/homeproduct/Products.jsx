import React from "react";

import {
  FaAndroid,
  FaApple,
  FaWindows,
  FaCheckCircle,
} from "react-icons/fa/index";
import { SiMacos } from "react-icons/si/index";
import { useRouter } from "next/router";

import PriceFormat from "@/others/PriceFormat";

import ContactUs from "@/others/ContactUs";

import useData from "@/hooks/useData";

export default function Products() {
  const navigate = useRouter();

  // Retrieve data from Context using custom hook
  const [state, dispatch] = useData();

  const dataFilter = (name) => {
    const data = state?.product?.filter((obj) => {
      return obj?.category == name;
    });

    return data;
  };

  return (
    <>
      <div className="flex-full-center" style={{ padding: 25 }}>
        <div className="max-width">
          {state?.category?.map((listCat) => (
            <div className="card-container" style={{ marginTop: 50 }}>
              <div className="card-header">
                <span className="card-title">{listCat?.name}</span>
                <p className="text-normal">{listCat?.desc}</p>
              </div>
              <div className="card-content">
                <div className="grid-3 gap-25">
                  {dataFilter(listCat?.name).map((list) => {
                    return (
                      <>
                        <div className="product-card">
                          <div className="flex-column gap-20">
                            <div className="flex-column">
                              <span className="white-text">{list?.brand}</span>
                              <span className="text-medium">{list?.name}</span>
                            </div>
                            <div className="flex-row flex-wrap gap-15 align-center">
                              {/* ------------ */}
                              {/* SUPPORTED OS */}
                              {/* ------------ */}
                              <div className="flex-row align-center gap-10">
                                {list?.support?.includes("w") && (
                                  <FaWindows color="rgba(255,255,255,0.45)" />
                                )}
                                {list?.support?.includes("m") && (
                                  <SiMacos
                                    color="rgba(255,255,255,0.45)"
                                    size={30}
                                  />
                                )}
                                {list?.support?.includes("i") && (
                                  <FaApple color="rgba(255,255,255,0.45)" />
                                )}
                                {list?.support?.includes("a") && (
                                  <FaAndroid color="rgba(255,255,255,0.45)" />
                                )}
                              </div>
                            </div>
                            {list.desc && (
                              <>
                                <span className="text-normal">{list.desc}</span>
                              </>
                            )}
                          </div>
                          <div className="flex-column align-start gap-10">
                            {list?.feat?.slice(0, 3)?.map((feat) => {
                              return (
                                <>
                                  <div className="list-pill">
                                    <FaCheckCircle size={18} />
                                    <span>{feat}</span>
                                  </div>
                                </>
                              );
                            })}
                          </div>
                          <div className="flex-column gap-15">
                            <div className="flex-column">
                              {list.price && (
                                <span className="text-medium flex-row align-center">
                                  {PriceFormat(list.price)}
                                  <span className="text-normal">/yr</span>
                                </span>
                              )}
                              {list.price_ori && (
                                <span className="text-stroked">
                                  {PriceFormat(list.price_ori)}/yr
                                </span>
                              )}
                            </div>
                            <div className="flex-column gap-10">
                              <button
                                onClick={() => {
                                  ContactUs(
                                    `Selamat Siang,%0ASaya ingin menanyakan tentang produk ${list.brand} ${list.name}`
                                  );
                                }}
                                className="button button-center"
                              >
                                Buy Now
                              </button>
                              <button
                                onClick={() => {
                                  navigate.push(`/home/${list?.link_id}`);
                                }}
                                className="button button-center button-outline"
                              >
                                Learn More
                              </button>
                            </div>
                            <p className="text-normal">
                              Price only applied for the first year. Sales Tax
                              included. See Terms of Use
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
