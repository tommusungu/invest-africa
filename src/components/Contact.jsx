import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Investor Relations',
      content: 'investors@invest-africa.com',
      link: 'mailto:investors@invest-africa.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+254 111 048 900',
      link: 'tel:+254111048900',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Head Office',
      content: 'Nairobi Global Trade Centre (GTC), 20th Floor, Nairobi',
      link: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-red-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-red-800">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For investment inquiries, partnership discussions, or documentation requests,
            our investor relations team is ready to assist.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 transition-all duration-300 text-center group transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-800 text-2xl mb-4 group-hover:bg-red-800 group-hover:text-white transition-colors duration-300">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{info.content}</p>
            </motion.a>
          ))}
        </div>

        {/* Regional Offices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-red-800 to-red-900 rounded-2xl p-10 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Regional Offices</h3>
          <p className="text-red-100 text-lg mb-6">
            Invest Africa maintains a strategic global footprint to serve investors across regions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {['Nairobi, Kenya — Head Office', 'Dubai, UAE — Regional Office', 'Mauritius — Regional Office'].map(
              (office) => (
                <div
                  key={office}
                  className="bg-white/10 border border-white/20 rounded-lg px-6 py-3 text-white font-medium text-sm"
                >
                  {office}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;