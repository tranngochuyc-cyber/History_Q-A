Tiếp tục trực tiếp project ChronoQuest hiện tại.

QUY TẮC QUAN TRỌNG NHẤT:
Mục tiêu của lượt làm việc này là đưa project về trạng thái HOÀN CHỈNH, CHẠY ĐƯỢC và BUILD PASS trước khi làm bất kỳ nâng cấp phụ nào.

KHÔNG:
- viết kế hoạch cho tôi
- giải thích đang làm gì
- báo cáo trung gian
- nghiên cứu lan man
- refactor code không liên quan
- xây thêm feature ngoài phạm vi
- quét lại toàn bộ codebase nhiều lần
- dành thời gian làm polish trước khi core flow hoàn tất

Hãy tự đọc đúng các file cần thiết, sửa trực tiếp và làm liên tục.

========================
P0 — BẮT BUỘC HOÀN THÀNH
========================

ChronoQuest phải có một game loop hoàn chỉnh:

Home
→ Setup
→ chọn số vòng
→ chọn phạm vi lịch sử
→ Start
→ hiện 3 sự kiện ngẫu nhiên
→ mỗi sự kiện PHẢI CÓ HÌNH ẢNH
→ chọn một event
→ Event Brief có ảnh + nội dung
→ trả lời câu hỏi
→ hiện đúng/sai + explanation
→ tính score/streak
→ sang round tiếp
→ hết số round
→ Result screen
→ Play Again

Hoàn thành P0 trước mọi thứ khác.

Game phải thực sự chơi được từ đầu đến cuối.

========================
DATA
========================

Không tạo database khổng lồ trong lượt này.

Chỉ cần khoảng 20–30 historical events chất lượng để game hoạt động tốt.

Mỗi event phải có:

- id
- title
- year/date
- country/countries
- region
- era
- category
- short summary
- historical image
- image alt
- ít nhất 1 câu hỏi
- explanation

Ưu tiên sự kiện đa dạng về:

- quốc gia
- thời kỳ
- chủ đề
- hình ảnh

Không cần cố đạt hàng trăm event.

Nếu thiếu event cho game dài, cho phép tái sử dụng sau khi đã ưu tiên tránh lặp gần nhau.

========================
IMAGE — BẮT BUỘC
========================

Không được hiển thị event bằng text-only card.

Mỗi card phải có historical image chiếm phần lớn diện tích.

Ví dụ:

Apollo 11
→ ảnh Moon landing

French Revolution
→ painting / Bastille

Meiji Restoration
→ ảnh/portrait Nhật Bản thời Minh Trị

Dien Bien Phu
→ historical battlefield photograph

Berlin Wall
→ historical photograph

Nếu image URL lỗi:
phải có visual fallback đẹp.

Không để broken image.

========================
VISUAL
========================

Không làm:
background đen + card đen + chữ trắng toàn trang.

Website cần màu sắc phong phú, dễ nhìn.

Dùng neutral base kết hợp accent color.

Ví dụ:

Ancient → amber
Medieval → purple
Early Modern → blue
Modern → orange/red
Contemporary → cyan/teal

Category cũng có accent riêng.

Ảnh lịch sử mới là yếu tố tạo visual diversity chính.

Màu sắc hỗ trợ hierarchy, không biến website thành rainbow.

========================
GAME SETUP
========================

Trong lượt này chỉ cần:

Game length:
10
20
30

Geography:
World
Country
Region

Era:
All
Ancient
Medieval
Early Modern
Modern
Contemporary

Category:
All
War
Politics
Science
Technology
Culture
Exploration
Revolution

Không mở rộng filter thêm nếu chưa cần.

========================
QUESTION TYPES
========================

Chỉ cần hoàn chỉnh 3 loại:

1. Multiple Choice
2. True / False
3. Year Guess

Không xây thêm Timeline, Map Quiz, Who, Where, AI question trong lượt này.

========================
RANDOM ENGINE
========================

