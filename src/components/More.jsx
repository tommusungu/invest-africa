'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const More = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="more" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* ================= ABOUT INVEST AFRICA ================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/financial-district.jpg"
              alt="About Invest Africa"
              className="w-full h-[80vh] object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-4 rounded-full bg-red-100 text-red-800 text-sm font-semibold">
              About Invest Africa
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Invest <span className="text-red-800">Africa</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Invest Africa is a dynamic pan-African holding company and principal investor dedicated
              to driving Africa's economic transformation. Headquartered in Nairobi, with strategic
              offices in Dubai and Mauritius, we operate as an active operational investor with a
              hands-on approach to venture building and sector-focused investment.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With over 60 years of collective market experience, our investment philosophy combines
              deep market knowledge, rigorous research, and a commitment to building enduring,
              locally empowered businesses with international governance standards.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Our diversified portfolio spans six critical pillars:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-lg mb-8 space-y-2">
              <li>Capital Markets &amp; Financial Services</li>
              <li>Renewable Energy &amp; Clean Infrastructure</li>
              <li>Healthcare &amp; Digital Health Systems</li>
              <li>Agriculture &amp; Food Security</li>
              <li>Logistics &amp; Trade Platforms</li>
              <li>Human Capital &amp; Workforce Solutions</li>
            </ul>

            {/* Vision */}
            <div className="mb-4 mt-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To play a central and influential role in Africa's socio-economic growth by guiding
                sustainable capital towards key investment opportunities across the continent — becoming
                the trusted entry point into Africa.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= MISSION ================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-4 rounded-full bg-red-100 text-red-800 text-sm font-semibold">
              Mission
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our <span className="text-red-800">Purpose</span>
            </h2>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <ul className="space-y-3 text-gray-600 text-lg list-disc list-inside">
                <li>Drive Africa's economic transformation by actively supporting and connecting businesses and investors via our pan-African platform.</li>
                <li>Enable responsible and profitable private sector growth as a vital engine for Africa's development.</li>
                <li>Foster trade and sustainable development through our dynamic membership network and consultative services.</li>
                <li>Channel capital into renewable energy, healthcare, agriculture, and logistics to create lasting impact.</li>
                <li>Build enduring, locally empowered businesses that meet international governance standards.</li>
                <li>Unlock Africa's potential through strategic partnerships and impactful investment across the continent.</li>
                <li>Serve as the trusted entry point for global investors seeking exposure to Africa's growth story.</li>
              </ul>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/nairobi-skyline.jpg"
              alt="Invest Africa Vision and Mission"
              className="w-full h-[80vh] object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default More;