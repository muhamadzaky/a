'use client';

import { usePathname } from 'next/navigation';
import { FC, ReactNode } from 'react';
import { Navigation } from './nav';
import GenerateCV from './shared/generateCV';
import { ToastContainer } from 'react-toastify';
import { PATH_WITHOUT_CV_FAB, PATH_WITHOUT_NAV } from './constants';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  if (PATH_WITHOUT_NAV.includes(pathname)) return children;

  return (
    <div className="relative pb-16 min-h-[calc(100dvh-72px)] h-[calc(100dvh-72px)]">
      <Navigation />

      <main>{children}</main>

      {!PATH_WITHOUT_CV_FAB.includes(pathname) && (
        <div className="fixed bottom-10 right-10">
          <GenerateCV />
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Layout;
