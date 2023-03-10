import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <>
      <div className="flex-full-center" style={{ height: "100vh" }}>
        <div className="flex-column align-center text-center gap-5">
          <h2>Halaman masih dalam perbaikan</h2>
          <span>Silahkan cek berkala tentang ketersediaan halaman</span>
          <Link href="/" className="link margin-top-25">
            {"<"} Kembali ke Home
          </Link>
        </div>
      </div>
    </>
  );
}
