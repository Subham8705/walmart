import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">EcoLoop</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Revolutionizing reverse logistics with AI-driven solutions for a sustainable future. 
              Join millions in making the circular economy a reality.
            </p>
            <div className="flex space-x-4 mt-6">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-scanner" className="text-gray-300 hover:text-white transition-colors">AI Scanner</Link></li>
              <li><Link to="/reverse-logistics" className="text-gray-300 hover:text-white transition-colors">Logistics</Link></li>
              <li><Link to="/drone-pickup" className="text-gray-300 hover:text-white transition-colors">Drone Pickup</Link></li>
              <li><Link to="/marketplace" className="text-gray-300 hover:text-white transition-colors">Marketplace</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/business-portal" className="text-gray-300 hover:text-white transition-colors">Business Portal</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 EcoLoop. All rights reserved. Building a sustainable tomorrow.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;