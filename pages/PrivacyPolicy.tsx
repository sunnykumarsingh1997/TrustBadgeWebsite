
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last Updated: October 2023</p>
        
        <div className="prose prose-slate max-w-none text-slate-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
            <p>Trust Badge Builder ("we", "our", "us") collects information necessary to provide our service to Shopify merchants. This includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Shopify store data (Domain name, email, store owner name).</li>
              <li>Configuration settings for your badges.</li>
              <li>Anonymized usage statistics to improve app performance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Data</h2>
            <p>Your data is used solely to render badges on your storefront and provide technical support. We do not sell merchant or customer data to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your information. All data transmitted between Shopify and our servers is encrypted via SSL.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Third-Party Services</h2>
            <p>Our app integrates with Shopify's APIs. Please refer to Shopify's Privacy Policy for information regarding how they handle your data.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
