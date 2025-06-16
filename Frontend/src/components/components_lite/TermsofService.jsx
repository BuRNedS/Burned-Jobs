import React from "react";

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-600">{children}</p>
  </section>
);

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Terms & Conditions – Burned Jobs
        </h1>

        <Section title="1. Introduction">
          Welcome to <strong>[Burned Jobs]</strong>. By accessing or using our platform, you're agreeing to these terms — so please read them carefully.
        </Section>

        <Section title="2. Acceptance of Terms">
          Your continued use of this website means you accept and agree to abide by these Terms and Conditions. If you don’t agree, please don’t use the site.
        </Section>

        <Section title="3. Changes to Terms">
          We may update these terms periodically. Updates take effect once posted here. Using the site after changes means you agree to the updated terms.
        </Section>

        <Section title="4. User Responsibilities">
          You agree to use our platform lawfully and respectfully. Avoid any action that could harm others' experience or violate laws.
        </Section>

        <Section title="5. Intellectual Property">
          All content — including text, logos, visuals, and features — belongs to <strong>[Burned Jobs]</strong> or its licensors. You may not copy, reproduce, or reuse any material without written permission.
        </Section>

        <Section title="6. Limitation of Liability">
          We are not responsible for any loss or damage — direct or indirect — that may occur from using our platform, to the fullest extent permitted by law.
        </Section>

        <Section title="7. Governing Law">
          These terms are governed by the laws of <strong>Supreme Court of India</strong>. Any legal disputes will be handled exclusively by the courts of that jurisdiction.
        </Section>

        <Section title="8. Contact Us">
          Have questions or concerns? Reach out at <span className="font-medium text-indigo-500">satyamsundram360@gmail.com</span>.
        </Section>
      </div>
    </div>
  );
};

export default TermsOfService;
