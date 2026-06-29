import BannerSlider from "../../Components/User/BannerSlider";
import QuickBooking from "../../Components/User/QuickBooking";
import MovieSection from "../../Components/User/MovieSection";
import PromotionBanner from "../../Components/User/PromotionBanner";
import NewsSection from "../../Components/User/NewsSection";

import { MdLocalMovies } from "react-icons/md";

// giả lập data (sau này thay bằng API)
const nowShowing = [
  { id: 1, title: "Avengers", poster: "/img1.jpg" },
  { id: 2, title: "Batman", poster: "/img2.jpg" },
];

const comingSoon = [
  { id: 3, title: "Avatar 3", poster: "/img3.jpg" },
  { id: 4, title: "Joker 2", poster: "/img4.jpg" },
];

export default function HomePage() {
  return (
    <main className="bg-[#0B0B0B] text-white min-h-screen">
      <BannerSlider />

      <QuickBooking />

      <MovieSection
        title="Phim đang chiếu"
        icon={<MdLocalMovies size={28} className="text-[#AA7D36]" />}
        movies={nowShowing}
      />

      <PromotionBanner />

      <MovieSection
        title="Phim sắp chiếu"
        icon={<MdLocalMovies size={28} className="text-[#AA7D36]" />}
        movies={comingSoon}
      />

      <NewsSection />
    </main>
  );
}