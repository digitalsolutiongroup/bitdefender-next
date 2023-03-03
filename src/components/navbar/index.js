// Import Package
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaWhatsapp,
  FaTimes,
  FaChevronLeft,
  FaHome,
  FaBriefcase,
} from "react-icons/fa/index";
import { CgMenuMotion } from "react-icons/cg/index";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Import Components
import Bitdefender from "@/assets/images/bitdefender.png";
import ContactUs from "@/others/ContactUs";
import { linkFilter } from "@/hooks/useDataFilter";
import PriceFormat from "@/others/PriceFormat";

const ContactButton = ({ data }) => {
  return (
    <>
      {data?.length == 1 ? (
        <button
          onClick={() =>
            ContactUs(
              `Hai,%0ASaya tertarik dengan produk ${data[0].brand} ${data[0].name}`
            )
          }
          className="navbar-button"
        >
          {PriceFormat(data[0]?.price)} | Beli
        </button>
      ) : (
        <button
          onClick={() =>
            ContactUs(
              "Hai,%0ASaya ingin tahu lebih lengkap tentang produk Bitdefender"
            )
          }
          className="navbar-button"
        >
          Hubungi Kami <FaWhatsapp size={16} />
        </button>
      )}
    </>
  );
};

export default function Navbar() {
  // Navigation
  const router = useRouter();
  useEffect(() => {
    navbarRef.current.classList.remove("open-drawer");
  }, [router?.pathname]);

  // GSAP Scroll Trigger
  useEffect(() => {
    ScrollTrigger.create({
      start: "top -100",
      end: 99999999,
      toggleClass: { className: "blur", targets: "#navbar" },
    });
  }, []);

  const data = linkFilter(router.query.product);

  const checkUrl = (name) => {
    if (router.asPath == name) {
      return "active";
    } else {
      return "";
    }
  };

  // This array is saving all of the navbar links list
  // Edit this to add more or made a changes
  const NavbarLink = [
    {
      name: "Produk",
      list: [
        {
          name: "For Home",
          link: "/home",
          desc: "Proteksi untuk PC, Mac, perangkat seluler, serta Smart Home",
          icon: <FaHome size={20} color={"rgba(255,255,255,1)"} />,
        },
        {
          name: "For Business",
          link: "/business",
          desc: "Pilih layanan keamanan kami untuk menjadi bisnis yang tangguh di dunia maya",
          icon: <FaBriefcase size={20} color={"rgba(255,255,255,1)"} />,
        },
      ],
    },
    {
      name: "Layanan",
      link: "/services",
    },
  ];

  const navbarRef = useRef();

  const toggleDrawer = () => {
    navbarRef.current.classList.toggle("open-drawer");
  };

  return (
    <>
      <nav
        id="navbar"
        ref={navbarRef}
        className={`navbar ${router?.pathname !== "/" && "navbar-alt"}`}
      >
        <ul className="navbar-wrapper">
          <ul style={{ gap: 0 }}>
            <div
              className="navbar-back"
              onClick={() => {
                router.back();
              }}
            >
              <FaChevronLeft size={15} />
            </div>
            <Link href="/">
              <Image
                className="navbar-logo"
                alt="BitdefenderLogo"
                height={35}
                src={Bitdefender}
              />
            </Link>
          </ul>
          <ul>
            <ul className="navbar-drawer">
              <li
                className="navbar-drawer-hidden navbar-toggle"
                onClick={toggleDrawer}
              >
                <FaTimes size={16} />
              </li>
              <br></br>
              <div className="navbar-link-list">
                {/* ========================================== */}
                {/* All of the navbar links is stored in array */}
                {/* Just change the array list above to add more link */}
                {/* or maybe to change a link */}
                {/* ========================= */}
                {NavbarLink &&
                  NavbarLink.map((link, index) => {
                    return (
                      <>
                        <li
                          style={{ animationDelay: `${index * 100 + 150}ms` }}
                        >
                          {link?.list && (
                            <>
                              <span className="navbar-link">
                                {link?.name}
                                <ul className="navbar-dropdown">
                                  {link?.list?.map((obj) => (
                                    <>
                                      <li>
                                        <Link href={obj?.link}>
                                          <div className="dropdown-div">
                                            <div className="flex-row align-center gap-10">
                                              {obj?.icon}
                                              <span className="white-text">
                                                {obj?.name}
                                              </span>
                                            </div>
                                            <span className="text-normal">
                                              {obj?.desc}
                                            </span>
                                          </div>
                                        </Link>
                                      </li>
                                    </>
                                  ))}
                                </ul>
                              </span>
                            </>
                          )}
                          {link?.link && (
                            <Link
                              href={link?.link}
                              className={`navbar-link ${checkUrl(link?.link)}`}
                            >
                              {link?.name}
                            </Link>
                          )}
                        </li>
                      </>
                    );
                  })}
                <li style={{ animationDelay: "450ms" }}>
                  <ContactButton data={data} />
                </li>
              </div>
              <li className="navbar-copyright navbar-drawer-hidden">
                Copyright 2023 Digital Solusi Grup
              </li>
            </ul>
            <li className="navbar-show-toggle" onClick={toggleDrawer}>
              <CgMenuMotion size={24} />
            </li>
          </ul>
        </ul>
      </nav>
    </>
  );
}
