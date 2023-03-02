import React from "react";
import HomeHeader from "@/components/home/HomeHeader";
import Helmet from "next/head";
import HomeAbout from "@/components/home/HomeAbout";
import HomeFunFact from "@/components/home/HomeFunFact";
import IndustryAccolades from "@/others/IndustryAccolades";
import HomeOffer from "@/components/home/HomeOffer";
import FAQs from "@/others/FAQs";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Bitdefender Indonesia</title>
      </Helmet>
      <HomeHeader />
      <HomeAbout />
      <HomeFunFact />
      <IndustryAccolades />
      <HomeOffer />
      <div style={{ backgroundColor: "rgba(3,20,36)" }}>
        <FAQs
          List={[
            {
              title: "Ketentuan Perpanjangan Otomatis",
              desc: `Langganan anda akan otomatis dimulai saat tanggal pembayaran;
        Dengan berlangganan, anda membeli langganan berulang yang akan diperpanjang secara otomatis;
        Paket Bitdefender Auto Renewal dirancang untuk menyingkat waktu anda, dan meminimalisir risiko kerentanan dengan memperpanjang langganan anda secara otomastis sebelum masa tenggang.
        `,
            },
            {
              title: "Paket Pembaruan Otomatis Bitdefender untuk Anda",
              desc: `Perlindungan berkelanjutan sehingga Anda tidak perlu khawatir langganan Anda habis sebelum Anda memperbarui secara manual;
            Upgrade gratis setiap kali Bitdefender versi baru keluar;
            Ketenangan pikiran bahwa perangkat Anda selalu terlindungi;
            Hemat waktu saat kami menangani proses pembaruan otomatis;
            Keamanan 24/7 lamanya untuk semua langganan tanpa gangguan;
            Harga yang ditawarkan berlaku untuk tahun pertama berlangganan. Setelah itu, langganan Anda akan ditagih dengan harga perpanjangan yang berlaku;
            Jika diberikan diskon, diskon menjelaskan perbedaan antara harga langganan periode pertama dan periode perpanjangan (mis., harga tahun pertama vs. setiap tahun sesudahnya). Harga dapat berubah, tetapi Bitdefender akan mengirimkan pemberitahuan sebelumnya melalui email, sebelum perpanjangan otomatis dilakukan. Anda akan menerima email notifikasi sebelum Anda ditagih, bersamaan dengan informasi mengenai harga dan perpanjangan durasi langganan Anda.
            `,
            },
            {
              title: "Persetujuan Afirmatif",
              desc: `Langganan Anda secara otomatis dimulai pada tanggal pembelian;
              Dengan berlangganan, Anda membeli langganan berulang yang akan diperpanjang secara otomatis.`,
            },
            {
              title:
                "Cara pembatalan dan email bantuan untuk pembatalan langganan",
              desc: `Anda dapat membatalkan langganan otomatis dari Bitdefender Central atau dengan menghubungi Dukungan Pelanggan di: cancel@bitdefender.com
              Anda dapat mengembalikan dana dengan menghubungi refunds@bitdefender.com dalam waktu 30 hari sejak pembelian awal atau tanggal perpanjangan otomatis.`,
            },
          ]}
        />
      </div>
    </>
  );
}
