export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-black to-red-900">
        <div className="text-center">
          <h1 className="text-6xl font-bold">PTC Cinema</h1>
          <p className="text-gray-300 mt-5 text-xl">
            Đặt vé xem phim nhanh chóng, tiện lợi
          </p>

          <button className="mt-8 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl">
            Đặt Vé Ngay
          </button>
        </div>
      </section>

      {/* Phim đang chiếu */}
      <section className="max-w-7xl mx-auto py-20">
        <h2 className="text-4xl font-bold mb-8">🎬 Phim đang chiếu</h2>

        <div className="grid grid-cols-4 gap-8">{/* Movie Card */}</div>
      </section>

      {/* Phim sắp chiếu */}
      <section className="max-w-7xl mx-auto py-20">
        <h2 className="text-4xl font-bold mb-8">🔥 Phim sắp chiếu</h2>

        <div className="grid grid-cols-4 gap-8">{/* Movie Card */}</div>
      </section>
    </>
  );
}
