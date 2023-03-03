import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

import { FaCheckCircle } from "react-icons/fa/index";

import PriceFormat from "@/others/PriceFormat";

import ContactUs from "@/others/ContactUs";

export default function ProductCard({ product }) {
  // const navigate = useRouter();

  return (
    <>
      <div className="card-container" style={{ marginTop: 50 }}>
        <div className="card-header">
          <span className="card-title">{product.name}</span>
          <p className="text-normal">{product.desc}</p>
        </div>
        <div className="card-content">
          <div className="grid-3 gap-25">
            {product.products.map((list) => {
              return (
                <>
                  <div className="product-card">
                    <div className="flex-column gap-20">
                      <div className="flex-column">
                        <span className="white-text">{list.brand}</span>
                        <span className="text-medium">{list.type}</span>
                      </div>
                      <div className="flex-row flex-wrap gap-15 align-center">
                        {list.os}
                      </div>
                      {list.desc && (
                        <>
                          <span className="text-normal">{list.desc}</span>
                        </>
                      )}
                    </div>
                    <div className="flex-column align-start gap-10">
                      {list?.feat?.map((feat) => {
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
                          <span className="text-medium">
                            {PriceFormat(list.price)}
                          </span>
                        )}
                        {list.price_ori && (
                          <span className="text-stroked">
                            {PriceFormat(list.price_ori)}
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
                        <Link
                          href={`/business/${list?.link_id}`}
                          className="button button-center button-outline"
                        >
                          Learn More
                        </Link>
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
    </>
  );
}
