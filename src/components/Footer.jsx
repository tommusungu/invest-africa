import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Investment Approach', href: '#investment-approach' },
      { name: 'Our Portfolio', href: '#portfolio' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact', href: '#contact' },
    ],
    sectors: [
      { name: 'Capital Markets', href: '#portfolio' },
      { name: 'Renewable Energy', href: '#portfolio' },
      { name: 'Healthcare', href: '#portfolio' },
      { name: 'Agriculture', href: '#portfolio' },
      { name: 'Logistics', href: '#portfolio' },
      { name: 'Human Capital', href: '#portfolio' },
    ],
  };

  const socialLinks = [
    { icon: <FaFacebook />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-gray-200 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <img
                src="/logos/invest_Africa-removebg-preview.png"
                alt="Invest Africa Logo"
                className="h-20 w- mb-4 w-auto transition-all duration-300 brightness-0 invert drop-shadow-lg"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Invest Africa is a dynamic pan-African holding company and principal investor dedicated to driving Africa's economic transformation. Headquartered in Nairobi, with strategic offices in Dubai and Mauritius.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center text-gray-300 hover:bg-red-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300 text-sm mb-6">
              <p>20th Floor, GTC, Nairobi</p>
              <p>
                <a href="mailto:investors@invest-africa.com" className="hover:text-white transition-colors">
                  investors@invest-africa.com
                </a>
              </p>
              <p>
                <a href="tel:+254111048900" className="hover:text-white transition-colors">
                  +254 111 048 900
                </a>
              </p>
              <p className="pt-2 text-gray-400">Regional Offices: Dubai | Mauritius</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Invest Africa. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm font-medium">Back to top</span>
            <div className="w-8 h-8 rounded-full bg-red-800 flex items-center justify-center group-hover:bg-red-700 transition-all duration-300 transform group-hover:-translate-y-1">
              <FaArrowUp className="text-sm" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;