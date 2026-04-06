"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { HERO } from "@/data/content";
import Button from "../ui/Button";

const Hero = () => {
	const heroRef = useRef<HTMLDivElement>(null);
	const badgeRef = useRef<HTMLDivElement>(null);
	const h1Line1Ref = useRef<HTMLDivElement>(null);
	const h1Line2Ref = useRef<HTMLDivElement>(null);
	const dividerRef = useRef<HTMLDivElement>(null);
	const bodyRef = useRef<HTMLParagraphElement>(null);
	const ctaRef = useRef<HTMLDivElement>(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const heroBgRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Parallax Effect for Background
			gsap.to(heroBgRef.current, {
				yPercent: 20,
				ease: "none",
				scrollTrigger: {
					trigger: heroRef.current,
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			});

			const tl = gsap.timeline({ delay: 1.2 }); // Increased delay to account for preloader

			tl.from(badgeRef.current, {
				y: 20,
				opacity: 0,
				duration: 0.8,
				ease: "power3.out",
			})
				.from(
					[h1Line1Ref.current, h1Line2Ref.current],
					{
						y: "110%",
						opacity: 0,
						rotate: 3,
						duration: 1.2,
						stagger: 0.15,
						ease: "power4.out",
					},
					"-=0.5",
				)
				.from(
					dividerRef.current,
					{
						scaleX: 0,
						transformOrigin: "left",
						duration: 0.8,
						ease: "expo.out",
					},
					"-=0.6",
				)
				.from(
					bodyRef.current,
					{
						y: 20,
						opacity: 0,
						duration: 1,
						ease: "power3.out",
					},
					"-=0.4",
				)
				.from(
					ctaRef.current?.children || [],
					{
						y: 20,
						opacity: 0,
						stagger: 0.1,
						duration: 0.8,
						ease: "power3.out",
					},
					"-=0.6",
				)
				.from(
					scrollRef.current,
					{
						opacity: 0,
						y: -10,
						duration: 1,
						ease: "power2.inOut",
					},
					"-=0.2",
				);

			// Scroll indicator float animation
			gsap.to(".scroll-line", {
				scaleY: 0,
				transformOrigin: "top",
				duration: 1.5,
				repeat: -1,
				ease: "power2.inOut",
			});
		}, heroRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={heroRef}
			className="relative h-[100svh] min-h-[600px] w-full overflow-hidden flex items-center"
		>
			{/* Background Image */}
			<div ref={heroBgRef} className="absolute inset-0 z-0">
				<Image
					src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=1920"
					alt="Hero Background"
					fill
					priority
					className="object-cover scale-[1.2]"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
			</div>

			<div className="container relative z-10 text-white pt-20">
				<div className="max-w-7xl">
					{/* Badge */}
					<div
						ref={badgeRef}
						className="flex items-center gap-3 mb-6 lg:mb-8"
					>
						<span className="text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-medium text-gold">
							{HERO.badge}
						</span>
					</div>

					{/* Headline */}
					<div className="mb-8 lg:mb-12">
						<h1 className="text-[clamp(32px,10vw,80px)] leading-[1.1] lg:leading-[1.05] font-display font-semibold flex flex-col tracking-tight">
							<div className="overflow-hidden">
								<span
									ref={h1Line1Ref}
									className="inline-block whitespace-nowrap text-white"
								>
									{HERO.h1Line1}
								</span>
							</div>
							<div className="overflow-hidden sm:ml-12 lg:ml-32 mt-[-5px] lg:mt-0">
								<span
									ref={h1Line2Ref}
									className="inline-block whitespace-nowrap text-gold italic font-light"
								>
									{HERO.h1Line2}
								</span>
							</div>
						</h1>
					</div>

					{/* Divider */}
					<div
						ref={dividerRef}
						className="w-12 lg:w-16 h-[2px] bg-gold mb-8 lg:mb-12"
					/>

					{/* Body */}
					<p
						ref={bodyRef}
						className="text-base lg:text-xl text-white/80 max-w-xl mb-10 lg:mb-12 leading-relaxed font-light"
					>
						{HERO.body}
					</p>

					{/* CTA Buttons */}
					<div
						ref={ctaRef}
						className="flex flex-col sm:flex-row gap-4 lg:gap-6"
					>
						<Button
							variant="white"
							className="w-full sm:w-auto min-w-[180px] lg:min-w-[200px]"
						>
							{HERO.cta1}
						</Button>
						<Button
							variant="gold"
							className="w-full sm:w-auto min-w-[180px] lg:min-w-[200px]"
						>
							{HERO.cta2}
						</Button>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div
				ref={scrollRef}
				className="absolute bottom-12 right-6 lg:right-16 flex flex-col items-center gap-4 z-10"
			>
				<span className="text-[10px] uppercase tracking-[0.4em] text-white/50 rotate-90 mb-4 origin-center translate-y-10">
					SCROLL
				</span>
				<div className="w-[1px] h-20 bg-white/20 relative overflow-hidden">
					<div className="scroll-line absolute top-0 left-0 w-full h-full bg-gold" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
