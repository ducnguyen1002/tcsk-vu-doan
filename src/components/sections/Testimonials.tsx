"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/data/content";
import SectionLabel from "../ui/SectionLabel";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
	const [current, setCurrent] = useState(0);
	const sectionRef = useRef<HTMLDivElement>(null);
	const quoteRef = useRef<HTMLDivElement>(null);

	const next = () => {
		gsap.to(quoteRef.current, {
			opacity: 0,
			y: 20,
			duration: 0.4,
			onComplete: () => {
				setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
				gsap.fromTo(
					quoteRef.current,
					{ opacity: 0, y: -20 },
					{ opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
				);
			},
		});
	};

	const prev = () => {
		gsap.to(quoteRef.current, {
			opacity: 0,
			y: 20,
			duration: 0.4,
			onComplete: () => {
				setCurrent(
					(prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
				);
				gsap.fromTo(
					quoteRef.current,
					{ opacity: 0, y: -20 },
					{ opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
				);
			},
		});
	};

	return (
		<section className="py-24 lg:py-48 bg-cream border-y border-gold-light/20 overflow-hidden">
			<div className="container">
				<div className="flex flex-col items-center text-center">
					<SectionLabel className="justify-center">
						Cảm nhận khách hàng
					</SectionLabel>

					<div className="relative max-w-4xl pt-16">
						{/* Quote Icon Background */}
						<Quote className="absolute top-0 left-1/2 -translate-x-1/2 text-gold opacity-10 w-24 h-24 lg:w-32 lg:h-32" />

						<div
							ref={quoteRef}
							className="relative z-10 px-8"
						>
							<p className="text-2xl lg:text-4xl font-display italic font-light leading-relaxed mb-12">
								&ldquo;{TESTIMONIALS[current].quote}&rdquo;
							</p>

							<div className="flex flex-col items-center">
								<span className="text-ink font-medium uppercase text-sm mb-1 tracking-widest">
									— {TESTIMONIALS[current].name}
								</span>
								<span className="text-stone text-[11px] uppercase tracking-[0.2em]">
									{TESTIMONIALS[current].role}
								</span>
							</div>
						</div>

						{/* Navigation */}
						<div className="flex items-center justify-center gap-12 mt-16">
							<button
								onClick={prev}
								className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-all duration-500 scale-90"
							>
								<ChevronLeft size={24} />
							</button>
							<div className="flex gap-4">
								{TESTIMONIALS.map((_, i) => (
									<span
										key={i}
										className={cn(
											"w-12 h-[2px] transition-all duration-700",
											current === i ? "bg-gold" : "bg-gold/10",
										)}
									/>
								))}
							</div>
							<button
								onClick={next}
								className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-all duration-500 scale-90"
							>
								<ChevronRight size={24} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
