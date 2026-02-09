import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="bg-zinc-950 text-zinc-400 py-16 mt-20 border-t border-zinc-800"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">

        {/* Brand & Socials */}
        <div className="flex flex-col space-y-6">
          <Link to="/" className="flex items-center space-x-2 text-white text-3xl font-bold tracking-tight">
            <Zap className="text-amber-400" size={32} />
            <span className="text-shadow-sm">Amos<span className="text-amber-400">Cut</span></span>
          </Link>
          <p className="text-zinc-500 max-w-xs text-sm">
            Precision. Style. Confidence. Elevating your look with unmatched artistry and a premium experience.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com/amoscut" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://facebook.com/amoscut" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-400 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com/amoscut" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-400 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="hover:text-amber-400 transition-colors">Services</Link></li>
            <li><Link to="/booking" className="hover:text-amber-400 transition-colors">Book Now</Link></li>
            <li><Link to="/gallery" className="hover:text-amber-400 transition-colors">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Amos</Link></li>
            <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            <li><Link to="/auth" className="hover:text-amber-400 transition-colors">Admin Login</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-3">
              <MapPin size={18} className="text-amber-400" />
              <span>123 Style Ave, Metropolis, ST 90210</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-amber-400" />
              <a href="tel:+1234567890" className="hover:text-amber-400 transition-colors">+1 (234) 567-890</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-amber-400" />
              <a href="mailto:info@amoscut.com" className="hover:text-amber-400 transition-colors">info@amoscut.com</a>
            </li>
          </ul>
          <h4 className="text-lg font-semibold text-white mt-8 mb-4">Opening Hours</h4>
          <p className="text-sm">Mon - Fri: 9:00 AM - 7:00 PM</p>
          <p className="text-sm">Sat: 10:00 AM - 5:00 PM</p>
          <p className="text-sm">Sun: Closed</p>
        </div>

        {/* Newsletter/Map Placeholder */}
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <h3 className="text-xl font-semibold text-white mb-6">Location</h3>
          <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 flex items-center justify-center text-zinc-500 text-sm">
            {/* Placeholder for Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.226992523293!2d-122.41941568468164!3d37.774929279759715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858082a52b2f5d%3A0x6a9d7b2d2f7e7e7!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AmosCut Location"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-24 text-center text-zinc-500 text-sm mt-12 pt-8 border-t border-zinc-800">
        &copy; {new Date().getFullYear()} AmosCut. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;