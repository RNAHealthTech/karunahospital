"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = "", onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col h-full ${className}`}
    >
      {children}
    </div>
  );
}
