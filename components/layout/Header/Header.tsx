"use client";
import Link from "next/link";

function Header() {
  return (
    <div className="divide-y border-gray-400 dark:bg-gray-800 border-b">
      <div className="px-4 py-3 md:py-6 lg:px-6">
        <div className="flex items-center space-y-2 md:space-y-0 md:space-x-6">
          <Link href="/" className="text-2xl font-bold tracking-tighter mr-4">
            Bulletin Board
          </Link>
          <nav className="flex items-center space-x-6 text-sm">
            <Link
              href="/"
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
