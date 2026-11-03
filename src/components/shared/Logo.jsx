import React from "react";
import { Link } from "react-router";
import { Hospital } from "lucide-react";

/**
 * Canonical Logo component used across Navbar, Dashboard, and Footer.
 * Guarantees identical icon container, icon sizing, font size, and brand colors everywhere.
 */
export default function Logo({
  to = "/",
  className = "",
  showTextOnMobile = true,
}) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 tracking-tight text-[#1e3a8a] hover:opacity-90 transition-opacity shrink-0 ${className}`}
      title="Smart Clinic"
    >
      <div className="bg-blue-50 p-2 rounded-xl text-[#1e3a8a] border border-blue-100 flex items-center justify-center shrink-0 shadow-xs">
        <Hospital className="w-5 h-5 text-[#1e3a8a]" />
      </div>
      <span
        className={`font-black text-xl leading-none ${
          showTextOnMobile ? "inline" : "hidden sm:inline"
        }`}
      >
        Smart<span className="text-[#0d9488]">Clinic</span>
      </span>
    </Link>
  );
}
