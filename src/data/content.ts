// src/data/content.ts
// Toàn bộ text placeholder tiếng Việt cho landing page Sự kiện & Vũ đoàn

export const HERO = {
  badge: '✦ Tổ chức sự kiện & Vũ đoàn chuyên nghiệp',
  h1Line1: 'Nghệ thuật',
  h1Line2: 'trên từng sân khấu',
  body: 'Chúng tôi kiến tạo những sự kiện đáng nhớ — nơi mỗi khoảnh khắc đều được dàn dựng với tất cả tâm huyết và đam mê nghệ thuật.',
  cta1: 'Xem dịch vụ',
  cta2: 'Liên hệ ngay',
}

export const STATS = [
  { number: 500, label: 'Sự kiện đã tổ chức' },
  { number: 8, label: 'Năm kinh nghiệm' },
  { number: 50, label: 'Vũ công chuyên nghiệp' },
  { number: 200, label: 'Khách hàng tin tưởng' },
]

export const SERVICES = [
  { 
    id: '01', 
    title: 'Sự kiện doanh nghiệp', 
    desc: 'Gala dinner, hội nghị, khai trương, ra mắt sản phẩm, teambuilding. Phục vụ chuyên nghiệp từ 20 đến 5.000 khách với kịch bản độc bản.' 
  },
  { 
    id: '02', 
    title: 'Vũ đoàn biểu diễn', 
    desc: 'Hip-hop, Latin, múa đương đại, LED Dance, múa dân tộc, Aerial. Đội ngũ vũ công chuyên nghiệp, trang phục đầu tư bài bản.' 
  },
  { 
    id: '03', 
    title: 'Lễ cưới & sự kiện cá nhân', 
    desc: 'Concept riêng biệt, dàn dựng sân khấu, âm thanh ánh sáng, vũ đoàn biểu diễn khai tiệc đầy cảm xúc và sang trọng.' 
  },
  { 
    id: '04', 
    title: 'Concert & show âm nhạc', 
    desc: 'Sân khấu quy mô lớn, vũ đoàn mở màn, dàn dựng nghệ thuật toàn diện từ kịch bản đến thực hiện hậu kỳ.' 
  },
]

export const PORTFOLIO = [
  { id: 1, title: 'Gala Dinner — Tập đoàn ABC', category: 'Doanh nghiệp', year: '2024', size: 'large', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200' },
  { id: 2, title: 'Concert Âm nhạc Mùa Hè', category: 'Concert', year: '2024', size: 'small', image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'Lễ Cưới Sân Vườn — Hội An', category: 'Lễ cưới', year: '2023', size: 'small', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Show Cuối Năm — Nhãn Hàng XYZ', category: 'Doanh nghiệp', year: '2023', size: 'large', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200' },
  { id: 5, title: 'Festival Âm Nhạc Ngoài Trời', category: 'Concert', year: '2023', size: 'medium', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Tiệc Kỷ Niệm 20 Năm', category: 'Doanh nghiệp', year: '2022', size: 'medium', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800' },
]

export const DANCE_STYLES = ['Hip-hop', 'Latin', 'Đương đại', 'LED Dance', 'Dân tộc', 'Aerial & Acrobatics']

export const TESTIMONIALS = [
  {
    quote: 'Ê-kíp làm việc cực kỳ chuyên nghiệp và tận tâm. Sự kiện diễn ra hoàn hảo hơn mong đợi — khách mời vô cùng ấn tượng với phần biểu diễn vũ đoàn.',
    name: 'Nguyễn Thị Lan Anh',
    role: 'Marketing Director — Tập đoàn Phú Thái',
  },
  {
    quote: 'Từ khâu lên ý tưởng đến thực hiện, mọi thứ đều được chăm chút tỉ mỉ. Đây là đơn vị tổ chức sự kiện tôi sẽ tiếp tục lựa chọn cho các dự án tới.',
    name: 'Trần Minh Khôi',
    role: 'CEO — Công ty TNHH Sáng Tạo Việt',
  },
]

export const CLIENTS = [
  { name: 'Phu Thai Group', logo: 'https://images.unsplash.com/photo-1599305090748-31931cb7e4d1' },
  { name: 'VinGroup', logo: 'https://images.unsplash.com/photo-1599305090748-31931cb7e4d1' },
  { name: 'SunGroup', logo: 'https://images.unsplash.com/photo-1599305090748-31931cb7e4d1' },
  { name: 'Techcombank', logo: 'https://images.unsplash.com/photo-1599305090748-31931cb7e4d1' },
  { name: 'Viettel', logo: 'https://images.unsplash.com/photo-1599305090748-31931cb7e4d1' },
  { name: 'Masan', logo: 'https://images.unsplash.com/photo-1599305090748-31931cb7e4d1' },
]
