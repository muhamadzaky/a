'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { Card } from '../components';
import Footer from '../components/footer';
import Particles from '../components/particles';
import {
  RiExternalLinkLine,
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiPlanetLine,
  RiTwitterXLine,
  RiYoutubeLine
} from '@remixicon/react';
import { Links } from '@/utils/constants';
import _ from 'lodash';

type LinkData = {
  slug: string;
  name: string;
  url: string;
  initial: string;
};

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
};

const ICONS: Record<string, JSX.Element> = {
  web: <RiPlanetLine />,
  yt: <RiYoutubeLine />,
  x: <RiTwitterXLine />,
  ig: <RiInstagramLine />,
  github: <RiGithubFill />,
  linkedin: <RiLinkedinBoxFill />
};

const Icon: FC<IconProps> = ({ name, size = 30, color = '#f4f4f5', className = '' }) => {
  const IconComponent = ICONS[name] || <RiExternalLinkLine />;
  return React.cloneElement(IconComponent, { size, color, className });
};

const LinkPage: FC = () => {
  const links: LinkData[] = Links;

  return (
    <div className="relative pb-16 h-dvh animate-fade-in">
      <Link href="/">
        <img src="/logo-grey.svg" alt="Muhamad Zaky" width={60} className="mx-auto" />
      </Link>

      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      <div className="flex flex-col justify-center items-center my-10 h-5/6">
        <div className="flex flex-col items-center gap-3 w-60">
          {_.map(links, (link) => (
            <Link
              key={link.slug}
              href={link.url === 'https://www.muhamadzaky.my.id/' ? '/' : link.url}
              target="_blank"
              className="w-full">
              <Card>
                <article className="py-2 px-4 flex items-center gap-2">
                  <Icon name={link.initial} />
                  <h2 className="text-2xl font-bold text-zinc-100 sm:text-3xl font-display group-hover:text-white">
                    {link.name}
                  </h2>
                </article>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center text-zinc-500">
        <Footer />
      </div>
    </div>
  );
};

export default LinkPage;
