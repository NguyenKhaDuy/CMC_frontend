import { Plus, Minus } from "lucide-react";

const sizes = [
  { id: "S", extra: 0 },
  { id: "M", extra: 10000 },
  { id: "L", extra: 20000 },
];

export default function FoodSelector({
  foods,
  selectedFoods,
  setSelectedFoods,
}) {
  const getPrice = (food, size) => {
    const extra = sizes.find((s) => s.id === size)?.extra || 0;
    return food.price + extra;
  };

  // Chọn hoặc đổi size
  const selectSize = (food, size) => {
    setSelectedFoods((prev) => {
      const exist = prev.find((i) => i.id === food.id);

      if (exist) {
        return prev.map((i) =>
          i.id === food.id
            ? {
                ...i,
                size,
                price: getPrice(food, size),
              }
            : i,
        );
      }

      return [
        ...prev,
        {
          ...food,
          size,
          quantity: 1,
          price: getPrice(food, size),
        },
      ];
    });
  };

  // +
  const increase = (food) => {
    setSelectedFoods((prev) =>
      prev.map((i) =>
        i.id === food.id
          ? {
              ...i,
              quantity: i.quantity + 1,
            }
          : i,
      ),
    );
  };

  // -
  const decrease = (food) => {
    setSelectedFoods((prev) =>
      prev
        .map((i) =>
          i.id === food.id
            ? {
                ...i,
                quantity: i.quantity - 1,
              }
            : i,
        )
        .filter((i) => i.quantity > 0),
    );
  };

  return (
    <div className="max-w-6xl mx-auto mb-10">
      <h2 className="text-2xl font-bold mb-6">🍿 Combo & Đồ ăn</h2>

      <div className="grid gap-4">
        {foods.map((food) => {
          const selected = selectedFoods.find((i) => i.id === food.id);

          return (
            <div
              key={food.id}
              className="flex items-center gap-5 bg-[#1c1c1c] border border-[#2d2d2d] rounded-2xl p-4"
            >
              {/* IMAGE */}
              <img
                src={food.image}
                alt={food.name}
                className="w-24 h-24 rounded-xl object-cover"
              />

              {/* INFO */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{food.name}</h3>

                <p className="text-gray-400 text-sm mt-1">
                  Giá từ {food.price.toLocaleString()}đ
                </p>

                {/* SIZE */}
                <div className="flex gap-2 mt-4">
                  {sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => selectSize(food, size.id)}
                      className={`px-4 py-1 rounded-full text-sm transition
                        ${
                          selected?.size === size.id
                            ? "bg-[#AA7D36] text-white"
                            : "bg-[#2b2b2b] hover:bg-[#3a3a3a]"
                        }`}
                    >
                      {size.id}
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col items-end gap-3 min-w-[130px]">
                <p className="font-bold text-[#AA7D36]">
                  {selected
                    ? selected.price.toLocaleString()
                    : food.price.toLocaleString()}
                  đ
                </p>

                {!selected ? (
                  <button
                    onClick={() => selectSize(food, "M")}
                    className="bg-[#AA7D36] hover:opacity-90 rounded-full w-10 h-10 flex items-center justify-center"
                  >
                    <Plus size={18} />
                  </button>
                ) : (
                  <div className="flex items-center gap-3 bg-[#2b2b2b] rounded-full px-2 py-1">
                    <button
                      onClick={() => decrease(food)}
                      className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center hover:bg-[#444]"
                    >
                      <Minus size={15} />
                    </button>

                    <span className="font-semibold w-6 text-center">
                      {selected.quantity}
                    </span>

                    <button
                      onClick={() => increase(food)}
                      className="w-8 h-8 rounded-full bg-[#AA7D36] flex items-center justify-center hover:opacity-90"
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
