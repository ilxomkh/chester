import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Headphones, Briefcase, Target, Calendar, Users, Building, Building2, Cog, ArrowRight, HelpCircle, MessageCircle, BookOpen, Users2 } from 'lucide-react';

const Header = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceItems = [
    {
      category: "Call Center Solutions",
      items: [
        { icon: Phone, title: "Outbound Calling", desc: "Expand your reach with expert assistance." },
        { icon: Headphones, title: "Inbound Support", desc: "Deliver exceptional customer service." },
        { icon: Briefcase, title: "Sales Assistance", desc: "Boost conversions with skilled teams." }
      ]
    },
    {
      category: "Sales Support",
      items: [
        { icon: Target, title: "Lead Qualification", desc: "Identify high-value prospects efficiently." },
        { icon: Calendar, title: "Appointment Setting", desc: "Schedule meetings seamlessly." },
        { icon: Users, title: "Customer Retention", desc: "Maintain long-term relationships." }
      ]
    },
    {
      category: "Communication Services",
      items: [
        { icon: Building, title: "B2B Sales", desc: "Drive enterprise growth strategies." },
        { icon: Building2, title: "B2C Sales", desc: "Connect with consumers effectively." },
        { icon: Cog, title: "CRM Integration", desc: "Streamline your existing workflows." }
      ]
    }
  ];

  const supportItems = [
    { icon: HelpCircle, title: "Help Center", desc: "Find answers and documentation" },
    { icon: MessageCircle, title: "Get in Touch", desc: "Contact our support team" },
    { icon: BookOpen, title: "Resources", desc: "Access guides and tutorials" },
    { icon: Users2, title: "Community", desc: "Connect with other users" }
  ];

  const ServicesDropdown = () => (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white border border-gray-100 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out translate-y-2 group-hover:translate-y-0 z-50">
      <div className="p-8">
        <div className="grid grid-cols-4 gap-8">
          {serviceItems.map((section, sectionIdx) => (
            <div key={sectionIdx} className="space-y-4">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
                {section.category}
              </h3>
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="group/item cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-blue-50 transition-colors duration-200">
                      <item.icon className="w-5 h-5 text-gray-600 group-hover/item:text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover/item:text-blue-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 text-lg mb-3">
              Outsourcing Solutions
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Comprehensive services designed to optimize your business operations.
            </p>
            <button className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const SupportDropdown = () => (
    <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-100 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out translate-y-2 group-hover:translate-y-0 z-50">
      <div className="p-6">
        {supportItems.map((item, idx) => (
          <div key={idx} className="group/item cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover/item:bg-blue-50 transition-colors duration-200">
                <item.icon className="w-4 h-4 text-gray-600 group-hover/item:text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-sm group-hover/item:text-blue-900">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500">
                  {item.desc}
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover/item:text-blue-600 transition-colors duration-200" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm' 
          : 'bg-white border-b border-gray-100'
      }`}>
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                CHESTER FRONTLINE
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                  Our Services
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <ServicesDropdown />
              </div>

              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-gray-900 font-medium text-sm py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                About Us
              </button>

              <button 
                onClick={() => scrollToSection('answers')}
                className="text-gray-700 hover:text-gray-900 font-medium text-sm py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Insights
              </button>

              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                  Support
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <SupportDropdown />
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button 
                onClick={() => scrollToSection('booking')}
                className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Start Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="space-y-4">
                <div>
                  <button 
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 py-2"
                    onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                  >
                    Our Services
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === 'services' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${
                    activeDropdown === 'services' 
                      ? 'max-h-96 opacity-100 mt-3' 
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <div className="space-y-3 pl-4">
                      {serviceItems.flatMap(section => section.items).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 py-2">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-gray-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm">{item.title}</h4>
                            <p className="text-xs text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    scrollToSection('about');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block font-medium text-gray-900 py-2 text-left w-full"
                >
                  About Us
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('answers');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block font-medium text-gray-900 py-2 text-left w-full"
                >
                  Insights
                </button>
                
                <div>
                  <button 
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 py-2"
                    onClick={() => setActiveDropdown(activeDropdown === 'support' ? null : 'support')}
                  >
                    Support
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === 'support' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${
                    activeDropdown === 'support' 
                      ? 'max-h-48 opacity-100 mt-3' 
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <div className="space-y-2 pl-4">
                      {supportItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 py-2">
                          <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                            <item.icon className="w-3 h-3 text-gray-600" />
                          </div>
                          <span className="text-sm text-gray-900">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <button 
                    onClick={() => {
                      scrollToSection('booking');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors duration-200"
                  >
                    Start Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;