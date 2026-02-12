import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaChartBar,
  FaShieldAlt,
  FaLeaf,
  FaRocket,
  FaHandHoldingUsd,
  FaNetworkWired,
} from 'react-icons/fa';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const pillars = [
    {
      icon: <FaChartBar />,
      title: 'Sector-Focused Diversification',
      description:
        "Our portfolio spans capital markets, renewable energy, healthcare, agriculture, logistics, and human capital — six critical pillars underpinning Africa's economic growth.",
      color: 'from-red-600 to-red-700',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Governance & Compliance',
      description:
        'Invest Africa maintains high governance standards aligned with international best practices, including structured board oversight, regulatory licensing across jurisdictions, and transparent reporting mechanisms.',
      color: 'from-red-700 to-red-800',
    },
    {
      icon: <FaLeaf />,
      title: 'ESG & Impact',
      description:
        'Our strategy integrates Environmental, Social, and Governance (ESG) principles into every investment decision — prioritising financial inclusion, clean energy, youth employment, and sustainable trade ecosystems.',
      color: 'from-red-600 to-red-700',
    },
    {
      icon: <FaHandHoldingUsd />,
      title: 'Risk-Mitigated Capital Structuring',
      description:
        'Each opportunity is supported by robust due diligence, financial modelling, and governance oversight — blending grants, equity, and commercial capital to de-risk investments.',
      color: 'from-red-700 to-red-800',
    },
    {
      icon: <FaRocket />,
      title: 'Long-Term Value Creation',
      description:
        'We build enduring, locally empowered businesses with international governance standards, targeting sustainable growth that creates lasting value for investors and communities.',
      color: 'from-red-600 to-red-700',
    },
    {
      icon: <FaNetworkWired />,
      title: 'Co-Investment Opportunities',
      description:
        'We welcome strategic partnerships for private equity participation, structured products, infrastructure and green finance vehicles, and diaspora-focused investment platforms across Africa.',
      color: 'from-red-700 to-red-800',
    },
  ];

  return (
    <section
      id="investment-approach"
      className="py-20 bg-gradient-to-br from-gray-50 to-red-50"
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
          <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Investment <span className="text-red-800">Philosophy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We operate as an active operational investor, combining capital deployment with
            hands-on venture building and strategic oversight across Africa's most critical sectors.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, index) => (
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

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Request Investor Documentation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;