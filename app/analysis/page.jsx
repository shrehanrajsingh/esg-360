"use client";

import Navbar from "../navbar";
import { useState } from "react";
import AnalysisEnvironmentChart from "../components/analysisEnvironmentChart";
import Footer from "../footer";

// const data = [
//   { month: "Jan", carbon: 5400, water: 980, waste: 750 },
//   { month: "Feb", carbon: 5100, water: 960, waste: 720 },
//   { month: "Mar", carbon: 5300, water: 950, waste: 700 },
//   { month: "Apr", carbon: 5600, water: 930, waste: 680 },
//   { month: "May", carbon: 5200, water: 920, waste: 670 },
//   { month: "Jun", carbon: 4900, water: 900, waste: 650 },
//   { month: "Jul", carbon: 4700, water: 880, waste: 640 },
//   { month: "Aug", carbon: 4500, water: 870, waste: 630 },
//   { month: "Sep", carbon: 4300, water: 860, waste: 620 },
//   { month: "Oct", carbon: 4100, water: 840, waste: 610 },
//   { month: "Nov", carbon: 3900, water: 820, waste: 600 },
//   { month: "Dec", carbon: 3700, water: 800, waste: 590 },
// ];

export default function Analysis() {
  /**
   * 'o': overview
   * 'd': detailed metrics
   * 'r': reports
   */
  const [menu, setMenu] = useState("o");

  return (
    <div className="">
      <Navbar />

      <main className="flex flex-col items-center mt-8">
        <div className="w-2/3 mb-24">
          <h1 className="text-3xl font-semibold text-slate-900 mb-4">
            Supplier Performance Analysis
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Dive deep into supplier ESG performance across key metrics.
          </p>

          <div className="flex-row gap-6 items-center hidden md:flex">
            <div
              className={`text-sm text-gray-600 font-bold py-2 px-4 cursor-pointer`}
              onClick={() => setMenu("o")}
            >
              <h1>Overview</h1>
            </div>
            <div
              className={`text-sm text-gray-600 font-bold py-2 px-4 cursor-pointer`}
              onClick={() => setMenu("d")}
            >
              <h1>Detailed Metrics</h1>
            </div>
            <div
              className={`text-sm text-gray-600 font-bold py-2 px-4 cursor-pointer`}
              onClick={() => setMenu("r")}
            >
              <h1>Reports</h1>
            </div>
          </div>
          <div
            className={`w-24 h-1 bg-black transition-all duration-150 relative rounded-t-2xl hidden md:block ${
              menu == "o" ? "left-0" : menu == "d" ? "left-31 w-35" : "left-72"
            }`}
          ></div>

          <div className="grid grid-cols-3 relative md:hidden">
            <div className="flex flex-col">
              <div
                className={`text-gray-600 font-bold py-2 px-4 cursor-pointer text-center text-xs ${
                  menu === "o" ? "text-black" : ""
                }`}
                onClick={() => {
                  setMenu("o");
                }}
              >
                <h1>Overview</h1>
              </div>
            </div>

            <div className="flex flex-col">
              <div
                className={`text-gray-600 font-bold py-2 px-4 cursor-pointer text-center text-xs ${
                  menu === "d" ? "text-black" : ""
                }`}
                onClick={() => {
                  setMenu("d");
                }}
              >
                <h1>Detailed Metrics</h1>
              </div>
            </div>

            <div className="flex flex-col">
              <div
                className={`text-gray-600 font-bold py-2 px-4 cursor-pointer text-center text-xs ${
                  menu === "r" ? "text-black" : ""
                }`}
                onClick={() => {
                  setMenu("r");
                }}
              >
                <h1>Reports</h1>
              </div>
            </div>

            <div
              className="absolute bottom-0 h-1 bg-black rounded-t-2xl transition-all duration-150"
              style={{
                width: "33.33%",
                transform: `translateX(${
                  menu === "o" ? "0%" : menu === "d" ? "100%" : "200%"
                })`,
              }}
            ></div>
          </div>

          {/* overview page */}
          {menu === "o" && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                Performance Summary
              </h2>

              <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-300 hover:shadow-md transition-all duration-150">
                  <h3 className="text-lg font-medium text-slate-700 mb-2">
                    Environmental
                  </h3>
                  <p className="text-3xl font-bold text-gray-600 mb-1">76%</p>
                  <p className="text-sm text-gray-500">Overall compliance</p>
                  <div className="mt-4 text-sm text-gray-600">
                    <p className="flex items-center">
                      <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>{" "}
                      12% improvement YoY
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-300 hover:shadow-md transition-all duration-150">
                  <h3 className="text-lg font-medium text-slate-700 mb-2">
                    Social
                  </h3>
                  <p className="text-3xl font-bold text-gray-600 mb-1">82%</p>
                  <p className="text-sm text-gray-500">Overall compliance</p>
                  <div className="mt-4 text-sm text-gray-600">
                    <p className="flex items-center">
                      <span className="w-3 h-3 inline-block bg-green-500 rounded-full mr-2"></span>{" "}
                      8% improvement YoY
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-300 hover:shadow-md transition-all duration-150">
                  <h3 className="text-lg font-medium text-slate-700 mb-2">
                    Governance
                  </h3>
                  <p className="text-3xl font-bold text-gray-600 mb-1">68%</p>
                  <p className="text-sm text-gray-500">Overall compliance</p>
                  <div className="mt-4 text-sm text-gray-600">
                    <p className="flex items-center">
                      <span className="w-3 h-3 inline-block bg-red-500/60 rounded-full mr-2"></span>{" "}
                      2% decrease YoY
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-lg font-medium text-slate-700 mb-4">
                  Top Performing Suppliers
                </h3>
                <div className="overflow-x-auto hidden md:block">
                  {/* table for desktop */}
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                          Supplier
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                          ESG Score
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                          Change
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                          Risk Level
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm">Acme Corporation</td>
                        <td className="py-3 px-4 text-sm font-medium text-gray-600">
                          92
                        </td>
                        <td className="py-3 px-4 text-sm font-semibold text-green-600">
                          +5%
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            Low
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm">Globex Industries</td>
                        <td className="py-3 px-4 text-sm font-medium text-gray-600">
                          88
                        </td>
                        <td className="py-3 px-4 text-sm font-semibold text-red-600">
                          -3%
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            Low
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm">Oceanic Airlines</td>
                        <td className="py-3 px-4 text-sm font-medium text-gray-600">
                          85
                        </td>
                        <td className="py-3 px-4 text-sm font-semibold text-green-600">
                          +7%
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            Low
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* cards for mobile */}
                <div className="md:hidden space-y-4 mt-4">
                  {[
                    {
                      name: "Acme Corporation",
                      score: 92,
                      change: "+5%",
                      risk: "Low",
                    },
                    {
                      name: "Globex Industries",
                      score: 88,
                      change: "-3%",
                      risk: "Low",
                    },
                    {
                      name: "Oceanic Airlines",
                      score: 85,
                      change: "+7%",
                      risk: "Low",
                    },
                  ].map((supplier, index) => (
                    <div
                      key={index}
                      className="w-full border border-gray-300 rounded-xl transition-all duration-200 overflow-hidden"
                    >
                      <div className="bg-gradient-to-r px-4 py-3 border-b border-b-gray-300">
                        <h1 className="text-base font-semibold text-gray-800 flex items-center">
                          {supplier.name}
                          <span className="ml-auto text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 font-medium">
                            {supplier.risk}
                          </span>
                        </h1>
                      </div>
                      <div className="px-4 py-3">
                        <div className="flex justify-between items-center mb-3">
                          <h2 className="text-sm text-gray-500 font-medium">
                            ESG Score
                          </h2>
                          <div className="flex items-center">
                            <span className="text-xl font-bold text-gray-800">
                              {supplier.score}
                            </span>
                            <div className="ml-2 w-2 h-10 rounded-full bg-gray-200 relative overflow-hidden">
                              <div
                                className="absolute bottom-0 left-0 right-0 bg-green-500 rounded-full transition-all duration-500"
                                style={{ height: `${supplier.score}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <h2 className="text-sm text-gray-500 font-medium">
                            Change
                          </h2>
                          <div className="flex items-center">
                            <span
                              className={`text-sm font-semibold ${
                                supplier.change.startsWith("-")
                                  ? "text-red-600"
                                  : "text-green-600"
                              }`}
                            >
                              {supplier.change}
                            </span>
                            {supplier.change.startsWith("+") ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1 text-green-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1 text-red-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M17 5a1 1 0 00-1.707-.707l-4.293 4.293-2.293-2.293a1 1 0 00-1.414 0l-5 5a1 1 0 101.414 1.414L8 9.414l2.293 2.293a1 1 0 001.414 0l4.293-4.293A1 1 0 0017 5zm-2 10a1 1 0 100-2H5a1 1 0 100 2h10z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-slate-700 mb-4">
                  Key Insights
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M11.983 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12Zm.877 18.5a.5.5 0 0 1-.5.5h-.754a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h.754a.5.5 0 0 1 .5.5Zm-.877-9.5a1 1 0 1 1 1-1 1.002 1.002 0 0 1-1 1Z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm text-gray-700">
                        Overall ESG performance has improved by 6% compared to
                        last year
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M11.983 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12Zm.877 18.5a.5.5 0 0 1-.5.5h-.754a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h.754a.5.5 0 0 1 .5.5Zm-.877-9.5a1 1 0 1 1 1-1 1.002 1.002 0 0 1-1 1Z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm text-gray-700">
                        Carbon emissions reporting compliance increased from 71%
                        to 83%
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M11.983 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12Zm.877 18.5a.5.5 0 0 1-.5.5h-.754a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h.754a.5.5 0 0 1 .5.5Zm-.877-9.5a1 1 0 1 1 1-1 1.002 1.002 0 0 1-1 1Z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm text-gray-700">
                        Governance compliance remains an area for improvement,
                        particularly in smaller suppliers
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* deatiled metrics section */}
          {menu === "d" && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                Detailed ESG Metrics
              </h2>

              <div className="md:flex hidden space-x-4 mb-6">
                <button className="px-4 py-2 bg-gradient-to-tr from-green-500 via-emerald-600 to-emerald-600 text-white rounded-md text-sm font-medium outline-0 cursor-pointer">
                  Environmental
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm font-medium outline-0 cursor-pointer">
                  Social
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm font-medium outline-0 cursor-pointer">
                  Governance
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-slate-700">
                    Environmental Performance
                  </h3>
                  <select className="border border-gray-300 rounded-md text-sm px-3 py-1.5 outline-0 mt-4 md:mt-0">
                    <option>Last 12 months</option>
                    <option>Last 6 months</option>
                    <option>Last 3 months</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-6 mb-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">
                      Carbon Emissions
                    </h4>
                    <p className="text-2xl font-bold text-slate-800 mb-1">
                      62,410 tCO<sub>2</sub>e
                    </p>
                    <div className="flex items-center text-sm">
                      <span className="text-red-500 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        8.2%
                      </span>
                      <span className="text-gray-500 ml-2">
                        vs. previous period
                      </span>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">
                      Water Usage
                    </h4>
                    <p className="text-2xl font-bold text-slate-800 mb-1">
                      1.2M Gallons
                    </p>
                    <div className="flex items-center text-sm">
                      <span className="text-green-500 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        12.5%
                      </span>
                      <span className="text-gray-500 ml-2">
                        vs. previous period
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 mb-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-4">
                    Environmental Metrics Trends
                  </h4>
                  <div className="min-h-64 flex items-center justify-center">
                    <div className="text-gray-500 w-full">
                      {/* an attempt at manually making a chart */}
                      <AnalysisEnvironmentChart />
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto md:block hidden">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                          Metric
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                          Current Value
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                          Target
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm">Carbon Intensity</td>
                        <td className="py-3 px-4 text-sm">
                          24.5 tCO<sub>2</sub>e/M$
                        </td>
                        <td className="py-3 px-4 text-sm">
                          20 tCO<sub>2</sub>e/M$
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                            In Progress
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm">Renewable Energy</td>
                        <td className="py-3 px-4 text-sm">42%</td>
                        <td className="py-3 px-4 text-sm">50%</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                            In Progress
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm">Waste Recycled</td>
                        <td className="py-3 px-4 text-sm">78%</td>
                        <td className="py-3 px-4 text-sm">75%</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            Achieved
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm">Water Reduction</td>
                        <td className="py-3 px-4 text-sm">12%</td>
                        <td className="py-3 px-4 text-sm">15%</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                            In Progress
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4 mt-4 md:hidden mb-8">
                {[
                  {
                    metric: "Carbon Intensity",
                    current: "24.5 tCO₂e/M$",
                    target: "20 tCO₂e/M$",
                    status: "In Progress",
                  },
                  {
                    metric: "Renewable Energy",
                    current: "42%",
                    target: "50%",
                    status: "In Progress",
                  },
                  {
                    metric: "Waste Recycled",
                    current: "78%",
                    target: "75%",
                    status: "Achieved",
                  },
                  {
                    metric: "Water Reduction",
                    current: "12%",
                    target: "15%",
                    status: "In Progress",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <h4 className="text-sm font-medium text-gray-700 mb-3">
                      {item.metric}
                    </h4>
                    <div className="grid grid-cols-2 gap-y-2 text-sm">
                      <div className="text-gray-500">Current Value:</div>
                      <div className="font-medium text-gray-800">
                        {item.current}
                      </div>

                      <div className="text-gray-500">Target:</div>
                      <div className="font-medium text-gray-800">
                        {item.target}
                      </div>

                      <div className="text-gray-500">Status:</div>
                      <div>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            item.status === "Achieved"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-1 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-slate-700 mb-4">
                    Top Environmental Challenges
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-5 h-5 p-4 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center mr-3 mt-0.5">
                        1
                      </span>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Carbon Emissions Reduction
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          <span className="text-blue-500 cursor-pointer hover:underline">
                            8 suppliers
                          </span>{" "}
                          need improvement
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 p-4 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center mr-3 mt-0.5">
                        2
                      </span>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Water Management
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          <span className="text-blue-500 cursor-pointer hover:underline">
                            5 suppliers
                          </span>{" "}
                          need improvement
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 p-4 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center mr-3 mt-0.5">
                        3
                      </span>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Hazardous Waste Handling
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          <span className="text-blue-500 cursor-pointer hover:underline">
                            4 suppliers
                          </span>{" "}
                          need improvement
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-slate-700 mb-4">
                    Improvement Opportunities
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center mr-3 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Implement Renewable Energy Projects
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Potential 15% carbon reduction
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center mr-3 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Water Recycling Programs
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Potential 20% water use reduction
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center mr-3 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Sustainable Packaging Initiative
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Potential 35% packaging waste reduction
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex md:justify-end justify-center">
                <button className="px-4 py-2 bg-gradient-to-tr from-green-600 via-emerald-600 to-emerald-700 text-white rounded-md text-sm font-medium cursor-pointer">
                  Export Detailed Report
                </button>
              </div>
            </div>
          )}

          {/* reports section */}
          {menu === "r" && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                ESG Reports
              </h2>

              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-slate-700">
                    Raw Data Reports
                  </h3>
                  <div className="space-x-3 hidden md:flex">
                    <select className="border border-gray-300 rounded-md text-sm px-3 py-1.5 outline-0">
                      <option>All Categories</option>
                      <option>Environmental</option>
                      <option>Social</option>
                      <option>Governance</option>
                    </select>
                    <button
                      className="px-4 py-2 bg-gradient-to-tr from-green-600 via-emerald-600 to-emerald-700 text-white rounded-md text-sm font-medium flex items-center cursor-pointer"
                      onClick={() => alert("Exporting Excel file...")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 4a1 1 0 011-1h3a1 1 0 110 2H5v10h10v-2a1 1 0 112 0v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                        <path d="M14.707 6.293a1 1 0 00-1.414 0L11 8.586V1a1 1 0 10-2 0v7.586L6.707 6.293A1 1 0 105.293 7.707l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" />
                      </svg>
                      Export to Excel
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto border border-gray-200 rounded-lg hidden md:block">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
                        >
                          Supplier ID
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
                        >
                          Supplier Name
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
                        >
                          Metric
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
                        >
                          Value
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
                        >
                          Unit
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
                        >
                          Date Reported
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        {
                          id: "S001",
                          name: "Acme Corporation",
                          category: "Environmental",
                          metric: "Carbon Emissions",
                          value: "12,450",
                          unit: "tCO2e",
                          date: "2023-05-15",
                          status: "Verified",
                        },
                        {
                          id: "S001",
                          name: "Acme Corporation",
                          category: "Environmental",
                          metric: "Water Usage",
                          value: "345,000",
                          unit: "Gallons",
                          date: "2023-05-15",
                          status: "Verified",
                        },
                        {
                          id: "S001",
                          name: "Acme Corporation",
                          category: "Social",
                          metric: "Diversity Ratio",
                          value: "42",
                          unit: "%",
                          date: "2023-05-15",
                          status: "Verified",
                        },
                        {
                          id: "S002",
                          name: "Globex Industries",
                          category: "Environmental",
                          metric: "Carbon Emissions",
                          value: "8,320",
                          unit: "tCO2e",
                          date: "2023-06-02",
                          status: "Pending",
                        },
                        {
                          id: "S002",
                          name: "Globex Industries",
                          category: "Governance",
                          metric: "Board Diversity",
                          value: "38",
                          unit: "%",
                          date: "2023-06-02",
                          status: "Verified",
                        },
                        {
                          id: "S003",
                          name: "Oceanic Airlines",
                          category: "Environmental",
                          metric: "Carbon Emissions",
                          value: "32,580",
                          unit: "tCO2e",
                          date: "2023-04-28",
                          status: "Verified",
                        },
                        {
                          id: "S003",
                          name: "Oceanic Airlines",
                          category: "Social",
                          metric: "Employee Training",
                          value: "24",
                          unit: "Hours/Year",
                          date: "2023-04-28",
                          status: "Verified",
                        },
                        {
                          id: "S004",
                          name: "Initech LLC",
                          category: "Environmental",
                          metric: "Renewable Energy",
                          value: "28",
                          unit: "%",
                          date: "2023-05-20",
                          status: "Pending",
                        },
                        {
                          id: "S004",
                          name: "Initech LLC",
                          category: "Governance",
                          metric: "Ethics Violations",
                          value: "2",
                          unit: "Incidents",
                          date: "2023-05-20",
                          status: "Under Review",
                        },
                        {
                          id: "S005",
                          name: "Wayne Enterprises",
                          category: "Social",
                          metric: "Community Investment",
                          value: "1,250,000",
                          unit: "USD",
                          date: "2023-06-10",
                          status: "Verified",
                        },
                      ].map((row, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                            {row.id}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                            {row.name}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                            {row.category}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                            {row.metric}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                            {row.value}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                            {row.unit}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                            {row.date}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm">
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                row.status === "Verified"
                                  ? "bg-green-100 text-green-800"
                                  : row.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="w-full h-full flex items-center justify-center text-gray-600 md:hidden">
                  <h1 className="text-center">
                    Table preview is not supported on mobile view
                  </h1>
                </div>

                <div className="justify-between items-center mt-4 hidden md:flex">
                  <div className="text-sm text-gray-500">
                    Showing 10 of 124 records
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm cursor-pointer">
                      Previous
                    </button>
                    <button className="px-3 py-1 bg-gradient-to-tr from-blue-500 to-indigo-500 text-white rounded-md text-sm cursor-pointer">
                      1
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm cursor-pointer">
                      2
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm cursor-pointer">
                      3
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm cursor-pointer">
                      Next
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-slate-700 mb-4">
                  Saved Reports
                </h3>
                <div className="space-y-3">
                  <div className="border border-gray-200 rounded-lg p-4 block w-full md:flex md:justify-between md:items-center">
                    <div>
                      <h4 className="text-md font-medium">
                        Quarterly Environmental Performance
                      </h4>
                      <p className="text-sm text-gray-500">
                        Last generated: June 15, 2023
                      </p>
                    </div>
                    <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm flex items-center cursor-pointer mt-2 md:mt-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 4a1 1 0 011-1h3a1 1 0 110 2H5v10h10v-2a1 1 0 112 0v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                        <path d="M14.707 6.293a1 1 0 00-1.414 0L11 8.586V1a1 1 0 10-2 0v7.586L6.707 6.293A1 1 0 105.293 7.707l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" />
                      </svg>
                      Download
                    </button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 block w-full md:flex md:justify-between md:items-center">
                    <div>
                      <h4 className="text-md font-medium">
                        Annual Sustainability Report
                      </h4>
                      <p className="text-sm text-gray-500">
                        Last generated: May 20, 2023
                      </p>
                    </div>
                    <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm flex items-center cursor-pointer mt-2 md:mt-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 4a1 1 0 011-1h3a1 1 0 110 2H5v10h10v-2a1 1 0 112 0v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                        <path d="M14.707 6.293a1 1 0 00-1.414 0L11 8.586V1a1 1 0 10-2 0v7.586L6.707 6.293A1 1 0 105.293 7.707l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" />
                      </svg>
                      Download
                    </button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 block w-full md:flex md:justify-between md:items-center">
                    <div>
                      <h4 className="text-md font-medium">
                        Social Impact Summary
                      </h4>
                      <p className="text-sm text-gray-500">
                        Last generated: April 8, 2023
                      </p>
                    </div>
                    <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm flex items-center cursor-pointer mt-2 md:mt-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 4a1 1 0 011-1h3a1 1 0 110 2H5v10h10v-2a1 1 0 112 0v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                        <path d="M14.707 6.293a1 1 0 00-1.414 0L11 8.586V1a1 1 0 10-2 0v7.586L6.707 6.293A1 1 0 105.293 7.707l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" />
                      </svg>
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
