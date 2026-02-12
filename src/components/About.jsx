import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaChartLine, FaGlobeAfrica, FaHandshake, FaSeedling } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: <FaChartLine />,
      title: 'Capital Markets',
      description:
        'Operating securities exchanges, fund management platforms, and digital banking solutions that channel capital across Africa and the diaspora.',
    },
    {
      icon: <FaSeedling />,
      title: 'Renewable Energy',
      description:
        "Driving Africa's clean energy transition through briquettes, solar, LPG, and green infrastructure investment vehicles targeting a $10B pipeline.",
    },
    {
      icon: <FaGlobeAfrica />,
      title: 'Pan-African Reach',
      description:
        "Headquartered in Nairobi with strategic offices in Dubai and Mauritius, operating across critical pillars of Africa's economic development.",
    },
    {
      icon: <FaHandshake />,
      title: 'Venture Building',
      description:
        'An active operational investor with a hands-on approach — building enduring, locally empowered businesses with international governance standards.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who <span className="text-red-800">We Are</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Invest Africa is a dynamic pan-African holding company and principal investor
            dedicated to driving Africa's economic transformation. With over 60 years of
            collective market experience, we own and manage a diversified portfolio across
            the critical pillars of Africa's development.
          </p>
        </motion.div>

        <div id="ecosystem" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl text-red-800 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;