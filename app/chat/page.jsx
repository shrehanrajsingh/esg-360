"use client";

import localFont from "next/font/local";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import Navbar from "../navbar";
import axios from "axios";

const agileFont = localFont({
  src: "../assets/agile.ttf",
});

export default function Chat() {
  const [showLoader, setShowLoader] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "AI",
      content:
        "This is an experimental chatbot centered around your ESG Dashboard. Your data is safe and encrypted. We do not share your data with anyone. How may I assist you today?",
      time: new Date().toLocaleTimeString(),
    },
  ]);

  const [currInput, setCurrInput] = useState("");

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

      <div className="bg-gradient-to-tr from-slate-800 to-gray-800 min-h-screen grid grid-cols-6 text-slate-200">
        <div className="col-span-1 pt-6 bg-black/40">
          <h1 className="px-4 text-3xl font-light mb-4">ESG360</h1>

          <div className="">
            <h1 className="pl-4 font-light text-xl mb-4">Past Conversations</h1>

            <div>
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
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-3 rounded-lg text-white/90 text-sm cursor-pointer border border-gray-500"
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
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-3 rounded-lg text-white/90 text-sm cursor-pointer border border-gray-500"
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
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-3 rounded-lg text-white/90 text-sm cursor-pointer border border-gray-500"
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
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-3 rounded-lg text-white/90 text-sm cursor-pointer border border-gray-500"
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
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-3 rounded-lg text-white/90 text-sm cursor-pointer border border-gray-500"
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
                              className="bg-gray-600 hover:bg-gray-500 transition-colors p-3 rounded-lg text-white/90 text-sm cursor-pointer border border-gray-500"
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
    </div>
  );
}
