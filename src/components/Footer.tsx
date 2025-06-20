import React from 'react';
import { TrendingUp, Twitter, Youtube, Instagram, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, url: 'https://x.com/Lifelong_Earner', label: 'Twitter' },
    { icon: Youtube, url: 'https://www.youtube.com/watch?v=kpF5N6JkiHU', label: 'YouTube' },
    { icon: Instagram, url: 'https://www.instagram.com/lifelong.earner/', label: 'Instagram' },
    { icon: ExternalLink, url: 'https://linktr.ee/lifelongearner', label: 'Linktree' }
  ];

  const footerLinks = [
    {
      title: 'Content',
      links: ['Video Tutorials', 'Written Guides', 'Case Studies', 'Success Stories']
    },
    {
      title: 'Community',
      links: ['Join Discord', 'Newsletter', 'Member Forum', 'Live Events']
    },
    {
      title: 'Resources',
      links: ['Free Tools', 'Calculators', 'Templates', 'Recommendations']
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Lifelong Earner</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Empowering individuals to build multiple income streams and achieve financial independence 
              through proven strategies and continuous learning.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => window.open(social.url, '_blank')}
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Navigation */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6">
            {['About', 'Content', 'Social', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6">
              Get the latest earning strategies and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Lifelong Earner. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button className="hover:text-blue-400 transition-colors">Privacy Policy</button>
              <button className="hover:text-blue-400 transition-colors">Terms of Service</button>
              <button className="hover:text-blue-400 transition-colors">Disclaimer</button>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> for the community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;