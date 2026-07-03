# Đề xuất cải thiện — chưa triển khai

Tài liệu liệt kê các thay đổi có thể áp dụng tiếp theo cho website + bài thuyết trình AHTS. Đây là **danh sách đề xuất**, chưa code — quyết định làm cái nào tùy bạn.

Đã áp dụng ngay trong phiên này (tham khảo [redesign-skill](https://github.com/Leonxlnx/taste-skill/blob/main/skills/redesign-skill/SKILL.md)):
- Thêm font display `Outfit` cho heading (khác biệt so với Inter/mặc định)
- Phá vỡ layout 3-cột đối xứng ở Home (zig-zag, 1 stat được nhấn mạnh thay vì 3 box bằng nhau)
- Thêm hover/active state thật (translate, scale khi bấm) thay vì chỉ hover màu
- Thêm grain overlay nhẹ lên nền tối/ảnh để phá flat gradient
- Thêm trang 404, meta tags (description, og:title), sửa hết `bg-gradient-to-*` → `bg-linear-to-*` (Tailwind v4)

---

## A. Nâng cấp giao diện (design polish)

### A1. Typography
- [ ] Áp `font-display` (Outfit) cho toàn bộ heading còn lại trong slide deck (hiện chỉ mới áp ở Home.jsx)
- [ ] Dùng `font-variant-numeric: tabular-nums` cho các con số KPI/bảng so sánh — số liệu thẳng hàng khi đổi giữa các slide
- [ ] `text-wrap: balance` cho heading lớn, tránh chữ mồ côi (orphan word) ở cuối dòng

### A2. Màu sắc & bề mặt
- [ ] Card ở Slide12 (bottleneck) và Slide11 vẫn dùng pattern "border + shadow + white bg" hơi generic — có thể bỏ border, chỉ dùng background color để phân tầng
- [ ] Thêm tinted shadow (shadow có màu brand thay vì đen thuần) cho card nổi bật — đã làm ở Home, chưa lan sang slide deck
- [ ] Cân nhắc thêm 1 dark-mode toggle cho toàn site (hiện tại site chỉ có slide dark cố định, không đổi theo hệ thống)

### A3. Layout
- [ ] Rà lại toàn bộ slide dùng `grid md:grid-cols-N` đều nhau — một số chỗ (Slide03, Slide09) vẫn là bố cục 2 cột cân đối tuyệt đối, có thể lệch tỷ lệ (vd 3/5 thay vì 1/2) để đỡ "AI-generated" nhìn

### A4. Component
- [ ] Badge "%KH", "Nguy cơ", "Đúng tiến độ" trong Slide14 đang là pill tròn giống nhau hết — thử dạng vuông góc hoặc chỉ text-color không nền, đỡ lặp
- [ ] FAQ/accordion pattern (nếu thêm sau) — tránh accordion cổ điển, ưu tiên progressive disclosure như đã làm ở Slide13 (click-to-swap)

---

## B. Tính năng thêm cho bài thuyết trình (làm sống động hơn)

### B1. Điều hướng & trải nghiệm xem
- [ ] **Chế độ trình chiếu toàn màn hình** (Fullscreen API) — nút bấm để vào chế độ presenter thật, ẩn hết UI trình duyệt
- [ ] **Điều khiển bằng bàn phím** đầy đủ hơn: phím số nhảy thẳng đến slide, `Home`/`End` về đầu/cuối, `F` fullscreen
- [ ] **Thanh tiến trình đọc** (progress bar mảnh ở top) hiển thị đã xem bao nhiêu % bài thuyết trình
- [ ] **Chế độ Presenter Notes**: click giữ phím `N` hiện ghi chú riêng cho người trình bày (số liệu chi tiết, câu nói gợi ý) mà không hiện cho khán giả

### B2. Xuất & chia sẻ
- [ ] **Export PDF** — nút xuất toàn bộ slide deck ra PDF (dùng `html2canvas` + `jsPDF`, hoặc in trực tiếp qua `window.print()` với CSS `@media print`)
- [ ] **Share link tới slide cụ thể** — URL có `#slide-13` để gửi thẳng đồng nghiệp đến đúng phần
- [ ] **QR code** ở slide cuối để người xem quét lưu lại link báo cáo

### B3. Tương tác dữ liệu
- [ ] **So sánh kịch bản (what-if)**: cho phép kéo slider chỉnh giả định (vd tăng doanh thu tài chính lên X%) và xem KPI cập nhật realtime ở Slide14
- [ ] **Drill-down từ Slide14 → Slide13**: bấm vào 1 chỉ tiêu "Nguy cơ" trong bảng KPI nhảy thẳng đến đúng phase roadmap tương ứng (data đã có sẵn field `phase` trong `kpiAlerts`, chưa nối UI)
- [ ] **Tooltip nguồn dữ liệu**: hover vào bất kỳ con số nào hiện popup ghi rõ ô Excel tham chiếu (data `sources` đã có trong `report.js` cho roadmap, có thể mở rộng cho toàn bộ số liệu khác)

### B4. Motion & sinh động
- [ ] **Transition giữa slide mượt hơn**: hiện tại dùng scroll-snap tự nhiên của trình duyệt; có thể thêm custom page-transition (fade/slide) khi bấm next/prev bằng nút thay vì chỉ khi scroll
- [ ] **Animated counter khi vào viewport** — `AnimatedNumber` đã có, nên áp dụng cho mọi con số quan trọng chưa được wrap (kiểm tra Slide13, 14 các số trong `sources`/steps)
- [ ] **Confetti/success micro-animation** ở Slide15 (Cảm ơn) khi cuộn tới, thay animation particle hiện tại bằng hiệu ứng ấn tượng hơn (vd draw-on SVG logo AHTS)

### B5. Nội dung động
- [ ] **Live clock/ngày báo cáo** tự update ở slide cuối hoặc header (hữu ích nếu present trực tiếp nhiều lần)
- [ ] **Chế độ "Tóm tắt nhanh" (TL;DR mode)**: 1 slide overlay tổng hợp 5 con số quan trọng nhất, dùng khi thời gian present bị rút ngắn
- [ ] **Voice-over / audio đồng bộ** (nếu cần bản ghi âm thuyết trình) — nút play đồng bộ với auto-scroll qua từng slide

---

## C. Hạ tầng & chất lượng code

- [ ] **Code-splitting**: bundle JS hiện ~900KB (gzip ~265KB) — cảnh báo build. Tách slide deck bằng `React.lazy()` per-slide hoặc chunk theo route để giảm tải trang đầu
- [ ] **Nén ảnh**: một số ảnh gốc (`_DHP5591.jpg` ~946KB, `Copy of DSC09840.jfif` ~532KB) khá nặng — nên convert sang WebP/AVIF và resize đúng kích thước hiển thị
- [ ] **Lazy-load ảnh** ngoài viewport đầu tiên (`loading="lazy"` cho các slide sau)
- [ ] **Accessibility audit**: kiểm tra `alt` text đầy đủ (một số ảnh trang trí có thể để `alt=""` đúng chuẩn thay vì mô tả), focus ring cho toàn bộ nút bấm/card có thể click
- [ ] **Sitemap + robots.txt** nếu portal được public để SEO

---

## Ưu tiên đề xuất (nếu chỉ chọn vài mục)

1. Drill-down Slide14 → Slide13 (data đã sẵn, chỉ nối UI — impact cao, effort thấp)
2. Export PDF (hữu ích thực tế khi gửi báo cáo qua email)
3. Code-splitting + nén ảnh (cải thiện tốc độ tải rõ rệt)
4. Áp `font-display` + tinted shadow cho toàn bộ slide deck còn lại (đồng bộ với Home đã sửa)
5. Fullscreen presenter mode + keyboard nav đầy đủ
