import React from "react";
export default function RwidLogo({ size = 32, color = "#1565c0" }) {
  return (
    <svg height={size} viewBox="0 0 40 40" width={size} fill="none">
      <circle cx="20" cy="20" r="18" fill="#e3f2fd" stroke={color} strokeWidth="2" />
      <path d="M13 27Q20 13 27 27" stroke={color} strokeWidth="2" fill="none"/>
      <ellipse cx="20" cy="20" rx="7" ry="18" stroke={color} strokeWidth="2" fill="none"/>
      <text x="20" y="25" fontSize="9" fontFamily="Verdana" textAnchor="middle" fill="#1565c0" fontWeight="bold">RWID</text>
    </svg>
  );
}
