"use client";

import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { STATS } from "@/data/content";

const Stats = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const counterItems = document.querySelectorAll(".stat-number");

			counterItems.forEach((el, i) => {
				const target = STATS[i].number;
				const obj = { val: 0 };

				gsap.to(obj, {
					val: target,
					duration: 2.5,
					delay: i * 0.1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: triggerRef.current,
						start: "top 85%",
						once: true,
					},
					onUpdate: function () {
						el.textContent =
							Math.round(obj.val).toString() + (i === 1 ? "" : "+");
					},
				});
			});

			// Stagger items entrance
			gsap.from(".stat-item", {
				y: 30,
				opacity: 0,
				stagger: 0.1,
				duration: 0.8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top 90%",
				},
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="bg-ink py-16 lg:py-32 overflow-hidden border-b border-white/5"
		>
			<div className="container">
				<div
					ref={triggerRef}
					className="grid grid-cols-2 lg:grid-cols-4"
				>
					{STATS.map((stat, i) => (
						<div
							key={stat.label}
							className={cn(
								"stat-item flex flex-col items-center text-center p-6 lg:p-12",
								i % 2 === 0 && "border-r border-white/10",
								i < 2 && "border-b border-white/10 lg:border-b-0",
								i === 1 && "lg:border-r border-white/10",
								i === 2 && "lg:border-r border-white/10",
							)}
						>
							<span className="stat-number text-4xl lg:text-7xl font-display font-medium text-gold mb-3 lg:mb-4 leading-none">
								0
							</span>
							<span className="text-[9px] lg:text-[11px] uppercase tracking-[0.3em] font-medium text-white/50">
								{stat.label}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Stats;
