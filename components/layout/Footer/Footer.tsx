"use client";

import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="divide-y border-gray-400 dark:bg-gray-800 border-t">
      <div className="flex flex-col items-center justify-center space-y-2">
        <Link
          href="https://github.com/yonep3904/bulletin-board"
          className="flex flex-col items-center justify-center p-4 hover:opacity-80 group"
        >
          <Image
            src="/github-mark.svg"
            alt="GitHub"
            width={120}
            height={40}
            className="p-4 w-32 h-auto group-hover:scale-110 transition duration-500 group-hover:transform group-hover:duration-500"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; 2025 yonep3904 / bulletin-board
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
