import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaChalkboardTeacher, FaProjectDiagram, FaPeopleCarry, FaChartLine, FaGlobe, FaTools } from 'react-icons/fa';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <FaChalkboardTeacher />,
      title: 'Education & Training',
      description: 'Comprehensive educational programs designed to equip individuals with the skills and knowledge needed for success.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <FaProjectDiagram />,
      title: 'Project Management',
      description: 'End-to-end project management services ensuring efficient execution and successful delivery of initiatives.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: <FaPeopleCarry />,
      title: 'Community Engagement',
      description: 'Building strong community connections through outreach programs and collaborative engagement strategies.',
      color: 'from-blue-700 to-blue-800',
    },
    {
      icon: <FaChartLine />,
      title: 'Strategic Planning',
      description: 'Data-driven strategic planning to help organizations achieve their long-term goals and objectives.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <FaGlobe />,
      title: 'Global Partnerships',
      description: 'Facilitating international collaborations and partnerships to expand reach and impact.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: <FaTools />,
      title: 'Technical Support',
      description: 'Providing technical expertise and support to ensure smooth operations and sustainable solutions.',
      color: 'from-blue-700 to-blue-800',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What <span className="text-blue-800">We Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to meet the unique needs of our communities and partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <div className="p-8 relative">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} text-white text-2xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
