// project/src/app/about/page.tsx
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us - Couple's Match",
    description: "Learn more about the team behind Couple's Match.",
};

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold font-lobster text-red-500 mb-4">About Us</h1>
      <p className="text-lg">
        Welcome to Couple's Match! We are a team of two passionate developers who love creating fun and engaging games for couples. Our goal is to bring people closer together through the power of play. We hope you enjoy our game!
      </p>
    </div>
  );
};

export default AboutPage;
