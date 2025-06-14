import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-gray-100 border-t border-t-gray-200 px-12 md:px-48 py-14">
        <div className="grid grid-cols-2 md:grid-rows-1 md:grid-cols-5 gap-4">
          {/* logo and stuff */}
          <div className="grid grid-rows-2">
            <div className="flex flex-row items-center">
              <div>
                <svg
                  width="60"
                  height="70"
                  viewBox="0 0 60 70"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="5"
                    y="15"
                    width="20"
                    height="20"
                    fill="currentColor"
                  />
                  <rect
                    x="20"
                    y="30"
                    width="20"
                    height="20"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-slate-800">ESG360</h1>
            </div>

            <div>
              <p className="text-gray-800">
                Subscribe to our newsletter
                <br />
                Get tips, technical guides, and best practices. Twice a month.
              </p>
              <button className="text-gray-100 bg-gray-800 px-4 py-2 rounded-lg cursor-pointer mt-4">
                Subscribe
              </button>
            </div>
          </div>

          <div className="md:hidden block"></div>

          {/* Product */}
          <div className="py-12">
            <h1 className="text-xl font-semibold">Product</h1>

            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/reports"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/analytics"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/suppliers"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Suppliers
                </Link>
              </li>
              <li>
                <Link
                  href="/assessment"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Assessment Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/benchmarking"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Benchmarking
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div className="py-12">
            <h1 className="text-xl font-semibold">Platform</h1>

            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Desktop
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Mobile
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="py-12">
            <h1 className="text-xl font-semibold">Support</h1>

            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Forum
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Professional Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Premium Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="py-12">
            <h1 className="text-xl font-semibold">Company</h1>

            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Social Impact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
