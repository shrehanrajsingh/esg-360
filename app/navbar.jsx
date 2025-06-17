"use client";

import Image from "next/image";
import Link from "next/link";

import Avatar2JPG from "./assets/avatar-2.jpg";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 p-4 px-4 md:px-12 flex flex-row items-center gap-4 border-b border-b-slate-300 bg-white z-50">
      <div className="flex flex-row items-center gap-2 mr-4">
        <div>
          <svg
            width="30"
            height="35"
            viewBox="0 0 60 70"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="5" y="15" width="20" height="20" fill="currentColor" />
            <rect x="20" y="30" width="20" height="20" fill="currentColor" />
          </svg>
        </div>
        <Link href="/">
          <h1 className="text-xl font-bold text-slate-800">ESG360</h1>
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex">
        <Link href={"/dashboard"} className="text-sm mx-4">
          Dashboard
        </Link>
        <Link href={"/suppliers"} className="text-sm mx-4">
          Suppliers
        </Link>
        <Link href={"/analysis"} className="text-sm mx-4">
          Analysis
        </Link>
        <Link href={"/compliance"} className="text-sm mx-4">
          Compliance
        </Link>
        <Link href={"/report"} className="text-sm mx-4">
          Report
        </Link>
        <Link href={"/settings"} className="text-sm mx-4">
          Settings
        </Link>
      </div>

      <div className="mx-auto"></div>

      {/* desktop Search */}
      <div className="hidden md:flex md:flex-row md:items-center mr-2">
        <svg
          className="w-5 h-5 text-gray-500 relative left-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          className="outline-0 bg-gray-100 border border-gray-300 rounded-xl py-2 px-4 pl-10 font-sans"
          placeholder="Search"
        />
      </div>

      <div className="hidden md:flex">
        <div className="w-10 h-10 rounded-full">
          <Image src={Avatar2JPG} alt="avatar" className="rounded-full" />
        </div>
      </div>

      {/* mobile navbar button */}
      <button
        className="md:hidden ml-2"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-b-gray-300">
          <div className="flex flex-row items-center gap-2 mr-4">
            <div>
              <svg
                width="30"
                height="35"
                viewBox="0 0 60 70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="5" y="15" width="20" height="20" fill="currentColor" />
                <rect
                  x="20"
                  y="30"
                  width="20"
                  height="20"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-slate-800">ESG360</h1>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col p-4">
          <Link
            href={"/dashboard"}
            className="py-3 border-b border-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              className="inline-block mr-2 align-middle"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            Dashboard
          </Link>
          <Link
            href={"/suppliers"}
            className="py-3 border-b border-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              className="inline-block mr-2 align-middle"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="7" r="4" />
              <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
            </svg>
            Suppliers
          </Link>
          <Link
            href={"/analysis"}
            className="py-3 border-b border-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              className="inline-block mr-2 align-middle"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 17v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
              <rect x="14" y="7" width="6" height="10" rx="2" />
            </svg>
            Analysis
          </Link>
          <Link
            href={"/compliance"}
            className="py-3 border-b border-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              className="inline-block mr-2 align-middle"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3l7 4v5c0 5-3 9-7 9s-7-4-7-9V7l7-4z" />
              <polyline points="9 11 12 14 15 11" />
            </svg>
            Compliance
          </Link>
          <Link
            href={"/report"}
            className="py-3 border-b border-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              className="inline-block mr-2 align-middle"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="16 3 16 8 21 8" />
              <line x1="9" y1="9" x2="15" y2="9" />
              <line x1="9" y1="13" x2="15" y2="13" />
              <line x1="9" y1="17" x2="13" y2="17" />
            </svg>
            Report
          </Link>
          <Link
            href={"/settings"}
            className="py-3 border-b border-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              className="inline-block mr-2 align-middle"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 11 3.09V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            Settings
          </Link>
        </div>

        <div className="absolute bottom-0 right-0 m-2">
          <div className="w-10 h-10 rounded-full">
            <Image src={Avatar2JPG} alt="avatar" className="rounded-full" />
          </div>
        </div>
      </div>
    </nav>
  );
}
