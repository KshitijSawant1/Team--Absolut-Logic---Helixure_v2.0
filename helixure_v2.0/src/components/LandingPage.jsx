import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BlockShowcase from "./block_carousal/BlockShowcase";
import TiltedCard from "./TiltedCard";
import MetaCube from "./MetaCube";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#f3f8ff" }}>
      {/* Content (Now Above Gradient) */}
      <div className="relative z-10 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-7xl font-extrabold text-transparent sm:text-9xl md:text-[10rem]">
          HELIXURE v2.0
        </h1>
      </div>
      <MetaCube />

      {/* About Section */}
      <section className="relative z-10 overflow-hidden  bg-[#f3f8ff] sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Spiral of Integrity, Secured by Blocks.
            </h2>
            <p className="text-gray-500 md:mt-4 text-justify leading-relaxed">
              A decentralized whiteboard powered by blockchain where ideas,
              collaboration, and trust converge. Create private or shared
              spaces, generate immutable blocks, and experience Proof-of-Work
              and Proof-of-History — all in a visually intuitive platform.
            </p>
            <div className="mt-4 md:mt-8 flex justify-start">
              <button
                type="button"
                onClick={() => navigate("/playground")}
                className="px-6 py-3.5 text-base font-medium text-white flex items-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 animate-bounce"
              >
                <svg
                  className="w-5 h-5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
                  />
                </svg>
                Get Started Today
              </button>

              <button
                type="button"
                className="px-3 py-3.5 text-base font-medium text-white flex items-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-3"
                onClick={() =>
                  document
                    .getElementById("problem-statement")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 19 20"
                >
                  <path d="M16.025 15H14.91c.058-.33.088-.665.09-1v-1h2a1 1 0 0 0 0-2h-2.09a5.97 5.97 0 0 0-.26-1h.375a2 2 0 0 0 2-2V6a1 1 0 0 0-2 0v2H13.46a6.239 6.239 0 0 0-.46-.46V6a3.963 3.963 0 0 0-.986-2.6l.693-.693A1 1 0 0 0 13 2V1a1 1 0 0 0-2 0v.586l-.661.661a3.753 3.753 0 0 0-2.678 0L7 1.586V1a1 1 0 0 0-2 0v1a1 1 0 0 0 .293.707l.693.693A3.963 3.963 0 0 0 5 6v1.54a6.239 6.239 0 0 0-.46.46H3V6a1 1 0 0 0-2 0v2a2 2 0 0 0 2 2h.35a5.97 5.97 0 0 0-.26 1H1a1 1 0 0 0 0 2h2v1a6 6 0 0 0 .09 1H2a2 2 0 0 0-2 2v2a1 1 0 1 0 2 0v-2h1.812A6.012 6.012 0 0 0 8 19.907V10a1 1 0 0 1 2 0v9.907A6.011 6.011 0 0 0 14.188 17h1.837v2a1 1 0 0 0 2 0v-2a2 2 0 0 0-2-2ZM11 6.35a5.922 5.922 0 0 0-.941-.251l-.111-.017a5.52 5.52 0 0 0-1.9 0l-.111.017A5.924 5.924 0 0 0 7 6.35V6a2 2 0 1 1 4 0v.35Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="relative z-10 h-full w-full object-cover sm:h-[calc(100%-2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%-4rem)] md:rounded-ss-[60px]"
        >
          <source
            src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/hv2LP1.mp4?updatedAt=1751041562098"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex justify-center">
        <h1 className="pt-5 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          BlockCards Showcase
        </h1>
      </div>

      <BlockShowcase />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      {/* Problem Statement Section */}
      <section className="relative z-10  bg-[#f3f8ff] dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <h2
              id="problem-statement"
              className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
            >
              <mark className="px-4  text-white bg-blue-600 rounded-sm dark:bg-blue-500">
                Problem Statement
              </mark>
            </h2>

            <p className="text-l font-normal text-black dark:text-gray-400 mb-6 leading-relaxed text-justify">
              In today’s digital age, the demand for secure, transparent, and
              tamper-proof data storage and collaboration tools has grown
              significantly. Centralized systems, though convenient, suffer from
              vulnerabilities like data breaches, single points of failure,
              limited transparency, and unverifiable data modifications—creating
              trust issues for institutions and organizations.
            </p>

            <div className="flow-root">
              <dl className="-my-3 divide-y divide-gray-300 text-l">
                {[
                  {
                    title: "Lack of Trust in Centralized Platforms",
                    description:
                      "Traditional systems fail to provide verifiability, auditability, and full control over digital records, making them unreliable for critical data.",
                  },
                  {
                    title: "Limited Educational Blockchain Tools",
                    description:
                      "Most blockchain platforms focus on financial use cases and lack user-friendly, interactive environments for learning core concepts like PoW, PoH, and gas tracking.",
                  },
                  {
                    title: "Barrier to Blockchain Adoption in Education",
                    description:
                      "There are very few tools that combine decentralized infrastructure with intuitive interfaces tailored for educational collaboration, research, and experimentation.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 gap-2 py-3 sm:grid-cols-3 sm:gap-4"
                  >
                    <dt
                      className="font-medium text-black"
                      style={{ textAlign: "justify" }}
                    >
                      <strong>{item.title}</strong>
                    </dt>
                    <dd
                      className="text-black sm:col-span-2 leading-relaxed"
                      style={{ textAlign: "justify" }}
                    >
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <h2
              id="proposed-solution"
              className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
            >
              <mark className="px-4 text-white bg-blue-600 rounded-sm dark:bg-blue-500">
                Proposed Solution
              </mark>
            </h2>

            <p className="text-lg font-normal text-black dark:text-gray-400 mb-6 leading-relaxed text-justify">
              Helixure v2.0 provides a comprehensive solution that addresses the
              identified challenges through the following key features and
              approaches:
            </p>

            <div className="flow-root">
              <dl className="-my-3 divide-y divide-gray-300 text-lg">
                {[
                  {
                    title: "Blockchain-Based Architecture",
                    description:
                      "A decentralized system where data is stored as immutable blocks linked through cryptographic hashes, ensuring transparency and tamper resistance.",
                  },
                  {
                    title: "Private and Shared Spaces",
                    description:
                      "Support for both individual and collaborative environments, with role-based access control for owners, editors, and viewers.",
                  },
                  {
                    title: "Interactive Block Creation and Validation",
                    description:
                      "Integrates Proof of Work (PoW) and Proof of History (PoH) to teach and apply blockchain concepts through real-time block creation.",
                  },
                  {
                    title: "Gas Meter Simulation",
                    description:
                      "A dynamic gas meter that simulates blockchain resource usage and encourages optimized data interactions.",
                  },
                  {
                    title: "User-Friendly Interface",
                    description:
                      "A visual, interactive platform allowing users to create, view, and manage blockchain records with no prior technical expertise.",
                  },
                  {
                    title: "Scalability and Extensibility",
                    description:
                      "Built for future growth, supporting integrations like AI-based analytics, external APIs, and advanced blockchain functionalities.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 gap-2 py-3 sm:grid-cols-3 sm:gap-4"
                  >
                    <dt
                      className="font-medium text-black"
                      style={{ textAlign: "justify" }}
                    >
                      <strong>{item.title}</strong>
                    </dt>
                    <dd
                      className="text-black sm:col-span-2 leading-relaxed"
                      style={{ textAlign: "justify" }}
                    >
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <mark className="px-4  text-white bg-blue-600 rounded-sm dark:bg-blue-500">
                  Vision
                </mark>
              </h2>

              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4 text-justify">
                To establish a secure, decentralized platform for managing,
                validating, and collaborating on digital data. Helixure
                envisions a future where transparency, trust, and data integrity
                define every digital interaction—empowering both learners and
                professionals through hands-on blockchain exploration.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <mark className="px-4  text-white bg-blue-600 rounded-sm dark:bg-blue-500">
                  Mission
                </mark>
              </h2>

              <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 ">
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <b>Decentralized Records:</b> Secure and traceable data via
                  blockchain.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <b>User-Friendly Blockchain:</b> Simplify PoW, PoH, and gas
                  metering.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <b>Collaborative Spaces:</b> Role-based private and shared
                  environments.{" "}
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <b>Hands-On Learning:</b> Explore decentralized tech
                  practically.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <b>Continuous Growth:</b> Evolve with feedback and new tech.
                </li>
              </ul>
            </div>
          </div>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <div className="flex justify-center">
            <h1 className="pt-5 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Meet the Maker
            </h1>
          </div>

          <div className="w-full flex justify-center">
            <TiltedCard
              imageSrc="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/Kshitij%20K%20Sawant%20Cryptocurrency%20Photo.jpg?updatedAt=1751044291591"
              altText="Ks Profile Card"
              captionText="Kshitij K Sawant"
              containerHeight="65vh"
              containerWidth="30vw"
              imageHeight="65vh"
              imageWidth="30vw"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  {/* GitHub Button */}
                  <a
                    href="https://github.com/KshitijSawant1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-[#24292F] hover:bg-[#1f2327] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 transition"
                  >
                    <svg
                      className="w-6 h-6 text-white mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </a>

                  {/* LinkedIn Button */}
                  <a
                    href="https://www.linkedin.com/in/kshitijksawant/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-[#0A66C2] hover:bg-[#084c98] focus:ring-4 focus:outline-none focus:ring-[#0A66C2]/50 font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center dark:focus:ring-[#0A66C2]/55 transition"
                  >
                    <svg
                      className="w-6 h-6 mr-2 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                        clipRule="evenodd"
                      />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              }
            />
          </div>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <h1 className="pt-5 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Testimonials
          </h1>

          <div className="grid mb-8 border border-gray-200 rounded-lg shadow-xs dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Redefining Secure Collaboration
                </h3>
                <p className="my-4">
                  "Helixure v2.0 offers a refreshing take on decentralized
                  collaboration. Its use of blockchain for educational and
                  professional record management is both secure and intuitive. A
                  promising innovation for the enterprise world."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-15 h-15"
                  src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/T1.jpg?updatedAt=1751047883365"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Meera K Sawant</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 ">
                    Senior Manager @Birlasoft
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Perfect Blend of Education and Technology
                </h3>
                <p className="my-4">
                  "Helixure v2.0 bridges the gap between theoretical blockchain
                  concepts and hands-on understanding. The gamified learning,
                  Proof of Work, and Proof of History make it an excellent tool
                  for students and educators alike."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-15 h-15"
                  src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/T2.jpg?updatedAt=1751047883365"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div> Poonam Gawade</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Skill Based Instituion Founder
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Blockchain Made Practical
                </h3>
                <p className="my-4">
                  "What stands out in Helixure v2.0 is its practical utility.
                  It’s not just another blockchain experiment—it’s a functioning
                  platform that solves real-world problems around trust,
                  transparency, and decentralized data ownership."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-15 h-15"
                  src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/T3.jpg?updatedAt=1751047883365"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Rahul Shambharkar</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Technical Lead @TCS
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  A Platform Built on Trust and Transparency
                </h3>
                <p className="my-4">
                  "In a world moving rapidly toward digital ecosystems, Helixure
                  v2.0 sets a new standard for integrity and traceability. Its
                  real-time gas tracking and visual blockchain tools make it
                  ideal for business and compliance use cases."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-15 h-15"
                  src="https://ik.imagekit.io/rhzh8en76/Helixure%20v2.0%20Assests/T4.jpg?updatedAt=1751047883365"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div> Krishnakumar Sawant</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    VP of Sales & Marketing, Pantex Nonwoven
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto p-6 sm:p-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Helixure v2.0
            </h1>
            <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
              Spiral of Integrity
            </p>
          </div>

          {/* Frontend Stack */}
          <div>
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Frontend
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
              <li>React.js</li>
              <li>Vite.js</li>
              <li>Tailwind CSS + Flowbite</li>
              <li>Framer Motion / GSAP</li>
              <li>React Router Dom</li>
              <li>React Toastify</li>
              <li>React Helmet</li>
              <li>React Flow / Dagre / ELK.js</li>
              <li>D3.js / Fabric.js</li>
              <li>Three.js / @react-three/fiber</li>
            </ul>
          </div>

          {/* Blockchain & Utilities */}
          <div>
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Blockchain & Utilities
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
              <li>Supabase (Auth, DB, Storage)</li>
              <li>Ethers.js</li>
              <li>SHA3 / BlakeJS (Hashing)</li>
              <li>html2canvas (Image Rendering)</li>
              <li>Metamask + Sephoila Testnet</li>
              <li>clsx (Conditional Styling)</li>
            </ul>
          </div>

          {/* Dev Tools */}
          <div>
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Dev Tools
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
              <li>ESLint + Prettier</li>
              <li>TypeScript Types</li>
              <li>PostCSS + Autoprefixer</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025 Helixure.tech — Built with 💙 on Blockchain
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
