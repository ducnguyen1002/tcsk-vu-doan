"use client";

import React from "react";
import SectionLabel from "./ui/SectionLabel";

const Footer = () => {
	return (
		<footer className="py-12 bg-ink border-t border-white/5">
			<div className="container">
				<div className="flex flex-col lg:flex-row justify-between items-center gap-12 text-stone text-[11px] uppercase tracking-widest font-medium">
					{/* Logo Left */}
					<div className="text-xl font-display italic text-white/50 lowercase tracking-tighter">
						vudoan.event
					</div>

					{/* Links Center */}
					<nav className="flex flex-wrap justify-center gap-8 lg:gap-16">
						<a
							href="#"
							className="hover:text-gold transition-colors duration-500"
						>
							Trang chủ
						</a>
						<a
							href="#services"
							className="hover:text-gold transition-colors duration-500"
						>
							Dịch vụ
						</a>
						<a
							href="#portfolio"
							className="hover:text-gold transition-colors duration-500"
						>
							Dự án
						</a>
						<a
							href="#contact"
							className="hover:text-gold transition-colors duration-500"
						>
							Liên hệ
						</a>
						<a
							href="#"
							className="hover:text-gold transition-colors duration-500"
						>
							Tuyển dụng
						</a>
					</nav>

					{/* Copyright Right */}
					<div className="text-center lg:text-right">
						© {new Date().getFullYear()} Vu Doan Event Agency.{" "}
						<br className="lg:hidden" />
						Designed with Passion.
					</div>
				</div>

				{/* Visual Accent */}
				<div className="mt-12 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
			</div>
		</footer>
	);
};

export default Footer;
