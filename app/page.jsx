import Link from "next/link";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col gap-4 justify-center items-center m-auto h-screen">
        <h1 className="text-4xl text-gray-600 mb-4 text-center">
          This page is under development
        </h1>
        <p>In the meantime, checkout:</p>
        <Link
          href="/suppliers"
          className="text-gray-100 px-4 py-2 bg-black rounded-lg"
        >
          Suppliers
        </Link>
        <Link
          href="/analysis"
          className="text-gray-100 px-4 py-2 bg-black rounded-lg"
        >
          Analysis
        </Link>
        <Link
          href="/compliance"
          className="text-gray-100 px-4 py-2 bg-black rounded-lg"
        >
          Compliance
        </Link>
      </div>
      <Footer />
    </div>
  );
}
