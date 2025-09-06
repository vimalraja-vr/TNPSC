"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 flex justify-between items-center p-4 md:px-20 bg-gray-100 border-b border-gray-300">
      <Link href="/">
        <div className="text-xl md:text-2xl font-bold text-gray-800 cursor-pointer">
          TNPSC
        </div>
      </Link>
      <Link href="/note">
        <button className="px-3 py-2 md:px-4 md:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Note
        </button>
      </Link>
    </header>
  );
};

export default Header;