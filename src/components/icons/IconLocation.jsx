import React from "react";
export default function IconLocation({ size=21 }) {
  return (
    <svg height={size} viewBox="0 0 24 24" width={size} fill="none">
      <rect width="24" height="24" rx="6" fill="#e3f2fd"/>
      <circle cx="12" cy="10" r="4" stroke="#1565c0" strokeWidth="1.3" fill="none"/>
      <path d="M12 21c4.8-7 4.8-8.5 0-15.5C7.2 12.5 7.2 14 12 21z" stroke="#1565c0" strokeWidth="1.3" fill="none"/>
    </svg>
  );
}
