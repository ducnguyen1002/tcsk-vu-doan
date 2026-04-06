"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { DANCE_STYLES } from "@/data/content";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";

const DanceTeam = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);
	const secondaryImageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Image Parallax
			gsap.to(imageRef.current, {
				yPercent: -15,
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: 1.5,
				},
			});

			gsap.to(secondaryImageRef.current, {
				yPercent: 20,
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: 2,
				},
			});

			// Text Reveal
			gsap.from(".dance-reveal", {
				y: 40,
				opacity: 0,
				stagger: 0.1,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 75%",
				},
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			id="dance-team"
			ref={sectionRef}
			className="py-20 lg:py-48 bg-ink overflow-hidden border-b border-white/5 relative"
		>
			<div className="container-custom">
				<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
					{/* Left: Text Content */}
					<div className="lg:w-1/2 z-10">
						<SectionLabel dark>— Vũ đoàn chuyên nghiệp</SectionLabel>
						<h2 className="dance-reveal text-4xl lg:text-6xl font-display font-semibold text-white leading-tight mb-8 lg:mb-12 tracking-tight">
							Linh hồn của <br />{" "}
							<span className="text-gold italic font-light">sân khấu</span>
						</h2>
						<p className="dance-reveal text-stone text-base lg:text-lg leading-relaxed max-w-xl mb-8 lg:mb-12 font-light">
							Sở hữu dàn vũ công được đào tạo bài bản trong và ngoài nước, chúng
							tôi tự tin mang đến những phần biểu diễn mãn nhãn, kết hợp hoàn
							hảo giữa kỹ thuật và cảm xúc nghệ thuật đỉnh cao.
						</p>

						<div className="dance-reveal flex flex-wrap gap-2 lg:gap-4 mb-10 lg:mb-16">
							{DANCE_STYLES.map((style) => (
								<span
									key={style}
									className="px-4 lg:px-6 py-2 border border-white/10 text-white/70 text-[10px] lg:text-[11px] uppercase tracking-[0.15em] hover:bg-gold/10 hover:border-gold/30 transition-colors duration-300"
								>
									{style}
								</span>
							))}
						</div>

						<Button
							variant="outline"
							className="dance-reveal group scale-100 lg:scale-110 origin-left border-gold text-gold hover:bg-gold hover:text-white"
						>
							Khám phá vũ đoàn
						</Button>
					</div>

					{/* Right: Layered Images with Parallax */}
					<div className="lg:w-1/2 relative h-[500px] lg:h-[800px] w-full mt-12 lg:mt-0">
						{/* Main Image */}
						<div
							ref={imageRef}
							className="absolute top-0 right-0 w-[90%] lg:w-[85%] h-[90%] lg:h-[85%] overflow-hidden z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
						>
							<Image
								src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800"
								alt="Professional Dance Group"
								fill
								className="object-cover scale-110"
							/>
						</div>

						{/* Overflow Secondary Image */}
						<div
							ref={secondaryImageRef}
							className="absolute bottom-[-30px] lg:bottom-[-50px] left-0 w-[50%] lg:w-[55%] h-[50%] lg:h-[55%] border-4 lg:border-8 border-ink overflow-hidden z-20 shadow-2xl group transition-all duration-700"
						>
							<Image
								src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad"
								alt="Dance performance close up"
								fill
								className="object-cover group-hover:scale-110 transition-transform duration-1000"
							/>
							<div className="absolute inset-0 bg-gold/10 mix-blend-overlay hover:opacity-0 transition-opacity duration-500" />
						</div>

						{/* Decorative Elements */}
						<div className="absolute top-[-20px] right-[-20px] w-20 lg:w-40 h-20 lg:h-40 border-t border-r border-gold/20 z-0 pointer-events-none" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default DanceTeam;
