const labels: Record<string, string> = {
  All: "Tất cả",
  Easy: "Dễ",
  Medium: "Vừa",
  Hard: "Khó",
  Ancient: "Cổ đại",
  Medieval: "Trung đại",
  "Early Modern": "Cận đại sơ kỳ",
  Modern: "Cận đại",
  Contemporary: "Hiện đại",
  War: "Chiến tranh",
  Politics: "Chính trị",
  Science: "Khoa học",
  Technology: "Công nghệ",
  Exploration: "Thám hiểm",
  Culture: "Văn hóa",
  Religion: "Tôn giáo",
  Economy: "Kinh tế",
  Revolution: "Cách mạng",
  Disaster: "Thảm họa",
  Diplomacy: "Ngoại giao",
  "Social Change": "Biến đổi xã hội",
  Global: "Toàn cầu",
  Regional: "Khu vực",
  National: "Quốc gia",
  Europe: "Châu Âu",
  Asia: "Châu Á",
  Africa: "Châu Phi",
  Americas: "Châu Mỹ",
  Oceania: "Châu Đại Dương",
  "Middle East": "Trung Đông",
  "East Asia": "Đông Á",
  "South Asia": "Nam Á",
  "Southeast Asia": "Đông Nam Á",
  "North America": "Bắc Mỹ",
  "South America": "Nam Mỹ",
  "multiple-choice": "Trắc nghiệm",
  "true-false": "Đúng / Sai",
  year: "Đoán năm",
};
export const vi = (value: string) => labels[value] ?? value;
export const searchText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLocaleLowerCase("vi-VN");
