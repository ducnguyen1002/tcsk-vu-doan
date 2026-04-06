"use client";

import React from "react";
import Image from "next/image";
import { CLIENTS } from "@/data/content";
import SectionLabel from "../ui/SectionLabel";

const Clients = () => {
	return (
		<section
			id="clients"
			className="py-24 lg:py-48 bg-white overflow-hidden"
		>
			<div className="container-custom">
				<div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
					<div className="lg:w-1/2">
						<SectionLabel>Đối tác & Khách hàng</SectionLabel>
						<h2 className="text-4xl lg:text-6xl font-display font-light italic leading-tight">
							Đồng hành cùng sự <br />{" "}
							<span className="text-gold">hoàn hảo</span>
						</h2>
					</div>

					<div className="lg:w-1/3">
						<p className="text-stone text-lg leading-relaxed max-w-sm mb-4">
							Hơn 200 thương hiệu đã tin tưởng giao phó sự kiện quan trọng cho
							đội ngũ của chúng tôi.
						</p>
					</div>
				</div>
			</div>

			{/* Marquee Row 1 */}
			<div className="relative flex overflow-hidden border-y border-gold-light/10 bg-cream/20 py-16 group">
				<div className="flex whitespace-nowrap animate-marquee">
					{Array.from({ length: 4 }).map((_, i) => (
						<div
							key={i}
							className="flex shrink-0 items-center gap-24 px-12"
						>
							{CLIENTS.map((client) => (
								<div
									key={client.name + i}
									className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
								>
									<span className="text-2xl font-display italic font-semibold text-ink/80 tracking-tighter">
										{client.name}
									</span>
									<span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gold/60">
										Partner —
									</span>
								</div>
							))}
						</div>
					))}
				</div>

				{/* Row 1 Hover Overlay */}
				<div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white via-transparent to-white w-full" />
			</div>

			{/* Highlight Text Marquee */}
			<div className="relative flex overflow-hidden py-12">
				<div className="flex whitespace-nowrap animate-marquee-reverse">
					{Array.from({ length: 4 }).map((_, i) => (
						<div
							key={i}
							className="flex shrink-0 items-center"
						>
							<span className="text-8xl lg:text-[180px] font-display font-black italic text-ink/10 select-none px-12 leading-none uppercase tracking-tighter">
								LUXURY — ELEGANCE — ARTISTRY — PASSION — CREATIVITY —
							</span>
						</div>
					))}
				</div>
			</div>

			<style jsx>{`
				.animate-marquee {
					animation: marquee 40s linear infinite;
				}
				.animate-marquee-reverse {
					animation: marquee-reverse 50s linear infinite;
				}
				@keyframes marquee {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
				@keyframes marquee-reverse {
					0% {
						transform: translateX(-50%);
					}
					100% {
						transform: translateX(0);
					}
				}
			`}</style>
		</section>
	);
};

export default Clients;
