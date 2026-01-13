
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* Dynamic Hero Section */}
      <section className="relative hero-pattern pt-24 pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-50/50 backdrop-blur-sm border border-emerald-100 rounded-full px-4 py-1.5 mb-10">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Version 3.0 Live</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
            Scale Your Brand <br/>
            <span className="gradient-text">Through Trust.</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl text-slate-500 mb-12 leading-relaxed">
            The all-in-one growth engine for Shopify. Combine conversion-optimized badges, AI-powered support, and seamless checkout experiences into a single powerhouse dashboard.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
            <a href="https://apps.shopify.com" className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-2xl hover:scale-105 active:scale-95">
              Install for Free
            </a>
            <Link to="/features" className="w-full sm:w-auto px-12 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:border-emerald-600 hover:text-emerald-600 transition-all">
              Watch Demo
            </Link>
          </div>

          {/* Interactive UI Mockup */}
          <div className="relative max-w-5xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl overflow-hidden p-2">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Product Dashboard" 
                className="rounded-[2rem] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signal Bar */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-40">
             <span className="text-2xl font-black">SHOPIFY PLUS</span>
             <span className="text-2xl font-black">FORBES</span>
             <span className="text-2xl font-black">TECHCRUNCH</span>
             <span className="text-2xl font-black">WIRED</span>
          </div>
        </div>
      </section>

      {/* Feature Grid: "The Growth OS" */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Built to solve the <br/>trust gap.</h2>
              <p className="text-lg text-slate-500">Traditional apps focus on one thing. We focus on the entire customer journey from discovery to checkout.</p>
            </div>
            <Link to="/features" className="mt-6 md:mt-0 text-emerald-600 font-bold hover:underline flex items-center">
              View all capabilities <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-slate-900 rounded-[2.5rem] p-12 text-white overflow-hidden relative group bento-card">
              <div className="relative z-10">
                <span className="bg-emerald-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">Most Popular</span>
                <h3 className="text-3xl font-bold mb-4">Conversion Badges</h3>
                <p className="text-slate-400 max-w-md mb-8">Deploy professional trust signals at critical decision points across your store automatically.</p>
                <div className="flex gap-4">
                   <div className="h-10 w-24 bg-white/10 rounded-lg"></div>
                   <div className="h-10 w-24 bg-white/10 rounded-lg"></div>
                   <div className="h-10 w-24 bg-white/10 rounded-lg"></div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-20 group-hover:scale-110 transition-transform duration-700">
                <div className="w-full h-full bg-gradient-to-bl from-emerald-500 to-teal-500 blur-3xl rounded-full"></div>
              </div>
            </div>

            <div className="md:col-span-4 bg-emerald-50 rounded-[2.5rem] p-10 bento-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm mb-6">💬</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Chat Support</h3>
                <p className="text-slate-600">Built-in Gemini 3 Pro chatbot to answer customer queries 24/7.</p>
              </div>
              <Link to="/features" className="text-emerald-600 font-bold mt-8">Learn more</Link>
            </div>

            <div className="md:col-span-4 bg-slate-50 rounded-[2.5rem] p-10 bento-card">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm mb-6">⭐</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Unified Reviews</h3>
              <p className="text-slate-600">Aggregate ratings and social proof from 12+ platforms seamlessly.</p>
            </div>

            <div className="md:col-span-8 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[2.5rem] p-12 text-white bento-card flex items-center">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">Fastest Checkout on Shopify</h3>
                <p className="text-emerald-100 max-w-md">Our smart optimizations reduce checkout friction by up to 40%, ensuring you never lose a sale at the finish line.</p>
              </div>
              <div className="hidden lg:block w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Quote */}
      <section className="bg-slate-900 py-32 text-center overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-emerald-500 text-6xl font-serif mb-8">“</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 leading-tight">
            Trust Badge Builder didn't just add icons to my store; it redesigned our entire <span className="text-emerald-400">conversion strategy</span>. We saw ROI in the first 48 hours.
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-emerald-500 mb-4 overflow-hidden">
               <img src="https://i.pravatar.cc/150?u=4" alt="CEO" />
            </div>
            <div className="text-white font-bold">Marcus Thorne</div>
            <div className="text-slate-400 text-sm">CEO, UrbanLux Shopify Plus Store</div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-32 relative bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Ready to build your <br/><span className="gradient-text">Trust Empire?</span></h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto">Start with our 14-day free trial. Setup takes less than 2 minutes. No liquid code knowledge required.</p>
          <a href="#" className="inline-block bg-emerald-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-500 transition-all shadow-2xl hover:shadow-emerald-200 hover:-translate-y-1">
            Start Free Trial Now
          </a>
          <p className="mt-8 text-slate-400 font-medium">Used by 12,000+ stores worldwide</p>
        </div>
      </section>
    </div>
  );
};

export default Home;