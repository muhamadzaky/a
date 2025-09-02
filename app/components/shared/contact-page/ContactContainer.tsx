'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { Card } from '../..';
import {
  RiFacebookLine,
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinLine,
  RiMailLine,
  RiMusic2Line,
  RiTwitterXLine,
  RiYoutubeLine
} from '@remixicon/react';

type SNSData = {
  name: string;
  link: string;
};

type Props = {
  data: SNSData[];
};

type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

const ICONS: Record<string, JSX.Element> = {
  youtube: <RiYoutubeLine />,
  facebook: <RiFacebookLine />,
  twitter: <RiTwitterXLine />,
  instagram: <RiInstagramLine />,
  github: <RiGithubFill />,
  linkedin: <RiLinkedinLine />,
  music: <RiMusic2Line />,
  email: <RiMailLine />
};

const LABELS: Record<string, string> = {
  youtube: 'YouTube',
  facebook: 'Facebook',
  twitter: 'X',
  instagram: 'Instagram',
  github: 'Github',
  linkedin: 'Linkedin',
  music: 'Apple Music',
  email: 'Email'
};

const Icon: React.FC<IconProps> = ({ name, size = 32, className = '' }) => {
  const IconComponent = ICONS[name];
  if (!IconComponent) return null;
  return React.cloneElement(IconComponent, { size, className });
};

const ContactContainer: FC<Props> = ({ data }) => {
  return (
    <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
      <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-4 lg:gap-16">
        {data.map((s: SNSData) => (
          <Card key={s.name}>
            <Link
              href={s.link}
              target="_blank"
              className="py-16 relative flex flex-col items-center gap-4 duration-700 group md:gap-8">
              <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                <Icon name={s.name} />
              </span>
              <div className="z-10 flex flex-col items-center">
                <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                  {LABELS[s.name] || s.name}
                </span>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactContainer;
