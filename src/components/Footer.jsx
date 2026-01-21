import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Why NPC', href: '#why-npc' },
      { name: 'Our Ecosystem', href: '#ecosystem' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Innovation', href: '#what-we-offer' },
      { name: 'Governance', href: '#what-we-offer' },
      { name: 'Sustainability', href: '#what-we-offer' },
      { name: 'Opportunity', href: '#what-we-offer' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' },
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
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">NPC</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Nairobi Pesa City (NPC) is a world-class financial hub strategically positioned at the heart of Nairobi’s financial ecosystem. Designed to rival global financial centres such as Wall Street and Canary Wharf, NPC is set to become Africa’s premier destination for financial institutions, investors, and innovators seeking opportunity, scale, and global connectivity.
            </p>

          
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:scale-110"
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
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Offer */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">What we offer</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact us</h4>
              {/* Contact Info */}
            <div className="space-y-2 text-gray-400 text-sm mb-6">
              <p>20th Floor, GTC Office Tower, Chiromo Road</p>
              <p>1828-00200 NRB</p>
              <p>
                <a
                  href="mailto:nairobipesacity@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  nairobipesacity@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+254111048900"
                  className="hover:text-white transition-colors"
                >
                  +254 111 048 900
                </a>
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NPC. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm font-medium">Back to top</span>
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-blue-800 transition-all duration-300 transform group-hover:-translate-y-1">
              <FaArrowUp className="text-sm" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
