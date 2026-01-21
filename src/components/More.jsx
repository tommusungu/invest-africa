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
              Why NPC
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nairobi <span className="text-blue-800">Pesa City</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Nairobi Pesa City is more than a development — it is a bold economic vision.
              Anchored within the Nairobi International Financial Centre (NIFC) and Special
              Economic Zone (SEZ) regulatory frameworks, NPC provides a transparent,
              efficient, and globally competitive environment for financial institutions,
              investors, and professional services firms.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              NPC is purpose built to support banks, investment firms, insurance companies,
              fintechs, asset managers, professional services firms, and multinational
              corporations seeking a strategic African base.
            </p>

             {/* Vision */}
            <div className="mb-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be Africa’s pre-eminent financial hub, attracting leading financial
                institutions, global investors, and driving sustainable economic growth
                for Kenya and the continent.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= VISION & MISSION ================= */}
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
                <li>Attract domestic and foreign investment through a globally competitive financial services ecosystem</li>
                <li>Stimulate national economic growth through increased financial activity and job creation</li>
                <li>Position Kenya as a leading emerging market financial destination</li>
                <li>Channel capital into strategic development sectors</li>
                <li>Establish a transparent, efficient, and internationally aligned regulatory environment</li>
                <li>Deliver state-of-the-art infrastructure for Africa and beyond</li>
                <li>Promote innovation, technology, and financial inclusion</li>
                <li>Serve as Africa’s gateway to global financial markets</li>
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
              className="w-full h-[80vh] "
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default More;
