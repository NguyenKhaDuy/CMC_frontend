export default function ProvinceFilter({ data, province, setProvince }) {
  return (
    <div className="max-w-6xl mx-auto mb-6">
      <h2 className="text-lg font-bold mb-3">Tỉnh / Thành</h2>

      <div className="flex gap-3 flex-wrap">
        {Object.keys(data).map((p) => (
          <button
            key={p}
            onClick={() => setProvince(p)}
            className={`px-4 py-2 rounded-lg transition ${
              province === p ? "bg-[#AA7D36]" : "bg-[#1c1c1c] hover:bg-[#333]"
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
