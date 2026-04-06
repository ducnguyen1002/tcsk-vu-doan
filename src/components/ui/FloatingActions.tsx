"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingActions = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
			{/* Zalo Button */}
			<a
				href="https://zalo.me/0901234567"
				target="_blank"
				rel="noopener noreferrer"
				className="w-12 h-12 md:w-14 md:h-14 bg-[#0068ff] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 relative group"
				aria-label="Chat Zalo"
			>
				<MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
				<span className="absolute right-full mr-4 bg-white text-ink text-[10px] uppercase tracking-widest px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm border border-stone/10 shadow-sm">
					Chat Zalo
				</span>
			</a>

			{/* Phone Button */}
			<a
				href="tel:0901234567"
				className="w-12 h-12 md:w-14 md:h-14 bg-gold text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 relative group"
				aria-label="Gọi điện"
			>
				<Phone className="w-6 h-6 md:w-7 md:h-7 animate-pulse" />
				<span className="absolute right-full mr-4 bg-white text-ink text-[10px] uppercase tracking-widest px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm border border-stone/10 shadow-sm">
					Gọi Ngay: 090 123 4567
				</span>
			</a>

			{/* Scroll To Top */}
			<button
				onClick={scrollToTop}
				className={cn(
					"w-12 h-12 md:w-14 md:h-14 bg-ink text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-500",
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
				)}
				aria-label="Back to top"
			>
				<ArrowUp className="w-6 h-6 md:w-7 md:h-7" />
			</button>
		</div>
	);
};

export default FloatingActions;
