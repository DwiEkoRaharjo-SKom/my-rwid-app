import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center mt-8">
      <h1 style={{ fontSize: "2.5em", marginBottom: "0.3em" }}>404</h1>
      <p>Halaman tidak ditemukan.</p>
      <Link to="/" className="bg-primary" style={{ display: "inline-block", marginTop: "1.5em" }}>
        Kembali ke Beranda
      </Link>
    </div>
  );
}
