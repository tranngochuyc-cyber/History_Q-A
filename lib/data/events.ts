import type { HistoricalEvent, Question } from "../types";
import imageCatalog from "./image-catalog.json";
import extraSeeds from "./extra-seeds.json";
type Seed = {
  id: string;
  title: string;
  year: number;
  end?: number;
  date?: string;
  countries: string[];
  categories: string[];
  location: string;
  teaser: string;
  causes: string;
  happened: string;
  consequences: string;
  figures: string[];
  question: string;
  options: string[];
  statement: string;
  truth: boolean;
  source: string;
  publisher?: string;
  tags?: string[];
  significance?: string;
};
const seeds: Seed[] = [
  {
    id: "apollo-11",
    title: "Apollo 11: Đổ bộ lên Mặt Trăng",
    year: 1969,
    date: "1969-07-20",
    countries: ["US"],
    categories: ["Exploration", "Science", "Technology"],
    location: "Biển Tĩnh Lặng, Mặt Trăng",
    teaser: "Con người đặt chân lên một thế giới khác.",
    causes:
      "Cạnh tranh trong Chiến tranh Lạnh thúc đẩy Mỹ và Liên Xô chứng minh năng lực khoa học trong không gian. Cam kết đưa người lên Mặt Trăng đòi hỏi nhiều năm thiết kế và thử nghiệm.",
    happened:
      "Apollo 11 đưa Neil Armstrong, Buzz Aldrin và Michael Collins tới Mặt Trăng. Armstrong và Aldrin hạ cánh bằng Eagle, còn Collins ở lại trên quỹ đạo. Hai người thám hiểm bề mặt, lấy mẫu rồi trở về an toàn.",
    consequences:
      "Sứ mệnh mở rộng hiểu biết về Mặt Trăng và trở thành biểu tượng của thành tựu kỹ thuật tập thể. Nó cũng cho thấy nguồn lực lớn cần để đưa con người tới thiên thể khác.",
    figures: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
    question:
      "Phi hành gia nào ở lại trên quỹ đạo khi hai người còn lại hạ cánh?",
    options: ["Michael Collins", "Yuri Gagarin", "Alan Shepard", "John Glenn"],
    statement: "Cả ba phi hành gia Apollo 11 đều đi bộ trên Mặt Trăng.",
    truth: false,
    source: "https://www.nasa.gov/mission/apollo-11/",
    publisher: "NASA",
    tags: ["Cold War"],
  },
  {
    id: "constantinople",
    title: "Constantinople thất thủ",
    year: 1453,
    date: "1453-05-29",
    countries: ["TR", "GR"],
    categories: ["War", "Politics"],
    location: "Constantinople, nay là Istanbul",
    teaser: "Một kinh đô sụp đổ, một chương mới mở ra.",
    causes:
      "Đế quốc Byzantine đã thu hẹp đáng kể. Thế lực Ottoman bao vây kinh đô, nơi tường thành lâu đời bảo vệ điểm giao thoa chiến lược giữa châu Âu và châu Á.",
    happened:
      "Sultan Mehmed II đưa quân Ottoman cùng pháo hạng nặng vây Constantinople. Quân đội tiến vào thành sau cuộc vây hãm. Hoàng đế Constantine XI tử trận và chính quyền Byzantine sụp đổ.",
    consequences:
      "Cuộc chinh phục chấm dứt Đế quốc Byzantine, biến thành phố thành trung tâm quyền lực Ottoman. Đời sống chính trị và tôn giáo thay đổi, trong khi vai trò đầu mối giao thương quan trọng vẫn được duy trì.",
    figures: ["Mehmed II", "Constantine XI"],
    question: "Sultan Ottoman nào chinh phục Constantinople?",
    options: ["Mehmed II", "Suleiman I", "Osman I", "Selim III"],
    statement: "Cuộc chinh phục chấm dứt Đế quốc Byzantine.",
    truth: true,
    source: "https://www.britannica.com/event/Fall-of-Constantinople-1453",
  },
  {
    id: "meiji-restoration",
    title: "Minh Trị Duy tân",
    year: 1868,
    countries: ["JP"],
    categories: ["Politics", "Social Change"],
    location: "Nhật Bản",
    teaser: "Một quốc đảo thay đổi vị thế trên thế giới.",
    causes:
      "Sức ép nước ngoài bộc lộ điểm yếu của trật tự Tokugawa. Các nhà cải cách và những phiên hùng mạnh tìm kiếm hệ thống giúp Nhật Bản đứng vững trước cạnh tranh đế quốc.",
    happened:
      "Một liên minh lật đổ Mạc phủ, khôi phục quyền lực nhân danh Thiên hoàng Minh Trị. Chính quyền mới tập trung quản lý và cải tổ quân đội, giáo dục, công nghiệp. Quá trình này kéo dài nhiều thập kỷ.",
    consequences:
      "Nhật Bản vươn lên thành cường quốc công nghiệp và đế quốc. Cải cách mở cơ hội mới nhưng làm xáo trộn địa vị xã hội truyền thống, gây phản kháng ở những nhóm mất đặc quyền.",
    figures: ["Emperor Meiji", "Saigō Takamori"],
    question: "Chính quyền nào mất quyền lực trong cuộc Duy tân?",
    options: [
      "Mạc phủ Tokugawa",
      "Mạc phủ Kamakura",
      "Triều Thanh",
      "Triều Minh",
    ],
    statement: "Cuộc Duy tân củng cố quyền lực Mạc phủ Tokugawa.",
    truth: false,
    source: "https://www.britannica.com/event/Meiji-Restoration",
  },
  {
    id: "dien-bien-phu",
    title: "Chiến thắng Điện Biên Phủ",
    year: 1954,
    date: "1954-05-07",
    countries: ["VN", "FR"],
    categories: ["War", "Revolution"],
    location: "Điện Biên Phủ, Việt Nam",
    teaser: "Một trận đánh thay đổi cục diện Đông Dương.",
    causes:
      "Pháp tìm cách duy trì quyền lực tại Đông Dương trước phong trào độc lập do Việt Minh lãnh đạo. Bộ chỉ huy Pháp lập tập đoàn cứ điểm trong thung lũng, mong kéo đối phương vào trận quyết chiến.",
    happened:
      "Việt Minh dưới sự chỉ huy của Võ Nguyên Giáp đưa pháo vào các vị trí bao quanh và vây hãm cứ điểm. Tiếp tế của Pháp bị uy hiếp. Sau nhiều tuần chiến đấu, quân phòng thủ đầu hàng.",
    consequences:
      "Thất bại thúc đẩy sự kết thúc chế độ thuộc địa Pháp ở Đông Dương. Hội nghị Genève dẫn tới việc tạm thời chia cắt Việt Nam, trong khi những tranh chấp chính trị lớn vẫn chưa được giải quyết.",
    figures: ["Võ Nguyên Giáp", "Henri Navarre"],
    question: "Ai chỉ huy lực lượng Việt Minh tại Điện Biên Phủ?",
    options: ["Võ Nguyên Giáp", "Ngô Đình Diệm", "Bảo Đại", "Phan Bội Châu"],
    statement:
      "Trận Điện Biên Phủ diễn ra trong Chiến tranh Đông Dương lần thứ nhất.",
    truth: true,
    source:
      "https://www.cheminsdememoire.gouv.fr/fr/la-bataille-de-dien-bien-phu",
    publisher: "French Ministry of the Armed Forces",
  },
  {
    id: "august-revolution",
    title: "Cách mạng Tháng Tám",
    year: 1945,
    countries: ["VN"],
    categories: ["Revolution", "Politics"],
    location: "Việt Nam",
    teaser: "Cuộc đấu tranh độc lập bước vào thời khắc quyết định.",
    causes:
      "Sự chiếm đóng của Nhật và sự suy yếu của bộ máy thuộc địa Pháp tạo biến động tại Việt Nam. Chiến tranh thế giới thứ hai sắp kết thúc mở cơ hội cho phong trào độc lập.",
    happened:
      "Việt Minh tổ chức khởi nghĩa, giành chính quyền tại Hà Nội và nhiều thành phố khi quyền lực Nhật sụp đổ. Bảo Đại thoái vị. Sau đó, Hồ Chí Minh tuyên bố độc lập của nước Việt Nam Dân chủ Cộng hòa.",
    consequences:
      "Cách mạng thành lập chính quyền mới nhưng chưa giải quyết dứt điểm vấn đề chủ quyền. Nỗ lực quay lại của Pháp và những yêu sách chính trị đối lập góp phần dẫn tới chiến tranh tiếp theo.",
    figures: ["Hồ Chí Minh", "Bảo Đại"],
    question: "Tổ chức nào lãnh đạo Cách mạng Tháng Tám?",
    options: [
      "Việt Minh",
      "Công ty Đông Ấn",
      "Quốc dân đảng Trung Quốc",
      "Hội Quốc Liên",
    ],
    statement: "Bảo Đại thoái vị trong quá trình chuyển đổi cách mạng.",
    truth: true,
    source:
      "https://www.britannica.com/place/Vietnam/World-War-II-and-independence",
  },
  {
    id: "end-vietnam-war",
    title: "Chiến tranh Việt Nam kết thúc",
    year: 1975,
    date: "1975-04-30",
    countries: ["VN", "US"],
    categories: ["War", "Politics"],
    location: "Sài Gòn, Việt Nam",
    teaser: "Chiến tranh khép lại, đất nước bước vào thời kỳ mới.",
    causes:
      "Nhiều năm chiến tranh chia cắt Việt Nam và thu hút sự can thiệp từ nước ngoài. Sau khi quân chiến đấu Mỹ rút đi, giao tranh hai miền vẫn tiếp diễn dù đã có Hiệp định Paris.",
    happened:
      "Quân đội miền Bắc tiến nhanh qua miền Nam và vào Sài Gòn. Chính quyền Việt Nam Cộng hòa đầu hàng. Nhiều người Mỹ và người Việt được di tản. Sự kiện còn được gọi là Giải phóng Sài Gòn hoặc Sài Gòn thất thủ.",
    consequences:
      "Chiến tranh kết thúc, sau đó đất nước chính thức thống nhất. Tái thiết, di dời dân cư và làn sóng người tị nạn ảnh hưởng tới hàng triệu người trong và ngoài Việt Nam.",
    figures: ["Dương Văn Minh", "Văn Tiến Dũng"],
    question: "Thủ đô của Việt Nam Cộng hòa là thành phố nào?",
    options: ["Sài Gòn", "Hà Nội", "Huế", "Đà Nẵng"],
    statement:
      "Chính quyền Việt Nam Cộng hòa đầu hàng khi quân đội miền Bắc tiến vào Sài Gòn.",
    truth: true,
    source: "https://www.britannica.com/event/Vietnam-War",
  },
  {
    id: "qin-unification",
    title: "Nhà Tần thống nhất Trung Hoa",
    year: -221,
    countries: ["CN"],
    categories: ["Politics", "War"],
    location: "Trung Quốc",
    teaser: "Các nước chư hầu hợp nhất dưới quyền hoàng đế.",
    causes:
      "Thời Chiến Quốc chứng kiến nhiều thế hệ tranh giành lãnh thổ. Nước Tần xây dựng quân đội mạnh và bộ máy tập quyền, tạo điều kiện đánh bại các nước láng giềng.",
    happened:
      "Vua Tần hoàn tất chinh phục các nước đối địch và xưng là hoàng đế đầu tiên. Chính quyền thống nhất tiêu chuẩn đo lường, chữ viết và tổ chức lại hành chính dưới quyền trung ương.",
    consequences:
      "Dù tồn tại ngắn ngủi, nhà Tần tạo tiền lệ quan trọng cho đế quốc thống nhất. Chính sách cưỡng chế và lao dịch nặng nề gây phản kháng. Nhà Hán kế tiếp điều chỉnh và sử dụng nhiều thiết chế của nhà Tần.",
    figures: ["Qin Shi Huang", "Li Si"],
    question: "Danh hiệu nào gắn với Tần Thủy Hoàng?",
    options: ["Hoàng đế đầu tiên", "Đại Hãn", "Tướng quân", "Pharaon"],
    statement: "Sự thống nhất của nhà Tần kết thúc thời Chiến Quốc.",
    truth: true,
    source: "https://www.britannica.com/topic/Qin-dynasty",
  },
  {
    id: "magna-carta",
    title: "Đại Hiến chương Magna Carta",
    year: 1215,
    date: "1215-06-15",
    countries: ["GB"],
    categories: ["Politics", "Social Change"],
    location: "Runnymede, Anh",
    teaser: "Quyền lực nhà vua đối diện giới hạn thành văn.",
    causes:
      "Thất bại quân sự, thuế khóa và xung đột với quý tộc làm suy yếu vua John của Anh. Các nam tước nổi dậy yêu cầu hạn chế hành xử tùy tiện và bảo vệ quyền lợi đã có.",
    happened:
      "John chấp thuận hiến chương tại Runnymede. Nhiều điều khoản giải quyết bất bình phong kiến cụ thể, chưa phải quyền phổ quát. Thỏa thuận ban đầu đổ vỡ, nhưng các vua sau ban hành lại phiên bản sửa đổi.",
    consequences:
      "Qua nhiều thế kỷ, Magna Carta mang ý nghĩa biểu tượng rộng hơn. Xét xử theo luật và hạn chế quyền lực tùy tiện ảnh hưởng tư tưởng hiến pháp, dù phạm vi bảo vệ ban đầu còn hẹp.",
    figures: ["King John"],
    question: "Vua Anh nào chấp thuận bản Magna Carta đầu tiên?",
    options: ["John", "Henry VIII", "William I", "Charles II"],
    statement:
      "Hiến chương ban đầu lập tức trao quyền bầu cử cho mọi người trưởng thành.",
    truth: false,
    source: "https://www.britannica.com/topic/Magna-Carta",
  },
  {
    id: "black-death",
    title: "Đại dịch Cái Chết Đen",
    year: 1347,
    end: 1351,
    countries: ["IT", "FR", "GB"],
    categories: ["Disaster", "Social Change"],
    location: "Châu Âu và Địa Trung Hải",
    teaser: "Đại dịch đảo lộn đời sống cả châu lục.",
    causes:
      "Thương mại và đi lại kết nối các vùng xa qua đường bộ, đường biển. Dịch hạch theo mạng lưới này tới Địa Trung Hải và châu Âu, nơi người dân chưa hiểu nguyên nhân sinh học của bệnh.",
    happened:
      "Đại dịch cướp vô số sinh mạng, làm xáo trộn gia đình, đô thị, thương mại và tôn giáo. Diễn biến khác nhau giữa các vùng; bệnh tiếp tục tái phát nhiều thế kỷ. Một số nơi đàn áp cộng đồng thiểu số.",
    consequences:
      "Dân số suy giảm làm thay đổi quan hệ lao động. Người sống sót đôi khi có vị thế thương lượng tốt hơn, dù giới cầm quyền cố giữ trật tự cũ. Thảm họa in dấu trong nghệ thuật và ký ức.",
    figures: [],
    question: "Căn bệnh nào gắn với Cái Chết Đen?",
    options: ["Dịch hạch", "Đậu mùa", "Cúm", "Dịch tả"],
    statement: "Cái Chết Đen tác động lớn tới thị trường lao động châu Âu.",
    truth: true,
    source: "https://www.britannica.com/event/Black-Death",
  },
  {
    id: "reformation",
    title: "Cải cách Tin Lành",
    year: 1517,
    countries: ["DE", "GB", "FR"],
    categories: ["Religion", "Social Change"],
    location: "Châu Âu",
    teaser: "Tranh luận tôn giáo làm thay đổi châu Âu.",
    causes:
      "Phê phán hoạt động Giáo hội và tranh luận về thẩm quyền tôn giáo có nguồn gốc lâu dài. Kỹ thuật in giúp tư tưởng cải cách tiếp cận đông đảo người đọc vượt qua biên giới.",
    happened:
      "Martin Luther phản đối việc bán ân xá, phát triển quan điểm khiến ông xung đột với Giáo hội Công giáo. Các nhà cải cách khác đưa ra giáo lý riêng. Nhà cầm quyền và cộng đồng đô thị tham gia sâu vào chia rẽ.",
    consequences:
      "Các giáo hội Tin Lành xuất hiện; Công giáo tiến hành cải cách nội bộ. Xung đột tôn giáo định hình lại chính trị, giáo dục và văn hóa, đồng thời kéo theo nhiều giai đoạn bạo lực.",
    figures: ["Martin Luther", "John Calvin"],
    question: "Nhà cải cách nào gắn với 95 luận đề?",
    options: [
      "Martin Luther",
      "Ignatius of Loyola",
      "Thomas Aquinas",
      "Francis of Assisi",
    ],
    statement: "Kỹ thuật in giúp phổ biến lập luận cải cách tôn giáo.",
    truth: true,
    source: "https://www.britannica.com/event/Reformation",
  },
  {
    id: "atlantic-voyage",
    title: "Columbus vượt Đại Tây Dương",
    year: 1492,
    date: "1492-10-12",
    countries: ["ES", "CU"],
    categories: ["Exploration"],
    location: "Đại Tây Dương và Caribe",
    teaser: "Chuyến đi nối các thế giới với cái giá sâu sắc.",
    causes:
      "Vua chúa và thương nhân châu Âu tìm đường tới thị trường châu Á. Columbus đề xuất đi về phía tây, được vương quyền Tây Ban Nha tài trợ nhưng đánh giá sai khoảng cách.",
    happened:
      "Đoàn thám hiểm tới các đảo Caribe đã có cư dân bản địa. Columbus cho rằng mình tới châu Á. Các chuyến đi và cuộc chinh phục thuộc địa tiếp tục sau đó.",
    consequences:
      "Tiếp xúc lâu dài kết nối châu Mỹ, châu Âu và châu Phi. Cây trồng, động vật, bệnh tật được trao đổi. Chinh phục, cưỡng bức lao động và dịch bệnh gây tổn thất thảm khốc cho người bản địa. Đây không phải lần đầu con người tới châu Mỹ.",
    figures: ["Christopher Columbus", "Isabella I"],
    question:
      "Vương quyền nào tài trợ chuyến vượt Đại Tây Dương đầu tiên của Columbus?",
    options: ["Tây Ban Nha", "Bồ Đào Nha", "Anh", "Pháp"],
    statement: "Các đảo Caribe chưa có người sinh sống khi Columbus tới.",
    truth: false,
    source: "https://www.britannica.com/biography/Christopher-Columbus",
  },
  {
    id: "american-independence",
    title: "Tuyên ngôn Độc lập Hoa Kỳ",
    year: 1776,
    date: "1776-07-04",
    countries: ["US", "GB"],
    categories: ["Politics", "Revolution"],
    location: "Philadelphia, Bắc Mỹ",
    teaser: "Mười ba thuộc địa tuyên bố tách khỏi Anh.",
    causes:
      "Tranh chấp về thuế, đại diện và quyền lực đế quốc leo thang thành xung đột giữa Anh với các thuộc địa Bắc Mỹ. Nhiều lãnh đạo thuộc địa cho rằng hòa giải không còn khả thi.",
    happened:
      "Quốc hội Lục địa thông qua tuyên ngôn giải thích việc mười ba thuộc địa tách khỏi Anh. Văn kiện khẳng định quyền tự nhiên và biện minh cho việc chống chính quyền bị cáo buộc xâm phạm chúng.",
    consequences:
      "Độc lập vẫn phải được bảo vệ bằng chiến tranh. Tuyên ngôn trở thành văn kiện có ảnh hưởng lớn, nhưng ngôn ngữ phổ quát mâu thuẫn với chế độ nô lệ và sự loại trừ phụ nữ, người bản địa.",
    figures: ["Thomas Jefferson", "John Adams"],
    question: "Có bao nhiêu thuộc địa tuyên bố độc lập?",
    options: ["Mười ba", "Bảy", "Hai mươi", "Năm mươi"],
    statement: "Bản tuyên ngôn tự nó lập tức kết thúc chiến tranh với Anh.",
    truth: false,
    source: "https://www.archives.gov/founding-docs/declaration",
    publisher: "US National Archives",
  },
  {
    id: "french-revolution",
    title: "Cách mạng Pháp",
    year: 1789,
    end: 1799,
    countries: ["FR"],
    categories: ["Revolution", "Politics"],
    location: "Pháp",
    teaser: "Chế độ quân chủ lung lay trước tư tưởng mới.",
    causes:
      "Nợ công, đặc quyền bất bình đẳng và thiếu lương thực làm suy yếu quân chủ Pháp. Việc triệu tập Hội nghị Ba đẳng cấp mở ra tranh chấp quyền đại diện quốc gia.",
    happened:
      "Cách mạng thách thức nhà vua, bãi bỏ đặc quyền và tuyên bố các quyền. Quân chủ bị lật đổ, Pháp trở thành cộng hòa. Chiến tranh, đấu đá và đàn áp đi kèm các lần thay đổi chính quyền.",
    consequences:
      "Cách mạng biến đổi thể chế và ảnh hưởng toàn cầu. Tự do, bình đẳng tồn tại cùng bạo lực, loại trừ. Napoleon tập trung quyền lực nhưng giữ một số cải cách.",
    figures: ["Louis XVI", "Maximilien Robespierre"],
    question: "Pháo đài nào ở Paris bị đánh chiếm trong năm đầu cách mạng?",
    options: ["Bastille", "Tháp London", "Điện Kremlin", "Alhambra"],
    statement: "Pháp trở thành cộng hòa trong thời kỳ cách mạng.",
    truth: true,
    source: "https://www.britannica.com/event/French-Revolution",
  },
  {
    id: "haitian-independence",
    title: "Haiti giành độc lập",
    year: 1804,
    date: "1804-01-01",
    countries: ["HT", "FR"],
    categories: ["Revolution", "Social Change"],
    location: "Haiti, Caribe",
    teaser: "Người bị nô dịch đấu tranh lập nên quốc gia.",
    causes:
      "Thuộc địa Saint-Domingue dựa vào chế độ nô lệ đồn điền tàn bạo. Tranh luận cách mạng tại Pháp đan xen xung đột địa phương về tự do, chủng tộc và quyền công dân.",
    happened:
      "Cách mạng kéo dài đánh bại nỗ lực khôi phục quyền thuộc địa và nô lệ. Toussaint Louverture và Jean-Jacques Dessalines lãnh đạo những giai đoạn khác nhau. Dessalines tuyên bố độc lập sau thất bại của quân Pháp.",
    consequences:
      "Haiti là quốc gia độc lập đầu tiên hình thành từ cuộc nổi dậy thành công của người bị nô dịch. Thành tựu thách thức hệ thống nô lệ, nhưng cô lập ngoại giao và yêu sách tài chính từ Pháp gây gánh nặng.",
    figures: ["Toussaint Louverture", "Jean-Jacques Dessalines"],
    question: "Haiti giành độc lập khỏi cường quốc nào?",
    options: ["Pháp", "Tây Ban Nha", "Anh", "Bồ Đào Nha"],
    statement: "Cách mạng thách thức chế độ nô lệ đồn điền.",
    truth: true,
    source: "https://www.britannica.com/event/Haitian-Revolution",
  },
  {
    id: "brazil-independence",
    title: "Brazil tuyên bố độc lập",
    year: 1822,
    date: "1822-09-07",
    countries: ["BR", "PT"],
    categories: ["Politics"],
    location: "Brazil",
    teaser: "Một thuộc địa trở thành đế quốc độc lập.",
    causes:
      "Hoàng gia Bồ Đào Nha chuyển sang Brazil trong chiến tranh Napoleon làm thay đổi cán cân quyền lực. Nỗ lực đưa Brazil về vị thế phụ thuộc gây phản đối.",
    happened:
      "Hoàng tử Pedro đoạn tuyệt với Bồ Đào Nha, tuyên bố độc lập và trở thành hoàng đế. Chuyển đổi bao gồm kháng cự khu vực và xung đột vũ trang, không chỉ một quyết định được đồng thuận.",
    consequences:
      "Brazil duy trì quân chủ và phần lớn thứ bậc xã hội cũ. Nô lệ còn giữ vai trò lớn nhiều thập kỷ. Đế quốc giữ lãnh thổ rộng nhưng tiếp tục tranh chấp quyền lực và tự trị.",
    figures: ["Pedro I"],
    question: "Ai trở thành hoàng đế đầu tiên của Brazil?",
    options: ["Pedro I", "Simón Bolívar", "José de San Martín", "Napoleon III"],
    statement: "Brazil lập tức trở thành cộng hòa khi độc lập.",
    truth: false,
    source: "https://www.britannica.com/place/Brazil/Independence",
  },
  {
    id: "suez-canal",
    title: "Kênh đào Suez khai thông",
    year: 1869,
    date: "1869-11-17",
    countries: ["EG", "FR", "GB"],
    categories: ["Technology", "Economy"],
    location: "Suez, Ai Cập",
    teaser: "Đường biển mới nối châu Âu với châu Á.",
    causes:
      "Các nước và thương nhân muốn rút ngắn đường biển châu Âu–châu Á. Kênh đào qua eo đất Suez hứa hẹn giảm nhu cầu vòng qua cực nam châu Phi.",
    happened:
      "Công trình nối Địa Trung Hải với Biển Đỏ, huy động lượng lao động lớn và tài chính quốc tế. Sau khi mở cửa, kênh ngày càng quan trọng với thương mại và mạng lưới đế quốc.",
    consequences:
      "Tuyến đường thay đổi đi lại và buôn bán, còn quyền kiểm soát kênh trở thành vấn đề địa chính trị. Khó khăn tài chính Ai Cập cùng lợi ích nước ngoài góp phần tăng ảnh hưởng châu Âu.",
    figures: ["Ferdinand de Lesseps"],
    question: "Kênh đào nối hai biển nào?",
    options: [
      "Địa Trung Hải và Biển Đỏ",
      "Biển Đen và biển Baltic",
      "Biển Đỏ và biển Ả Rập",
      "Địa Trung Hải và biển Caspi",
    ],
    statement: "Kênh đào rút ngắn hành trình biển giữa châu Âu và châu Á.",
    truth: true,
    source: "https://www.britannica.com/topic/Suez-Canal",
  },
  {
    id: "nz-suffrage",
    title: "Phụ nữ New Zealand giành quyền bầu cử",
    year: 1893,
    date: "1893-09-19",
    countries: ["NZ"],
    categories: ["Social Change", "Politics"],
    location: "New Zealand",
    teaser: "Lá phiếu mở rộng tiếng nói của phụ nữ.",
    causes:
      "Các tổ chức phụ nữ phản đối việc bị loại khỏi bầu cử quốc gia. Họ thu thập chữ ký, tổ chức hội họp và gây sức ép để phụ nữ tham gia đời sống công cộng.",
    happened:
      "New Zealand thông qua luật trao phụ nữ quyền bỏ phiếu bầu quốc hội. Kate Sheppard là gương mặt tiêu biểu. Phụ nữ tham gia tổng tuyển cử tiếp theo, tạo dấu mốc quan trọng.",
    consequences:
      "Thành tựu khích lệ phong trào nước ngoài. Quyền ứng cử quốc hội được trao sau đó; lá phiếu chưa xóa mọi bất bình đẳng. Tuy vậy, sự tham gia chính trị đã mở rộng đáng kể và bền vững.",
    figures: ["Kate Sheppard"],
    question: "Nhà vận động nào gắn với quyền bầu cử phụ nữ New Zealand?",
    options: [
      "Kate Sheppard",
      "Emmeline Pankhurst",
      "Susan B. Anthony",
      "Olympe de Gouges",
    ],
    statement: "Phụ nữ được trao quyền bầu cử và ứng cử cùng lúc.",
    truth: false,
    source: "https://nzhistory.govt.nz/politics/womens-suffrage",
    publisher: "Manatū Taonga — NZ History",
  },
  {
    id: "world-war-one",
    title: "Chiến tranh thế giới thứ nhất bùng nổ",
    year: 1914,
    end: 1918,
    countries: ["GB", "FR", "DE", "RU"],
    categories: ["War", "Diplomacy"],
    location: "Châu Âu và nhiều khu vực khác",
    teaser: "Khủng hoảng kéo thế giới vào chiến tranh.",
    causes:
      "Liên minh đối địch, cạnh tranh đế quốc và kế hoạch quân sự khiến châu Âu dễ rơi vào khủng hoảng. Vụ ám sát Franz Ferdinand tại Sarajevo kích hoạt các quyết định làm đối đầu leo thang.",
    happened:
      "Các cường quốc tham chiến, huy động nguồn lực thuộc địa và cuốn nhiều nước vào cuộc. Vũ khí công nghiệp gây tàn phá. Chiến hào phổ biến tại Mặt trận phía Tây, nhưng nơi khác có nhiều hình thức chiến đấu.",
    consequences:
      "Chiến tranh lật đổ đế quốc và vẽ lại biên giới. Tổn thất biến đổi chính trị; bất bình sau hòa ước góp phần gây bất ổn về sau.",
    figures: ["Franz Ferdinand", "Woodrow Wilson"],
    question: "Vụ ám sát ai châm ngòi Khủng hoảng tháng Bảy?",
    options: [
      "Đại công tước Franz Ferdinand",
      "Abraham Lincoln",
      "Sa hoàng Alexander II",
      "Jean-Paul Marat",
    ],
    statement: "Chiến tranh chỉ diễn ra tại châu Âu.",
    truth: false,
    source: "https://www.iwm.org.uk/history/how-the-world-went-to-war-in-1914",
    publisher: "Imperial War Museums",
  },
  {
    id: "russian-revolution",
    title: "Các cuộc cách mạng Nga",
    year: 1917,
    countries: ["RU"],
    categories: ["Revolution", "Politics"],
    location: "Nga",
    teaser: "Quân chủ sụp đổ giữa chiến tranh.",
    causes:
      "Thất bại quân sự, thiếu thốn và căng thẳng xã hội làm suy giảm niềm tin vào quân chủ Nga. Công nhân, binh lính và các phong trào đòi thay đổi khi sức ép chiến tranh tăng.",
    happened:
      "Cách mạng Tháng Hai khiến Nicholas II thoái vị. Chính phủ lâm thời chia sẻ quyền lực bất ổn với các hội đồng công nhân, binh lính. Bolshevik giành chính quyền trong Cách mạng Tháng Mười, hứa hòa bình, ruộng đất và bánh mì.",
    consequences:
      "Nội chiến và củng cố quyền lực Bolshevik tiếp nối. Nhà nước Xô viết ảnh hưởng sâu sắc thế kỷ hai mươi, trong khi biến động gây khó khăn và hạn chế đối lập.",
    figures: ["Vladimir Lenin", "Nicholas II"],
    question: "Lực lượng nào giành chính quyền trong Cách mạng Tháng Mười?",
    options: [
      "Bolshevik",
      "Phái Jacobin",
      "Phong trào Hiến chương",
      "Phong trào Thanh niên Thổ Nhĩ Kỳ",
    ],
    statement: "Nicholas II thoái vị trong biến động cách mạng.",
    truth: true,
    source: "https://www.britannica.com/event/Russian-Revolution",
  },
  {
    id: "versailles",
    title: "Hòa ước Versailles",
    year: 1919,
    date: "1919-06-28",
    countries: ["FR", "DE", "GB", "US"],
    categories: ["Diplomacy", "Politics"],
    location: "Versailles, Pháp",
    teaser: "Hòa bình mang những mâu thuẫn chưa khép lại.",
    causes:
      "Sau Chiến tranh thế giới thứ nhất, các nước thắng trận muốn an ninh, bồi thường và trật tự mới. Ưu tiên của họ khác nhau; Đức phần lớn bị loại khỏi soạn thảo.",
    happened:
      "Thỏa thuận áp nghĩa vụ lãnh thổ, quân sự và tài chính lên Đức, đồng thời bao gồm Công ước Hội Quốc Liên. Lãnh đạo coi đây là nền tảng hòa bình; người phê phán nghi ngờ tính hà khắc và khả năng thực thi.",
    consequences:
      "Hòa ước gây bất mãn tại Đức và tranh chấp quốc tế. Nó góp phần gây bất ổn hậu chiến, nhưng xung đột sau này còn nhiều nguyên nhân khác.",
    figures: ["Woodrow Wilson", "Georges Clemenceau", "David Lloyd George"],
    question: "Tổ chức quốc tế nào gắn với thỏa thuận hòa bình?",
    options: ["Hội Quốc Liên", "Liên Hợp Quốc", "NATO", "Liên minh châu Âu"],
    statement: "Đức đàm phán ngang hàng với các nước thắng trận chủ chốt.",
    truth: false,
    source: "https://www.britannica.com/event/Treaty-of-Versailles-1919",
  },
  {
    id: "penicillin",
    title: "Phát hiện penicillin",
    year: 1928,
    countries: ["GB"],
    categories: ["Science", "Technology"],
    location: "London, Vương quốc Anh",
    teaser: "Một quan sát mở đường cho kháng sinh.",
    causes:
      "Nhiễm khuẩn gây nguy hiểm lớn trước khi kháng sinh hiệu quả phổ biến. Các nhà nghiên cứu tìm chất ngăn vi khuẩn phát triển mà không gây tác hại không thể chấp nhận cho người bệnh.",
    happened:
      "Alexander Fleming thấy nấm mốc ức chế vi khuẩn trong mẫu nuôi cấy và xác định chất kháng khuẩn liên quan. Howard Florey, Ernst Chain cùng cộng sự sau đó phát triển penicillin thành thuốc có thể sản xuất lớn.",
    consequences:
      "Penicillin biến đổi điều trị nhiễm khuẩn. Từ quan sát tới thuốc sử dụng được đòi hỏi nghiên cứu hợp tác, thử nghiệm lâm sàng và sản xuất công nghiệp.",
    figures: ["Alexander Fleming", "Howard Florey", "Ernst Chain"],
    question:
      "Ai đầu tiên quan sát tác dụng kháng khuẩn liên quan tới penicillin?",
    options: [
      "Alexander Fleming",
      "Louis Pasteur",
      "Charles Darwin",
      "Gregor Mendel",
    ],
    statement:
      "Quan sát ban đầu của Fleming lập tức tạo ra penicillin sản xuất đại trà.",
    truth: false,
    source: "https://www.nobelprize.org/prizes/medicine/1945/summary/",
    publisher: "Nobel Prize",
  },
  {
    id: "d-day",
    title: "D-Day: Đổ bộ Normandy",
    year: 1944,
    date: "1944-06-06",
    countries: ["FR", "GB", "US", "DE"],
    categories: ["War"],
    location: "Normandy, Pháp",
    teaser: "Đồng Minh mở chiến dịch giải phóng Tây Âu.",
    causes:
      "Đức Quốc xã chiếm phần lớn Tây Âu. Đồng Minh chuẩn bị đổ bộ qua eo biển Manche để lập bàn đạp tại Pháp, gây sức ép lên quân Đức từ phía tây.",
    happened:
      "Đồng Minh đổ bộ lên Normandy trong khi lính dù hoạt động trong đất liền. Hải quân, không quân, hậu cần và nghi binh hỗ trợ. Điều kiện mỗi bãi khác nhau; giữ bàn đạp cần thêm nhiều trận chiến.",
    consequences:
      "Cuộc đổ bộ mở chiến dịch giải phóng Pháp và tiến tới Đức. Đây là bước ngoặt phía tây nhưng chiến tranh chưa kết thúc; chiến dịch phía đông của Liên Xô vẫn thiết yếu.",
    figures: ["Dwight D. Eisenhower"],
    question: "D-Day diễn ra tại vùng nào của Pháp?",
    options: ["Normandy", "Brittany", "Provence", "Alsace"],
    statement:
      "D-Day lập tức kết thúc Chiến tranh thế giới thứ hai tại châu Âu.",
    truth: false,
    source:
      "https://www.iwm.org.uk/history/the-10-things-you-need-to-know-about-d-day",
    publisher: "Imperial War Museums",
  },
  {
    id: "hiroshima",
    title: "Vụ ném bom nguyên tử Hiroshima",
    year: 1945,
    date: "1945-08-06",
    countries: ["JP", "US"],
    categories: ["War", "Disaster"],
    location: "Hiroshima, Nhật Bản",
    teaser: "Biểu tượng về hậu quả vũ khí hạt nhân.",
    causes:
      "Chiến tranh Thái Bình Dương gây tàn phá nặng nề. Giới chức Mỹ muốn buộc Nhật đầu hàng. Dự án Manhattan tạo ra vũ khí nguyên tử với sức hủy diệt lớn.",
    happened:
      "Máy bay Mỹ thả bom xuống Hiroshima. Sóng nổ, hỏa hoạn và bức xạ cướp nhiều sinh mạng, phá hủy thành phố. Người sống sót đối diện thương tích, bệnh tật, mất mát và kỳ thị lâu dài.",
    consequences:
      "Hiroshima trở thành biểu tượng chống chiến tranh hạt nhân. Nhật đầu hàng sau các vụ ném bom Hiroshima, Nagasaki và việc Liên Xô tham chiến. Sử gia vẫn tranh luận mức độ ảnh hưởng từng yếu tố.",
    figures: ["Harry S. Truman"],
    question: "Máy bay nào thả bom xuống Hiroshima?",
    options: [
      "Enola Gay",
      "Spirit of St. Louis",
      "Memphis Belle",
      "Wright Flyer",
    ],
    statement: "Bức xạ gây tác hại ngoài ảnh hưởng tức thời của vụ nổ.",
    truth: true,
    source: "https://hpmmuseum.jp/?lang=eng",
    publisher: "Hiroshima Peace Memorial Museum",
  },
  {
    id: "indian-independence",
    title: "Ấn Độ độc lập và cuộc phân chia",
    year: 1947,
    date: "1947-08-15",
    countries: ["IN", "PK", "GB"],
    categories: ["Politics", "Social Change"],
    location: "Nam Á",
    teaser: "Độc lập đi cùng chia cắt và di cư.",
    causes:
      "Đấu tranh chống thực dân Anh gồm nhiều tổ chức, cộng đồng và phương thức. Chiến tranh thế giới thứ hai làm Anh suy yếu, trong khi bất đồng về đại diện và thể chế tăng lên.",
    happened:
      "Ấn Độ thuộc Anh bị chia thành Ấn Độ và Pakistan độc lập. Biên giới mới chia Punjab, Bengal; rất nhiều người di chuyển qua biên giới. Lễ mừng diễn ra cùng bạo lực cộng đồng và ly tán.",
    consequences:
      "Thuộc địa kết thúc nhưng để lại tranh chấp lãnh thổ và ký ức đau thương. Phân chia ảnh hưởng nhiều thế hệ, trong khi các nước mới xây dựng thể chế và quyền công dân.",
    figures: ["Jawaharlal Nehru", "Muhammad Ali Jinnah", "Mahatma Gandhi"],
    question: "Hai nước nào hình thành từ phân chia Ấn Độ thuộc Anh?",
    options: [
      "Ấn Độ và Pakistan",
      "Ấn Độ và Nepal",
      "Pakistan và Afghanistan",
      "Ấn Độ và Sri Lanka",
    ],
    statement: "Phân chia dẫn tới di dời dân cư quy mô lớn.",
    truth: true,
    source: "https://www.nam.ac.uk/explore/independence-and-partition-1947",
    publisher: "National Army Museum",
  },
  {
    id: "korean-war",
    title: "Chiến tranh Triều Tiên bùng nổ",
    year: 1950,
    end: 1953,
    date: "1950-06-25",
    countries: ["KR", "KP", "US", "CN"],
    categories: ["War", "Diplomacy"],
    location: "Bán đảo Triều Tiên",
    teaser: "Chia cắt trở thành cuộc chiến quốc tế.",
    causes:
      "Sau khi Nhật chấm dứt cai trị, bán đảo chia thành hai nhà nước đối địch được các cường quốc khác nhau hậu thuẫn. Tranh chấp tính chính danh và căng thẳng làm chia cắt nguy hiểm hơn.",
    happened:
      "Quân đội Triều Tiên tấn công miền Nam. Lực lượng Liên Hợp Quốc do Mỹ dẫn đầu can thiệp; Trung Quốc sau đó tham chiến. Chiến tuyến dịch chuyển rồi ổn định gần đường chia ban đầu.",
    consequences:
      "Đình chiến ngừng giao tranh lớn nhưng không phải hòa ước toàn diện. Chiến tranh gây tổn thất dân sự nặng nề. Chia cắt quân sự hóa trở thành di sản kéo dài của Chiến tranh Lạnh.",
    figures: ["Kim Il Sung", "Syngman Rhee"],
    question: "Thỏa thuận nào ngừng các hoạt động giao tranh lớn?",
    options: [
      "Hiệp định đình chiến",
      "Hiệp ước thống nhất",
      "Hòa ước Versailles",
      "Hiệp định Schengen",
    ],
    statement: "Đình chiến thống nhất vĩnh viễn bán đảo Triều Tiên.",
    truth: false,
    source: "https://www.iwm.org.uk/history/a-short-history-of-the-korean-war",
    publisher: "Imperial War Museums",
    tags: ["Cold War"],
  },
  {
    id: "suez-crisis",
    title: "Khủng hoảng Suez",
    year: 1956,
    countries: ["EG", "GB", "FR", "IL"],
    categories: ["Diplomacy", "War"],
    location: "Ai Cập và kênh đào Suez",
    teaser: "Can thiệp bộc lộ cán cân quyền lực mới.",
    causes:
      "Tổng thống Gamal Abdel Nasser quốc hữu hóa Công ty Kênh đào Suez giữa tranh chấp về vốn phát triển và chủ quyền. Anh, Pháp thấy lợi ích bị đe dọa; Israel có lo ngại an ninh riêng.",
    happened:
      "Israel tấn công Ai Cập, sau đó Anh và Pháp can thiệp. Phản đối quốc tế, gồm sức ép Mỹ và Liên Xô, buộc các nước rút quân. Lực lượng gìn giữ hòa bình Liên Hợp Quốc được triển khai.",
    consequences:
      "Khủng hoảng tổn hại uy tín Anh, Pháp và nâng vị thế Nasser tại nhiều nước Ả Rập. Các đế quốc châu Âu khó hành động độc lập với hai siêu cường.",
    figures: ["Gamal Abdel Nasser", "Anthony Eden"],
    question: "Lãnh đạo Ai Cập nào quốc hữu hóa Công ty Kênh đào Suez?",
    options: [
      "Gamal Abdel Nasser",
      "Anwar Sadat",
      "Hosni Mubarak",
      "Vua Farouk",
    ],
    statement: "Anh và Pháp rút quân dưới sức ép quốc tế.",
    truth: true,
    source: "https://history.state.gov/milestones/1953-1960/suez",
    publisher: "US Office of the Historian",
    tags: ["Cold War"],
  },
  {
    id: "ghana-independence",
    title: "Ghana giành độc lập",
    year: 1957,
    date: "1957-03-06",
    countries: ["GH", "GB"],
    categories: ["Politics", "Social Change"],
    location: "Ghana, Tây Phi",
    teaser: "Dấu mốc phong trào giải phóng châu Phi.",
    causes:
      "Các tổ chức dân tộc chủ nghĩa phản đối thuộc địa Anh tại Bờ Biển Vàng. Hoạt động chính trị, đình công và đòi tự trị tăng sau Chiến tranh thế giới thứ hai, gây sức ép lên chính quyền.",
    happened:
      "Bờ Biển Vàng trở thành Ghana độc lập dưới sự lãnh đạo của Kwame Nkrumah. Lễ độc lập thể hiện hy vọng tự quyết và thức tỉnh chính trị châu Phi. Chính phủ mới hướng tới phát triển và vai trò quốc tế mạnh hơn.",
    consequences:
      "Ghana ủng hộ chủ nghĩa Liên Phi và các cuộc đấu tranh độc lập. Kỳ vọng ban đầu đi cùng khó khăn kinh tế, chính trị, đánh dấu bước quan trọng trong phi thực dân hóa.",
    figures: ["Kwame Nkrumah"],
    question: "Ai lãnh đạo Ghana khi giành độc lập?",
    options: [
      "Kwame Nkrumah",
      "Nelson Mandela",
      "Julius Nyerere",
      "Jomo Kenyatta",
    ],
    statement: "Ghana hình thành từ thuộc địa Anh tên Bờ Biển Vàng.",
    truth: true,
    source: "https://www.britannica.com/place/Ghana/Independence",
  },
  {
    id: "cuban-missile-crisis",
    title: "Khủng hoảng tên lửa Cuba",
    year: 1962,
    date: "1962-10-16",
    countries: ["CU", "US", "RU"],
    categories: ["Diplomacy", "War"],
    location: "Cuba và Đại Tây Dương",
    teaser: "Thế giới đứng trước nguy cơ chiến tranh hạt nhân.",
    causes:
      "Chiến tranh Lạnh đầy nghi kỵ và lo ngại an ninh đối lập. Liên Xô triển khai tên lửa tại Cuba sau khi quan hệ Cuba–Mỹ xấu đi, gồm cuộc đổ bộ Vịnh Con Lợn thất bại.",
    happened:
      "Trinh sát Mỹ phát hiện trận địa tên lửa. John F. Kennedy áp đặt phong tỏa kiểm soát bằng hải quân khi hai bên đàm phán. Ngoại giao công khai, bí mật và chuẩn bị quân sự diễn ra song song.",
    consequences:
      "Liên Xô rút tên lửa, Mỹ cam kết không xâm lược Cuba. Thỏa thuận kín còn liên quan tên lửa Mỹ ở Thổ Nhĩ Kỳ. Khủng hoảng thúc đẩy cải thiện liên lạc để giảm nguy cơ xung đột ngoài ý muốn.",
    figures: ["John F. Kennedy", "Nikita Khrushchev", "Fidel Castro"],
    question: "Ai là tổng thống Mỹ trong khủng hoảng?",
    options: [
      "John F. Kennedy",
      "Richard Nixon",
      "Dwight Eisenhower",
      "Lyndon Johnson",
    ],
    statement: "Mỹ tiến hành xâm lược toàn diện Cuba trong khủng hoảng.",
    truth: false,
    source:
      "https://history.state.gov/milestones/1961-1968/cuban-missile-crisis",
    publisher: "US Office of the Historian",
    tags: ["Cold War"],
  },
  {
    id: "chernobyl",
    title: "Thảm họa Chernobyl",
    year: 1986,
    date: "1986-04-26",
    countries: ["UA", "RU"],
    categories: ["Disaster", "Technology"],
    location: "Chernobyl, khi đó thuộc Ukraine Xô viết",
    teaser: "Tai nạn để lại hậu quả xuyên biên giới.",
    causes:
      "Thử nghiệm an toàn diễn ra trong điều kiện vận hành nguy hiểm. Điểm yếu thiết kế lò phản ứng cùng vi phạm quy trình tạo ra tình huống thảm khốc tại nhà máy.",
    happened:
      "Vụ nổ và hỏa hoạn phá hủy lò phản ứng, phát tán phóng xạ ra môi trường. Công nhân và lực lượng ứng cứu đối diện nguy hiểm. Cư dân được sơ tán nhưng thông tin về quy mô tai nạn xuất hiện chậm.",
    consequences:
      "Thảm họa gây di dời lâu dài, ô nhiễm và lo ngại sức khỏe. Nó thúc đẩy xem xét an toàn hạt nhân, bộc lộ hạn chế giữ bí mật và quản lý khủng hoảng. Khu vực cấm vẫn gắn với địa điểm này.",
    figures: [],
    question: "Nhà máy Chernobyl nằm ở quốc gia nào ngày nay?",
    options: ["Ukraine", "Ba Lan", "Đức", "Romania"],
    statement: "Tai nạn phát tán phóng xạ ra ngoài nhà máy.",
    truth: true,
    source: "https://www.iaea.org/newscenter/focus/chernobyl",
    publisher: "International Atomic Energy Agency",
    tags: ["Cold War"],
  },
  {
    id: "berlin-wall",
    title: "Bức tường Berlin sụp đổ",
    year: 1989,
    date: "1989-11-09",
    countries: ["DE"],
    categories: ["Politics", "Social Change"],
    location: "Berlin, Đức",
    teaser: "Thành phố chia cắt mở cửa biên giới.",
    causes:
      "Biểu tình và cải cách thách thức chính quyền cộng sản Đông Âu. Người Đông Đức đòi tự do đi lại và thay đổi chính trị, trong khi nền tảng khu vực của trật tự cũ suy yếu.",
    happened:
      "Thông báo gây hiểu nhầm về quy định đi lại khiến đám đông tới cửa khẩu Berlin. Lính gác mở lối; người dân qua lại, ăn mừng và bắt đầu tháo dỡ bức tường.",
    consequences:
      "Mở biên giới trở thành biểu tượng kết thúc Chiến tranh Lạnh tại châu Âu. Đức thống nhất sau đàm phán và thay đổi thể chế. Tự do mới đi cùng điều chỉnh kinh tế, xã hội phức tạp và không đồng đều.",
    figures: ["Günter Schabowski"],
    question: "Bức tường chia cắt thành phố nào?",
    options: ["Berlin", "Vienna", "Prague", "Warsaw"],
    statement: "Mở biên giới được tiếp nối bằng thống nhất nước Đức.",
    truth: true,
    source: "https://www.britannica.com/topic/Berlin-Wall",
    tags: ["Cold War"],
  },
  {
    id: "mandela-president",
    title: "Nelson Mandela trở thành tổng thống",
    year: 1994,
    date: "1994-05-10",
    countries: ["ZA"],
    categories: ["Politics", "Social Change"],
    location: "Nam Phi",
    teaser: "Bầu cử dân chủ khép lại thời kỳ apartheid.",
    causes:
      "Nhiều thập kỷ đấu tranh thách thức apartheid, hệ thống áp bức chủng tộc được thể chế hóa. Phản kháng trong nước, sức ép quốc tế và đàm phán mở đường cho giải pháp dân chủ.",
    happened:
      "Nam Phi tổ chức bầu cử quốc gia đầu tiên theo phổ thông đầu phiếu cho người trưởng thành. Đại hội Dân tộc Phi thắng cử, Mandela trở thành tổng thống. Lễ nhậm chức đánh dấu thay đổi quyền tham gia và lãnh đạo nhà nước.",
    consequences:
      "Chuyển đổi tháo dỡ khuôn khổ apartheid và thiết lập dân chủ hiến định. Hòa giải xử lý sai phạm quá khứ, nhưng bất bình đẳng kinh tế và di sản phân biệt chủng tộc vẫn tồn tại.",
    figures: ["Nelson Mandela", "F. W. de Klerk"],
    question: "Dân chủ hóa thay thế chế độ phân biệt chủng tộc nào?",
    options: [
      "Apartheid",
      "Chế độ phong kiến",
      "Chủ nghĩa trọng thương",
      "Chế độ chuyên chế",
    ],
    statement: "Bầu cử lập tức xóa mọi bất bình đẳng kinh tế.",
    truth: false,
    source: "https://www.nelsonmandela.org/biography",
    publisher: "Nelson Mandela Foundation",
  },
  {
    id: "great-wave",
    title: "Sóng lừng của Hokusai",
    year: 1831,
    countries: ["JP"],
    categories: ["Culture"],
    location: "Nhật Bản thời Edo",
    teaser: "Một bản in vượt xa bờ biển quê hương.",
    causes:
      "Nhật Bản thời Edo có thị trường tranh in sôi động về phong cảnh và đời sống. Kỹ thuật in cùng sự lưu thông sắc tố giúp nghệ sĩ thử nghiệm màu sắc, bố cục mới.",
    happened:
      "Hokusai tạo Sóng lừng ngoài khơi Kanagawa trong bộ Ba mươi sáu cảnh núi Phú Sĩ. Tranh khắc họa thuyền dưới con sóng lớn, núi Phú Sĩ phía xa. Tác phẩm thường được xác định xuất bản khoảng đầu thập niên 1830.",
    consequences:
      "Bản in trở thành tác phẩm Nhật Bản nổi tiếng toàn cầu. Lưu hành nước ngoài khơi dậy quan tâm tới thiết kế Nhật và ảnh hưởng nghệ sĩ qua bố cục, nhịp điệu thị giác.",
    figures: ["Katsushika Hokusai"],
    question: "Ngọn núi nào xuất hiện phía xa?",
    options: ["Núi Phú Sĩ", "Núi Everest", "Núi Kilimanjaro", "Núi Etna"],
    statement: "Sóng lừng là tác phẩm in khắc gỗ.",
    truth: true,
    source: "https://www.metmuseum.org/art/collection/search/45434",
    publisher: "The Metropolitan Museum of Art",
  },
  {
    id: "rosetta-stone",
    title: "Phát hiện phiến đá Rosetta",
    year: 1799,
    countries: ["EG", "FR", "GB"],
    categories: ["Culture", "Science"],
    location: "Rashid, Ai Cập",
    teaser: "Ba hệ chữ giúp giải mã ngôn ngữ cổ.",
    causes:
      "Hoạt động quân sự châu Âu tại Ai Cập đưa binh lính và học giả tiếp xúc di tích cổ. Khi đó giới nghiên cứu chưa hiểu chữ tượng hình, dù đã quan tâm công trình cổ đại từ lâu.",
    happened:
      "Binh lính Pháp tìm thấy phiến đá ghi sắc lệnh bằng chữ tượng hình, Demotic và Hy Lạp. Học giả đối chiếu văn bản để hiểu hệ chữ. Thomas Young và Jean-François Champollion đóng góp quan trọng cho giải mã sau đó.",
    consequences:
      "Thành tựu mở khả năng đọc văn bản Ai Cập cổ, biến đổi ngành Ai Cập học. Chuyển phiến đá sang Anh cũng gắn với tranh luận sưu tầm thuộc địa, quyền sở hữu và nơi lưu giữ di sản.",
    figures: ["Jean-François Champollion", "Thomas Young"],
    question: "Ngôn ngữ nào trên đá đã được học giả đọc hiểu?",
    options: ["Tiếng Hy Lạp", "Tiếng Phạn", "Hán văn cổ", "Tiếng Bắc Âu cổ"],
    statement: "Phiến đá có văn khắc bằng ba hệ chữ.",
    truth: true,
    source:
      "https://www.britishmuseum.org/collection/egypt/explore-rosetta-stone",
    publisher: "British Museum",
  },
  {
    id: "roman-republic",
    title: "Julius Caesar bị ám sát",
    year: -44,
    date: "-0044-03-15",
    countries: ["IT"],
    categories: ["Politics", "War"],
    location: "Roma",
    teaser: "Âm mưu cứu cộng hòa khiến khủng hoảng sâu hơn.",
    causes:
      "Nội chiến làm suy yếu thiết chế cộng hòa Roma, tập trung quyền lực vào chỉ huy quân sự. Quyền lực đặc biệt của Caesar khiến nghị sĩ sợ chế độ cá nhân trị lâu dài.",
    happened:
      "Nhóm mưu sát tấn công Caesar tại cuộc họp Viện Nguyên lão vào ngày Ides tháng Ba. Họ hy vọng khôi phục tự do chính trị nhưng chưa có giải pháp ổn định thay thế vai trò lãnh đạo của ông.",
    consequences:
      "Vụ ám sát châm ngòi xung đột mới thay vì phục hồi cộng hòa. Người thừa kế và đối thủ tranh giành quyền lực. Cuối cùng Octavian thiết lập trật tự gắn với Đế quốc La Mã.",
    figures: ["Julius Caesar", "Brutus", "Cassius"],
    question: "Ngày Caesar bị ám sát được gọi là gì?",
    options: [
      "Ngày Ides tháng Ba",
      "Ngày Mười hai Vinh quang",
      "Ngày Quốc khánh Pháp",
      "Ngày Kalends tháng Một",
    ],
    statement: "Vụ ám sát lập tức khôi phục cộng hòa Roma ổn định.",
    truth: false,
    source: "https://www.britannica.com/biography/Julius-Caesar-Roman-ruler",
  },
  {
    id: "mongol-empire",
    title: "Thành Cát Tư Hãn trỗi dậy",
    year: 1206,
    countries: ["MN", "CN"],
    categories: ["Politics", "War"],
    location: "Thảo nguyên Mông Cổ",
    teaser: "Liên minh thảo nguyên đặt nền móng đế quốc.",
    causes:
      "Cạnh tranh giữa các nhóm thảo nguyên tạo liên minh biến động và chiến tranh kéo dài. Temüjin xây dựng lực lượng qua chiến thắng, quan hệ chính trị và tổ chức lòng trung thành vượt ranh giới bộ lạc.",
    happened:
      "Hội nghị công nhận Temüjin là Thành Cát Tư Hãn. Ông đặt nền móng Đế quốc Mông Cổ, sau này mở rộng nhiều vùng Á–Âu. Tổ chức, cơ động và thích ứng duy trì bành trướng.",
    consequences:
      "Chinh phục gây tàn phá lớn, đồng thời kết nối vùng xa qua mạng lưới đế quốc. Các nhà nước kế thừa ảnh hưởng thương mại, ngoại giao và chính trị tại châu Á, Đông Âu nhiều thế hệ.",
    figures: ["Genghis Khan"],
    question: "Tên trước đây của Thành Cát Tư Hãn là gì?",
    options: ["Temüjin", "Kublai", "Ögedei", "Batu"],
    statement: "Đế quốc mở rộng kết nối những vùng xa nhau tại Á–Âu.",
    truth: true,
    source: "https://www.britannica.com/biography/Genghis-Khan",
  },
  {
    id: "australian-federation",
    title: "Liên bang Australia ra đời",
    year: 1901,
    date: "1901-01-01",
    countries: ["AU", "GB"],
    categories: ["Politics"],
    location: "Australia",
    teaser: "Sáu thuộc địa hợp thành liên bang.",
    causes:
      "Các thuộc địa Anh tại Australia tranh luận thương mại, quốc phòng và nhập cư. Lãnh đạo thúc đẩy liên bang hóa, thương lượng phân chia quyền lực giữa địa phương và trung ương.",
    happened:
      "Sáu thuộc địa hợp thành Liên bang Australia theo hiến pháp liên bang. Hệ thống mới kết hợp nghị viện quốc gia với chính quyền bang, đồng thời duy trì quan hệ hiến định với Hoàng gia Anh.",
    consequences:
      "Liên bang hóa tạo khuôn khổ quốc gia nhưng không bảo đảm bình đẳng. Thổ dân và cư dân quần đảo eo biển Torres chịu phân biệt đối xử. Quyền công dân tiếp tục thay đổi qua đấu tranh về sau.",
    figures: ["Edmund Barton", "Henry Parkes"],
    question: "Có bao nhiêu thuộc địa lập nên liên bang ban đầu?",
    options: ["Sáu", "Bốn", "Tám", "Mười"],
    statement: "Liên bang hóa lập tức chấm dứt quan hệ hiến định với Anh.",
    truth: false,
    source: "https://www.nma.gov.au/defining-moments/resources/federation",
    publisher: "National Museum of Australia",
  },
];
seeds.push(...extraSeeds);
const extraIds = new Set(extraSeeds.map(s => s.id));
const images: Record<
  string,
  { url: string; alt: string; credit: string; source: string }
