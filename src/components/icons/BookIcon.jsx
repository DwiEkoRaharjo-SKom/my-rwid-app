import React from "react";
export default function BookIcon({ size=44 }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 44 44">
      <rect width="44" height="44" rx="12" fill="#e3f2fd"/>
      <rect x="12" y="12" width="20" height="20" rx="3" fill="#fff" stroke="#1976d2" strokeWidth="2"/>
      <path d="M14.5 16.5h15M14.5 21h15M14.5 25.5h8" stroke="#1976d2" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="16.5" y="14.5" width="3.5" height="3.5" rx="1.2" fill="#fff" stroke="#1976d2"/>
    </svg>
  );
}
