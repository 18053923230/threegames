// project/src/app/privacy/page.tsx
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy - Couple's Match",
    description: "Read the privacy policy for Couple's Match.",
};

const PrivacyPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold font-lobster text-red-500 mb-4">Privacy Policy</h1>
      <p className="text-lg">
        Your privacy is important to us. It is Couple&apos;s Match&apos;s policy to respect your privacy regarding any information we may collect from you across our website.
      </p>
      <p className="text-lg mt-4">
        We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we&apos;re collecting it and how it will be used.
      </p>
      <p className="text-lg mt-4">
        We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
      </p>
      <p className="text-lg mt-4">
        We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
      </p>
      <p className="text-lg mt-4">
        Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
      </p>
      <p className="text-lg mt-4">
        You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
      </p>
      <p className="text-lg mt-4">
        Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
      </p>
      <p className="text-lg mt-4">
        This policy is effective as of 4 August 2025.
      </p>
    </div>
  );
};

export default PrivacyPage;