> = imageCatalog;
export const events: HistoricalEvent[] = seeds.map((s, i) => ({
  id: s.id,
  slug: s.id,
  title: s.title,
  shortTitle: s.title,
  startYear: s.year,
  endYear: s.end ?? s.year,
  startDate: s.date,
  summary: [s.causes, s.happened, s.consequences].join(" "),
  shortSummary: s.teaser,
  importance: 4,
  significance: s.significance,
  fact: s.id === "web" ? "Web và Internet không phải cùng một thứ: Web là một dịch vụ chạy trên hạ tầng Internet." : undefined,
  scale:
    s.countries.length >= 3
      ? "Global"
      : s.countries.length === 2
        ? "Regional"
        : "National",
  difficulty: (["Easy", "Medium", "Hard"] as const)[i % 3],
  locationText: s.location,
  image: images[s.id]?.url,
  imageAlt: images[s.id]?.alt ?? s.title,
  imageAttribution: images[s.id]
    ? {
        title: images[s.id].credit,
        publisher: "Wikimedia Commons",
        url: images[s.id].source,
      }
    : undefined,
  era:
    s.year < 500
      ? "Ancient"
      : s.year < 1500
        ? "Medieval"
        : s.year < 1800
          ? "Early Modern"
          : s.year < 1945
            ? "Modern"
            : "Contemporary",
  countries: s.countries,
  categories: s.categories,
  keyFigures: s.figures,
  causes: s.causes,
  whatHappened: s.happened,
  consequences: s.consequences,
  sources: [
    {
      title: s.title,
      publisher: s.publisher ?? "Encyclopaedia Britannica",
      url: s.source,
    },
  ],
  relatedEvents: [],
  tags: [...(s.tags ?? []), ...(["angkor-wat","hammurabi","persepolis","athenian-democracy","gutenberg"].includes(s.id) ? ["approximate"] : [])],
}));
for (const event of events) {
  event.relatedEvents = events
    .filter(
      (other) =>
        other.id !== event.id &&
        (other.countries.some((c) => event.countries.includes(c)) ||
          other.categories[0] === event.categories[0]),
    )
    .sort(
      (a, b) =>
        Math.abs(a.startYear - event.startYear) -
        Math.abs(b.startYear - event.startYear),
    )
    .slice(0, 3)
    .map((e) => e.id);
  if (
    [
      "apollo-11",
      "penicillin",
      "great-wave",
      "berlin-wall",
      "hiroshima",
      "chernobyl",
      "french-revolution",
      "american-independence",
    ].includes(event.id)
  )
    event.scale = "Global";
}
export const questions: Question[] = seeds.flatMap((s) => {
  const event = events.find((e) => e.id === s.id)!;
  const base = { eventId: s.id, difficulty: event.difficulty };
  const questionList: Question[] = [
    {
      ...base,
      id: `${s.id}-mc`,
      type: "multiple-choice",
      prompt: s.question,
      options: s.options.map((text, i) => ({ id: String(i), text })),
      answer: "0",
      explanation: `${s.options[0]}. ${s.happened}`,
    },
    {
      ...base,
      id: `${s.id}-tf`,
      type: "multiple-choice",
      prompt: "Địa điểm nào gắn với sự kiện này?",
      options: [s.location, ...[...new Set(seeds.map((other) => other.location))].filter((location) => location !== s.location).slice(0, 3)].map((text, i) => ({ id: String(i), text })),
      answer: "0",
      explanation: `${s.title} gắn với ${s.location}. ${s.happened}`,
    },
  ];
  if (s.id !== "great-wave")
    questionList.push({
      ...base,
      id: `${s.id}-year`,
      type: "multiple-choice",
      prompt: `Sự kiện này ${s.end ? "bắt đầu" : "diễn ra"} vào năm nào?`,
      options: [s.year, s.year - 12, s.year + 7, s.year + 23].map((year, i) => ({
        id: String(i), text: formatYear(year === 0 ? 1 : year),
      })),
      answer: "0",
      explanation: `${s.title} ${s.end ? "bắt đầu" : "diễn ra"} vào năm ${formatYear(s.year)}. ${s.consequences}`,
    });
  return extraIds.has(s.id) ? questionList.filter(q => !q.id.endsWith(["angkor-wat","hammurabi","persepolis","athenian-democracy","gutenberg"].includes(s.id) ? "-year" : "-tf")) : questionList;
});
export function formatYear(year: number) {
  return year < 0 ? `${Math.abs(year)} TCN` : String(year);
}
export function formatEventYear(event: HistoricalEvent) {
  return `${event.id === "great-wave" || event.tags.includes("approximate") ? "Khoảng " : ""}${formatYear(event.startYear)}`;
}
export const eventById = (id: string) => events.find((e) => e.id === id)!;




