export default function MovieHeader({ id }) {
  return (
    <div className="max-w-6xl mx-auto flex gap-8 items-center mb-10">
      <img
        src={`https://picsum.photos/200/300?random=${id}`}
        className="rounded-xl w-[180px]"
        alt="movie"
      />

      <div>
        <h1 className="text-4xl font-bold">Avengers: Endgame</h1>
        <p className="text-gray-400 mt-2">Hành động • 181 phút</p>

        <button className="mt-4 px-6 py-2 bg-[#AA7D36] rounded-lg">
          Đang đặt vé
        </button>
      </div>
    </div>
  );
}
