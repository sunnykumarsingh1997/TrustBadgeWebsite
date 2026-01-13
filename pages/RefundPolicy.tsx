
import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Refund Policy</h1>
        
        <div className="prose prose-slate max-w-none text-slate-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">14-Day Free Trial</h2>
            <p>We offer a 14-day free trial for all new installations. You will not be charged if you uninstall the app before the trial period ends.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Monthly Subscriptions</h2>
            <p>Since payments are processed by Shopify, we generally follow Shopify's standard billing cycle. If you are unsatisfied with the app, please contact our support within 7 days of your most recent charge to request a refund.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Request a Refund</h2>
            <p>To request a refund, please send an email to support@trustbadgebuilder.com with your store URL and the reason for the request. We process all requests within 2-3 business days.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
