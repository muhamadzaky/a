'use client';

import Link from 'next/link';
import { FC } from 'react';
import { Button } from './components';

const Custom404: FC = () => {
  return (
    <div className="flex min-w-full min-h-full w-full h-full justify-center items-center text-white flex-col gap-3">
      <h1>404 | Page Not Found</h1>
      <Link href="/">
        <Button variant="ghost" outline>
          Go Back Home
        </Button>
      </Link>
    </div>
  );
};

export default Custom404;
