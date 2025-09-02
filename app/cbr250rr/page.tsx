'use client';

import Image from 'next/image';
import Link from 'next/link';

const Salsa = () => {
  return (
    <div className="h-dvh animate-fade-in">
      <Link href="/">
        <img src="/logo-grey.svg" alt="Muhamad Zaky" width={60} className="mx-auto" />
      </Link>

      <section className="p-8 md:px-18 text-white">
        <div className="relative w-full h-[400px] rounded-md overflow-hidden">
          <Image
            src="https://res.cloudinary.com/demnjkoq8/image/upload/v1745697264/F13_0452_m4hhj0.jpg"
            alt="CBR250RR Banner"
            className="object-cover rounded"
            fill
            priority
          />
          <div className="absolute bottom-3 left-3">
            <h1 className="text-4xl">
              <span className="italic font-semibold">
                CBR250RR <sup>SP QS</sup>
              </span>
              <br />
              Salsa
            </h1>
          </div>
        </div>
      </section>

      <div className="p-8 md:p-18 flex justify-between gap-3">
        <div className="text-white space-y-8 py-3">
          <span className="text-justify">
            Salsa adalah nama dari sebuah CBR250RR varian SP QS dengan warna Tricolor. Dibeli oleh
            Zaky pada 8 Agustus 2023.
          </span>
        </div>
        <div className="relative size-[400px] max-w-full rounded-md overflow-hidden">
          <Image
            src="https://res.cloudinary.com/demnjkoq8/image/upload/v1745742829/Capture-2025-04-27-161723_uhgxih.png"
            alt="CBR250RR Banner"
            className="object-cover object-center rounded"
            fill
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Salsa;
