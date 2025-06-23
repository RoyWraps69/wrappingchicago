
import React from 'react';
import { Link } from 'react-router-dom';

const FooterBottom = () => {
  return (
    <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-white/50 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Wrapping Chicago. All rights reserved.</p>
      <div className="flex gap-4 text-sm">
        <Link to="/sitemap" className="text-white/50 hover:text-white transition-colors">Sitemap</Link>
        <Link to="/return-policy" className="text-white/50 hover:text-white transition-colors">Return Policy</Link>
        <Link to="/shipping" className="text-white/50 hover:text-white transition-colors">Shipping</Link>
        <Link to="/privacy-policy" className="text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
        <Link to="/terms" className="text-white/50 hover:text-white transition-colors">Terms of Service</Link>
      </div>
    </div>
  );
};

export default FooterBottom;
