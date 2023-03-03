import React, { useEffect, useState } from "react";

import {
  FaCheckCircle,
  FaWindows,
  FaAndroid,
  FaApple,
  FaShieldAlt,
  FaTachometerAlt,
} from "react-icons/fa/index";
import { SiMacos } from "react-icons/si/index";

import Chart from "@/customs/Chart";
import FAQs from "@/others/FAQs";

import Review from "./Review";
import Comparison from "./Comparison";
import ProtectionDetail from "./ProtectionDetail";
import Requirement from "./Requirement";

import useData from "@/hooks/useData";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Product() {
  const navigate = useRouter();

  const router = useRouter();
  const query = router.query;
  const id = query.product;

  const [state, dispatch] = useData();
  const data = state?.product?.filter((obj) => {
    return obj?.link_id == id;
  });

  const [product, setProduct] = useState(data[0]);

  const compare = product?.pageData?.compareValue;

  const [comparedProduct, setComparedProduct] = useState([]);

  useEffect(() => {
    setComparedProduct((prevState) => {
      let listedData = [];
      console.log("WORKED");
      product?.pageData?.compareTitle?.map((obj) => {
        console.log(obj);
        state?.productList?.map((list) => {
          console.log(list);
          if (list?.id == obj) {
            listedData = [...listedData, list];
          }
        });
      });
      return listedData;
    });
  }, [product]);

  useEffect(() => {
    setProduct(data[0]);
    if (product?.length == 0) {
      navigate.push("/404");
    } else if (data?.length == 1) {
      setProduct(data[0]);
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>{product?.name} - Bitdefender Indonesia</title>
      </Head>
      <div
        className="header header-alt"
        style={{
          backgroundImage: `url(${product?.pageData?.bgimg})`,
          paddingTop: 175,
        }}
      >
        <div className="max-width" style={{ height: "100%" }}>
          <div className="header-content header-content-alt">
            <div className="flex-column gap-15">
              <div className="flex-row gap-25 align-center">
                {/* ------------ */}
                {/* PRODUCT NAME */}
                {/* ------------ */}
                <h1 style={{ maxWidth: 450 }}>{product?.name}</h1>
                {/* ------------ */}
                {/* SUPPORTED OS */}
                {/* ------------ */}
                <div
                  className="flex-row align-center gap-10"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    padding: "5px 15px",
                    borderRadius: 25,
                  }}
                >
                  {product?.support?.includes("w") && (
                    <FaWindows color="rgba(255,255,255,0.45)" />
                  )}
                  {product?.support?.includes("m") && (
                    <SiMacos color="rgba(255,255,255,0.45)" size={30} />
                  )}
                  {product?.support?.includes("i") && (
                    <FaApple color="rgba(255,255,255,0.45)" />
                  )}
                  {product?.support?.includes("a") && (
                    <FaAndroid color="rgba(255,255,255,0.45)" />
                  )}
                </div>
              </div>
              {/* ------------------- */}
              {/* PRODUCT DESCRIPTION */}
              {/* ------------------- */}
              <span className="white-text" style={{ maxWidth: 400 }}>
                {product?.desc}
              </span>
            </div>
            <div className="flex-row align-end justify-between flex-column-700 align-start-700 gap-50-700">
              <div className="flex-column gap-10">
                {product?.feat?.map((list) => {
                  return (
                    <>
                      <div className="list-pill list-pill-alt">
                        <FaCheckCircle size={18} />
                        <span>{list}</span>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====== */}
      {/* AWARDS */}
      {/* ====== */}
      {product?.pageData?.awards && (
        <div
          className="flex-full-center margin-top-50 margin-bottom-50"
          style={{ padding: 25 }}
        >
          <div className="max-width">
            <div
              className={`award-grid gap-15 award-count-${product?.pageData?.awards?.length}`}
            >
              {product?.pageData?.awards.map((award) => {
                return (
                  <>
                    <div className="card-award">
                      <img src={award.img} alt="" />
                      <div className="flex-column gap-5">
                        <span className="text-small">"{award.title}"</span>
                        <span className="text-normal">{award.source}</span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* ================= */}
      {/* Protection Charts */}
      {/* ================= */}
      {product?.pageData?.chartInfection && (
        <Chart
          name={product?.pageData?.chartInfection.name}
          source={product?.pageData?.chartInfection.source}
          sub={product?.pageData?.chartInfection.sub}
          icon={<FaShieldAlt size={34} />}
          limit={product?.pageData?.chartInfection.limit}
          ChartData={product?.pageData?.chartInfection.ChartData}
        />
      )}
      {/* ============= */}
      {/* Impact Charts */}
      {/* ============= */}
      {product?.pageData?.chartPerformance && (
        <Chart
          name={product?.pageData?.chartPerformance.name}
          source={product?.pageData?.chartPerformance.source}
          sub={product?.pageData?.chartPerformance.sub}
          icon={<FaTachometerAlt size={34} />}
          limit={product?.pageData?.chartPerformance.limit}
          ChartData={product?.pageData?.chartPerformance.ChartData}
        />
      )}
      {/* ================= */}
      {/* PROTECTION DETAIL */}
      {/* ================= */}
      {product?.pageData?.featDetail && (
        <ProtectionDetail
          title={product?.pageData?.featDetail?.title}
          desc={product?.pageData?.featDetail?.desc}
          allTab={{
            featWin: product?.pageData?.featWin,
            featMac: product?.pageData?.featMac,
            featIOS: product?.pageData?.featIOS,
            featAnd: product?.pageData?.featAnd,
          }}
          disableFeat={product?.pageData?.disableFeat}
        />
      )}
      {/* ========== */}
      {/* COMPARISON */}
      {/* ========== */}
      {compare && <Comparison compare={compare} product={comparedProduct} />}
      {/* =========== */}
      {/* REQUIREMENT */}
      {/* =========== */}
      {(product?.pageData?.reqWin ||
        product?.pageData?.reqMac ||
        product?.pageData?.reqIOS ||
        product?.pageData?.reqAnd) && (
        <Requirement
          reqAllTabs={{
            reqWin: product?.pageData?.reqWin,
            reqMac: product?.pageData?.reqMac,
            reqIOS: product?.pageData?.reqIOS,
            reqAnd: product?.pageData?.reqAnd,
          }}
        />
      )}
      {/* ====== */}
      {/* REVIEW */}
      {/* ====== */}
      <Review />
      {/* === */}
      {/* FAQ */}
      {/* === */}
      {product?.pageData?.faq && <FAQs List={product?.pageData?.faq} />}
    </>
  );
}
