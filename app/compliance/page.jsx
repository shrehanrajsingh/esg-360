"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar";
import { useState } from "react";

import { rrItems } from "../data/regulatoryRequirements";
import { auditData } from "../data/auditData";
import { certificationData } from "../data/certificationData";
import Footer from "../footer";

export default function ComplianceOverview() {
  /**
   * 'r': Regulatory Requirements
   * 'a': Audit Results
   * 'c': Certification Statuses
   */
  const [menu, setMenu] = useState("r");
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [paginationShift, setPaginationShift] = useState(0);

  return (
    <div className="">
      <Navbar />

      <main className="flex flex-col items-center mt-8">
        <div className="w-5/6 mb-24">
          <h1 className="text-3xl font-semibold text-slate-900 mb-4">
            Compliance Overview
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Track and manage compliance across your supply chain
          </p>

          <div className="flex-row gap-6 items-center hidden md:flex">
            <div
              className={`text-sm text-gray-600 font-bold py-2 px-4 cursor-pointer`}
              onClick={() => {
                setMenu("r");
                setPage(0);
                setItemsPerPage(5);
                setPaginationShift(0);
              }}
            >
              <h1>Regulatory Requirements</h1>
            </div>
            <div
              className={`text-sm text-gray-600 font-bold py-2 px-4 cursor-pointer`}
              onClick={() => {
                setMenu("a");
                setPage(0);
                setItemsPerPage(5);
                setPaginationShift(0);
              }}
            >
              <h1>Audit Results</h1>
            </div>
            <div
              className={`text-sm text-gray-600 font-bold py-2 px-4 cursor-pointer`}
              onClick={() => {
                setMenu("c");
                setPage(0);
                setItemsPerPage(5);
                setPaginationShift(0);
              }}
            >
              <h1>Certification Statuses</h1>
            </div>
          </div>
          <div
            className={`h-1 bg-black transition-all duration-150 relative rounded-t-2xl hidden md:block ${
              menu == "r"
                ? "w-50 left-0"
                : menu == "a"
                ? "left-54 w-36"
                : "w-44 left-95"
            }`}
          ></div>

          <div className="grid grid-cols-3 relative md:hidden">
            <div className="flex flex-col">
              <div
                className={`text-gray-600 font-bold py-2 px-4 cursor-pointer text-center text-xs ${
                  menu === "r" ? "text-black" : ""
                }`}
                onClick={() => {
                  setMenu("r");
                  setPage(0);
                  setItemsPerPage(5);
                  setPaginationShift(0);
                }}
              >
                <h1>Regulatory Requirements</h1>
              </div>
            </div>

            <div className="flex flex-col">
              <div
                className={`text-gray-600 font-bold py-2 px-4 cursor-pointer text-center text-xs ${
                  menu === "a" ? "text-black" : ""
                }`}
                onClick={() => {
                  setMenu("a");
                  setPage(0);
                  setItemsPerPage(5);
                  setPaginationShift(0);
                }}
              >
                <h1>Audit Results</h1>
              </div>
            </div>

            <div className="flex flex-col">
              <div
                className={`text-gray-600 font-bold py-2 px-4 cursor-pointer text-center text-xs ${
                  menu === "c" ? "text-black" : ""
                }`}
                onClick={() => {
                  setMenu("c");
                  setPage(0);
                  setItemsPerPage(5);
                  setPaginationShift(0);
                }}
              >
                <h1>Certification Statuses</h1>
              </div>
            </div>

            <div
              className="absolute bottom-0 h-1 bg-black rounded-t-2xl transition-all duration-150"
              style={{
                width: "33.33%",
                transform: `translateX(${
                  menu === "r" ? "0%" : menu === "a" ? "100%" : "200%"
                })`,
              }}
            ></div>
          </div>

          {menu === "r" && (
            <div className="mt-8 bg-white p-6 rounded-lg border-1 border-gray-300">
              {/* desktop */}
              <div className="hidden md:block">
                <div className="mb-4 flex justify-between items-center">
                  <h2 className="text-xl font-medium text-slate-800">
                    Regulatory Requirements
                  </h2>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Search requirements..."
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
                          Requirement
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Region
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Framework
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
                          Due Date
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
                      {rrItems
                        .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
                        .map((item) => (
                          <tr className="hover:bg-gray-50" key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {item.requirement}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {item.region}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {item.framework}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status.bgColor} ${item.status.textColor}`}
                              >
                                {item.status.label}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {item.dueDate}
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
                      {Math.min(itemsPerPage * (page + 1), rrItems.length)}
                    </span>{" "}
                    of <span className="font-medium">{rrItems.length}</span>{" "}
                    requirements
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
                      onClick={() =>
                        setPage((page) => (page > 0 ? page - 1 : page))
                      }
                    >
                      Previous
                    </button>
                    <button
                      className="px-3 py-1 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 cursor-pointer"
                      onClick={() =>
                        setPage((page) =>
                          page < rrItems.length / itemsPerPage - 1
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

                  {rrItems
                    .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="bg-white rounded-lg border border-gray-300 p-4 mb-3"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">
                            {item.requirement}
                          </h3>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${item.status.bgColor} ${item.status.textColor}`}
                        >
                          {item.status.label}
                        </span>

                        <div className="grid grid-cols-2 gap-2 text-sm mb-3 mt-3">
                          <div>
                            <p className="text-gray-500">Region</p>
                            <p className="font-medium">{item.region}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Framework</p>
                            <p className="font-medium">{item.framework}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Due Date</p>
                            <p className="font-medium">{item.dueDate}</p>
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
                      setPaginationShift((pg) => (pg > 0 ? pg - 1 : pg))
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
                    { length: Math.ceil(rrItems.length / itemsPerPage) - 2 },
                    (_, index) => (
                      <div
                        className={`h-5 w-5 flex justify-center items-center p-4 ${
                          index + paginationShift === page
                            ? "bg-gray-600 text-white"
                            : "bg-gray-300 text-black"
                        } rounded-full cursor-pointer mx-auto transition-all duration-150 text-xs`}
                        key={index}
                        onClick={() => setPage(index + paginationShift)}
                      >
                        <h1>{index + 1 + paginationShift}</h1>
                      </div>
                    )
                  )}
                  <div
                    className={`h-5 w-5 flex justify-center items-center p-4 bg-gray-300 text-black rounded-lg cursor-pointer mx-auto transition-all duration-150 text-xs`}
                    onClick={() =>
                      setPaginationShift((pg) => (pg < 2 ? pg + 1 : pg))
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
          )}

          {menu === "a" && (
            <div className="mt-8">
              <div className="bg-white p-6 rounded-lg text-center text-gray-500 border-1 border-gray-300">
                {/* desktop */}
                <div className="hidden md:block">
                  <div className="mb-4 flex justify-between items-center">
                    <h2 className="text-xl font-medium text-slate-800">
                      Audit Results
                    </h2>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Search audits..."
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
                            Supplier
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Audit Type
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Result
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Findings
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
                        {auditData
                          .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
                          .map((audit) => (
                            <tr key={audit.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-900">
                                {audit.supplier}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                                {audit.auditType}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                                {audit.date}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-left">
                                <span
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${audit.result.bgColor} ${audit.result.textColor}`}
                                >
                                  {audit.result.label}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                                {audit.findings}
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
                        {Math.min(itemsPerPage * (page + 1), auditData.length)}
                      </span>{" "}
                      of <span className="font-medium">{auditData.length}</span>{" "}
                      audits
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
                        onClick={() =>
                          setPage((page) => (page > 0 ? page - 1 : page))
                        }
                      >
                        Previous
                      </button>
                      <button
                        className="px-3 py-1 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 cursor-pointer"
                        onClick={() =>
                          setPage((page) =>
                            page < auditData.length / itemsPerPage - 1
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
                <div className="md:hidden">
                  <h2 className="text-xl font-medium text-slate-800 mb-3">
                    Audit Results
                  </h2>

                  <div className="flex justify-between items-center mb-4">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="px-3 py-2 border border-gray-300 rounded-md text-sm w-2/3 outline-none text-black"
                    />
                    <button className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm">
                      Add
                    </button>
                  </div>

                  {auditData
                    .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
                    .map((audit) => (
                      <div
                        key={audit.id}
                        className="bg-white rounded-lg border border-gray-300 p-4 mb-3"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-semibold text-gray-900">
                            {audit.supplier}
                          </h3>
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${audit.result.bgColor} ${audit.result.textColor}`}
                          >
                            {audit.result.label}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 text-left gap-2 text-sm mb-3">
                          <div className="grid grid-cols-2">
                            <p className="text-gray-500">Audit Type</p>
                            <p className="font-medium">{audit.auditType}</p>
                          </div>
                          <div className="grid grid-cols-2">
                            <p className="text-gray-500">Date</p>
                            <p className="font-medium">{audit.date}</p>
                          </div>
                          <div className="grid grid-cols-2">
                            <p className="text-gray-500">Findings</p>
                            <p className="font-medium">{audit.findings}</p>
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

                  <div className="flex flex-row items-center mt-8">
                    <div
                      className={`h-5 w-5 flex justify-center items-center p-4 bg-gray-300 text-black rounded-lg cursor-pointer mx-auto transition-all duration-150 text-xs`}
                      onClick={() =>
                        setPaginationShift((pg) => (pg > 0 ? pg - 1 : pg))
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
                        length: Math.ceil(auditData.length / itemsPerPage) - 2,
                      },
                      (_, index) => (
                        <div
                          className={`h-5 w-5 flex justify-center items-center p-4 ${
                            index + paginationShift === page
                              ? "bg-gray-600 text-white"
                              : "bg-gray-300 text-black"
                          } rounded-full cursor-pointer mx-auto transition-all duration-150 text-xs`}
                          key={index}
                          onClick={() => setPage(index + paginationShift)}
                        >
                          <h1>{index + 1 + paginationShift}</h1>
                        </div>
                      )
                    )}
                    <div
                      className={`h-5 w-5 flex justify-center items-center p-4 bg-gray-300 text-black rounded-lg cursor-pointer mx-auto transition-all duration-150 text-xs`}
                      onClick={() =>
                        setPaginationShift((pg) => (pg < 2 ? pg + 1 : pg))
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
          )}

          {menu === "c" && (
            <div className="mt-8">
              <div>
                <div className="bg-white p-6 rounded-lg border-1 border-gray-300">
                  {/* desktop */}
                  <div className="hidden md:block">
                    <div className="mb-4 flex justify-between items-center">
                      <h2 className="text-xl font-medium text-slate-800">
                        Certification Statuses
                      </h2>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Search certifications..."
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
                              Product
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Certification
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Standard
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
                              Expiry Date
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
                          {certificationData
                            .slice(
                              page * itemsPerPage,
                              (page + 1) * itemsPerPage
                            )
                            .map((cert) => (
                              <tr key={cert.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  {cert.product}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {cert.certification}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {cert.standard}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${cert.status.bgColor} ${cert.status.textColor}`}
                                  >
                                    {cert.status.label}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {cert.expiryDate}
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
                            itemsPerPage * (page + 1),
                            certificationData.length
                          )}
                        </span>{" "}
                        of{" "}
                        <span className="font-medium">
                          {certificationData.length}
                        </span>{" "}
                        certifications
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
                          onClick={() =>
                            setPage((page) => (page > 0 ? page - 1 : page))
                          }
                        >
                          Previous
                        </button>
                        <button
                          className="px-3 py-1 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 cursor-pointer"
                          onClick={() =>
                            setPage((page) =>
                              page < certificationData.length / itemsPerPage - 1
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
                  <div className="md:hidden">
                    <h2 className="text-xl font-medium text-center text-slate-800 mb-3">
                      Certification Statuses
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

                    {certificationData
                      .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
                      .map((cert) => (
                        <div
                          key={cert.id}
                          className="bg-white rounded-lg border border-gray-300 p-4 mb-3"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">
                              {cert.product}
                            </h3>
                            <span
                              className={`px-2 py-1 text-xs font-semibold rounded-full ${cert.status.bgColor} ${cert.status.textColor}`}
                            >
                              {cert.status.label}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                            <div>
                              <p className="text-gray-500">Certification</p>
                              <p className="font-medium">
                                {cert.certification}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500">Standard</p>
                              <p className="font-medium">{cert.standard}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Expiry Date</p>
                              <p className="font-medium">{cert.expiryDate}</p>
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

                    <div className="flex flex-row items-center mt-8">
                      <div
                        className={`h-5 w-5 flex justify-center items-center p-4 bg-gray-300 text-black rounded-lg cursor-pointer mx-auto transition-all duration-150 text-xs`}
                        onClick={() =>
                          setPaginationShift((pg) => (pg > 0 ? pg - 1 : pg))
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
                          length:
                            Math.ceil(certificationData.length / itemsPerPage) -
                            2,
                        },
                        (_, index) => (
                          <div
                            className={`h-5 w-5 flex justify-center items-center p-4 ${
                              index + paginationShift === page
                                ? "bg-gray-600 text-white"
                                : "bg-gray-300 text-black"
                            } rounded-full cursor-pointer mx-auto transition-all duration-150 text-xs`}
                            key={index}
                            onClick={() => setPage(index + paginationShift)}
                          >
                            <h1>{index + 1 + paginationShift}</h1>
                          </div>
                        )
                      )}
                      <div
                        className={`h-5 w-5 flex justify-center items-center p-4 bg-gray-300 text-black rounded-lg cursor-pointer mx-auto transition-all duration-150 text-xs`}
                        onClick={() =>
                          setPaginationShift((pg) => (pg < 2 ? pg + 1 : pg))
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
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
