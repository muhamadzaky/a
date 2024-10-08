// app/404.tsx
import Link from 'next/link';
import { FC } from 'react';

const Custom404: FC = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  );
};

export default Custom404;
