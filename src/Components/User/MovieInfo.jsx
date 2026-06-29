export default function MovieInfo() {
  return (
    <>
      <div>
        <img
          src="https://picsum.photos/400/600?random=1"
          className="rounded-2xl shadow-2xl"
        />
      </div>

      <div className="lg:col-span-2">
        <span className="bg-[#AA7D36] px-4 py-1 rounded-full">Đang chiếu</span>

        <h1 className="text-5xl font-bold mt-5">Avengers: Endgame</h1>

        <p className="text-gray-400 mt-4">
          Hành động • Phiêu lưu • Khoa học viễn tưởng
        </p>

        <div className="flex gap-8 mt-8">
          <div>
            <p className="text-gray-500">Thời lượng</p>
            <h3>181 phút</h3>
          </div>

          <div>
            <p className="text-gray-500">Khởi chiếu</p>
            <h3>25/04/2026</h3>
          </div>

          <div>
            <p className="text-gray-500">Độ tuổi</p>
            <h3>T13</h3>
          </div>
        </div>

        <p className="mt-8 text-gray-300 leading-8">
          Sau các sự kiện của Infinity War...
        </p>

        <div className="flex gap-5 mt-10">
          <button className="bg-[#AA7D36] hover:bg-[#8f6424] px-8 py-4 rounded-xl font-semibold">
            Đặt vé ngay
          </button>

          <button className="border border-[#AA7D36] hover:bg-[#AA7D36] px-8 py-4 rounded-xl">
            ❤️ Yêu thích
          </button>
        </div>
      </div>
    </>
  );
}
