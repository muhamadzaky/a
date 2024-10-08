// app/404.tsx
import Link from 'next/link';
import { FC } from 'react';

const Custom500: FC = () => {
  return (
    <div>
      <h1>500 - Internal Server Error</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  );
};

export default Custom500;
