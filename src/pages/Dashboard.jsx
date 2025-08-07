import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div>
      <h1>Selamat Datang di Dashboard</h1>
      <p>
        <Link to="/akses-materi">Akses materi belajar Remote Work</Link>
      </p>
      {/* Konten dashboard lainnya */}
      <Footer />
    </div>
  );
}
