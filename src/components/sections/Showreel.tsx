"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import { cn } from "@/lib/utils";

const Showreel = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	const togglePlay = () => {
		if (isPlaying) {
			videoRef.current?.pause();
		} else {
			videoRef.current?.play();
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<section
			id="showreel"
			className="py-20 lg:py-48 bg-cream overflow-hidden"
		>
			<div className="container">
				<div className="text-center mb-10 lg:mb-16">
					<SectionLabel className="justify-center">Showreel</SectionLabel>
					<h2 className="text-4xl lg:text-7xl font-display font-semibold leading-tight tracking-tight">
						Nghệ thuật trình diễn <br />{" "}
						<span className="text-gold italic font-light">đỉnh cao</span>
					</h2>
				</div>

				{/* Video Player */}
				<div
					className="relative group cursor-pointer aspect-[4/5] lg:aspect-video mx-auto max-w-5xl bg-ink overflow-hidden border border-gold-light/20 shadow-2xl"
					onClick={togglePlay}
				>
					{/* Background Video Poster/Thumbnail */}
					<video
						ref={videoRef}
						className="w-full h-full object-cover grayscale lg:group-hover:grayscale-0 transition-all duration-1000"
						playsInline
						loop
						poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200"
					>
						<source
							src="https://assets.mixkit.co/videos/preview/mixkit-ballroom-dancing-under-the-lights-4435-large.mp4"
							type="video/mp4"
						/>
					</video>

					{/* Overlay and Play Button */}
					<div
						className={cn(
							"absolute inset-0 bg-ink/30 transition-opacity duration-700 flex items-center justify-center",
							isPlaying ? "opacity-0 pointer-events-none" : "opacity-100",
						)}
					>
						<div className="relative w-20 h-20 lg:w-32 lg:h-32 rounded-full border border-gold/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 bg-white/5 backdrop-blur-sm">
							<Play className="text-gold fill-gold ml-2 w-8 h-8 lg:w-12 lg:h-12" />
							<div className="absolute inset-0 rounded-full border border-gold/40 animate-ping opacity-20" />
						</div>
					</div>

					{/* Pause Button Hover Indicator */}
					{isPlaying && (
						<div className="absolute inset-0 flex items-center justify-center opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
								<Pause className="text-white fill-white" />
							</div>
						</div>
					)}

					{/* Video Metadata Label */}
					<div className="absolute bottom-6 left-6 flex flex-col gap-1 pointer-events-none transition-all duration-300 opacity-0 lg:group-hover:opacity-100 translate-y-2 lg:group-hover:translate-y-0">
						<span className="text-gold text-[10px] uppercase tracking-widest">
							— Highlight 2024
						</span>
						<span className="text-white font-display italic text-lg whitespace-nowrap">
							Vũ đạo & Nghệ thuật Trình diễn
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Showreel;
