"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/data/content";
import SectionLabel from "../ui/SectionLabel";
import { ArrowRight } from "lucide-react";

const Services = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const [activeItem, setActiveItem] = useState<string | null>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Reveal items on scroll
			gsap.from(".service-item", {
				y: 40,
				opacity: 0,
				stagger: 0.15,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
				},
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			id="services"
			ref={sectionRef}
			className="py-20 lg:py-48 bg-white overflow-hidden"
		>
			<div className="container">
				<div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
					{/* Left: Sticky Headline */}
					<div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
						<SectionLabel>Dịch vụ của chúng tôi</SectionLabel>
						<h2 className="text-4xl lg:text-6xl font-display font-semibold leading-[1.2] lg:leading-tight mb-6 lg:mb-8">
							Kiến tạo <br className="hidden lg:block" /> trải nghiệm <br />{" "}
							<span className="text-gold italic font-light">độc bản</span>
						</h2>
						<p className="text-stone text-base lg:text-lg leading-relaxed max-w-sm">
							Chúng tôi không chỉ tổ chức sự kiện, chúng tôi kể câu chuyện của
							bạn thông qua ngôn ngữ của nghệ thuật và sân khấu chuyên nghiệp.
						</p>
					</div>

					{/* Right: Service List */}
					<div className="lg:w-2/3 border-t border-gold-light/30">
						{SERVICES.map((service, index) => {
							const isActive = activeItem === service.id;

							return (
								<div
									key={service.id}
									className="service-item group border-b border-gold-light/30 cursor-pointer transition-colors duration-500 hover:bg-cream/30"
									onMouseEnter={() => setActiveItem(service.id)}
									onMouseLeave={() => setActiveItem(null)}
									onClick={() => setActiveItem(isActive ? null : service.id)}
								>
									<div className="py-8 lg:py-12 flex items-start gap-4 lg:gap-8 relative overflow-hidden">
										{/* Index Number */}
										<span className="text-6xl lg:text-8xl font-display italic absolute -left-2 lg:-left-4 top-1/2 -translate-y-1/2 text-gold/5 pointer-events-none group-hover:text-gold/10 transition-colors duration-500">
											{service.id}
										</span>

										<div className="flex-1 relative z-10 px-4 lg:px-8">
											<div className="flex items-center justify-between gap-4">
												<h3 className="text-2xl lg:text-4xl font-display font-medium group-hover:text-gold transition-colors duration-500">
													{service.title}
												</h3>
												<div
													className={cn(
														"min-w-[40px] h-[40px] lg:w-12 lg:h-12 rounded-full border border-gold/20 flex items-center justify-center transition-all duration-500",
														isActive
															? "bg-gold border-gold rotate-[-45deg]"
															: "bg-transparent",
													)}
												>
													<ArrowRight
														size={18}
														className={cn(
															"transition-colors duration-500",
															isActive ? "text-white" : "text-gold",
														)}
													/>
												</div>
											</div>

											{/* Animated Description */}
											<div
												className={cn(
													"overflow-hidden transition-all duration-700 ease-in-out",
													isActive
														? "max-h-[300px] opacity-100 mt-4"
														: "max-h-0 opacity-0",
												)}
											>
												<p className="text-stone text-sm lg:text-lg max-w-xl leading-relaxed pb-4 lg:pb-6 font-light">
													{service.desc}
												</p>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
