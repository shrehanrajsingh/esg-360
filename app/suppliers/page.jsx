"use client";

import Link from "next/link";
import Navbar from "../navbar";
import Footer from "../footer";

export default function Suppliers() {
  // const [page, setPage] = useState(0);
  // const [itemsPerPage, setItemsPerPage] = useState(5);
  // const [paginationShift, setPaginationShift] = useState(0);

  return (
    <div className="">
      <Navbar />

      <main className="flex flex-col items-center mt-8">
        <div className="w-2/3">
          <h1 className="text-3xl font-semibold text-slate-900 mb-4">
            Suppliers
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Manage and monitor your supply chain partners
          </p>

          {/* search ESGs */}
          <div className="flex flex-row items-center md:relative md:right-8 mb-6">
            <svg
              className="w-5 h-5 text-gray-500 inset-0 relative left-8"
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
              className="w-full outline-0 bg-gray-100 border border-gray-300 py-2 px-4 pl-10 rounded-xl font-sans"
              placeholder="Search suppliers"
            />
          </div>

          {/* filters */}
          <div className="grid grid-cols-2 md:grid-cols-3 md:max-w-2/5 gap-2 items-center mb-8">
            <div className="px-4 py-2 bg-gray-100 w-fit border border-gray-300 rounded-xl text-sm flex flex-row gap-2 items-center cursor-pointer text-gray-600">
              <h1>Category</h1>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            <div className="px-4 py-2 bg-gray-100 w-fit border border-gray-300 rounded-xl text-sm flex flex-row gap-2 items-center cursor-pointer text-gray-600">
              <h1>Location</h1>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            <div className="px-4 py-2 bg-gray-100 w-fit border border-gray-300 rounded-xl text-sm flex flex-row gap-2 items-center cursor-pointer text-gray-600">
              <h1>ESG Score</h1>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>
          <div>
            {/* table listing all ESGs */}
            <div className="overflow-x-auto rounded-xl border border-gray-300 mb-8 hidden md:block">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
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
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ESG Score
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          AB
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Acme Corp
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: AC-2023
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Manufacturing
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      New York, USA
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100">
                        87
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href="/suppliers/details"
                        className="text-gray-600/80 hover:text-gray-900 mr-4"
                      >
                        View
                      </Link>
                      <Link
                        href="/suppliers/edit"
                        className="text-gray-600/80 hover:text-gray-900"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          GS
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Global Services Ltd.
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: GS-4567
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Services
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      London, UK
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100">
                        72
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href="/suppliers/details"
                        className="text-gray-600/80 hover:text-gray-900 mr-4"
                      >
                        View
                      </Link>
                      <Link
                        href="/suppliers/edit"
                        className="text-gray-600/80 hover:text-gray-900"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          AB
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Acme Corp
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: AC-2023
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Manufacturing
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      New York, USA
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100">
                        87
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href="/suppliers/details"
                        className="text-gray-600/80 hover:text-gray-900 mr-4"
                      >
                        View
                      </Link>
                      <Link
                        href="/suppliers/edit"
                        className="text-gray-600/80 hover:text-gray-900"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          GS
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Global Services Ltd.
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: GS-4567
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Services
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      London, UK
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100">
                        72
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href="/suppliers/details"
                        className="text-gray-600/80 hover:text-gray-900 mr-4"
                      >
                        View
                      </Link>
                      <Link
                        href="/suppliers/edit"
                        className="text-gray-600/80 hover:text-gray-900"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          AB
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Acme Corp
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: AC-2023
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Manufacturing
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      New York, USA
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100">
                        87
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href="/suppliers/details"
                        className="text-gray-600/80 hover:text-gray-900 mr-4"
                      >
                        View
                      </Link>
                      <Link
                        href="/suppliers/edit"
                        className="text-gray-600/80 hover:text-gray-900"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          GS
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Global Services Ltd.
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: GS-4567
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Services
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      London, UK
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100">
                        72
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href="/suppliers/details"
                        className="text-gray-600/80 hover:text-gray-900 mr-4"
                      >
                        View
                      </Link>
                      <Link
                        href="/suppliers/edit"
                        className="text-gray-600/80 hover:text-gray-900"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          AB
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Acme Corp
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: AC-2023
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Manufacturing
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      New York, USA
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100">
                        87
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href="/suppliers/details"
                        className="text-gray-600/80 hover:text-gray-900 mr-4"
                      >
                        View
                      </Link>
                      <Link
                        href="/suppliers/edit"
                        className="text-gray-600/80 hover:text-gray-900"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          GS
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Global Services Ltd.
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: GS-4567
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Services
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      London, UK
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100">
                        72
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href="/suppliers/details"
                        className="text-gray-600/80 hover:text-gray-900 mr-4"
                      >
                        View
                      </Link>
                      <Link
                        href="/suppliers/edit"
                        className="text-gray-600/80 hover:text-gray-900"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* mobile view for table */}
            <div>
              <div className="md:hidden space-y-4 mb-8">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i, key) => (
                  <div
                    className="bg-white rounded-xl border border-gray-300 p-4 hover:bg-gray-50"
                    key={key}
                  >
                    <div className="flex items-center mb-6">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        AB
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Acme Corp
                        </div>
                        <div className="text-sm text-gray-500">ID: AC-2023</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div>
                        <div className="text-xs font-medium text-gray-500 uppercase">
                          Category
                        </div>
                        <div className="text-sm text-gray-700">
                          Manufacturing
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-500 uppercase">
                          Location
                        </div>
                        <div className="text-sm text-gray-700">
                          New York, USA
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-500 uppercase">
                          ESG Score
                        </div>
                        <div className="px-2 w-fit inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100">
                          87
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-2 space-x-3">
                      <Link
                        href="/suppliers/details"
                        className="text-gray-600/80 hover:text-gray-900"
                      >
                        View
                      </Link>
                      <Link
                        href="/suppliers/edit"
                        className="text-gray-600/80 hover:text-gray-900"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
