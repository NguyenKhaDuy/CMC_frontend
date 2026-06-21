import { Link, NavLink } from "react-router-dom";
import { Search, UserCircle2, Ticket, Menu, Bell } from "lucide-react";

import logo from "../../assets/CMC_LOGO.png";

export default function Navbar() {
  const menus = [
    { name: "Trang chủ", path: "/" },
    { name: "Phim", path: "/movies" },
    { name: "Rạp chiếu", path: "/cinemas" },
    { name: "Lịch chiếu", path: "/showtimes" },
    { name: "Khuyến mãi", path: "/promotions" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B] border-b border-[#AA7D36]/30 shadow-lg shadow-[#AA7D36]/10 backdrop-blur-xl">
      <div className="max-w-[1500px] mx-auto h-28 px-10 flex items-center justify-between">
        {/* ================= Logo ================= */}

        <Link
          to="/"
          className="flex items-center gap-5 transition-all duration-300 hover:scale-[1.02]"
        >
          <img
            src={logo}
            alt="CMC Cinema"
            className="w-40 h-40 object-contain drop-shadow-[0_0_25px_rgba(170,125,54,0.6)]"
          />

          <div>
            <h1 className="text-4xl font-black tracking-wide bg-gradient-to-r from-[#d8bf84] via-[#AA7D36] to-[#8f6424] bg-clip-text text-transparent leading-none">
              CA MAU CINEMA
            </h1>

            <p className="uppercase tracking-[8px] text-xs text-[#c9ab73] mt-2">
              Premium Movie Experience
            </p>
          </div>
        </Link>

        {/* ================= Menu ================= */}

        <nav className="hidden lg:flex items-center gap-10">
          {menus.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group relative text-[16px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-[#AA7D36]"
                    : "text-gray-300 hover:text-[#AA7D36]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-[#AA7D36] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ================= Right ================= */}

        <div className="flex items-center gap-4">
          {/* Search */}

          <button className="w-12 h-12 rounded-full bg-[#AA7D36]/10 text-[#AA7D36] flex items-center justify-center transition-all duration-300 hover:bg-[#AA7D36] hover:text-white hover:scale-110">
            <Search size={20} />
          </button>

          {/* Notification */}

          <button className="relative w-12 h-12 rounded-full bg-[#AA7D36]/10 text-[#AA7D36] flex items-center justify-center transition-all duration-300 hover:bg-[#AA7D36] hover:text-white hover:scale-110">
            <Bell size={20} />

            <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500 border border-[#0B0B0B]"></span>
          </button>

          {/* Book Ticket */}

          <button className="hidden md:flex items-center gap-2 px-7 py-3 rounded-full bg-[#AA7D36] text-white font-semibold shadow-lg shadow-[#AA7D36]/40 transition-all duration-300 hover:bg-[#8f6424] hover:scale-105">
            <Ticket size={19} />
            Đặt vé
          </button>

          {/* User */}

          <button className="w-12 h-12 rounded-full bg-[#AA7D36]/10 text-[#AA7D36] flex items-center justify-center transition-all duration-300 hover:bg-[#AA7D36] hover:text-white hover:scale-110">
            <UserCircle2 size={24} />
          </button>

          {/* Mobile */}

          <button className="lg:hidden w-12 h-12 rounded-full bg-[#AA7D36]/10 text-[#AA7D36] flex items-center justify-center hover:bg-[#AA7D36] hover:text-white transition-all">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
