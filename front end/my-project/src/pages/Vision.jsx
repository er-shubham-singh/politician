import React, { useState } from "react";
import { motion } from "framer-motion";
import JoinModal from "../components/JoinModal";

export default function Vision({ onLearn = () => {} }) {
  const [showJoinModal, setShowJoinModal] = useState(false);

  return (
    <>
      <section className="max-w-4xl mx-auto my-12 p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                d="M3 8v8a2 2 0 0 0 2 2h14V6H5a2 2 0 0 0-2 2z"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 8v-2a3 3 0 0 1 3-3h4"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <div className="flex-1">
            <motion.h2
              initial={{ y: -6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="text-2xl md:text-3xl font-semibold text-gray-900"
            >
              Our Vision
            </motion.h2>

            <motion.p
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45 }}
              className="mt-3 text-gray-700 leading-relaxed text-sm md:text-base"
            >
              We are building a trusted, community-driven news platform that keeps
              people informed about important updates happening near them. Our
              mission is to connect residents with timely, local stories and to
              open doors for volunteers — reporters, photographers, and
              contributors — so every neighborhood voice can be heard.
            </motion.p>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span>
                  Location-based alerts and updates relevant to your immediate
                  community.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Volunteer-driven reporting — get involved, earn trust.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Verified, concise stories designed for busy local readers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Tools to collaborate, verify, and amplify community voices.</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowJoinModal(true)}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                Join as Volunteer
              </button>

              <button
                onClick={onLearn}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-100"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-6 text-xs text-gray-400">
          <span>Designed for local impact — powered by community contributors.</span>
        </footer>
      </section>

      {showJoinModal && <JoinModal onClose={() => setShowJoinModal(false)} />}
    </>
  );
}
