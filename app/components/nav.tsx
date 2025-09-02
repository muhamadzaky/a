'use client';

import { Navigations } from '@/utils/constants';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { FC, useEffect, useRef, useState } from 'react';
import Hamburger from 'hamburger-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/classnames';
import _ from 'lodash';
import { RiArrowLeftLine } from '@remixicon/react';

export const Navigation: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);

  const [isIntersecting, setIntersecting] = useState(true);
  const [isOpen, setOpen] = useState(false);

  const handleClickBack = () => {
    if (pathname === '/') return;
    router.back();
  };

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const menuVariants = {
    open: { maxHeight: 200, opacity: 1, transition: { duration: 0.5 } },
    closed: { maxHeight: 0, opacity: 0, transition: { duration: 0.5 } }
  };

  return (
    <header ref={ref}>
      <div
        className={cn(
          'fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b',
          isIntersecting ? 'bg-zinc-900/0 border-transparent' : 'bg-zinc-900/500 border-zinc-800'
        )}>
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          {/* Desktop Menu */}
          <div className="hidden md:flex justify-between items-center gap-8">
            {_.map(
              _.filter(Navigations, (item) => item.show),
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'duration-200 hover:text-zinc-100',
                    pathname === item.href ? 'font-medium text-zinc-100' : 'text-zinc-400'
                  )}>
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              onToggle={() => setOpen(!isOpen)}
              color="#d4d4d8"
              size={24}
              rounded
            />
          </div>

          {/* Back Button */}
          <div onClick={handleClickBack} className="duration-200 text-zinc-300 hover:text-zinc-100">
            {!isOpen && (
              <RiArrowLeftLine className="w-6 h-6 cursor-pointer animate duration-300 ease-in-out" />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={menuVariants}
            style={{ overflow: 'hidden' }}
            layout
            className="flex flex-col justify-center items-start gap-3 px-6 pb-3 w-max">
            {_.map(
              _.filter(Navigations, (item) => item.show),
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'duration-200 text-xl',
                    pathname === item.href ? 'font-medium text-zinc-100' : 'text-zinc-100'
                  )}>
                  {item.name}
                </Link>
              )
            )}
          </motion.div>
        )}
      </div>
    </header>
  );
};
