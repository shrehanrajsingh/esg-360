"use client";

import localFont from "next/font/local";
import "./style.css";
import { useEffect, useState } from "react";

const agileFont = localFont({
  src: "../assets/agile.ttf",
});

export default function Chat() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const r = Math.random() * 5;

    const timeout = setTimeout(() => setShowLoader(false), r * 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-tr from-slate-800 to-gray-800 min-h-screen">
        <h1>hi</h1>
      </div>

      <div
        className={`w-full h-screen fixed top-0 left-0 bg-gradient-to-tr from-slate-800 to-gray-800 flex flex-col justify-center items-center translate-all duration-200 ${
          showLoader ? "" : "opacity-0"
        }`}
      >
        <div className={`text-white text-6xl ${agileFont.className}`}>
          <h1 className="bg-gradient-to-tr from-blue-500 to-indigo-600 text-transparent bg-clip-text inline-flex">
            ESG
          </h1>{" "}
          <h1 className="bg-gradient-to-tr from-red-400 to-amber-900 text-transparent bg-clip-text inline-flex">
            360
          </h1>
        </div>
        <div className="">
          <div className="w-6 h-6 bg-white/80 relative animate-move2"></div>
          <div className="w-6 h-6 bg-white/80 relative left-6 animate-move"></div>
        </div>

        <div className="mt-6 text-gray-300">
          <h1>We&apos;re setting things up for you</h1>
        </div>
      </div>
    </div>
  );
}
