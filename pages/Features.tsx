
import React from 'react';

const Features: React.FC = () => {
  const categories = [
    {
      title: "Conversion Suite",
      items: [
        { title: "Dynamic Badges", desc: "Auto-adjusting icons for payment, safety, and shipping.", icon: "🛡️", size: "lg" },
        { title: "Sticky Cart", desc: "Keep the buy button always within reach.", icon: "🛒", size: "sm" },
        { title: "Countdown Timers", desc: "Create urgency with elegant, branded timers.", icon: "⏲️", size: "sm" }
      ]
    },
    {
      title: "Customer Intelligence",
      items: [
        { title: "Gemini AI Chat", desc: "The smartest customer service bot on the market.", icon: "🤖", size: "sm" },
        { title: "Smart Reviews", desc: "Photo and video reviews with auto-SEO tagging.", icon: "📸", size: "lg" },
        { title: "Member Loyalty", desc: "Custom profiles and reward tracking dashboards.", icon: "🎖️", size: "sm" }
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white pt-32 pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">The Growth <span className="gradient-text">Toolkit.</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Stop juggling multiple subscriptions. Trust Badge Builder consolidates your most expensive apps into one optimized workflow.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        {categories.map((cat, idx) => (
          <div key={idx} className="mb-32">
            <h2 className="text-sm uppercase tracking-[0.3em] font-black text-emerald-600 mb-12">{cat.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cat.items.map((item, i) => (
                <div key={i} className={`p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all group ${item.size === 'lg' ? 'md:col-span-2' : 'md:col-span-1'}`}>
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-emerald-50 transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Technical Highlights */}
        <div className="bg-slate-900 rounded-[3rem] p-16 text-white text-center">
          <h2 className="text-4xl font-bold mb-16">Enterprise-Grade Architecture</h2>
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="text-emerald-400 text-3xl font-bold mb-2">99.9%</div>
              <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">Uptime</div>
            </div>
            <div>
              <div className="text-emerald-400 text-3xl font-bold mb-2">&lt;200ms</div>
              <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">Latency</div>
            </div>
            <div>
              <div className="text-emerald-400 text-3xl font-bold mb-2">GDPR</div>
              <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">Compliant</div>
            </div>
            <div>
              <div className="text-emerald-400 text-3xl font-bold mb-2">24/7</div>
              <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">Human Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;