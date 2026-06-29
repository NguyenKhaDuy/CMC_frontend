import { Outlet } from "react-router-dom";
import Navbar from "../Components/User/Navbar";
import Footer from "../Components/User/Footer";
import CmcAI from "../Components/User/CmcAI";

export default function CustomerLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090B] text-white">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <CmcAI />
    </div>
  );
}
