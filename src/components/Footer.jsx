import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
      label: 'Follow us on Instagram'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
      label: 'Connect with us on LinkedIn'
    }
  ];

  const contactEmails = [
    {
      label: 'General Inquiries',
      email: 'info@chesterfrontline.com'
    },
    {
      label: 'Support',
      email: 'support@chesterfrontline.com'
    }
  ];

  const footerLinks = [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
          {/* Left Section - Contact Info */}
          <div className="space-y-4">
            {/* Contact Emails */}
            <div className="space-y-2">
              {contactEmails.map((contact, index) => (
                <div key={index}>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
                  >
                    {contact.email}
                  </a>
                </div>
              ))}
            </div>

            {/* Logo */}
            <div className="flex items-center gap-3 pt-4">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                CHESTER FRONTLINE
              </span>
            </div>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            {/* Social Media */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <span className="font-medium text-sm">{social.name}</span>
                </a>
              ))}
            </div>

            {/* Footer Links */}
            <div className="flex items-center gap-6">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Chester Frontline. All rights reserved.
            </p>
            
            {/* Additional Info */}
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <span>Professional call center solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section (Optional) */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Stay updated with our latest insights
              </h3>
              <p className="text-gray-600 text-sm">
                Get industry news and best practices delivered to your inbox.
              </p>
            </div>
            
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;