"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const Preloader = () => {
	const preloaderRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const lineRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline();

			tl.set(textRef.current, { y: 100, opacity: 0 });
			tl.set(lineRef.current, { scaleX: 0 });

			tl.to(textRef.current, {
				y: 0,
				opacity: 1,
				duration: 1.2,
				ease: "power4.out",
				delay: 0.2,
			})
			.to(lineRef.current, {
				scaleX: 1,
				duration: 1.5,
				ease: "expo.inOut",
			}, "-=0.8")
			.to(containerRef.current, {
				y: -20,
				opacity: 0,
				duration: 0.8,
				ease: "power2.inOut",
				delay: 0.3,
			})
			.to(preloaderRef.current, {
				y: "-100%",
				duration: 1.2,
				ease: "power4.inOut",
			}, "-=0.4")
			.set(preloaderRef.current, { display: "none" });
		});

		return () => ctx.revert();
	}, []);

	return (
		<div
			ref={preloaderRef}
			className="fixed inset-0 z-[9999] bg-ink flex items-center justify-center overflow-hidden"
		>
			<div ref={containerRef} className="relative px-10">
				<div className="overflow-hidden">
					<div
						ref={textRef}
						className="text-white text-3xl lg:text-6xl font-display font-semibold italic tracking-tighter"
					>
						Vũ <span className="text-gold">Đoàn</span> Event
					</div>
				</div>
				<div 
					ref={lineRef}
					className="h-[1px] bg-gold w-full mt-6 origin-left shadow-[0_0_20px_rgba(201,169,110,0.5)]" 
				/>
				<div className="mt-4 flex justify-between items-center text-stone text-[10px] uppercase tracking-[0.5em] font-medium opacity-50">
					<span>Artistic</span>
					<span>Production</span>
				</div>
			</div>
		</div>
	);
};

export default Preloader;
