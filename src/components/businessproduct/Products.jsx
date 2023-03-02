import React from "react";
import ProductCard from "@/customs/ProductCard";

// import { FaAndroid, FaApple, FaWindows, FaCheckCircle } from "react-icons/fa";
// import { SiMacos } from "react-icons/si";

export default function Products() {
  const ProductList = [
    // ================
    // Devices Security
    // ================
    {
      name: "Business Product",
      desc: "Our Bestselling Security Solutions",
      products: [
        {
          brand: "GravityZone",
          type: "Business Security",
          link_id: "businesssecurity",
          desc: `Budget-friendly business next-gen AV
          Intelligent prevention for companies that look to secure their business on a budget.`,
        },
        {
          brand: "GravityZone",
          type: "Business Security Enterprise",
          link_id: "securityenterprise",
          desc: `The ultimate solution for protecting your endpoints: advanced prevention, extended detection, effective response, and risk analytics. Designed to address the entire threat lifecycle.`,
        },
        {
          brand: "GravityZone",
          type: "Business Security Premium",
          link_id: "securitypremium",
          desc: `Next-Generation Endpoint Protection. Evolved
          Advanced Prevention with Threat Context & Reporting​ for companies looking to elevate their business security.`,
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex-full-center" style={{ padding: 25, marginTop: 75 }}>
        <div className="max-width">
          <div className="card-container">
            <div className="card-content">
              {ProductList &&
                ProductList.map((product) => {
                  return (
                    <>
                      <ProductCard product={product} />
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
