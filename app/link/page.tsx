import { Links } from '@/utils/constants';
import Link from 'next/link';
import Footer from '../components/footer';
import { ExternalLink, Github, Icon, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { planet } from '@lucide/lab';
import Particles from '../components/particles';
import { FC } from 'react';
import { Card } from '../components';

const LinkPage: FC = () => {
  const links = Links;

  const generateIcon = (init: string) => {
    switch (init) {
      case 'web':
        return <Icon iconNode={planet} color="#f4f4f5" />;
      case 'yt':
        return <Youtube color="#f4f4f5" />;
      case 'x':
        return <Twitter color="#f4f4f5" />;
      case 'ig':
        return <Instagram color="#f4f4f5" />;
      case 'github':
        return <Github color="#f4f4f5" />;
      case 'linkedin':
        return <Linkedin color="#f4f4f5" />;
      default:
        return <ExternalLink color="#f4f4f5" />;
    }
  };

  return (
    <div className="relative pb-16 h-dvh animate-fade-in">
      <Link href="/">
        <img src="/logo-grey.svg" alt="Muhamad Zaky" width={60} className="mx-auto" />
      </Link>

      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      <div className="flex flex-col justify-center items-center my-10 h-5/6">
        <div>
          {links.map((link) => (
            <Link
              href={link.url === 'https://www.muhamadzaky.my.id/' ? '/' : link.url}
              target="_blank">
              <div className="my-2">
                <Card key={link.slug}>
                  <article className="py-2 px-4 flex items-center gap-2">
                    {generateIcon(link.initial)}
                    <h2 className="text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl font-display">
                      {link.name}
                    </h2>
                  </article>
                </Card>
              </div>
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
