'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is NPC?',
      answer:
        'Nairobi Pesa City (NPC) is a world-class financial district strategically positioned at the heart of Nairobi’s financial ecosystem. Anchored within the Nairobi International Financial Centre (NIFC) framework, NPC is designed to rival leading global financial hubs while serving as Africa’s gateway to global capital.',
    },
    {
      question: 'How can I get involved?',
      answer:
        'Institutions and professionals can engage with NPC by establishing regional or global headquarters, investing within the district, partnering within the ecosystem, or collaborating across finance, technology, and professional services to participate in Africa’s next-generation financial hub.',
    },
    {
      question: 'What programs do you offer?',
      answer:
        'NPC supports a wide range of financial, innovation, and ecosystem initiatives including FinTech innovation platforms, talent development partnerships with universities and professional institutions, and collaborative programs that enable cross-border trade, investment, and capital flows.',
    },
    {
      question: 'Who can benefit from your services?',
      answer:
        'NPC is designed for financial institutions, investors, FinTech innovators, professional services firms, multinational corporations, and talent seeking a globally competitive, transparent, and future-ready financial environment in Africa.',
    },
    {
      question: 'How is NPC governed?',
      answer:
        'NPC operates under a strong governance framework comprising a Board of Directors providing strategic oversight, an Executive Leadership Team managing operations and development, and specialist functional teams across finance, innovation, legal, sustainability, and stakeholder engagement.',
    },
    {
      question: 'Where is NPC located?',
      answer:
        'NPC is located in Nairobi, East Africa’s commercial and financial capital, providing unrivalled access to regional and international markets while operating within a globally aligned regulatory and business environment.',
    },
  ];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="faq" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-blue-800">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our organization and services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="hidden lg:block sticky top-8"
          >
            <img
              src="/hero.jpg"
              alt="Financial District"
              className="w-full h-[80vh]  object-cover"
            />
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-blue-50"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-blue-800 text-xl" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
