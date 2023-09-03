import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';
const LINKS = [
  {
    name: 'Backoffice',
    href: '/backoffice',
  },
  {
    name: 'Word',
    href: '/backoffice/word',
  },
];
export const Sidebar = () => {
  return (
    <div className="hidden flex-shrink-0 bg-white text-blue text-white h-screen w-64 md:flex flex-col">
      <ul className="py-2">
        {LINKS.map((link) => {
          return (
            <Link href={link.href} key={link.name}>
              <div className="flex ml-6 items-center text-black">
                <ChevronDoubleRightIcon className="w-5 h-5 " />
                <li className="px-4 py-2 ">{link.name}</li>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
