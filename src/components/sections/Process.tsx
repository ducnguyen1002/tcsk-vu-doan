"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "../ui/SectionLabel";
import { cn } from "@/lib/utils";

const PROCESS_STEPS = [
	{
		id: "01",
		title: "Tiếp nhận & Tư vấn",
		desc: "Lắng nghe nhu cầu, mục tiêu và ngân sách của bạn để đưa ra những định hướng ban đầu sát thực tế nhất.",
	},
	{
		id: "02",
		title: "Sáng tạo Concept",
		desc: "Xây dựng ý tưởng chủ đạo và kịch bản chi tiết mang đậm dấu ấn thương hiệu hoặc cá nhân của khách hàng.",
	},
	{
		id: "03",
		title: "Khảo sát & Dự toán",
		desc: "Khảo sát thực địa, đo đạc kỹ thuật và lập bảng báo giá chi tiết, minh bạch không phát sinh chi phí.",
	},
	{
		id: "04",
		title: "Sản xuất & Tổng duyệt",
		desc: "Hệ thống hóa thiết bị, nhân sự và tiến hành tập dượt kỹ lưỡng trước khi sự kiện chính thức bắt đầu.",
	},
	{
		id: "05",
		title: "Vận hành Sự kiện",
		desc: "Điều phối chuyên nghiệp mọi diễn biến tại hiện trường, đảm bảo sự kiện diễn ra trôi chảy và đẳng cấp.",
	},
	{
		id: "06",
		title: "Tổng kết & Nghiệm thu",
		desc: "Bàn giao kết quả, tổng kết hiệu ứng truyền thông và hoàn tất các thủ tục nghiệm thu sự kiện.",
	},
];

const Process = () => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".process-step", {
				y: 50,
				opacity: 0,
				stagger: 0.1,
				duration: 0.8,
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
			ref={sectionRef}
			className="py-24 lg:py-48 bg-cream/30 overflow-hidden"
		>
			<div className="container">
				<div className="max-w-3xl mb-16 lg:mb-24">
					<SectionLabel>Quy trình triển khai</SectionLabel>
					<h2 className="text-3xl lg:text-6xl font-display font-semibold leading-tight tracking-tight">
						Kiến tạo sự kiện <br />{" "}
						<span className="text-gold italic font-light">theo chuẩn mực</span>
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
					{PROCESS_STEPS.map((step, index) => (
						<div
							key={step.id}
							className="process-step group relative pl-12 lg:pl-16 border-l border-gold-light/20"
						>
							{/* Step Number Badge */}
							<div className="absolute -left-[14px] top-0 w-7 h-7 rounded-full bg-cream border border-gold flex items-center justify-center z-10 group-hover:bg-gold transition-colors duration-500">
								<div className="w-1.5 h-1.5 rounded-full bg-gold group-hover:bg-white transition-colors duration-500" />
							</div>

							<div className="relative">
								<span className="block text-gold font-body font-bold text-lg mb-4 tracking-tighter">
									{step.id}.
								</span>
								<h3 className="text-2xl lg:text-3xl font-display font-medium mb-6 group-hover:text-gold transition-colors duration-500">
									{step.title}
								</h3>
								<p className="text-stone text-base lg:text-lg leading-relaxed font-light">
									{step.desc}
								</p>

								{/* Decorative background number */}
								<span className="absolute -top-12 -right-4 text-9xl font-display italic text-gold/[0.03] select-none pointer-events-none group-hover:text-gold/[0.06] transition-colors duration-700">
									{step.id}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Process;
