"use client";

import { Chart } from "chart.js";
import Footer from "../footer";
import Navbar from "../navbar";
import { useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { useState } from "react";

import supplyChainLocations from "../data/sc-locations.json";

export default function Dashboard() {
  const [position, setPosition] = useState({
    coordinates: [0, 0],
    zoom: 1,
  });

  const handleZoomIn = () => {
    if (position.zoom >= 10) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.2 }));
  };

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  useEffect(() => {
    const ctx = document.getElementById("carbonEmissionsChart");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "CO₂ Emissions (tonnes)",
            data: [840, 820, 810, 790, 750, 730, 720, 740, 720, 710, 690, 670],
            backgroundColor: "rgba(75, 85, 99, 0.1)",
            borderColor: "rgba(75, 85, 99, 1)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(75, 85, 99, 1)",
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: 10,
            caretSize: 5,
            displayColors: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: false,
            grid: {
              color: "rgba(0, 0, 0, 0.05)",
            },
            ticks: {
              callback: function (value) {
                return value + "t";
              },
            },
          },
        },
      },
    });
  }, []);
  return (
    <div>
      <Navbar />

      <main className="bg-white min-h-screen flex flex-col justify-center w-full items-center">
        <div className="md:max-w-3/4 max-w-5/6">
          <div className="px-6 pt-6">
            <h1 className="text-2xl font-semibold text-black">
              ESG Compliance Dashboard
            </h1>
            <p className="text-gray-500">
              Monitor and analyze your supply chain's sustainability performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            <div className="bg-white rounded-lg border border-gray-300 p-4">
              <p className="text-sm text-gray-500">Overall ESG Score</p>
              <div className="flex items-center">
                <span className="text-3xl font-bold text-black">78</span>
                <span className="ml-2 text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  +3.2%
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-300 p-4">
              <p className="text-sm text-gray-500">Compliant Suppliers</p>
              <div className="flex items-center">
                <span className="text-3xl font-bold text-black">87%</span>
                <span className="ml-2 text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  +2.5%
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-300 p-4">
              <p className="text-sm text-gray-500">Open Violations</p>
              <div className="flex items-center">
                <span className="text-3xl font-bold text-black">12</span>
                <span className="ml-2 text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  -4
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-300 p-4">
              <p className="text-sm text-gray-500">Pending Audits</p>
              <div className="flex items-center">
                <span className="text-3xl font-bold text-gray-600">7</span>
                <span className="ml-2 text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  Due this week
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            <div className="bg-white rounded-lg border border-gray-300 p-4 lg:col-span-1">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                ESG Score Breakdown
              </h2>
              <div className="flex justify-center mb-4">
                <div className="h-48 w-48 rounded-full border-8 border-green-500 border-r-blue-500 border-b-orange-500 border-l-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-bold">78</p>
                    <p className="text-sm text-gray-500">Overall Score</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Environmental</p>
                  <p className="text-xl font-semibold text-green-600">82%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Social</p>
                  <p className="text-xl font-semibold text-orange-500">74%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Governance</p>
                  <p className="text-xl font-semibold text-blue-600">79%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-300 p-4 lg:col-span-2">
              <h2 className="text-lg font-semibold text-black mb-4">
                Live Supply Chain Map
              </h2>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center outline-none">
                <div className="relative w-full h-full">
                  <ComposableMap
                    projection="geoMercator"
                    className="w-full h-full"
                  >
                    <ZoomableGroup
                      zoom={position.zoom}
                      center={position.coordinates}
                      onMoveEnd={handleMoveEnd}
                    >
                      <Geographies geography="/api/world">
                        {({ geographies }) =>
                          geographies.map((geo) => (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              fill="#EAEAEC"
                              stroke="#D6D6DA"
                              strokeWidth={0.5}
                              className="outline-none"
                            />
                          ))
                        }
                      </Geographies>
                      {supplyChainLocations.map(
                        ({ name, coordinates, risk }) => (
                          <Marker key={name} coordinates={coordinates}>
                            <circle
                              r={5 / position.zoom}
                              fill={
                                risk === "low"
                                  ? "#D1D5DB"
                                  : risk === "medium"
                                  ? "#6B7280"
                                  : "#1F2937"
                              }
                              stroke="#fff"
                              strokeWidth={1 / position.zoom}
                            />
                            <text
                              textAnchor="middle"
                              y={-10 / position.zoom}
                              style={{
                                fontSize: 30 / position.zoom,
                                fontFamily: "system-ui",
                                fill: "#334155",
                                pointerEvents: "none",
                              }}
                            >
                              {name}
                            </text>
                          </Marker>
                        )
                      )}
                    </ZoomableGroup>
                  </ComposableMap>
                  <div className="absolute bottom-2 right-2 flex space-x-2">
                    <button
                      onClick={handleZoomIn}
                      className="bg-white rounded-full p-2 shadow hover:bg-gray-100"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4V20M4 12H20"
                          stroke="#1F2937"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={handleZoomOut}
                      className="bg-white rounded-full p-2 shadow hover:bg-gray-100"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12H20"
                          stroke="#1F2937"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-3">
                <div className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-gray-300 mr-1"></span>
                  <span className="text-xs text-gray-600">Low Risk</span>
                </div>
                <div className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-gray-500 mr-1"></span>
                  <span className="text-xs text-gray-600">Medium Risk</span>
                </div>
                <div className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-gray-800 mr-1"></span>
                  <span className="text-xs text-gray-600">High Risk</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-300 p-4">
              <h2 className="text-lg font-semibold text-black mb-4">
                Compliance Alerts
              </h2>
              <div className="space-y-3">
                <div className="border-l-4 border-gray-800 pl-3 py-2">
                  <p className="text-sm font-medium">Acme Suppliers Ltd.</p>
                  <p className="text-xs text-gray-500">
                    Labor policy violation - Urgent action required
                  </p>
                </div>
                <div className="border-l-4 border-gray-500 pl-3 py-2">
                  <p className="text-sm font-medium">EcoPlastics Inc.</p>
                  <p className="text-xs text-gray-500">
                    Environmental reporting deadline approaching
                  </p>
                </div>
                <div className="border-l-4 border-gray-500 pl-3 py-2">
                  <p className="text-sm font-medium">Global Textiles Co.</p>
                  <p className="text-xs text-gray-500">
                    Audit findings require follow-up
                  </p>
                </div>
                <div className="border-l-4 border-gray-300 pl-3 py-2">
                  <p className="text-sm font-medium">
                    Sustainable Packaging Ltd.
                  </p>
                  <p className="text-xs text-gray-500">
                    All compliance checks passed
                  </p>
                </div>
              </div>
              <button className="mt-4 text-sm text-gray-800 hover:underline">
                View all alerts
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-300 p-4">
              <h2 className="text-lg font-semibold text-black mb-4">
                Policy Compliance
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">
                      Carbon Disclosure
                    </span>
                    <span className="text-sm font-medium text-gray-800">
                      82%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-gray-600 h-2.5 rounded-full"
                      style={{ width: "82%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">
                      Labor Standards
                    </span>
                    <span className="text-sm font-medium text-gray-800">
                      67%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-gray-500 h-2.5 rounded-full"
                      style={{ width: "67%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">
                      Ethics & Anti-corruption
                    </span>
                    <span className="text-sm font-medium text-gray-800">
                      93%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-gray-700 h-2.5 rounded-full"
                      style={{ width: "93%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">
                      Water Management
                    </span>
                    <span className="text-sm font-medium text-gray-800">
                      45%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-gray-400 h-2.5 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-300 p-4">
              <h2 className="text-lg font-semibold text-black mb-4">
                Carbon Emissions
              </h2>
              <div className="h-48 rounded-lg">
                {/* Actual Chart Component */}
                <canvas
                  id="carbonEmissionsChart"
                  className="w-full h-full"
                ></canvas>
              </div>
              <div className="flex mt-4 text-sm text-gray-500 justify-between">
                <span>Jan</span>
                <span>Mar</span>
                <span>Jun</span>
                <span>Sep</span>
                <span>Dec</span>
              </div>
              <div className="mt-2">
                <button className="text-sm text-gray-800 hover:underline mr-4">
                  By Supplier
                </button>
                <button className="text-sm text-gray-500 hover:text-gray-800">
                  By Product
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-300 p-4 lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-black">
                  Supplier Scorecards
                </h2>
                <div className="md:flex hidden space-x-2">
                  <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                    <option>All Regions</option>
                    <option>Asia Pacific</option>
                    <option>Europe</option>
                    <option>North America</option>
                  </select>
                  <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                    <option>All Categories</option>
                    <option>Raw Materials</option>
                    <option>Manufacturing</option>
                    <option>Logistics</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Supplier
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ESG Score
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Risk Level
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Audit
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                        Acme Suppliers Ltd.
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        65
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-gray-800">
                          High
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        Oct 15, 2023
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                        Action Required
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                        EcoPlastics Inc.
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        78
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-gray-800">
                          Medium
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        Nov 02, 2023
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                        Pending Review
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                        Global Textiles Co.
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        72
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-gray-800">
                          Medium
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        Sep 28, 2023
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                        Follow-up Needed
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                        Sustainable Packaging Ltd.
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        92
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-gray-800">
                          Low
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        Nov 10, 2023
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                        Compliant
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <button className="text-sm text-gray-800 hover:underline">
                  View all suppliers
                </button>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-gray-800 text-white rounded text-sm">
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-300 p-4">
              <h2 className="text-lg font-semibold text-black mb-4">
                Reports & Downloads
              </h2>
              <div className="space-y-3">
                <div className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      Q4 2023 ESG Compliance Report
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF • Generated Nov 15, 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      Supplier Carbon Emissions Data
                    </p>
                    <p className="text-xs text-gray-500">
                      CSV • Updated Nov 12, 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      Audit Findings Summary
                    </p>
                    <p className="text-xs text-gray-500">XLSX • October 2023</p>
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700">
                Generate Custom Report
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
