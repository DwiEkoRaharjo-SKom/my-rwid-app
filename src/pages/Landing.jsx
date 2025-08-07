import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="container" style={{ marginTop: "2em", textAlign: "center" }}>
      <div className="card">
        <h1 style={{ fontWeight: 800, fontSize: "1.8em", marginBottom: "0.7em" }}>
          Selamat datang di <span style={{ color: "var(--color-primary)" }}>Remote Worker Indonesia (RWID) App!</span>
        </h1>
        <h2 style={{ fontWeight: 700, fontSize: "1.2em", margin: "0 0 1.2em 0", color: "var(--color-primary-dark)" }}>
          UMR Jogja, Gaji New York
        </h2>
        <p style={{ margin: "0.8em 0 1.3em", fontSize: "1.08em" }}>
          Apakah kamu pegawai yang ingin lepas dari rutinitas 9-5? <br />
          Atau mahasiswa yang pengen langsung kerja remote? <br />
          <b>
            Bergabunglah dengan 40% pegawai swasta dan berbagai background lainnya<br />
            yang sudah membuktikan bisa kerja dari rumah dengan gaji dollar!
          </b>
        </p>
        <div style={{ marginTop: "1.7em" }}>
          <Link to="/login" className="bg-primary" style={{ padding: "0.85em 2em", fontWeight: 600 }}>
            Mulai Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
