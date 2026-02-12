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
      question: 'What is Invest Africa?',
      answer:
        'Invest Africa is a dynamic pan-African holding company and principal investor headquartered in Nairobi, with strategic offices in Dubai and Mauritius. With over 60 years of collective market experience, we own and manage a diversified portfolio across capital markets, renewable energy, digital healthcare, agriculture, logistics, and human capital.',
    },
    {
      question: 'How does Invest Africa operate as an investor?',
      answer:
        'We operate as an active operational investor — combining capital deployment with hands-on venture building and strategic oversight. Our investment philosophy is anchored on sector-focused diversification, strong governance, risk-mitigated capital structuring, and long-term value creation.',
    },
    {
      question: 'What co-investment opportunities are available?',
      answer:
        'We welcome strategic partnerships and institutional investors seeking private equity participation, structured products and asset-backed opportunities, infrastructure and green finance vehicles, diaspora-focused investment platforms, and sector-specific growth capital partnerships. Each opportunity is supported by robust due diligence and governance oversight.',
    },
    {
      question: 'How does Invest Africa approach ESG?',
      answer:
        'Our strategy integrates Environmental, Social, and Governance (ESG) principles into every investment decision. We prioritize financial inclusion, clean energy transition, youth employment and skills development, green infrastructure development, and sustainable trade ecosystems.',
    },
    {
      question: 'What investor resources are available?',
      answer:
        'Upon request and under appropriate confidentiality agreements, we provide a corporate profile, portfolio overview, investment memorandum, ESG framework, and financial summaries. Please reach out to our investor relations team at investors@invest-africa.com.',
    },
    {
      question: 'Where does Invest Africa operate?',
      answer:
        'Our portfolio companies operate across Nairobi, Dubai, Mauritius, and key African markets, leveraging international regulatory frameworks and regional partnerships. We are headquartered at the Nairobi Global Trade Centre (GTC) on the 20th Floor.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-red-800">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Invest Africa's mandate, portfolio, and investor engagement.
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
              alt="Invest Africa"
              className="w-full h-[80vh] object-cover"
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
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-red-300 transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-red-50"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-red-800 text-xl" />
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
                      <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>
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