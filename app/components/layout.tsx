'use client';

import { usePathname } from 'next/navigation';
import { FC, ReactNode, useCallback } from 'react';
import { Navigation } from './nav';
import GenerateCV from './shared/generateCV';
import { ToastContainer } from 'react-toastify';
import { PATH_WITHOUT_NAV } from './constants';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  const navWrapper = useCallback(
    (children: ReactNode) => {
      if (PATH_WITHOUT_NAV.includes(pathname)) return children;

      return (
        <div className="relative pb-16 min-h-[calc(100dvh-72px)] h-[calc(100dvh-72px)]">
          <Navigation />

          {children}

          <div className="relative">
            <div className="fixed bottom-10 right-10">
              <GenerateCV />
            </div>
          </div>

          <ToastContainer />
        </div>
      );
    },
    [pathname] // Hanya `pathname` yang menjadi dependensi
  );

  return navWrapper(children);
};

export default Layout;
