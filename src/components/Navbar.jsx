import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { dark, setDark } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="flex flex-center gap-4 shadow mb-6"
         style={{ padding: "1.2em 2em", background: "var(--color-surface)", borderRadius: "0 0 18px 18px" }}>
      <Link to="/" style={{ fontWeight: 700, fontSize: "1.16em", color: "var(--color-primary)" }}>
        RWID App
      </Link>
      <div style={{ flex: 1 }} />
      <button className="toggle-dark" onClick={() => setDark(!dark)} aria-label="Toggle dark mode">
        {dark
          ? (<svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17 15.5A6.5 6.5 0 0 1 8.5 7c0-.42.04-.83.11-1.22A8 8 0 1 0 18 19.48 6.52 6.52 0 0 1 17 15.5Z"/></svg>)
          : (<svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5.5" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 2v2m0 16v2m8-8h2M2 12h2m15.07-7.07-1.41 1.41M6.34 17.66l-1.41 1.41m13.48 0-1.41-1.41M6.34 6.34 4.93 4.93"/></svg>)
        }
      </button>
      {user
        ? (
          <>
            <Link to="/dashboard" className="bg-primary" style={{ textDecoration: "none" }}>
              Dashboard
            </Link>
            <button onClick={handleLogout} style={{ background: "#eee", color: "#222", fontWeight: 600 }}>Keluar</button>
          </>
        )
        : (
          <Link to="/login" className="bg-primary" style={{ textDecoration: "none" }}>
            Masuk
          </Link>
        )}
    </nav>
  );
}
