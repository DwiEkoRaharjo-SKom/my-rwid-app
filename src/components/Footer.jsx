import React from "react";
import RwidLogo from "./icons/RwidLogo";
import IconMail from "./icons/IconMail";
import IconLocation from "./icons/IconLocation";
import IconWhatsapp from "./icons/IconWhatsapp";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-pro" style={{
      background: "var(--color-surface)",
      marginTop: "4em",
      borderTop: "2.5px solid #e3f2fd",
      padding: "2.4em 1em 1.6em 1em",
      color: "var(--color-primary-dark)"
    }}>
      <div className="footer-row" style={{
        display: "flex", flexWrap: "wrap",
        alignItems: "flex-start", gap: "2.5em"
      }}>
        <div style={{ minWidth: 90, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <RwidLogo size={54} />
          <div style={{ fontWeight: 800, fontSize: "1.14em", marginTop: 8, letterSpacing: 1 }}>
            Remote Worker Indonesia
          </div>
          <div style={{
            color: "#555", fontSize: "0.99em",
            fontWeight: 400, maxWidth: 200, marginTop: 7
          }}>
            The first remote work mentoring platform in Indonesia. Since 2015, we've helped thousands of professionals break into the global remote job market with a structured and personal approach.
          </div>
        </div>
        <div className="footer-menu" style={{ minWidth: 135 }}>
          <div style={{ fontWeight: 700, fontSize: "1.1em", marginBottom: "0.8em" }}>Platform</div>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.85, fontWeight: 500 }}>
            <li><Link to="/homepage">Homepage</Link></li>
            <li><Link to="/bootcamp">Bootcamp</Link></li>
            <li><Link to="/job">Job</Link></li>
            <li><Link to="/software-agency">Software Agency</Link></li>
            <li><Link to="/talk">Talk</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-contact" style={{ minWidth: 170 }}>
          <div style={{ fontWeight: 700, fontSize: "1.1em", marginBottom: "0.8em" }}>Contact</div>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 2.0, fontWeight: 500 }}>
            <li>
              <IconMail size={21} />{" "}
              <Link to="/mailto" style={{ marginLeft: 5 }}>coach@remoteworker.id</Link>
            </li>
            <li>
              <IconLocation size={21} />{" "}
              <Link to="/location" style={{ marginLeft: 5 }}>Jogjakarta, Indonesia</Link>
            </li>
            <li>
              <IconWhatsapp size={21} />{" "}
              <Link to="/whatsapp" style={{ marginLeft: 5 }}>WhatsApp Support</Link>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "2.4em", color: "#6d6d6d", fontWeight: 400 }}>
        © 2015 - 2025 Remote Worker Indonesia. All rights reserved.
      </div>
    </footer>
  );
}
