"use client";

import localFont from "next/font/local";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import Navbar from "../navbar";
import axios from "axios";
import Link from "next/link";

const agileFont = localFont({
  src: "../assets/agile.ttf",
});

export default function Chat() {
  const [showLoader, setShowLoader] = useState(true);
  const [messages, setMessages] = useState([
    {
      from: "AI",
      content:
        "This is an experimental chatbot centered around your ESG Dashboard. Your data is safe and encrypted. We do not share your data with anyone. How may I assist you today?",
      time: new Date().toLocaleTimeString(),
    },
  ]);

  const [currInput, setCurrInput] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [aiIsAnswering, setAiIsAnswering] = useState(false);

  useEffect(() => {
    const r = Math.random() * 5;

    const timeout = setTimeout(() => setShowLoader(false), r * 1000);
    return () => clearTimeout(timeout);
  }, []);

  const think = async (msg) => {
    setAiIsAnswering(true);
    // setTimeout(() => {
    //   setMessages((messages) => [
    //     ...messages,
    //     {
    //       from: "AI",
    //       content: `I did not understand your query: "${msg}"`,
    //       time: new Date().toLocaleTimeString(),
    //     },
    //   ]);
    //   setAiIsAnswering(false);
    // }, 2000);

    const resp = await axios({
      method: "POST",
      url: "/api/chat",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        prompt: msg,
      },
    });

    setMessages((msgs) => [
      ...msgs,
      {
        from: "AI",
        content: resp.data.text,
        time: new Date().toLocaleTimeString(),
      },
    ]);

    setAiIsAnswering(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currInput === "") return;

    if (!aiIsAnswering) {
      setMessages((msg) => [
        ...msg,
        {
          from: "user",
          time: new Date().toLocaleTimeString(),
          content: currInput,
        },
      ]);

      think(currInput);

      document.getElementById("prompt-text").value = "";
      setCurrInput("");
    }
  };

  const messageEndRef = useRef(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollTop = messageEndRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="max-h-screen overflow-hidden">
      {/* loader */}
      <div
        className={`w-full h-screen fixed top-0 left-0 bg-gradient-to-tr from-slate-800 to-gray-800 flex flex-col justify-center items-center translate-all duration-200 ${
          showLoader ? "" : "hidden"
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

      {/* desktop */}
      <div className="bg-gradient-to-tr from-slate-800 to-gray-800 min-h-screen md:grid md:grid-cols-6 hidden text-slate-200">
        <div className="col-span-1 pt-6 bg-black/40">
          <Link href={"/"}>
            <h1 className="px-4 text-3xl font-light mb-4">ESG360</h1>
          </Link>

          <div className="h-full">
            <h1 className="pl-4 font-light text-xl mb-4">Past Conversations</h1>

            <div className="h-full flex flex-col pb-24">
              <div className="px-4 py-2 my-2 hover:bg-black cursor-pointer">
                <h1 className="text-lg text-white/80 mb-1">
                  Supplier Risk Assessment
                </h1>
                <span className="text-sm text-gray-400">
                  26-07-2024 10:30 AM
                </span>
              </div>
              <div className="px-4 py-2 my-2 hover:bg-black cursor-pointer">
                <h1 className="text-lg text-white/80 mb-1">
                  ESG Compliance Check
                </h1>
                <span className="text-sm text-gray-400">
                  25-07-2024 03:45 PM
                </span>
              </div>
              <div className="px-4 py-2 my-2 hover:bg-black cursor-pointer">
                <h1 className="text-lg text-white/80 mb-1">
                  Supply Chain Optimization
                </h1>
                <span className="text-sm text-gray-400">
                  24-07-2024 09:15 AM
                </span>
              </div>
              <div className="my-auto"></div>
              <div className="pl-4 pb-4">
                <div className="w-full pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                        U
                      </div>
                      <span className="text-sm text-white/80">
                        User Account
                      </span>
                    </div>
                    <Link
                      href="/"
                      className="p-2 mx-2 border border-gray-700 mx-2-gray-600 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <div className="grid grid-rows-8 h-full px-8">
            <div
              className="row-span-7 overflow-y-scroll max-h-[80vh] mt-4 p-4 rounded-xl"
              id="message-section"
            >
              <div
                className="flex flex-col gap-4 py-8 h-full overflow-y-auto"
                ref={messageEndRef}
              >
                {messages.map((message, index) => (
                  <div key={index}>
                    <div
                      className={`flex ${
                        message.from === "AI"
                          ? "justify-start"
                          : "justify-end mr-12"
                      }`}
                    >
                      <div
                        className={`max-w-1/2 min-w-1/12 rounded-2xl p-4 text-white/80 ${
                          message.from === "AI"
                            ? "bg-gray-700"
                            : "bg-indigo-600"
                        }`}
                      >
                        <div className="flex items-center mb-2">
                          <span className="font-medium mr-2">
                            {message.from === "AI" ? "ESG Assistant" : "You"}
                          </span>
                          {/* <span className="text-xs text-gray-400">
                            {message.time}
                          </span> */}
                        </div>
                        <p className="text-sm md:text-base">
                          {message.content}
                        </p>
                      </div>
                    </div>

                    {index === 0 && messages.length === 1 && (
                      <div className="flex justify-center my-4">
                        <div className="bg-gray-700/50 rounded-xl p-4 max-w-3xl w-full">
                          <h3 className="text-center text-white/80 mb-3">
                            Suggested topics:
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            <button
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-3 rounded-lg text-white/90 text-sm cursor-pointer-gray-500"
                              onClick={(e) => {
                                setMessages((msg) => [
                                  ...msg,
                                  {
                                    from: "user",
                                    time: new Date().toLocaleTimeString(),
                                    content: "ESG Compliance Overview",
                                  },
                                ]);
                                think("ESG Compliance Overview");
                              }}
                            >
                              ESG Compliance Overview
                            </button>
                            <button
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-3 rounded-lg text-white/90 text-sm cursor-pointer-gray-500"
                              onClick={(e) => {
                                setMessages((msg) => [
                                  ...msg,
                                  {
                                    from: "user",
                                    time: new Date().toLocaleTimeString(),
                                    content: "Carbon Footprint Analysis",
                                  },
                                ]);
                                think("Carbon Footprint Analysis");
                              }}
                            >
                              Carbon Footprint Analysis
                            </button>
                            <button
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-3 rounded-lg text-white/90 text-sm cursor-pointer-gray-500"
                              onClick={(e) => {
                                setMessages((msg) => [
                                  ...msg,
                                  {
                                    from: "user",
                                    time: new Date().toLocaleTimeString(),
                                    content: "Supply Chain Risk Assessment",
                                  },
                                ]);

                                think("Supply Chain Risk Assessment");
                              }}
                            >
                              Supply Chain Risk Assessment
                            </button>
                            <button
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-3 rounded-lg text-white/90 text-sm cursor-pointer-gray-500"
                              onClick={(e) => {
                                setMessages((msg) => [
                                  ...msg,
                                  {
                                    from: "user",
                                    time: new Date().toLocaleTimeString(),
                                    content: "Sustainability Reporting",
                                  },
                                ]);

                                think("Sustainability Reporting");
                              }}
                            >
                              Sustainability Reporting
                            </button>
                            <button
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-3 rounded-lg text-white/90 text-sm cursor-pointer-gray-500"
                              onClick={(e) => {
                                setMessages((msg) => [
                                  ...msg,
                                  {
                                    from: "user",
                                    time: new Date().toLocaleTimeString(),
                                    content: "Social Impact Metrics",
                                  },
                                ]);

                                think("Social Impact Metrics");
                              }}
                            >
                              Social Impact Metrics
                            </button>
                            <button
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-3 rounded-lg text-white/90 text-sm cursor-pointer-gray-500"
                              onClick={(e) => {
                                setMessages((msg) => [
                                  ...msg,
                                  {
                                    from: "user",
                                    time: new Date().toLocaleTimeString(),
                                    content: "Governance Best Practices",
                                  },
                                ]);

                                think("Governance Best Practices");
                              }}
                            >
                              Governance Best Practices
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {aiIsAnswering ? (
                  <div>
                    <div className="flex justify-start">
                      <div className="max-w-1/2 min-w-1/12 rounded-2xl p-4 text-white/80 bg-gray-700">
                        <div className="flex items-center mb-2">
                          <span className="font-medium mr-2">
                            ESG Assistant
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                          <div
                            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="row-span-1 flex justify-center items-center align-middle">
                <input
                  type="text"
                  placeholder="Ask anything"
                  id="prompt-text"
                  className="w-full bg-gray-600/40 p-4 text-2xl font-light mb-4 outline-none rounded-xl"
                  onChange={(e) => {
                    setCurrInput(e.currentTarget.value);
                  }}
                  autoComplete="off"
                  autoFocus={true}
                />
                <button
                  type="submit"
                  className={`mb-4 ml-2 p-3 rounded-xl ${
                    !aiIsAnswering
                      ? "bg-indigo-600 hover:bg-indigo-700"
                      : "bg-gray-600"
                  }  transition-colors`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="md:hidden bg-gradient-to-tr from-slate-800 to-gray-800 min-h-screen text-slate-200">
        <div
          className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={`absolute top-0 left-0 h-full w-4/5 max-w-xs bg-gray-900 transform transition-transform duration-300 ease-in-out ${
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <h1 className="text-2xl font-light">ESG360</h1>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4">
              <h2 className="font-light text-lg mb-3">Past Conversations</h2>
              <div className="space-y-2 overflow-y-auto max-h-[70vh]">
                <div className="p-3 hover:bg-black/40 rounded-lg cursor-pointer">
                  <h3 className="text-base text-white/80 mb-1">
                    Supplier Risk Assessment
                  </h3>
                  <span className="text-xs text-gray-400">
                    26-07-2024 10:30 AM
                  </span>
                </div>
                <div className="p-3 hover:bg-black/40 rounded-lg cursor-pointer">
                  <h3 className="text-base text-white/80 mb-1">
                    ESG Compliance Check
                  </h3>
                  <span className="text-xs text-gray-400">
                    25-07-2024 03:45 PM
                  </span>
                </div>
                <div className="p-3 hover:bg-black/40 rounded-lg cursor-pointer">
                  <h3 className="text-base text-white/80 mb-1">
                    Supply Chain Optimization
                  </h3>
                  <span className="text-xs text-gray-400">
                    24-07-2024 09:15 AM
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                    U
                  </div>
                  <span className="text-sm text-white/80">User Account</span>
                </div>
                <Link
                  href="/"
                  className="p-2 border border-gray-700 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-12 h-screen">
          {/* heading */}
          <div className="row-span-1 w-full h-full">
            <div className="grid grid-cols-12 h-full">
              {/* hamburger */}
              <div
                className="col-span-1 p-2"
                onClick={() => setMobileMenuOpen(true)}
              >
                <button className="flex items-center justify-center h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>

              {/* title */}
              <div className="col-span-10 flex justify-center items-center">
                <div className={`text-white text-4xl ${agileFont.className}`}>
                  <h1 className="bg-gradient-to-tr from-blue-500 to-indigo-600 text-transparent bg-clip-text inline-flex">
                    ESG
                  </h1>{" "}
                  <h1 className="bg-gradient-to-tr from-red-400 to-amber-900 text-transparent bg-clip-text inline-flex">
                    360
                  </h1>
                </div>
              </div>

              {/* home */}
              <div className="col-span-1 p-2">
                <Link
                  href="/"
                  className="flex items-center justify-center h-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* chat body */}
          <div className="row-span-10">
            <div className="flex flex-col h-full">
              <div
                className="flex-1 overflow-y-auto px-4 py-2"
                ref={messageEndRef}
              >
                {messages.map((message, index) => (
                  <div key={index} className="mb-4">
                    <div
                      className={`flex ${
                        message.from === "AI" ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`max-w-3/4 rounded-2xl p-3 text-white/80 ${
                          message.from === "AI"
                            ? "bg-gray-700"
                            : "bg-indigo-600"
                        }`}
                      >
                        <div className="flex items-center mb-1">
                          <span className="font-medium text-sm mr-2">
                            {message.from === "AI" ? "ESG Assistant" : "You"}
                          </span>
                        </div>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>

                    {index === 0 && messages.length === 1 && (
                      <div className="flex justify-center my-4">
                        <div className="bg-gray-700/50 rounded-xl p-3 w-full">
                          <h3 className="text-center text-white/80 text-sm mb-2">
                            Suggested topics:
                          </h3>
                          <div className="grid grid-cols-1 gap-2">
                            <button
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-2 rounded-lg text-white/90 text-xs"
                              onClick={() => {
                                setMessages((msg) => [
                                  ...msg,
                                  {
                                    from: "user",
                                    time: new Date().toLocaleTimeString(),
                                    content: "ESG Compliance Overview",
                                  },
                                ]);
                                think("ESG Compliance Overview");
                              }}
                            >
                              ESG Compliance Overview
                            </button>
                            <button
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-2 rounded-lg text-white/90 text-xs"
                              onClick={() => {
                                setMessages((msg) => [
                                  ...msg,
                                  {
                                    from: "user",
                                    time: new Date().toLocaleTimeString(),
                                    content: "Carbon Footprint Analysis",
                                  },
                                ]);
                                think("Carbon Footprint Analysis");
                              }}
                            >
                              Carbon Footprint Analysis
                            </button>
                            <button
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-2 rounded-lg text-white/90 text-xs"
                              onClick={() => {
                                setMessages((msg) => [
                                  ...msg,
                                  {
                                    from: "user",
                                    time: new Date().toLocaleTimeString(),
                                    content: "Supply Chain Risk Assessment",
                                  },
                                ]);
                                think("Supply Chain Risk Assessment");
                              }}
                            >
                              Supply Chain Risk Assessment
                            </button>
                            <button
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-2 rounded-lg text-white/90 text-xs"
                              onClick={() => {
                                setMessages((msg) => [
                                  ...msg,
                                  {
                                    from: "user",
                                    time: new Date().toLocaleTimeString(),
                                    content: "Sustainability Reporting",
                                  },
                                ]);
                                think("Sustainability Reporting");
                              }}
                            >
                              Sustainability Reporting
                            </button>
                            <button
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-2 rounded-lg text-white/90 text-xs"
                              onClick={() => {
                                setMessages((msg) => [
                                  ...msg,
                                  {
                                    from: "user",
                                    time: new Date().toLocaleTimeString(),
                                    content: "Social Impact Metrics",
                                  },
                                ]);
                                think("Social Impact Metrics");
                              }}
                            >
                              Social Impact Metrics
                            </button>
                            <button
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-2 rounded-lg text-white/90 text-xs"
                              onClick={() => {
                                setMessages((msg) => [
                                  ...msg,
                                  {
                                    from: "user",
                                    time: new Date().toLocaleTimeString(),
                                    content: "Governance Best Practices",
                                  },
                                ]);
                                think("Governance Best Practices");
                              }}
                            >
                              Governance Best Practices
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {aiIsAnswering && (
                  <div className="flex justify-start mb-4">
                    <div className="max-w-3/4 rounded-2xl p-3 text-white/80 bg-gray-700">
                      <div className="flex items-center mb-1">
                        <span className="font-medium text-sm mr-2">
                          ESG Assistant
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                        <div
                          className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* input box */}
          <div className="row-span-1">
            <form
              onSubmit={handleSubmit}
              className="px-4 py-2 bg-gray-800/60 flex items-center"
            >
              <input
                type="text"
                placeholder="Ask anything"
                className="w-full bg-gray-600/40 p-3 text-base font-light outline-none rounded-xl"
                onChange={(e) => setCurrInput(e.currentTarget.value)}
                autoComplete="off"
                value={currInput}
              />
              <button
                type="submit"
                className={`ml-2 p-2 rounded-xl ${
                  !aiIsAnswering
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "bg-gray-600"
                } transition-colors`}
                disabled={aiIsAnswering}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
