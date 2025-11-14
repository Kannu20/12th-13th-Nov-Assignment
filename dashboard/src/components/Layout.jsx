import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DashboardLayout(){
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-area">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
