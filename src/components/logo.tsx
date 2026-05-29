import React from "react";
import Image from "next/image";

export function KarunaLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo_karuna_official.png"
        alt="Karuna Hospital Logo"
        width={200}
        height={87}
        className="w-28 xs:w-32 sm:w-36 md:w-40 lg:w-44 h-auto object-contain"
        priority
      />
    </div>
  );
}

