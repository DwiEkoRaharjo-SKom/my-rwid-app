import React from 'react';
import '../styles/materi.css';

const AksesMateri = () => {
  return (
    <div className="materi-container">
      <h1>📚 Akses Materi Belajar Remote Work</h1>
      <ul>
        <li>🧠 Zoom Weekly CEO
          <ul>
            <li><a href="#">Pertemuan 1 - Pengenalan</a></li>
            <li><a href="#">Pertemuan 2 - Mindset</a></li>
          </ul>
        </li>
        <li>💬 Konsultasi Psikologi</li>
        <li>📋 Pengembangan Diri</li>
        <li>🔗 Kelas Online dan Sertifikat</li>
      </ul>
    </div>
  );
};

export default AksesMateri;
