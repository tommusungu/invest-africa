import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Logo entries — replace src paths with your actual logo files
const logos = [
  { name: 'Nairobi Pesa City', src: '/logos/nairobi-pesa-city.png' },
//   { name: 'ADAM Advisory', src: '/logos/adam-advisory.png' },
  { name: 'ADAM Capital DIFC', src: '/logos/adam-advisory.png' },
//   { name: 'Africa Green Infrastructure Investment Fund', src: '/logos/agiif.png' },
//   { name: 'Mzalendo Pension Fund', src: '/logos/mzalendo.png' },
  { name: 'Nawiri Digital Bank', src: '/logos/nawiri.png' },
  { name: 'DigiAfya', src: '/logos/digiafya.png' },
//   { name: 'Mazao Exchange', src: '/logos/amac.png' },
  { name: 'AMAC', src: '/logos/amac.png' },
  { name: 'EMEA Port Logistics', src: '/logos/emea-port.png' },
//   { name: 'E-Jumla', src: '/logos/e-jumla.png' },
  { name: 'Tamair', src: '/logos/tamair.png' },
  { name: 'Eveready ICEP', src: '/logos/icep.png' },
  { name: 'M-Ajira', src: '/logos/m-ajira.png' },
//   { name: 'GAI Campus BPO', src: '/logos/gai.png' },
  { name: 'Execuget', src: '/logos/execuget.png' },
];

// Duplicate logos for seamless infinite scroll
const doubled = [...logos, ...logos];

const LogoCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="logo-carousel" ref={ref} className="py-16 bg-white overflow-hidden">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Portfolio <span className="text-red-800">Companies</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A diversified family of ventures across Africa's most critical sectors.
          </p>
        </motion.div>
      </div> */}

      {/* Carousel Track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-10 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              ease: 'linear',
              repeat: Infinity,
            }}
            style={{ width: 'max-content' }}
          >
            {doubled.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center group"
                style={{ width: '160px' }}
              >
                <div className="w-36 h-20 flex items-center justify-center px-4 py-3 ">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-20 max-w-full object-contain  transition-all duration-300"
                    onError={(e) => {
                      // Fallback: show company name text if logo not found
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span
                    className="text-xs font-semibold text-gray-600 text-center leading-tight hidden"
                    style={{ display: 'none' }}
                  >
                    {logo.name}
                  </span>
                </div>
                {/* <p className="mt-2 text-xs text-gray-400 text-center font-medium group-hover:text-red-700 transition-colors duration-300 px-1 line-clamp-2">
                  {logo.name}
                </p> */}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;