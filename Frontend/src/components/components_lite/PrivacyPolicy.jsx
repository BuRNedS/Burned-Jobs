import React from "react";

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
    <div className="text-gray-600">{children}</div>
  </section>
);

const List = ({ items }) => (
  <ul className="list-disc pl-5 space-y-1">
    {items.map((item, idx) =>
      typeof item === "string" ? (
        <li key={idx}>{item}</li>
      ) : (
        <li key={idx}>
          <strong>{item.title}:</strong>
          <ul className="list-circle pl-5 mt-1">
            {item.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </li>
      )
    )}
  </ul>
);

const PrivacyPolicy = () => {
  const infoCollected = [
  {
    title: "Personal Information",
    details: ["Name", "Email", "Phone Number", "Resume/CV"],
  },
  {
    title: "Usage Data",
    details: ["IP Address", "Browser Type", "Pages Visited", "Time Spent"],
  },
];


  const usagePurposes = [
    "Maintain and improve our services",
    "Notify you about important updates",
    "Support interactive features",
    "Provide customer support",
    "Analyze usage trends to enhance experience",
    "Ensure platform security and stability",
  ];

  const userRights = [
    "View your personal data",
    "Request corrections",
    "Request deletion",
  ];

  const sharedWith = [
    "Trusted service providers who support our operations",
    "Authorities when legally required",
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Privacy Policy – Burned Jobs
        </h1>

        <Section title="1. Why This Policy Exists">
          <p>
            Your privacy is important to us. This policy explains what data we collect, why we collect it, and how we protect it — so you can use our job portal with confidence.
          </p>
        </Section>

        <Section title="2. What We Collect">
          <List items={infoCollected} />
        </Section>

        <Section title="3. Why We Use Your Data">
          <List items={usagePurposes} />
        </Section>

        <Section title="4. Keeping Your Data Safe">
          <p>
            We use secure technologies and best practices to make sure your data stays private and protected from threats.
          </p>
        </Section>

        <Section title="5. When We Share Your Info">
          <p>We never sell your data. We may share it only with:</p>
          <List items={sharedWith} />
        </Section>

        <Section title="6. Your Control and Rights">
          <p>You have full control over your personal information. You can:</p>
          <List items={userRights} />
        </Section>

        <Section title="7. Policy Updates">
          <p>
            We may update this policy from time to time. When we do, we'll post the latest version here so you're always in the loop.
          </p>
        </Section>

        <Section title="8. Contact Us">
          <p>
            Questions or concerns? We’re here to help. Reach us anytime at <span className="font-semibold text-indigo-500">satyamsundram360@gmail.com</span>.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
