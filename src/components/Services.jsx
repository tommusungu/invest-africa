import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaBuilding,
  FaMicrochip,
  FaBalanceScale,
  FaLeaf,
  FaRocket,
  FaNetworkWired,
} from 'react-icons/fa';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const facilities = [
    {
      icon: <FaBuilding />,
      title: 'Infrastructure & Facilities',
      description:
        'NPC delivers a fully integrated urban and financial environment with Grade-A office buildings, business centres, co-working spaces, conference and exhibition facilities, retail, dining, lifestyle amenities, hotels, residential options, and efficient transport connectivity.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: <FaMicrochip />,
      title: 'Innovation & Technology',
      description:
        'Technology is embedded at the core of NPC’s design. The district offers a plug-and-play environment with smart offices, advanced cybersecurity, high-speed digital infrastructure, and future-ready financial systems that support innovation at scale.',
      color: 'from-blue-700 to-blue-800',
    },
    {
      icon: <FaBalanceScale />,
      title: 'Governance & Leadership',
      description:
        'NPC operates under a robust governance framework with a Board of Directors providing strategic oversight, an Executive Leadership Team managing operations, and specialist functional teams across finance, innovation, legal, sustainability, and security.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: <FaLeaf />,
      title: 'Sustainability & Community',
      description:
        'NPC is committed to responsible and inclusive development through green building practices, renewable energy adoption, resource efficiency, community engagement, and long-term environmental stewardship.',
      color: 'from-blue-700 to-blue-800',
    },
    {
      icon: <FaRocket />,
      title: 'Opportunities at NPC',
      description:
        'NPC provides a powerful platform for financial institutions, investors, innovators, and professionals to establish regional or global headquarters, access capital markets, collaborate with leading players, and shape Africa’s financial future.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: <FaNetworkWired />,
      title: 'Connected Financial Ecosystem',
      description:
        'Designed as a fully connected ecosystem, NPC enables seamless collaboration between institutions, technology providers, regulators, and talent—accelerating growth, efficiency, and cross-border opportunity.',
      color: 'from-blue-700 to-blue-800',
    },
  ];

  return (
    <section
      id="what-we-offer"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
            Infrastructure & Facilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for <span className="text-blue-800">Global Finance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nairobi Pesa City is purpose-built to support world-class financial
            institutions through advanced infrastructure, strong governance,
            sustainable development, and unmatched opportunity.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className="p-8 relative">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${item.color} text-white text-2xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Opportunities at NPC
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
