export default function ProvinceSelector({
  provinces,
  selectedProvince,
  setSelectedProvince,
  setSelectedCinema,
  setSelectedTime,
}) {
  return (
    <div className="flex gap-3 mb-6 flex-wrap">
      {provinces.map((province) => (
        <button
          key={province}
          onClick={() => {
            setSelectedProvince(province);
            setSelectedCinema(null);
            setSelectedTime(null);
          }}
          className={`px-5 py-2 rounded-xl ${
            selectedProvince === province ? "bg-[#AA7D36]" : "bg-[#1c1c1c]"
          }`}
        >
          {province}
        </button>
      ))}
    </div>
  );
}
