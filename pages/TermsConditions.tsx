
import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-slate max-w-none text-slate-700 space-y-6">
          <p>By installing the Trust Badge Builder app, you agree to the following terms and conditions.</p>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. License</h2>
            <p>We grant you a non-exclusive, non-transferable license to use the app on your Shopify store for which you have paid the appropriate subscription fees.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Subscription & Payments</h2>
            <p>Subscription fees are handled directly by Shopify. You agree to pay all charges incurred in connection with your chosen plan.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Prohibited Use</h2>
            <p>You may not reverse engineer, decompile, or attempt to extract the source code of the app. You may not use the app for any illegal purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitation of Liability</h2>
            <p>In no event shall Trust Badge Builder be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use the service.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
