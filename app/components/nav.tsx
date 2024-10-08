"use client";

import { Navigations } from "@/utils/constants";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Hamburger from "hamburger-react";

export const Navigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
	const ref = useRef<HTMLElement>(null);

	const [isIntersecting, setIntersecting] = useState(true);
	const [isOpen, setOpen] = useState(false);

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
					<div className="hidden md:flex justify-between items-center gap-8">
            {Navigations.filter((item) => item.show).map((item) => (
              <Link
                href={item.href}
                className="duration-200 text-zinc-400 hover:text-zinc-100"
                key={item.href}
              >
                {item.name}
              </Link>
            ))}
					</div>

					<div className="md:hidden">
						<Hamburger
							toggled={isOpen}
							toggle={setOpen}
							onToggle={() => setOpen(!isOpen)}
							color="#d4d4d8"
							size={24}
							rounded
						/>
					</div>

					<div
						onClick={handleClickBack}
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 cursor-pointer" />
					</div>
				</div>

				<div className={`flex flex-col justify-center items-center gap-3 px-6 pb-3 ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out transform ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
					{Navigations.filter((item) => item.show).map((item) => (
						<Link
							href={item.href}
							className="duration-200 text-zinc-100 text-xl font-bold hover:text-zinc-100"
							key={item.href}
						>
							{item.name}
						</Link>
					))}
				</div>
			</div>
		</header>
	);
};
