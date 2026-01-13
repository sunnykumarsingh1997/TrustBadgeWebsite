
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-emerald-600 p-2 rounded-lg group-hover:bg-emerald-500 transition-all emerald-glow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">Trust Badge Builder</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Features</Link>
            <Link to="/privacy" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Privacy</Link>
            <a 
              href="https://apps.shopify.com" 
              className="bg-emerald-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-emerald-500 transition-all shadow-sm hover:shadow-lg active:scale-95"
            >
              Add to Shopify
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-emerald-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2">
          <Link to="/features" className="block px-3 py-2 text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="/privacy" className="block px-3 py-2 text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Privacy</Link>
          <Link to="/terms" className="block px-3 py-2 text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Terms</Link>
          <a href="#" className="block w-full text-center bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold mt-4">
            Add to Shopify
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;