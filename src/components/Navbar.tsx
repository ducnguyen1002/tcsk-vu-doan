"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import Button from "./ui/Button";

const navLinks = [
	{ name: "Dịch vụ", href: "#services" },
	{ name: "Showreel", href: "#showreel" },
	{ name: "Dự án", href: "#portfolio" },
	{ name: "Vũ đoàn", href: "#dance-team" },
	{ name: "Khách hàng", href: "#clients" },
];

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const linksRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 80);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
			const tl = gsap.timeline();
			tl.to(menuRef.current, {
				clipPath: "inset(0% 0% 0% 0%)",
				duration: 0.8,
				ease: "power4.inOut",
			});
			tl.from(
				".mobile-nav-link",
				{
					y: 40,
					opacity: 0,
					stagger: 0.1,
					duration: 0.5,
					ease: "power3.out",
				},
				"-=0.3",
			);
		} else {
			document.body.style.overflow = "auto";
			gsap.to(menuRef.current, {
				clipPath: "inset(0% 0% 100% 0%)",
				duration: 0.6,
				ease: "power4.inOut",
			});
		}
	}, [isMenuOpen]);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<>
			<header
				className={cn(
					"fixed top-0 left-0 w-full z-[120] transition-all duration-500 py-6",
					isScrolled || isMenuOpen
						? "bg-white/0 border-b border-gold-light/0"
						: "bg-transparent",
					isScrolled &&
						!isMenuOpen &&
						"bg-white border-b border-gold-light/20 py-4 shadow-sm",
				)}
			>
				<div className="container-custom flex items-center justify-between">
					{/* Logo */}
					<div className="z-[130]">
						<a
							href="#"
							className={cn(
								"text-2xl font-display font-semibold italic tracking-tight transition-colors duration-500",
								isScrolled || isMenuOpen ? "text-ink" : "text-white",
							)}
						>
							Vũ <span className="text-gold">Đoàn</span> Event
						</a>
					</div>

					{/* Desktop Nav */}
					<nav className="hidden lg:flex items-center gap-12">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className={cn(
									"nav-link text-[11px] font-medium uppercase tracking-[0.2em]",
									isScrolled || isMenuOpen ? "text-ink" : "text-white",
								)}
							>
								{link.name}
							</a>
						))}
					</nav>

					{/* Actions */}
					<div className="flex items-center gap-6 z-[130]">
						<Button
							variant={isScrolled || isMenuOpen ? "gold" : "white"}
							className="hidden sm:inline-flex px-6 py-3 scale-90"
						>
							Báo giá
						</Button>

						{/* Hamburger */}
						<button
							onClick={toggleMenu}
							className="flex items-center gap-4 focus:outline-none group"
						>
							<span
								className={cn(
									"hidden sm:inline-block text-[10px] uppercase tracking-[0.3em] font-medium transition-colors duration-500",
									isMenuOpen
										? "text-ink"
										: isScrolled
											? "text-ink"
											: "text-white",
								)}
							>
								{isMenuOpen ? "Đóng" : "Menu"}
							</span>

							<div className="flex flex-col gap-1.5 h-full justify-center">
								<span
									className={cn(
										"w-8 h-[1px] transition-all duration-500 origin-center",
										isScrolled || isMenuOpen ? "bg-ink" : "bg-white",
										isMenuOpen && "rotate-45 translate-y-[7px]",
									)}
								></span>
								<span
									className={cn(
										"w-8 h-[1px] transition-all duration-500",
										isScrolled || isMenuOpen ? "bg-ink" : "bg-white",
										isMenuOpen && "opacity-0",
									)}
								></span>
								<span
									className={cn(
										"w-8 h-[1px] transition-all duration-500 origin-center",
										isScrolled || isMenuOpen ? "bg-ink" : "bg-white",
										isMenuOpen && "-rotate-45 -translate-y-[7px]",
									)}
								></span>
							</div>
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu Overlay */}
			<div
				ref={menuRef}
				className="fixed inset-0 bg-cream z-[105] pointer-events-none data-[open=true]:pointer-events-auto"
				style={{ clipPath: "inset(0% 0% 100% 0%)" }}
				data-open={isMenuOpen}
			>
				<div className="container-custom h-full flex flex-col justify-center gap-12 pt-20">
					<div
						ref={linksRef}
						className="flex flex-col gap-6"
					>
						<span className="text-stone text-[11px] uppercase tracking-widest pl-2 mb-4">
							— Menu
						</span>
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								onClick={toggleMenu}
								className="mobile-nav-link text-4xl lg:text-7xl font-display font-semibold hover:text-gold transition-colors duration-300 w-fit"
							>
								{link.name}
							</a>
						))}
					</div>

					<div className="mt-12 flex flex-col gap-4 text-stone text-sm">
						<p>Facebook / Instagram / TikTok</p>
						<p>hotline: 090 123 4567</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
