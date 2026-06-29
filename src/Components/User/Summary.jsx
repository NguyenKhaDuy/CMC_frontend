import { FaFileInvoiceDollar } from "react-icons/fa";

export default function Summary({
  selectedProvince,
  selectedCinema,
  selectedTime,
  selectedSeats,
  selectedFoods,
  discount = 0,
}) {
  const seatPrice = 50000;

  const seatTotal = selectedSeats.length * seatPrice;

  const foodTotal = selectedFoods.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const total = seatTotal + foodTotal - discount;

  return (
    <div className="max-w-6xl mx-auto mt-12 bg-[#151515] rounded-2xl border border-[#2b2b2b] p-6">
      <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
        <FaFileInvoiceDollar className="text-[#AA7D36]" />
        Thông tin thanh toán
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Thông tin đặt vé */}
        <div className="space-y-5">
          <div>
            <p className="text-gray-500 text-sm">Tỉnh / Thành phố</p>
            <p className="font-semibold">{selectedProvince || "Chưa chọn"}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Rạp</p>
            <p className="font-semibold">{selectedCinema || "Chưa chọn"}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Suất chiếu</p>
            <p className="font-semibold">{selectedTime || "Chưa chọn"}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Ghế</p>

            <p className="font-semibold">
              {selectedSeats.length ? selectedSeats.join(", ") : "Chưa chọn"}
            </p>
          </div>
        </div>

        {/* Đồ ăn */}
        <div className="space-y-5">
          <div>
            <p className="text-gray-500 text-sm mb-2">Combo / Đồ uống</p>

            {selectedFoods.length ? (
              <div className="space-y-2">
                {selectedFoods.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-[#1d1d1d] rounded-lg px-4 py-3"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>

                      <p className="text-xs text-gray-400">
                        Size {item.size} × {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold text-[#AA7D36]">
                      {(item.price * item.quantity).toLocaleString()}đ
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Không chọn đồ ăn / nước uống</p>
            )}
          </div>

          <div className="border-t border-[#333] pt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">
                Tiền vé ({selectedSeats.length} ghế)
              </span>

              <span>{seatTotal.toLocaleString()}đ</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Tiền đồ ăn</span>

              <span>{foodTotal.toLocaleString()}đ</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Giảm giá</span>

              <span className="text-green-400">
                -{discount.toLocaleString()}đ
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tổng tiền */}
      <div className="mt-8 border-t border-[#333] pt-6 flex flex-col md:flex-row justify-between items-center gap-5">
        <div>
          <p className="text-gray-400 text-sm">Tổng thanh toán</p>

          <p className="text-3xl font-bold text-[#AA7D36]">
            {total.toLocaleString()}đ
          </p>
        </div>

        <button className="px-10 py-4 rounded-xl bg-[#AA7D36] hover:bg-[#8b652d] font-semibold transition">
          Thanh toán
        </button>
      </div>
    </div>
  );
}
