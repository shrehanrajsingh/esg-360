"use client";

// import Link from "next/link";
import Footer from "./footer";
import Navbar from "./navbar";

import LandingJPG from "./assets/landing.jpg";
import LandingMobileJPG from "./assets/landing-mobile.jpg";
// import Avatar2JPG from "./assets/avatar-2.jpg";
// import GrassJPG from "./assets/grass.jpg";
// import Grass2JPG from "./assets/grass2.jpg";
import Grass3JPG from "./assets/grass3.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      {/* hero */}
      <div
        className="m-auto h-screen hidden md:block"
        style={{
          backgroundImage: `url(${LandingJPG.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute right-1/4 top-1/3">
          <div className="flex flex-row items-center gap-2 mr-4">
            <div>
              <svg
                width="90"
                height="105"
                viewBox="0 0 60 70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="5" y="15" width="20" height="20" fill="currentColor" />
                <rect
                  x="20"
                  y="30"
                  width="20"
                  height="20"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1 className="text-6xl font-bold text-slate-800">ESG360</h1>
          </div>
          <p className="ml-4 mb-4 max-w-md text-lg text-slate-700">
            A comprehensive platform designed to help organizations achieve ESG
            compliance and monitor their supply chains.
            <br />
            Gain actionable insights, ensure transparency, and drive sustainable
            business practices across your operations.
          </p>
          <button className="ml-4 py-2 px-4 bg-gradient-to-tr from-green-700 to-emerald-600 hover:text-white text-slate-200 cursor-pointer rounded-lg">
            Learn More
          </button>
          <button className="ml-4 py-2 px-4 bg-gradient-to-tr from bg-green-700 to-emerald-600 hover:text-white text-slate-200 cursor-pointer rounded-lg">
            Go to Dashboard
          </button>
        </div>
      </div>

      {/* mobile hero */}
      <div
        className="m-auto h-screen md:hidden"
        style={{
          backgroundImage: `url(${LandingMobileJPG.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-1/3 w-full">
          <div className="w-full flex justify-center mb-2">
            <span className="px-4 py-1 bg-gradient-to-tr from-green-700 to-emerald-600 text-white rounded-full text-sm font-medium">
              Budding Vision
            </span>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="">
              <svg
                width="90"
                height="105"
                viewBox="0 0 60 70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="5" y="15" width="20" height="20" fill="currentColor" />
                <rect
                  x="20"
                  y="30"
                  width="20"
                  height="20"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1 className="text-6xl font-bold text-slate-800">ESG360</h1>
          </div>
          <div className="w-full flex justify-center items-center mt-4">
            <button className="ml-4 py-2 px-4 bg-gradient-to-tr from-green-700 to-emerald-600 hover:text-white text-slate-200 cursor-pointer rounded-lg">
              Learn More
            </button>
            <button className="ml-4 py-2 px-4 bg-gradient-to-tr from bg-green-700 to-emerald-600 hover:text-white text-slate-200 cursor-pointer rounded-lg">
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* what we do */}
      <section className="py-20 bg-white">
        <div className="mx-auto md:px-60 px-6">
          <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
            <div className="bg-slate-50 rounded-lg border border-gray-300 p-6 flex flex-col items-center">
              <svg
                className="mb-4 text-green-700"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l2 2 4-4" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">ESG Compliance</h3>
              <p className="text-slate-600 text-center">
                Track, manage, and report on your organization’s ESG metrics to
                ensure regulatory compliance and industry best practices.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg border border-gray-300 p-6 flex flex-col items-center">
              <svg
                className="mb-4 text-green-700"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">
                Supply Chain Monitoring
              </h3>
              <p className="text-slate-600 text-center">
                Gain real-time visibility into your supply chain, identify
                risks, and ensure ethical sourcing and sustainability.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg border border-gray-300 p-6 flex flex-col items-center">
              <svg
                className="mb-4 text-green-700"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 20v-6" />
                <path d="M6 20v-4" />
                <path d="M18 20v-2" />
                <path d="M3 10h18" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">
                Actionable Insights
              </h3>
              <p className="text-slate-600 text-center">
                Leverage analytics and dashboards to make informed decisions and
                drive continuous improvement in ESG performance.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg border border-gray-300 p-6 flex flex-col items-center">
              <svg
                className="mb-4 text-green-700"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M14 3v4a1 1 0 001 1h4" />
                <path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
                <path d="M9 9h1" />
                <path d="M9 13h6" />
                <path d="M9 17h6" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">
                Sustainability Reporting
              </h3>
              <p className="text-slate-600 text-center">
                Generate comprehensive reports for stakeholders, investors, and
                regulatory bodies that showcase your ESG commitments and
                achievements.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg border border-gray-300 p-6 flex flex-col items-center">
              <svg
                className="mb-4 text-green-700"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 9v2m0 4h.01" />
                <path d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
              <p className="text-slate-600 text-center">
                Identify, assess and mitigate ESG-related risks across your
                operations with proactive monitoring and predictive analytics.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg border border-gray-300 p-6 flex flex-col items-center">
              <svg
                className="mb-4 text-green-700"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">
                Stakeholder Engagement
              </h3>
              <p className="text-slate-600 text-center">
                Build stronger relationships with investors, customers, and
                communities through transparent communication and collaborative
                ESG initiatives.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg border border-gray-300 p-6 flex flex-col items-center">
              <svg
                className="mb-4 text-green-700"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                <path d="M12 8v4l3 3" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">
                Carbon Footprint Tracking
              </h3>
              <p className="text-slate-600 text-center">
                Measure, monitor, and reduce your organization's carbon
                emissions with precise tracking tools and data-driven reduction
                strategies.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg border border-gray-300 p-6 flex flex-col items-center">
              <svg
                className="mb-4 text-green-700"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">
                Regulatory Compliance
              </h3>
              <p className="text-slate-600 text-center">
                Stay ahead of evolving ESG regulations with automated compliance
                monitoring, alerts, and guidance tailored to your industry
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* our approach */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Assessment</h3>
              <p className="text-slate-600">
                Evaluate your current ESG performance and identify key areas for
                improvement
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integration</h3>
              <p className="text-slate-600">
                Seamlessly connect your data sources for comprehensive
                monitoring
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analysis</h3>
              <p className="text-slate-600">
                Generate insights and actionable recommendations based on your
                data
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Improvement</h3>
              <p className="text-slate-600">
                Implement changes and track progress toward your sustainability
                goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Discover how ESG360 has transformed sustainability practices for
              organizations worldwide. Our platform empowers businesses to
              achieve their ESG goals and drive positive change.
            </p>
          </div>

          <div className="relative">
            {/* Navigation arrows */}
            <button
              onClick={() => {
                const container = document.getElementById(
                  "testimonial-container"
                );
                container.scrollBy({ left: -300, behavior: "smooth" });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-green-700"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => {
                const container = document.getElementById(
                  "testimonial-container"
                );
                container.scrollBy({ left: 300, behavior: "smooth" });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-green-700"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              id="testimonial-container"
              className="overflow-x-auto pb-6 scrollbar-hide"
              style={{ scrollbarWidth: "none" }}
            >
              <div className="flex space-x-6 min-w-max px-2">
                {/* Testimonial 1 - Corporate */}
                <div className="bg-white rounded-xl border border-gray-300 transition-shadow p-6 w-96 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="h-14 w-14 rounded-lg bg-green-100 flex items-center justify-center mr-4">
                      <svg
                        className="h-10 w-10 text-green-700"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">
                        GreenTech Solutions
                      </h4>
                      <p className="text-sm text-slate-500">
                        Global Technology Corporation
                      </p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-4">
                    "ESG360 has completely transformed how we approach
                    sustainability. The supply chain tracking alone has helped
                    us reduce our carbon footprint by 34% in just 18 months. The
                    platform's intuitive dashboards make it easy to communicate
                    our progress to stakeholders."
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-200">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-200 mr-3 flex items-center justify-center">
                        <span className="text-slate-600 font-medium">JC</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-800">
                          Jessica Chen
                        </h5>
                        <p className="text-sm text-slate-500">
                          Chief Sustainability Officer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-300 transition-shadow p-6 w-96 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-700 font-bold text-xl">
                        MJ
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">
                        Michael Johnson
                      </h4>
                      <p className="text-sm text-slate-500">
                        ESG Program Director
                      </p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-4">
                    "As someone who manages ESG initiatives for a multinational
                    corporation, I can't imagine doing my job without ESG360.
                    The regulatory compliance features have saved us countless
                    hours and potential fines. The platform is always up-to-date
                    with the latest requirements across jurisdictions."
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-200">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      EcoCorp International
                    </span>
                  </div>
                </div>

                {/* Testimonial 3 - Corporate */}
                <div className="bg-white rounded-xl border border-gray-300 transition-shadow p-6 w-96 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="h-14 w-14 rounded-lg bg-teal-100 flex items-center justify-center mr-4">
                      <svg
                        className="h-10 w-10 text-teal-700"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5.3 18c-.4-2 .4-4 2.2-5.1 1.8-1.1 4-.9 5.5.4 1.5 1.4 1.7 3.6.6 5.3-1.1 1.7-3.2 2.5-5.2 2-2-.5-3.5-2-3.1-2.6z" />
                        <path d="M14.7 14c.4-2-.4-4-2.2-5.1-1.8-1.1-4-.9-5.5.4-1.5 1.4-1.7 3.6-.6 5.3 1.1 1.7 3.2 2.5 5.2 2 2-.5 3.5-2 3.1-2.6z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">
                        Sustainable Futures Ltd
                      </h4>
                      <p className="text-sm text-slate-500">
                        Renewable Energy Provider
                      </p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-4">
                    "ESG360 has enabled us to demonstrate our commitment to
                    sustainability to investors with concrete data. The
                    reporting features are comprehensive and the ability to
                    track metrics over time has helped us secure additional
                    funding based on our progress."
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-200">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-200 mr-3 flex items-center justify-center">
                        <span className="text-slate-600 font-medium">TR</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-800">
                          Thomas Rodriguez
                        </h5>
                        <p className="text-sm text-slate-500">CEO</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-300 transition-shadow p-6 w-96 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="h-14 w-14 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <span className="text-amber-700 font-bold text-xl">
                        SP
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Sarah Patel</h4>
                      <p className="text-sm text-slate-500">
                        Supply Chain Manager
                      </p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-4">
                    "The supply chain monitoring capabilities of ESG360 are
                    unmatched. We've identified and addressed ethical concerns
                    with suppliers we weren't even aware of. The platform has
                    given us complete visibility across our entire value chain,
                    which is critical for our industry."
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-200">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      GlobalRetail Inc.
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-300 transition-shadow p-6 w-96 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="h-14 w-14 rounded-lg bg-purple-100 flex items-center justify-center mr-4">
                      <svg
                        className="h-10 w-10 text-purple-700"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">
                        EcoFuture Group
                      </h4>
                      <p className="text-sm text-slate-500">
                        Manufacturing Conglomerate
                      </p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-4">
                    "The carbon footprint tracking tools in ESG360 have been
                    instrumental in our journey to net zero. We've been able to
                    quantify our emissions, identify hotspots, and implement
                    targeted reduction strategies. The platform's predictive
                    analytics have helped us create a roadmap to achieve our
                    2030 goals."
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-200">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-200 mr-3 flex items-center justify-center">
                        <span className="text-slate-600 font-medium">DM</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-800">
                          David Morgan
                        </h5>
                        <p className="text-sm text-slate-500">
                          Head of Sustainability
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* metrics */}
          <div className="mt-16 grid md:grid-cols-4 grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <h3 className="text-4xl font-bold text-green-700 mb-2">95%</h3>
              <p className="text-slate-600">Customer Satisfaction</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-700 mb-2">500+</h3>
              <p className="text-slate-600">Global Organizations</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-700 mb-2">30%</h3>
              <p className="text-slate-600">Average Emission Reduction</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-700 mb-2">24/7</h3>
              <p className="text-slate-600">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* join us section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-16 text-center">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">
              Ready to transform your ESG strategy?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of forward-thinking organizations already using
              ESG360 to drive sustainable growth.
            </p>
          </div>
          <div
            className="bg-gradient-to-r rounded-2xl overflow-hidden shadow-xl"
            style={{
              backgroundImage: `url(${Grass3JPG.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="md:flex items-center">
              <div className="md:w-1/2 p-10 md:p-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Join Us in Building a Sustainable Future
                </h2>
                <p className="text-slate-100 mb-8">
                  Take the first step towards comprehensive ESG management and
                  compliance. Our platform provides the tools and insights you
                  need to make meaningful progress on your sustainability
                  journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#"
                    className="py-3 px-6 bg-white text-green-700 hover:bg-slate-100 font-medium rounded-lg transition-all text-center"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="py-3 px-6 border border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all text-center"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
              <div
                className="md:w-1/2 p-10 md:p-16"
                // style={{
                //   backgroundImage: `url(${GrassJPG.src})`,
                //   backgroundSize: "cover",
                //   backgroundRepeat: "no-repeat",
                // }}
              >
                <div className="bg-white/80 rounded-xl p-8 shadow-inner">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    Stay Updated
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Subscribe to our newsletter for the latest ESG insights,
                    regulatory updates, and platform features.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-gradient-to-r from-green-700 to-emerald-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
