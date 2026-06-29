export default function InfoTab() {
  return (
    <div className="bg-white/5 rounded-2xl p-6">
      <h3 className="font-bold text-lg">Thông tin cá nhân</h3>

      <input
        value="Nguyễn Văn A"
        className="w-full mt-4 p-3 rounded-lg bg-black/40"
      />

      <input
        value="user@gmail.com"
        className="w-full mt-4 p-3 rounded-lg bg-black/40"
      />

      <button className="mt-4 bg-[#AA7D36] px-5 py-2 rounded-lg">
        Lưu thay đổi
      </button>
    </div>
  );
}
