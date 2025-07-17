import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, TrendingUp, Users, Zap } from 'lucide-react';

const TradeMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const tradeItems = [
    { 
      label: 'Plumbing Wraps', 
      path: '/plumbing-wraps',
      description: 'Build trust with professional plumbing vehicle graphics',
      badge: 'HOT',
      badgeColor: 'bg-red-500'
    },
    { 
      label: 'HVAC Wraps', 
      path: '/hvac-wraps',
      description: 'Year-round marketing for heating & cooling services',
      badge: 'NEW',
      badgeColor: 'bg-orange-500'
    },
    { 
      label: 'Electrical Wraps', 
      path: '/electrical-wraps',
      description: 'Showcase your electrical expertise and safety focus'
    },
    { 
      label: 'Moving Companies', 
      path: '/movers-wraps',
      description: 'Build credibility for your moving services'
    },
    { 
      label: 'Logistics & Delivery', 
      path: '/logistics-wraps',
      description: 'Professional fleet branding for supply chain companies'
    },
    { 
      label: 'Food Delivery', 
      path: '/delivery-wraps',
      description: 'Eye-catching graphics for delivery services'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-brand-navy hover:text-brand-red transition-colors duration-300 font-medium px-4 py-2 rounded-md hover:bg-gray-50"
      >
        Trade Specialists
        <span className="ml-1 bg-brand-red text-white text-xs px-2 py-0.5 rounded-full">NEW</span>
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center text-brand-navy mb-2">
              <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
              <span className="font-semibold">3-5x ROI for Trade Contractors</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-2" />
              <span>Trusted by 500+ Chicago trade businesses</span>
            </div>
          </div>

          <div className="p-2">
            {tradeItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block p-3 rounded-md hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="font-medium text-brand-navy group-hover:text-brand-red transition-colors">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className={`ml-2 ${item.badgeColor} text-white text-xs px-2 py-0.5 rounded-full`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                  <Zap className="h-4 w-4 text-yellow-500 mt-1 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-100 rounded-b-lg">
            <div className="text-center">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-block bg-brand-red hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Get Trade Quote in 30 Sec
              </Link>
              <p className="text-xs text-gray-600 mt-2">70,000+ daily impressions guaranteed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradeMenu;