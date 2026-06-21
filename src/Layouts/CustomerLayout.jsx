import { Outlet } from "react-router-dom";
import Navbar from "../Components/User/Navbar";

export default function CustomerLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090B] text-white">
      <Navbar />

      <main className="flex-1 pt-20">
        <Outlet />
      </main>
    </div>
  );
}
