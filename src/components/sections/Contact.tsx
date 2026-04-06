"use client";

import React, { useState } from "react";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		eventType: "Sự kiện doanh nghiệp",
		date: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<section
			id="contact"
			className="py-16 lg:py-48 bg-ink text-white overflow-hidden scroll-mt-20"
		>
			<div className="container-custom">
				<div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
					{/* Left Column: Info */}
					<div className="lg:w-1/2 space-y-12 lg:space-y-16">
						<div>
							<SectionLabel dark>— Liên hệ & Tư vấn</SectionLabel>
							<h2 className="text-4xl lg:text-8xl font-display font-semibold leading-tight mb-8 lg:mb-12 tracking-tight">
								Kể cho chúng tôi <br />{" "}
								<span className="text-gold italic font-light">về sự kiện</span>{" "}
								<br /> của bạn
							</h2>
							<p className="text-stone text-base lg:text-lg leading-relaxed max-w-sm font-light">
								Bắt đầu hành trình kiến tạo kịch bản với chúng tôi ngay hôm nay
								để nhận báo giá chi tiết và concept sáng tạo nhất.
							</p>
						</div>

						<div className="space-y-8 lg:space-y-10 group">
							<div className="flex flex-col items-start border-b border-white/10 pb-6 lg:pb-8 transition-colors duration-500 hover:border-gold border-stone/30">
								<span className="text-stone text-[10px] uppercase tracking-[0.4em] mb-4">
									Hotline hỗ trợ 24/7
								</span>
								<a
									href="tel:0901234567"
									className="text-2xl lg:text-5xl font-display font-medium hover:text-gold transition-colors duration-500"
								>
									090 123 4567
								</a>
							</div>

							<div className="flex flex-col items-start border-b border-white/10 pb-6 lg:pb-8 transition-colors duration-500 hover:border-gold border-stone/30">
								<span className="text-stone text-[10px] uppercase tracking-[0.4em] mb-4">
									Email tư vấn
								</span>
								<a
									href="mailto:hello@vudoanevent.vn"
									className="text-xl lg:text-4xl font-display font-medium hover:text-gold transition-colors duration-500"
								>
									hello@vudoanevent.vn
								</a>
							</div>

							<div className="flex flex-col items-start border-b border-white/10 pb-6 lg:pb-8 transition-colors duration-500 hover:border-gold border-stone/30">
								<span className="text-stone text-[10px] uppercase tracking-[0.4em] mb-4">
									Địa chỉ trụ sở
								</span>
								<p className="text-lg lg:text-2xl font-display font-medium max-w-sm">
									123 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP. Hồ Chí Minh
								</p>
							</div>
						</div>
					</div>

					{/* Right Column: Form */}
					<div className="lg:w-1/2 bg-ink-soft p-6 lg:p-16 border border-white/5 relative shadow-2xl">
						<form className="space-y-8 lg:space-y-10">
							{/* Name Input */}
							<div className="relative group">
								<input
									type="text"
									name="name"
									placeholder=" "
									required
									value={formData.name}
									onChange={handleChange}
									className="w-full bg-transparent border-b border-stone/30 py-4 outline-none focus:border-gold transition-all duration-500 peer"
								/>
								<label className="absolute left-0 top-4 text-stone text-[10px] lg:text-[11px] uppercase tracking-widest pointer-events-none transition-all duration-500 peer-focus:top-[-16px] peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-[-16px] peer-[:not(:placeholder-shown)]:text-gold">
									Họ và tên *
								</label>
							</div>

							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
								{/* Phone Input */}
								<div className="relative group">
									<input
										type="tel"
										name="phone"
										placeholder=" "
										required
										value={formData.phone}
										onChange={handleChange}
										className="w-full bg-transparent border-b border-stone/30 py-4 outline-none focus:border-gold transition-all duration-500 peer"
									/>
									<label className="absolute left-0 top-4 text-stone text-[10px] lg:text-[11px] uppercase tracking-widest pointer-events-none transition-all duration-500 peer-focus:top-[-16px] peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-[-16px] peer-[:not(:placeholder-shown)]:text-gold">
										Số điện thoại *
									</label>
								</div>

								{/* Email Input */}
								<div className="relative group">
									<input
										type="email"
										name="email"
										placeholder=" "
										value={formData.email}
										onChange={handleChange}
										className="w-full bg-transparent border-b border-stone/30 py-4 outline-none focus:border-gold transition-all duration-500 peer"
									/>
									<label className="absolute left-0 top-4 text-stone text-[10px] lg:text-[11px] uppercase tracking-widest pointer-events-none transition-all duration-500 peer-focus:top-[-16px] peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-[-16px] peer-[:not(:placeholder-shown)]:text-gold">
										Email
									</label>
								</div>
							</div>

							{/* Event Type Select */}
							<div className="relative">
								<span className="block text-stone/50 text-[10px] uppercase tracking-widest mb-4">
									Loại hình sự kiện dự kiến
								</span>
								<select
									name="eventType"
									value={formData.eventType}
									onChange={handleChange}
									className="w-full bg-transparent border-b border-stone/30 py-4 outline-none focus:border-gold appearance-none transition-all duration-500 font-display italic text-lg"
								>
									<option
										value="Sự kiện doanh nghiệp"
										className="bg-ink text-white"
									>
										Sự kiện doanh nghiệp
									</option>
									<option
										value="Vũ đoàn biểu diễn"
										className="bg-ink text-white"
									>
										Vũ đoàn biểu diễn
									</option>
									<option
										value="Lễ cưới & Sự kiện cá nhân"
										className="bg-ink text-white"
									>
										Lễ cưới & Sự kiện cá nhân
									</option>
									<option
										value="Concert & Show âm nhạc"
										className="bg-ink text-white"
									>
										Concert & Show âm nhạc
									</option>
								</select>
								<div className="absolute right-0 bottom-4 pointer-events-none">
									<span className="text-gold">▼</span>
								</div>
							</div>

							{/* Message */}
							<div className="relative group">
								<textarea
									name="message"
									rows={4}
									placeholder=" "
									value={formData.message}
									onChange={handleChange}
									className="w-full bg-transparent border-b border-stone/30 py-4 outline-none focus:border-gold transition-all duration-500 peer resize-none"
								/>
								<label className="absolute left-0 top-4 text-stone text-[10px] lg:text-[11px] uppercase tracking-widest pointer-events-none transition-all duration-500 peer-focus:top-[-16px] peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-[-16px] peer-[:not(:placeholder-shown)]:text-gold">
									Mô tả vắn tắt yêu cầu
								</label>
							</div>

							<Button
								variant="gold"
								className="w-full py-6 mt-8 lg:mt-12 overflow-hidden flex items-center justify-center gap-4 transition-all"
							>
								Gửi yêu cầu tư vấn <span>→</span>
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
