import React from "react";
import { useRouter } from "next/router";
import { FaCheck, FaTimes, FaWindows } from "react-icons/fa/index";

import PriceFormat from "@/others/PriceFormat";
import ContactUs from "@/others/ContactUs";

export default function Comparison({ compare, product }) {
  const navigate = useRouter();
  const { query } = navigate;

  return (
    <>
      <div className="flex-full-center margin-top-75" style={{ padding: 25 }}>
        <div className="max-width">
          {compare?.length !== 0 && (
            <div className="flex-full-center text-center gap-20">
              <h2>Compare Bitdefender Products</h2>
              <span className="white-text" style={{ maxWidth: 550 }}>
                Compare our award-winning products and get the best real-world
                protection, so you can keep doing the things that matter while
                we handle security.
              </span>
            </div>
          )}

          <div style={{ overflowX: "auto", paddingBottom: 35 }}>
            {/* COMPARISON TABLE */}
            {product?.length !== 0 && (
              <table
                className={`comparison-table ${
                  product?.length == 1 && "price-product"
                }`}
              >
                <tr>
                  <th></th>
                  {product?.map((item) => {
                    return (
                      <>
                        <th>
                          <div className="flex-column gap-10 text-left">
                            <div className="flex-column gap-5 align-start text-left">
                              <div className="flex-column">
                                <span className="white-text">{item.brand}</span>
                                <span className="text-small">{item.name}</span>
                              </div>
                              <div className="list-pill list-pill-secondary margin-bottom-50">
                                <span>{item.devices} Devices</span>
                              </div>
                            </div>
                            <div className="flex-column">
                              {item.price && (
                                <span className="text-medium">
                                  {PriceFormat(item.price)}
                                </span>
                              )}
                              {item.price_ori && (
                                <span className="text-stroked text-normal">
                                  {PriceFormat(item.price_ori)}
                                </span>
                              )}
                            </div>
                            <div className="flex-column gap-5">
                              <button
                                onClick={() => {
                                  item.link !== query.product
                                    ? navigate.push(item.link)
                                    : ContactUs(
                                        `Hai, saya ingin menanyakan tentang produk ${item.brand} ${item.name}`
                                      );
                                }}
                                className={`button ${
                                  item.link !== query.product
                                    ? "button-outline"
                                    : ""
                                } button-center`}
                              >
                                {item.link !== query.product
                                  ? "Pelajari Lebih"
                                  : "Beli Sekarang"}
                              </button>
                              <span className="text-normal margin-top-10">
                                Harga yang tertera untuk 1 tahun berlangganan
                              </span>
                            </div>
                          </div>
                        </th>
                      </>
                    );
                  })}
                </tr>
                {compare &&
                  compare?.map((list) => {
                    return (
                      <>
                        <tr>
                          <td>{list.title}</td>
                          {list?.value?.map((val) => {
                            return (
                              <>
                                {val == true ? (
                                  <td>
                                    <FaCheck size={20} />
                                  </td>
                                ) : val == "w" ? (
                                  <td>
                                    <span className="span-pill span-pill-fit">
                                      <FaWindows size={14} />
                                      Windows Only
                                    </span>
                                  </td>
                                ) : (
                                  <td>
                                    <FaTimes
                                      color="rgba(255,255,255,0.35)"
                                      size={20}
                                    />
                                  </td>
                                )}
                              </>
                            );
                          })}
                        </tr>
                      </>
                    );
                  })}
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