Random phải:

- áp dụng filter
- tránh event vừa xuất hiện
- tránh lặp quá gần
- chọn 3 event khác nhau
- cố gắng đa dạng era/category

Không cần recommendation engine phức tạp.

Ưu tiên code ngắn, đúng và ổn định.

========================
PERSISTENCE
========================

Chỉ dùng localStorage cho V1.

Lưu:

- discovered events
- basic stats
- game settings nếu cần

KHÔNG triển khai Supabase trong lượt này.

KHÔNG làm authentication.

========================
ARCHIVE
========================

Chỉ làm archive cơ bản nếu P0 đã hoàn chỉnh.

Archive cần:

- image grid
- event title
- year
- discovered state

Không cần advanced filters hoặc mastery system trong lượt này.

========================
STATS
========================

Chỉ làm stats cơ bản nếu còn đủ thời gian sau khi P0 hoàn chỉnh:

- games played
- questions answered
- accuracy
- events discovered
- best streak

Không làm chart phức tạp.

========================
CẤM TRONG LƯỢT NÀY
========================

Không làm:

- Supabase
- authentication
- multiplayer
- leaderboard
- Daily Challenge
- Survival mode
- AI Tutor
- knowledge graph
- map quiz
- interactive world map nếu tốn nhiều thời gian
- community
- user-generated content
- SEO nâng cao
- achievement system lớn
- database migrations
- backend
- analytics
- extensive documentation
- automated test suite lớn
- visual effects cầu kỳ

Các feature này để lượt nâng cấp sau.

========================
USAGE-AWARE EXECUTION
========================

Luôn ưu tiên khả năng HOÀN THÀNH.

Nếu nhận thấy một hạng mục phụ có thể khiến lượt làm việc hết usage trước khi project hoàn chỉnh:
BỎ HẠNG MỤC PHỤ ĐÓ.

Không hy sinh trạng thái hoàn chỉnh để đổi lấy thêm feature.

Thứ tự tuyệt đối:

1. App chạy
2. Core game hoàn chỉnh
3. Ảnh hoạt động
4. Game logic đúng
5. Mobile usable
6. Build pass
7. Sau đó mới polish

Sau khi core game chạy được:
NGAY LẬP TỨC chạy build.

Nếu build lỗi:
sửa cho đến khi pass.

Sau đó mới dùng phần thời gian còn lại để cải thiện UI.

========================
CODE EXECUTION
========================

Không gửi message cho tôi trong lúc đang làm.

Chỉ hỏi nếu có blocker thực sự không thể tự giải quyết.

Không cần xin phép cho thay đổi code thông thường trong project.

Tự:
- inspect
- implement
- run
- test
- debug
- fix

Không dừng chỉ vì một implementation không hoạt động.
Tự đổi cách triển khai nếu cần.

========================
DEFINITION OF DONE
========================

Trước khi kết thúc phải đảm bảo tối thiểu:

[ ] Home chạy
[ ] Setup chạy
[ ] 10/20/30 rounds chọn được
[ ] filters cơ bản chạy
[ ] Start Game chạy
[ ] mỗi round hiện 3 event
[ ] cả 3 event đều có image/fallback
[ ] chọn event chạy
[ ] Event Brief chạy
[ ] Multiple Choice chạy
[ ] True/False chạy
[ ] Year Guess chạy
[ ] explanation chạy
[ ] score chạy
[ ] streak chạy
[ ] next round chạy
[ ] game hoàn thành được
[ ] Result screen chạy
[ ] Play Again chạy
[ ] localStorage không gây lỗi
[ ] mobile không vỡ layout
[ ] không có broken critical route
[ ] production build PASS

Nếu các mục trên chưa hoàn thành:
KHÔNG làm feature mới.

Khi tất cả đã pass, chỉ trả về báo cáo cực ngắn:
- Completed
- Build status
- Những feature phụ cố tình để lại cho phase sau

Bắt đầu sửa và hoàn thành project ngay.