import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUsers, FaLightbulb, FaHandshake, FaAward } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <FaUsers />,
      title: 'Community Driven',
      description: 'We believe in the power of community and collective action to create meaningful change.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovative Solutions',
      description: 'Leveraging cutting-edge technology and creative thinking to solve complex challenges.',
    },
    {
      icon: <FaHandshake />,
      title: 'Collaborative Approach',
      description: 'Working together with stakeholders to ensure sustainable and impactful outcomes.',
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in everything we do.',
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
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who <span className="text-blue-800">We Are</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            NPC is a dedicated organization committed to fostering positive change through innovative programs,
            community engagement, and collaborative partnerships. We strive to create lasting impact in the
            communities we serve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl text-blue-800 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                To empower communities through education, innovation, and collaborative action.
                We aim to create sustainable solutions that address real-world challenges and
                improve the quality of life for all stakeholders.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                A world where every community has the resources, knowledge, and support needed
                to thrive. We envision a future built on collaboration, innovation, and shared success.
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
