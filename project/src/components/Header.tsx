// project/src/components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-700">
            <Link href="/" className="text-red-500 font-lobster text-3xl">
              Couple's Match
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/about" className="text-gray-600 hover:text-red-500 px-3 py-2">
              About
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-red-500 px-3 py-2">
              Privacy
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
