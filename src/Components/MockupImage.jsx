import React from "react";

export default function MockupImage(){
  return (
    <svg viewBox="0 0 900 380" style={{width:"100%",maxWidth:900,height:"auto",borderRadius:12,boxShadow:"0 6px 30px rgba(0,0,0,0.08)"}}>
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0" stopColor="#f8fafc" />
          <stop offset="1" stopColor="#eef2ff" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="900" height="380" rx="12" fill="url(#g1)"/>
      <rect x="18" y="18" width="180" height="36" rx="8" fill="#fff"/>
      <text x="30" y="42" fontSize="14" fill="#0f172a" fontWeight="700">FakeStoreDemo</text>

      <rect x="700" y="18" width="140" height="36" rx="8" fill="#0f62fe"/>
      <text x="735" y="42" fontSize="13" fill="#fff">Cart (2)</text>

      {/* three product cards */}
      <g transform="translate(18,72)">
        <rect width="260" height="250" rx="10" fill="#fff" />
        <rect x="16" y="16" width="228" height="140" rx="8" fill="#fafafa" />
        <rect x="20" y="168" width="180" height="22" rx="6" fill="#e8eefc" />
        <rect x="20" y="198" width="80" height="26" rx="6" fill="#05a081" />
      </g>

      <g transform="translate(320,72)">
        <rect width="260" height="250" rx="10" fill="#fff" />
        <rect x="16" y="16" width="228" height="140" rx="8" fill="#fafafa" />
        <rect x="20" y="168" width="180" height="22" rx="6" fill="#e8eefc" />
        <rect x="20" y="198" width="80" height="26" rx="6" fill="#05a081" />
      </g>

      <g transform="translate(620,72)">
        <rect width="260" height="250" rx="10" fill="#fff" />
        <rect x="16" y="16" width="228" height="140" rx="8" fill="#fafafa" />
        <rect x="20" y="168" width="180" height="22" rx="6" fill="#e8eefc" />
        <rect x="20" y="198" width="80" height="26" rx="6" fill="#05a081" />
      </g>

      {/* bottom caption */}
      <text x="32" y="345" fontSize="12" fill="#334155">Click Add to Cart to add items — duplicates will show an alert.</text>
    </svg>
  );
}
