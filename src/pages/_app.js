import "@/styles/globals.css";
import "@/styles/index-res.scss";
import "@/styles/animate-min.css";

import { DataProvider } from "@/contexts/DataContext";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DataProvider>
        <Head>
          <title>Bitdefender Indonesia</title>
          <meta
            property="title"
            content="Bitdefender Indonesia - Anti Virus Terbaik Dunia"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Bitdefender Indonesia - Anti Virus Terbaik Dunia"
          />
          <meta property="og:site_name" content="Bitdefender Indonesia" />
          <meta property="og:url" content="https://bitdefender-indonesia.com" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            property="description"
            content="Bitdefender is a Global Leader in Cyber­security"
          />
          <meta
            property="og:description"
            content="Bitdefender is a Global Leader in Cyber­security"
          />
          <meta
            name="keywords"
            content="Bitdefender, bitdefender, antivirus, bitdefender indonesia, Bitdefender Indonesia, Bitdefender-Indonesia, bitdefender-indonesia, PT. Digital Solusi Grup, Digital Solusi Grup"
          />
          <meta
            property="og:image"
            content="https://download.logo.wine/logo/Bitdefender/Bitdefender-Logo.wine.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@digitalsolusigrup" />
          <meta property="twitter:title" content="Bitdefender Indonesia" />
          <meta
            property="twitter:description"
            content="Global Leader in Cybersecurity"
          />
          <meta
            property="twitter:image"
            content="https://download.logo.wine/logo/Bitdefender/Bitdefender-Logo.wine.png"
          />
          <link rel="icon" type="image/x-icon" href="./favicon.ico"></link>
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </DataProvider>
    </>
  );
}
