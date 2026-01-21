'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const More = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="more" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* ================= ABOUT NPC ================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/financial-district.jpg"
              alt="About Nairobi Pesa City"
              className="w-full h-[80vh]"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-4 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
              About NPC
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nairobi <span className="text-blue-800">Pesa City</span>
            </h2>

            {/* <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Nairobi Pesa City was conceived from a bold vision: to propel Kenya—and Africa—onto the global financial stage. Inspired by the world’s most successful financial districts, NPC is more than a development project; it is a catalyst for economic transformation.
            </p> */}

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              NPC is firmly anchored within the Nairobi International Financial Centre (NIFC) framework, offering investors and institutions a stable, predictable, and business-friendly regulatory environment that meets international standards for transparency and compliance.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              NPC is designed as a complete financial ecosystem that brings together institutions, talent, technology, and capital. The city will:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-lg mb-6 space-y-2">
              <li>Foster innovation through a dedicated FinTech and innovation centre.</li>
              <li>Develop world-class financial talent in partnership with universities and professional institutions.</li>
              <li>Enable cross-border trade, investment, and capital flows across Africa and beyond.</li>
            </ul>

            {/* <p className="text-lg text-gray-600 leading-relaxed">
              NPC is built on strong partnerships with government, the private sector, educational institutions, and technology leaders—ensuring a shared vision, aligned execution, and sustainable impact.
            </p> */}

             {/* Vision */}
            <div className="mb-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the preeminent financial hub in Africa, attracting leading financial institutions, international investors, and fostering sustainable economic growth for Kenya and the continent.
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
            <span className="inline-block px-4 py-2 mb-4 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
              Mission
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our <span className="text-blue-800">Purpose</span>
            </h2>

            {/* Mission */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <ul className="space-y-3 text-gray-600 text-lg list-disc list-inside">
                <li>Attract domestic and foreign investment by building a robust, globally competitive financial services ecosystem.</li>
                <li>Stimulate national economic growth through increased financial activity, job creation, and enterprise development.</li>
                <li>Position Kenya as a preferred global financial destination, accelerating its transition from a frontier to an emerging market.</li>
                <li>Channel capital and investment into key sectors that drive national and regional development.</li>
                <li>Deliver a transparent, efficient, and internationally aligned regulatory environment.</li>
                <li>Provide state-of-the-art infrastructure tailored for modern financial institutions.</li>
                <li>Promote innovation, technology adoption, and future-ready financial solutions.</li>
                <li>Serve as Africa’s gateway to global financial markets.</li>
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
              alt="NPC Vision and Mission"
              className="w-full h-[80vh]"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default More;
