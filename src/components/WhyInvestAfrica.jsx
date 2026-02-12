'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaMapMarkedAlt,
  FaBriefcase,
  FaGlobeAfrica,
  FaChartLine,
} from 'react-icons/fa';

const WhyInvestAfrica = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reasons = [
    {
      icon: <FaMapMarkedAlt />,
      title: 'Pan-African Presence',
      description:
        'Headquartered in Nairobi with strategic offices in Dubai and Mauritius, Invest Africa provides unrivalled access to African markets while operating under international regulatory frameworks.',
    },
    {
      icon: <FaBriefcase />,
      title: 'Proven Track Record',
      description:
        'Over 60 years of collective market experience across capital markets, energy, healthcare, agriculture, and logistics — with a diversified portfolio of operational ventures across the continent.',
    },
    {
      icon: <FaChartLine />,
      title: 'Structured Investment Access',
      description:
        'A comprehensive co-investment framework including private equity participation, structured products, asset-backed opportunities, and green finance vehicles — all backed by rigorous due diligence.',
    },
    {
      icon: <FaGlobeAfrica />,
      title: 'Trusted Entry Point into Africa',
      description:
        'Invest Africa serves as the gateway for global investors seeking Africa exposure — connecting capital with opportunity through deep local knowledge and international governance standards.',
    },
  ];

  return (
    <section
      id="why-invest-africa"
      ref={ref}
      className="py-24 bg-gradient-to-br from-white to-red-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
            Why Partner With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-red-800">Invest Africa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A purpose-built pan-African investment platform designed to give institutions and
            investors a competitive edge across the continent's fastest-growing markets.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative bg-white p-10 transition-all duration-300 border border-gray-100"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-600 to-red-800 rounded-l-2xl"></div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-red-800 text-white text-2xl flex items-center justify-center">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvestAfrica;