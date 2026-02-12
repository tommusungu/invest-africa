'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ─── Portfolio Data ───────────────────────────────────────────────────────────
// Replace `image` paths with your actual images and `logo` with company logos.
const portfolioCompanies = [
  // ── CAPITAL MARKETS ──
  {
    sector: 'Capital Markets & Financial Services',
    name: 'Nairobi Pesa City Securities Exchange',
    logo: '/logos/nairobi-pesa-city.png',
    image: '/portfolio/securities-exchange.jpg',
    description:
      'Operating from Nairobi GTC and licensed by the Capital Markets Authority, the Nairobi Pesa City Securities Exchange is an innovative securities exchange offering automated trading and a broad range of financial instruments — equities, bonds, and REITs. It emphasises accessibility for both retail and institutional investors, with plans to introduce new asset classes to expand Kenya\'s capital markets.',
    tags: ['Equities', 'Bonds', 'REITs', 'CMA Licensed'],
  },
  {
    sector: 'Capital Markets & Financial Services',
    name: 'ADAM Advisory (ADGM)',
    logo: '/logos/adam-advisory.png',
    image: '/portfolio/adam-advisory.jpg',
    description:
      'Africa Diaspora Asset Managers (ADAM Advisory) is the first diaspora-focused fund manager in Kenya, operating as a registered subsidiary in Abu Dhabi Global Market (ADGM). It provides diversified unit trusts including money market, fixed income, equities, property, and SME-focused private equity — empowering the Kenyan diaspora and pan-African investors with digital asset management tools.',
    tags: ['Diaspora Finance', 'Unit Trusts', 'ADGM Regulated', 'Private Equity'],
  },
  {
    sector: 'Capital Markets & Financial Services',
    name: 'Africa Green Infrastructure Investment Fund',
    logo: '/logos/agiif.png',
    image: '/portfolio/agiif.jpg',
    description:
      'Based in Mauritius and aligned with the Alliance for Green Infrastructure in Africa\'s vision, AGIIF plans to raise $400 million for early-stage green infrastructure projects across energy, transportation, and ICT. Managed by ADAM, the fund blends grants, equity, and commercial capital to de-risk investments, targeting a $10 billion project pipeline fostering Africa\'s long-term resilience.',
    tags: ['Green Finance', '$400M Target', 'Mauritius Based', 'Infrastructure'],
  },
  {
    sector: 'Capital Markets & Financial Services',
    name: 'Nawiri Digital Bank',
    logo: '/logos/nawiri.png',
    image: '/portfolio/nawiri.jpg',
    description:
      'Nawiri is a digital banking platform addressing diaspora financial needs, providing remittance services and accessible fintech solutions in partnership with EN Money, STC, and Ooredoo. It supports instant transfers, savings accounts, and cross-border commerce — promoting financial inclusion for Africans at home and abroad.',
    tags: ['Digital Banking', 'Remittances', 'Fintech', 'Financial Inclusion'],
  },
  {
    sector: 'Capital Markets & Financial Services',
    name: 'Mzalendo Pension Fund',
    logo: '/logos/mzalendo.png',
    image: '/portfolio/mzalendo.jpg',
    description:
      'Mzalendo delivers diaspora-led pension schemes for Kenyans abroad, offering social security solutions tailored to mobile workers and retirees. The fund builds diversified portfolios aligned with global pension best practices, leveraging regulatory reforms to strengthen retirement security for the African diaspora.',
    tags: ['Pension', 'Diaspora', 'Social Security', 'Retirement'],
  },

  // ── HEALTHCARE ──
  {
    sector: 'Healthcare & Digital Health',
    name: 'DigiAfya Marketplace',
    logo: '/logos/digiafya.png',
    image: '/portfolio/digiafya-marketplace.jpg',
    description:
      'DigiAfya operates a tech-driven marketplace connecting private hospitals, providers, and pharmacies to affordable, quality medical commodities and equipment. In partnership with financing institutions, it supports access to stock and equipment financing for the private health sector — reducing costs and improving healthcare delivery across Africa.',
    tags: ['HealthTech', 'Medical Commodities', 'Equipment Finance', 'B2B'],
  },
  {
    sector: 'Healthcare & Digital Health',
    name: 'DigiAfya Health Information System',
    logo: '/logos/digiafya.png',
    image: '/portfolio/digiafya-his.jpg',
    description:
      'An interoperable digital platform that enhances hospital and clinic management by supporting patient records, data analytics, and secure reporting. DigiAfya HIS enables evidence-based healthcare and efficient health administration, strengthening the private health sector\'s capacity to deliver quality outcomes.',
    tags: ['HIS', 'Patient Records', 'Health Analytics', 'Digital Health'],
  },

  // ── FOOD & AGRICULTURE ──
  {
    sector: 'Agriculture & Food Security',
    name: 'Mazao Commodities Exchange',
    logo: '/logos/mazao.png',
    image: '/portfolio/mazao.jpg',
    description:
      'Mazao provides a secure, transparent platform for agricultural commodity trading, helping farmers and traders achieve better pricing, improved risk management, and greater market access. By digitising commodity trading, Mazao supports national food security and agricultural productivity across East Africa.',
    tags: ['Commodities', 'Agri-Trading', 'Food Security', 'Marketplace'],
  },
  {
    sector: 'Agriculture & Food Security',
    name: 'Warehouse Receipt System (WRS)',
    logo: '/logos/amac.png',
    image: '/portfolio/wrs.jpg',
    description:
      'Developed in partnership with ACE Global, Kenya\'s first digital Warehouse Receipt System allows agripreneurs to use insured stored crops as collateral. This innovative trade instrument facilitates access to trade finance, reduces post-harvest losses, and encourages fair returns — transforming how farmers access capital.',
    tags: ['Trade Finance', 'AgriFinance', 'Post-Harvest', 'Collateral'],
  },

  // ── LOGISTICS & TRAVEL ──
  {
    sector: 'Logistics & Trade Platforms',
    name: 'Port Community System',
    logo: '/logos/emea-port.png',
    image: '/portfolio/port-community.jpg',
    description:
      'Operated by Invest Africa\'s subsidiary, EMEA Port Logistics Ltd, in partnership with DP World, this digital port solution integrates customs, clearing agents, shippers, and port authorities on a unified data platform. It enhances efficiency, transparency, and coordination in Kenya\'s maritime logistics — reducing bottlenecks and improving trade flows.',
    tags: ['Port Logistics', 'DP World', 'Trade Facilitation', 'Maritime'],
  },
  {
    sector: 'Logistics & Trade Platforms',
    name: 'E-Jumla',
    logo: '/logos/e-jumla.png',
    image: '/portfolio/e-jumla.jpg',
    description:
      'E-Jumla digitises car trading with a marketplace for new imported vehicles. It offers competitive pricing, financing through partner banks, and a streamlined buying experience for customers seeking alternative car markets — making vehicle ownership more accessible across Kenya.',
    tags: ['AutoTech', 'Vehicle Finance', 'Marketplace', 'Import'],
  },
  {
    sector: 'Logistics & Trade Platforms',
    name: 'Tamair Ltd',
    logo: '/logos/tamair.png',
    image: '/portfolio/tamair.webp',
    description:
      'As Kenya\'s exclusive Passenger Sales Agent for Flynas, Tamair facilitates direct commercial flights to Saudi Arabia. This partnership boosts business travel, pilgrimage, and economic links between Kenya and the Gulf region — opening new corridors for trade and people movement.',
    tags: ['Aviation', 'Gulf Corridor', 'Flynas', 'Travel'],
  },

  // ── RENEWABLE ENERGY ──
  {
    sector: 'Renewable Energy & Clean Cooking',
    name: 'Eveready ICEP',
    logo: '/logos/icep.png',
    image: '/portfolio/icep.jpg',
    description:
      'Following the acquisition of Eveready, Invest Africa transformed operations into ICEP — a platform offering clean energy solutions including briquettes, solar systems, LPG, and renewables. ICEP catalyses Africa\'s transition from fossil fuels, providing affordable, sustainable energy to households and businesses across the continent.',
    tags: ['Clean Energy', 'Solar', 'Briquettes', 'LPG'],
  },

  // ── HUMAN CAPITAL ──
  {
    sector: 'Human Capital & Workforce Solutions',
    name: 'M-Ajira',
    logo: '/logos/m-ajira.png',
    image: '/portfolio/m-ajira.jpeg',
    description:
      'Owned by Execuget Consult under Invest Africa, M-Ajira is a workforce placement platform leveraging AI, mobile, and digital technology to connect African youth and professionals with job opportunities abroad. Operating physical offices in Dubai and Saudi Arabia, it provides broader outreach, client service, and quality placement.',
    tags: ['Workforce', 'AI Placement', 'Gulf Jobs', 'Youth Employment'],
  },
//   {
//     sector: 'Human Capital & Workforce Solutions',
//     name: 'GAI Campus BPO',
//     logo: '/logos/gai.png',
//     image: '/portfolio/gai.jpg',
//     description:
//       'Gulf African International\'s Campus BPO pilots outsourcing within university settings, offering students practical work experience and income. This initiative reduces operational costs and enhances industry competitiveness by blending education with employability — creating a pipeline of job-ready graduates.',
//     tags: ['BPO', 'University Partnerships', 'Youth Employment', 'Outsourcing'],
//   },
];

// ─── Sector groupings for header pills ───────────────────────────────────────
const sectors = [
  'Capital Markets & Financial Services',
  'Healthcare & Digital Health',
  'Agriculture & Food Security',
  'Logistics & Trade Platforms',
  'Renewable Energy & Clean Cooking',
  'Human Capital & Workforce Solutions',
];

// ─── Single alternating card ──────────────────────────────────────────────────
const PortfolioCard = ({ company, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`grid lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl  border border-red-100 ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Image — left on even, right on odd */}
      <div className={`relative h-72 lg:h-auto ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <img
          src={company.image}
          alt={company.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80';
          }}
        />
        {/* Sector badge overlay */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 rounded-full bg-red-800 text-white text-xs font-semibold shadow">
            {company.sector}
          </span>
        </div>
      </div>

      {/* Content — right on even, left on odd */}
      <div
        className={`bg-white p-8 lg:p-12 flex flex-col justify-center ${
          isEven ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        {/* Logo */}
        <div className="mb-6 h-20 flex items-center">
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="max-h-20 max-w-[160px] object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Name */}
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          {company.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed mb-6">{company.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {company.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-800 text-sm font-medium border border-red-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ─── Sector Divider ───────────────────────────────────────────────────────────
const SectorDivider = ({ name }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4 pt-4"
    >
      <div className="w-1 h-8 bg-red-800 rounded-full flex-shrink-0" />
      <h3 className="text-xl font-bold text-red-800 uppercase tracking-widest text-sm">
        {name}
      </h3>
      <div className="flex-1 h-px bg-red-100" />
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const PortfolioShowcase = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  // Group companies by sector
  const grouped = sectors.map((sector) => ({
    sector,
    companies: portfolioCompanies.filter((c) => c.sector === sector),
  }));

  // Flat list with a running index for alternation
  let globalIndex = 0;

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-semibold mb-4">
            Portfolio Overview
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-800">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Invest Africa owns and manages a diversified portfolio of ventures across
            six critical pillars of Africa's economic development.
          </p>
        </motion.div>

        {/* Grouped portfolio by sector */}
        <div className="space-y-20">
          {grouped.map(({ sector, companies }) => {
            if (companies.length === 0) return null;
            return (
              <div key={sector} className="space-y-10">
                <SectorDivider name={sector} />
                <div className="space-y-10">
                  {companies.map((company) => {
                    const card = (
                      <PortfolioCard
                        key={company.name}
                        company={company}
                        index={globalIndex}
                      />
                    );
                    globalIndex++;
                    return card;
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discuss Co-Investment Opportunities
            </button>
            <button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-800 text-red-800 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300"
            >
              Request Portfolio Overview
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;