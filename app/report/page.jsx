"use client";

import { useState } from "react";
import { reportHistory } from "../data/reportHistory";
import { scheduledReports } from "../data/scheduledReports";
import Navbar from "../navbar";
import Footer from "../footer";

export default function Report() {
  const [pageRH, setPageRH] = useState(0);
  const [itemsPerPageRH, setItemsPerPageRH] = useState(5);
  const [paginationShiftRH, setPaginationShiftRH] = useState(0);

  const [pageSR, setPageSR] = useState(0);
  const [itemsPerPageSR, setItemsPerPageSR] = useState(5);
  const [paginationShiftSR, setPaginationShiftSR] = useState(0);

  return (
    <div className="">
      <Navbar />

      <main className="flex flex-col items-center mt-8">
        <div className="w-2/3 mb-24">
          <h1 className="text-3xl font-semibold text-slate-900 mb-4">
            Reports
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Generate custom reports on supply chain and performance and ESG
            compliance.
          </p>

          {/* dropdowns to select report type */}
          <div className="mt-8">
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div>
                <h1 className="font-semibold">Report Generation</h1>

                <select
                  name="select_rg"
                  id="select_rg"
                  className="mt-2 mb-6 outline-none border border-gray-300 rounded-lg md:w-4/5 w-full px-4 py-2 text-gray-600"
                >
                  <option value="SCPR">Supply Chain Performance Report</option>
                  <option value="ECPR">
                    ESG Compliance Performance Report
                  </option>
                  <option value="SRA">Supply Risk Assessment</option>
                  <option value="PTR">Product Traceability Report</option>
                  <option value="SMR">Sustainability Metrics Report</option>
                </select>
              </div>

              <div>
                <h1 className="font-semibold">Data Range</h1>

                <select
                  name="select_dr"
                  id="select_dr"
                  className="mt-2 mb-6 outline-none border border-gray-300 rounded-lg md:w-4/5 w-full px-4 py-2 text-gray-600"
                >
                  <option value="LD">Last day</option>
                  <option value="LW">Last Week</option>
                  <option value="LM">Last Month</option>
                  <option value="LY">Last Year</option>
                  <option value="AT">All Time</option>
                </select>
              </div>

              <div>
                <h1 className="font-semibold">Metrics</h1>

                <select
                  name="select_m"
                  id="select_m"
                  className="mt-2 mb-8 outline-none border border-gray-300 rounded-lg md:w-4/5 w-full px-4 py-2 text-gray-600"
                >
                  <option value="CE">Carbon Emissions</option>
                  <option value="EC">Energy Consumption</option>
                  <option value="WU">Water Usage</option>
                  <option value="SC">Supplier Compliance</option>
                  <option value="DP">Delivery Performance</option>
                  <option value="DI">Diversity & Inclusion</option>
                  <option value="HS">Health & Safety</option>
                  <option value="CR">Compliance Rate</option>
                  <option value="TS">Transparency Score</option>
                  <option value="ALL">All Metrics</option>
                </select>
              </div>

              <div>
                <h1 className="font-semibold">Suppliers</h1>

                <select
                  name="select_s"
                  id="select_s"
                  className="mt-2 mb-8 outline-none border border-gray-300 rounded-lg md:w-4/5 w-full px-4 py-2 text-gray-600"
                >
                  <option value="ALL">All Suppliers</option>
                  <option value="SUP1">Acme Manufacturing</option>
                  <option value="SUP2">Global Materials Inc.</option>
                  <option value="SUP3">EcoSource Partners</option>
                  <option value="SUP4">Sustainable Logistics Ltd.</option>
                  <option value="SUP5">Green Tech Solutions</option>
                  <option value="SUP6">Precision Components Co.</option>
                  <option value="SUP7">Prime Resources Group</option>
                  <option value="SUP8">Allied Materials</option>
                  <option value="SUP9">SustainaTech Industries</option>
                  <option value="SUP10">EnviroGoods Supply</option>
                </select>
              </div>

              <div>
                <h1 className="font-semibold">Report Format</h1>

                <select
                  name="select_rf"
                  id="select_rf"
                  className="mt-2 mb-8 outline-none border border-gray-300 rounded-lg md:w-4/5 w-full px-4 py-2 text-gray-600"
                >
                  <option value="PDF">PDF Document</option>
                  <option value="XLSX">Excel Spreadsheet</option>
                  <option value="CSV">CSV File</option>
                  <option value="HTML">HTML Report</option>
                  <option value="JSON">JSON Data</option>
                </select>
              </div>

              <div className="flex justify-baseline items-center">
                <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 cursor-pointer">
                  Generate Report
                </button>
              </div>
            </div>
          </div>

          {/* report history */}
          <div className="mt-8 mb-16 bg-white rounded-lg">
            {/* desktop */}
            <div className="hidden md:block">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-medium text-slate-800">
                  Report History
                </h2>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search report..."
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm outline-none"
                  />
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 cursor-pointer">
                    Add New
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto border-1 border-gray-300 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Report Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Data Generated
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {reportHistory
                      .slice(
                        pageRH * itemsPerPageRH,
                        (pageRH + 1) * itemsPerPageRH
                      )
                      .map((item) => (
                        <tr className="hover:bg-gray-50" key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {item.report_name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.data_generated}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-gray-600 cursor-pointer border border-gray-300 px-2 py-1 rounded-lg hover:border-gray-600 translate-all duration-200">
                              Download
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Showing{" "}
                  <span className="font-medium">
                    {Math.min(
                      itemsPerPageRH * (pageRH + 1),
                      reportHistory.length
                    )}
                  </span>{" "}
                  of <span className="font-medium">{reportHistory.length}</span>{" "}
                  requirements
                </div>
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
                    onClick={() =>
                      setPageRH((page) => (page > 0 ? page - 1 : page))
                    }
                  >
                    Previous
                  </button>
                  <button
                    className="px-3 py-1 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 cursor-pointer"
                    onClick={() =>
                      setPageRH((page) =>
                        page < reportHistory.length / itemsPerPageRH - 1
                          ? page + 1
                          : page
                      )
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* mobile */}
            <div className="md:hidden block">
              <div className="md:hidden">
                <h2 className="text-xl font-medium text-slate-800 mb-3 text-center">
                  Report History
                </h2>

                <div className="flex justify-between items-center mb-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm w-2/3 outline-none"
                  />
                  <button className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm">
                    Add
                  </button>
                </div>

                {reportHistory
                  .slice(pageRH * itemsPerPageRH, (pageRH + 1) * itemsPerPageRH)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg border border-gray-300 p-4 mb-3"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {item.report_name}
                        </h3>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full`}
                      >
                        {item.status}
                      </span>

                      <div className="grid grid-cols-2 gap-2 text-sm mb-3 mt-3">
                        <div>
                          <p className="text-gray-500">Type</p>
                          <p className="font-medium">{item.type}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Data Generated</p>
                          <p className="font-medium">{item.data_generated}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Status</p>
                          <p className="font-medium">{item.status}</p>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-2 mt-2">
                        <button className="text-gray-600 text-sm font-medium underline">
                          View
                        </button>
                        <button className="text-gray-600 text-sm font-medium underline">
                          Edit
                        </button>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="flex flex-row items-center mt-8">
                <div
                  className={`h-5 w-5 flex justify-center items-center p-4 bg-gray-300 text-black rounded-lg cursor-pointer mx-auto transition-all duration-150 text-xs`}
                  onClick={() =>
                    setPaginationShiftRH((pg) => (pg > 0 ? pg - 1 : pg))
                  }
                >
                  <h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </h1>
                </div>
                {Array.from(
                  {
                    length: Math.max(
                      Math.ceil(reportHistory.length / itemsPerPageRH) - 2,
                      3
                    ),
                  },
                  (_, index) => (
                    <div
                      className={`h-5 w-5 flex justify-center items-center p-4 ${
                        index + paginationShiftRH === pageRH
                          ? "bg-gray-600 text-white"
                          : "bg-gray-300 text-black"
                      } rounded-full cursor-pointer mx-auto transition-all duration-150 text-xs`}
                      key={index}
                      onClick={() => setPageRH(index + paginationShiftRH)}
                    >
                      <h1>{index + 1 + paginationShiftRH}</h1>
                    </div>
                  )
                )}
                <div
                  className={`h-5 w-5 flex justify-center items-center p-4 bg-gray-300 text-black rounded-lg cursor-pointer mx-auto transition-all duration-150 text-xs`}
                  onClick={() =>
                    setPaginationShiftRH((pg) => (pg < 2 ? pg + 1 : pg))
                  }
                >
                  <h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* scheduled reports */}
          <div className="mt-8 bg-white rounded-lg">
            {/* desktop */}
            <div className="hidden md:block">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-medium text-slate-800">
                  Scheduled Reports
                </h2>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search report..."
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm outline-none"
                  />
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 cursor-pointer">
                    Add New
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto border-1 border-gray-300 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Report Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Frequency
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Next Run
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {scheduledReports
                      .slice(
                        pageSR * itemsPerPageSR,
                        (pageSR + 1) * itemsPerPageSR
                      )
                      .map((item) => (
                        <tr className="hover:bg-gray-50" key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {item.report_name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.frequency}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.next_run}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-gray-600 hover:text-gray-900 mr-3 hover:underline cursor-pointer">
                              View
                            </button>
                            <button className="text-gray-600 hover:text-gray-900 hover:underline cursor-pointer">
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Showing{" "}
                  <span className="font-medium">
                    {Math.min(
                      itemsPerPageSR * (pageSR + 1),
                      scheduledReports.length
                    )}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium">{scheduledReports.length}</span>{" "}
                  requirements
                </div>
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
                    onClick={() =>
                      setPageSR((page) => (page > 0 ? page - 1 : page))
                    }
                  >
                    Previous
                  </button>
                  <button
                    className="px-3 py-1 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 cursor-pointer"
                    onClick={() =>
                      setPageSR((page) =>
                        page < scheduledReports.length / itemsPerPageRH - 1
                          ? page + 1
                          : page
                      )
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* mobile */}
            <div className="md:hidden block">
              <div className="md:hidden">
                <h2 className="text-xl font-medium text-slate-800 mb-3 text-center">
                  Regulatory Requirements
                </h2>

                <div className="flex justify-between items-center mb-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm w-2/3 outline-none"
                  />
                  <button className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm">
                    Add
                  </button>
                </div>

                {scheduledReports
                  .slice(pageSR * itemsPerPageSR, (pageSR + 1) * itemsPerPageSR)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg border border-gray-300 p-4 mb-3"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {item.report_name}
                        </h3>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full`}
                      >
                        {item.status}
                      </span>

                      <div className="grid grid-cols-2 gap-2 text-sm mb-3 mt-3">
                        <div>
                          <p className="text-gray-500">Type</p>
                          <p className="font-medium">{item.type}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Data Generated</p>
                          <p className="font-medium">{item.data_generated}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Status</p>
                          <p className="font-medium">{item.status}</p>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-2 mt-2">
                        <button className="text-gray-600 text-sm font-medium underline">
                          View
                        </button>
                        <button className="text-gray-600 text-sm font-medium underline">
                          Edit
                        </button>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="flex flex-row items-center mt-8">
                <div
                  className={`h-5 w-5 flex justify-center items-center p-4 bg-gray-300 text-black rounded-lg cursor-pointer mx-auto transition-all duration-150 text-xs`}
                  onClick={() =>
                    setPaginationShiftSR((pg) => (pg > 0 ? pg - 1 : pg))
                  }
                >
                  <h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </h1>
                </div>
                {Array.from(
                  {
                    length: Math.max(
                      Math.ceil(scheduledReports.length / itemsPerPageSR) - 2,
                      3
                    ),
                  },
                  (_, index) => (
                    <div
                      className={`h-5 w-5 flex justify-center items-center p-4 ${
                        index + paginationShiftSR === pageSR
                          ? "bg-gray-600 text-white"
                          : "bg-gray-300 text-black"
                      } rounded-full cursor-pointer mx-auto transition-all duration-150 text-xs`}
                      key={index}
                      onClick={() => setPageSR(index + paginationShiftSR)}
                    >
                      <h1>{index + 1 + paginationShiftSR}</h1>
                    </div>
                  )
                )}
                <div
                  className={`h-5 w-5 flex justify-center items-center p-4 bg-gray-300 text-black rounded-lg cursor-pointer mx-auto transition-all duration-150 text-xs`}
                  onClick={() =>
                    setPaginationShiftSR((pg) => (pg < 2 ? pg + 1 : pg))
                  }
                >
                  <h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
