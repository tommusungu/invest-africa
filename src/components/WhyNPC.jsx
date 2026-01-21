'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaMapMarkedAlt,
  FaBuilding,
  FaPercent,
  FaGlobeAfrica,
} from 'react-icons/fa';

const WhyNPC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reasons = [
    {
      icon: <FaMapMarkedAlt />,
      title: 'Strategic Location',
      description:
        'Located in Nairobi—East Africa’s commercial and financial capital—NPC provides unrivalled access to regional and global markets.',
    },
    {
      icon: <FaBuilding />,
      title: 'Global-Standard Infrastructure',
      description:
        'Grade-A office spaces, smart buildings, high-speed connectivity, secure data centres, and modern amenities purpose-built for today’s financial institutions.',
    },
    {
      icon: <FaPercent />,
      title: 'Competitive Incentives',
      description:
        'A comprehensive incentive framework including preferential tax rates, duty exemptions, 100% investment deduction allowances, and seamless one-stop-shop regulatory services.',
    },
    {
      icon: <FaGlobeAfrica />,
      title: 'Gateway to Africa',
      description:
        'Positioning institutions at the heart of Africa’s fastest-growing markets while operating within a globally competitive financial environment.',
    },
  ];

  return (
    <section
      id="why-npc"
      ref={ref}
      className="py-24 bg-gradient-to-br from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
            Why Choose NPC
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-blue-800">Nairobi Pesa City</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A purpose-built financial city designed to give institutions a
            competitive edge in Africa and beyond.
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
              className="relative bg-white  p-10  transition-all duration-300 border border-gray-100"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-800 rounded-l-2xl"></div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-800 text-white text-2xl flex items-center justify-center">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNPC;
