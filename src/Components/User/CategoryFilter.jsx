const categories = [
  "Tất cả",
  "Hành động",
  "Kinh dị",
  "Tình cảm",
  "Hoạt hình",
  "Viễn tưởng",
];

export default function CategoryFilter() {
  return (
    <div className="flex gap-4 flex-wrap">
      {categories.map((item, index) => (
        <button
          key={index}
          className={`px-6 py-3 rounded-full transition ${
            index === 0 ? "bg-[#AA7D36]" : "bg-[#1d1d1d] hover:bg-[#AA7D36]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
