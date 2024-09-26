"use client";

import { Navigations } from "@/utils/constants";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

  const handleClickBack = () => {
    if (pathname === '/') return;
    
    router.back();
  };

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between items-center gap-8">
            {Navigations.filter((item) => item.show).map((item) => (
              <Link
                href={item.href}
                className="duration-200 text-zinc-400 hover:text-zinc-100"
                key={item.href}
              >
                {item.name}
              </Link>
            ))}

						{/* <Link
							href={'/'}
							className="duration-200 text-zinc-400 hover:text-zinc-100"
							key="logo"
						>
							<img src="/assets/images/logo.svg" className="rounded-lg" alt="Muhamad Zaky" width={40} loading="lazy" />
						</Link> */}
					</div>

					<div
						onClick={handleClickBack}
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 cursor-pointer" />
					</div>
				</div>
			</div>
		</header>
	);
};
