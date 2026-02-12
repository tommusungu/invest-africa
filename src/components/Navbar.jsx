import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Investment Approach', href: '#investment-approach' },
    { name: 'Our Portfolio', href: '#portfolio' },
    { name: 'ESG & Impact', href: '#what-we-offer' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (!element) return;
    requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <img
              src="/logos/invest_Africa-removebg-preview.png"
              alt="Invest Africa Logo"
              className={`h-20 py-2.5 w-auto transition-all duration-300 ${
                scrolled ? 'brightness-100' : 'brightness-0 invert drop-shadow-lg'
              }`}
            />
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`transition-colors duration-300 font-medium ${
                  scrolled
                    ? 'text-gray-700 hover:text-red-900'
                    : 'text-white hover:text-red-200 drop-shadow-lg'
                }`}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={(e) => scrollToSection(e, '#contact')}
              className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                scrolled
                  ? 'bg-red-900 text-white hover:bg-red-800 shadow-lg hover:shadow-xl'
                  : 'bg-white text-red-900 hover:bg-red-50 shadow-xl'
              }`}
            >
              Investor Enquiry
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${
                scrolled ? 'text-gray-700 hover:text-red-900' : 'text-white'
              }`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block text-gray-700 hover:text-red-900 transition-colors font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-900 text-white rounded-full font-semibold hover:bg-red-800 transition-all duration-300"
              >
                Investor Enquiry
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;