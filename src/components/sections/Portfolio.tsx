"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { PORTFOLIO } from "@/data/content";
import SectionLabel from "../ui/SectionLabel";

const categories = ["Tất cả", "Doanh nghiệp", "Lễ cưới", "Concert"];

const Portfolio = () => {
	const [filter, setFilter] = useState("Tất cả");
	const sectionRef = useRef<HTMLDivElement>(null);
	const gridRef = useRef<HTMLDivElement>(null);

	const filteredItems =
		filter === "Tất cả"
			? PORTFOLIO
			: PORTFOLIO.filter((item) => item.category === filter);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Entrance animation for items
			gsap.fromTo(
				".portfolio-item",
				{ opacity: 0, y: 30, scale: 0.95 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.8,
					stagger: 0.1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: gridRef.current,
						start: "top 80%",
					},
				},
			);
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	// Filter change animation
	useEffect(() => {
		const tl = gsap.timeline();
		tl.to(".portfolio-item", {
			opacity: 0,
			scale: 0.95,
			duration: 0.3,
			stagger: 0.05,
		}).to(".portfolio-item", {
			opacity: 1,
			scale: 1,
			duration: 0.5,
			stagger: 0.05,
			ease: "power2.out",
		});
	}, [filter]);

	return (
		<section
			id="portfolio"
			ref={sectionRef}
			className="py-20 lg:py-48 bg-white overflow-hidden"
		>
			<div className="container-custom">
				<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-20 gap-8">
					<div className="max-w-xl">
						<SectionLabel>Dự án tiêu biểu</SectionLabel>
						<h2 className="text-4xl lg:text-7xl font-display font-semibold leading-tight tracking-tight">
							Khoảnh khắc <br />{" "}
							<span className="text-gold italic font-light">vô giá</span>
						</h2>
					</div>

					{/* Filter Tabs */}
					<div className="flex flex-wrap gap-6 lg:gap-10 border-b border-gold-light/20 pb-4 w-full lg:w-auto overflow-x-auto no-scrollbar">
						{categories.map((cat) => (
							<button
								key={cat}
								onClick={() => setFilter(cat)}
								className={cn(
									"text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500 relative pb-2 whitespace-nowrap",
									filter === cat ? "text-gold" : "text-stone hover:text-ink",
								)}
							>
								{cat}
								<span
									className={cn(
										"absolute bottom-[-1px] left-0 h-[2px] bg-gold transition-all duration-500",
										filter === cat ? "w-full" : "w-0",
									)}
								/>
							</button>
						))}
					</div>
				</div>

				{/* Portfolio Grid - Editorial Style */}
				<div
					ref={gridRef}
					className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
				>
					{filteredItems.map((item, index) => {
						const isLarge = item.size === "large";
						const isMedium = item.size === "medium";

						return (
							<div
								key={item.id}
								className={cn(
									"portfolio-item group relative overflow-hidden bg-cream cursor-pointer",
									isLarge
										? "lg:col-span-2 aspect-[4/3] lg:aspect-[16/9]"
										: "aspect-[4/5] lg:aspect-[3/4]",
									isMedium && "aspect-[4/3] lg:col-span-1",
								)}
							>
								<Image
									src={item.image}
									alt={item.title}
									fill
									className="object-cover grayscale lg:group-hover:grayscale-0 lg:group-hover:scale-105 transition-all duration-1000 ease-out"
								/>

								{/* Overlay */}
								<div className="absolute inset-0 bg-ink/60 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 lg:p-12">
									<div className="overflow-hidden translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-700">
										<span className="text-gold text-[10px] uppercase tracking-widest block mb-2">
											— {item.category} ({item.year})
										</span>
										<h3 className="text-white text-2xl lg:text-3xl font-display font-medium leading-tight">
											{item.title}
										</h3>
									</div>

									<div className="mt-6 lg:mt-8 overflow-hidden">
										<span className="inline-block text-white/50 text-[10px] uppercase tracking-[0.3em] font-medium translate-y-full lg:group-hover:translate-y-0 transition-transform duration-700 delay-100">
											Xem chi tiết ↗
										</span>
									</div>
								</div>

								{/* Mobile Info (visible on small screens) */}
								<div className="absolute bottom-4 left-4 right-4 lg:hidden pointer-events-none">
									<h3 className="text-white text-lg font-display font-medium leading-tight drop-shadow-lg">
										{item.title}
									</h3>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
