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
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </DataProvider>
    </>
  );
}
