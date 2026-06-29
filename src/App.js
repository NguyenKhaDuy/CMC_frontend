import { Routes, Route, Navigate } from "react-router-dom";

import CustomerLayout from "./Layouts/CustomerLayout";

import Home from "./Pages/User/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import MoviePage from "./Pages/User/MoviePage";
import MovieDetailPage from "./Pages/User/MovieDetailPage";
import BookingPage from "./Pages/User/BookingPage";
import CinemaPage from "./Pages/User/CinemaPage";
import ShowtimePage from "./Pages/User/ShowtimePage";
import PromotionsPage from "./Pages/User/PromotionsPage";
import ProfilePage from "./Pages/User/ProfilePage";

function App() {
  return (
    <Routes>
      {/* Khi vào web sẽ chuyển đến Login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      {/* Login */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Sau khi đăng nhập */}
      <Route element={<CustomerLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/cinemas" element={<CinemaPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/showtimes" element={<ShowtimePage />} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}


export default App;
