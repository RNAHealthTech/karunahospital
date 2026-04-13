import React from "react";

export function KarunaLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Premium Medical Icon */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <rect width="40" height="40" rx="12" fill="#007074" />
        <path
          d="M20 10V30M10 20H30"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M26 26C27.5 24.5 29 22.5 29 20C29 17.5 27.5 16 26 16C24.5 16 23.5 17 23 18C22.5 17 21.5 16 20 16C18.5 16 17 17.5 17 20C17 22.5 18.5 24.5 20 26C21.5 27.5 23 29 23 29C23 29 24.5 27.5 26 26Z"
          fill="white"
          fillOpacity="0.5"
        />
      </svg>
      
      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span className="text-[24px] md:text-[28px] font-black text-[#007074] tracking-tighter whitespace-nowrap">
          Karuna <span className="text-[#085a84]">Hospital</span>
        </span>
        <span className="text-[10px] md:text-[11px] font-bold text-neutral-500 uppercase tracking-[0.2em] mt-1">
          Health Through Love & Care
        </span>
      </div>
    </div>
  );
}
