"use client";

import React from "react";
import SectionLabel from "../ui/SectionLabel";
import { cn } from "@/lib/utils";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const Contact = () => {
	const hotline = "090 123 4567";
	const phoneLink = "tel:0901234567";
	const zaloLink = "https://zalo.me/0901234567";

	return (
		<section
			id="contact"
			className="py-24 lg:py-48 bg-ink text-white overflow-hidden scroll-mt-20"
		>
			<div className="container px-4">
				<div className="max-w-5xl mx-auto">
					<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
						{/* Left Content */}
						<div className="lg:w-1/2 space-y-8 text-center lg:text-left">
							<div>
								<SectionLabel dark>— Liên hệ & Tư vấn</SectionLabel>
								<h2 className="text-4xl lg:text-7xl font-display font-semibold leading-tight mt-6 tracking-tight">
									Khởi tạo <br />{" "}
									<span className="text-gold italic font-light">sự kiện đẳng cấp</span>{" "}
									<br /> của bạn
								</h2>
							</div>
							
							<p className="text-stone text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-light">
								Chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp tối ưu nhất cho sự kiện của bạn qua các kênh liên lạc trực tiếp.
							</p>

							<div className="pt-8 space-y-6 hidden lg:block">
								<div className="flex items-center gap-4 text-stone/80 group transition-colors hover:text-gold">
									<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold/50">
										<MapPin className="w-4 h-4" />
									</div>
									<span className="text-sm font-light">123 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP. HCM</span>
								</div>
								<div className="flex items-center gap-4 text-stone/80 group transition-colors hover:text-gold">
									<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold/50">
										<Mail className="w-4 h-4" />
									</div>
									<span className="text-sm font-light">hello@vudoanevent.vn</span>
								</div>
							</div>
						</div>

						{/* Right Content: Contact Options */}
						<div className="lg:w-1/2 w-full grid grid-cols-1 gap-6">
							{/* Hotline Card */}
							<a 
								href={phoneLink}
								className="group relative overflow-hidden bg-ink-soft/50 border border-white/5 p-8 lg:p-12 hover:border-gold/50 transition-all duration-500 rounded-2xl flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8"
							>
								<div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shrink-0">
									<Phone className="w-8 h-8 text-gold" strokeWidth={1.5} />
								</div>
								<div className="space-y-3">
									<span className="text-stone text-[10px] uppercase tracking-[0.4em] font-medium">Hotline hỗ trợ 24/7</span>
									<h3 className="text-3xl lg:text-5xl font-display font-medium text-white group-hover:text-gold transition-colors">{hotline}</h3>
									<p className="text-stone/60 text-sm font-light italic">Chạm để thực hiện cuộc gọi ngay</p>
								</div>
							</a>

							{/* Zalo Card */}
							<a 
								href={zaloLink}
								target="_blank"
								rel="noopener noreferrer"
								className="group relative overflow-hidden bg-ink-soft/50 border border-white/5 p-8 lg:p-12 hover:border-gold/50 transition-all duration-500 rounded-2xl flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8"
							>
								<div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shrink-0">
									<MessageCircle className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
								</div>
								<div className="space-y-3">
									<span className="text-stone text-[10px] uppercase tracking-[0.4em] font-medium">Tư vấn qua Zalo</span>
									<h3 className="text-3xl lg:text-5xl font-display font-medium text-white group-hover:text-gold transition-colors">Chat Zalo</h3>
									<p className="text-stone/60 text-sm font-light italic">Gửi tin nhắn nhận báo giá chi tiết</p>
								</div>
							</a>
						</div>
					</div>

					{/* Mobile Info */}
					<div className="mt-16 pt-8 border-t border-white/5 space-y-6 lg:hidden text-center">
						<div className="flex flex-col items-center gap-2 text-stone/80">
							<MapPin className="w-4 h-4 text-gold mb-2" />
							<p className="text-sm font-light">123 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP. HCM</p>
						</div>
						<div className="flex flex-col items-center gap-2 text-stone/80">
							<Mail className="w-4 h-4 text-gold mb-2" />
							<p className="text-sm font-light">hello@vudoanevent.vn</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
