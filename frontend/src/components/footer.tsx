import React from 'react';
import { Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone, Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Twitter />, label: 'Twitter', href: '#' },
    { icon: <Instagram />, label: 'Instagram', href: '#' },
    { icon: <Linkedin />, label: 'LinkedIn', href: '#' },
    { icon: <Youtube />, label: 'YouTube', href: '#' },
  ];

  const quickLinks = [
    { label: 'About Event', href: '#' },
    { label: 'Speakers', href: '#' },
    { label: 'Schedule', href: '#' },
    { label: 'Sponsors', href: '#' },
    { label: 'Venue', href: '#' },
    { label: 'FAQs', href: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Space background effects */}
      <div className="absolute inset-0">
        {/* Stars */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-[twinkle_4s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
        
        {/* Nebula effects */}
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] animate-[float_15s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-cyan-600/10 rounded-full blur-[80px] animate-[float_12s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Rocket className="text-3xl text-orange-500 animate-[pulse_2s_ease-in-out_infinite]" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">
                ASTRANOVA
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Igniting innovation and shaping the future through cutting-edge technology and visionary thinking. Join us as we explore the next frontier.
            </p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-3 h-3 bg-cyan-500 rounded-full mr-2 animate-pulse" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-2 bg-orange-500 rounded-full mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-2 animate-pulse" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Galaxy Convention Center<br />
                  Orbit Street, Tech City 10101
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-orange-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-orange-500" />
                <span className="text-gray-300">contact@astranova.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-2 animate-pulse" />
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get updates about speakers, schedule changes, and exclusive content.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-orange-600 to-purple-600 rounded-lg font-semibold hover:from-orange-700 hover:to-purple-700 transition-all hover:scale-[1.02]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 bg-gradient-to-r from-orange-600 to-cyan-600 rounded-full flex items-center justify-center">
            <Rocket className="text-white text-xs" />
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400">
            © {currentYear} ASTRANOVA. All rights reserved. Ignite the Future.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;